import { describe, expect, it } from "vitest";
import getLanguage from "@Renderer/modules/KeyPickerKeyboard/KeyPickerLanguage";
import { flags, languageNames, languages } from "@Renderer/modules/Settings/GeneralSettingsLanguages";
import { getKeyboardLayout } from "@Renderer/utils/getKeyboardLayout";
import { ModifierCodes } from "../../db/utils";
import { supportModifiedTables, languagesDB } from "../languageLayouts";
import { hrHR, hrHRModifiedTables } from "./HR";

describe("Croatian keyboard layout", () => {
  it("registers hr-HR in both keymap databases as an ISO layout", () => {
    expect(languagesDB["hr-HR"]).toBe(hrHR);
    expect(supportModifiedTables["hr-HR"]).toBe(hrHRModifiedTables);
    expect(getKeyboardLayout("hr-HR")).toBe("ISO");
    expect(getLanguage("hr-HR")).toBeDefined();
  });

  it("keeps selector metadata aligned", () => {
    const index = languages.indexOf("hr-HR");

    expect(index).toBeGreaterThanOrEqual(0);
    expect(languageNames[index]).toBe("Croatian");
    expect(flags[index]).toBeDefined();
    expect(flags).toHaveLength(languages.length);
    expect(languageNames).toHaveLength(languages.length);
  });

  it("maps QWERTZ and Croatian letters to the standard HID positions", () => {
    const keys = new Map(hrHR.map(key => [key.code, key.labels.primary]));

    expect(keys.get(28)).toBe("Z");
    expect(keys.get(29)).toBe("Y");
    expect(keys.get(47)).toBe("Š");
    expect(keys.get(48)).toBe("Đ");
    expect(keys.get(51)).toBe("Č");
    expect(keys.get(52)).toBe("Ć");
    expect(keys.get(49)).toBe("Ž");
  });

  it("exposes the standard shifted and AltGr symbols", () => {
    const shifted = hrHRModifiedTables.find(table => table.groupName === "Shifted Croatian");
    const altGr = hrHRModifiedTables.find(table => table.groupName === "AltGr Croatian");

    expect(shifted?.keys).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ code: ModifierCodes.SHIFT + 53, labels: { primary: "¨" } }),
        expect.objectContaining({ code: ModifierCodes.SHIFT + 54, labels: { primary: ";" } }),
      ]),
    );
    expect(altGr?.keys).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ code: ModifierCodes.ALTGR + 20, labels: { primary: "\\" } }),
        expect.objectContaining({ code: ModifierCodes.ALTGR + 8, labels: { primary: "€" } }),
        expect.objectContaining({ code: ModifierCodes.ALTGR + 47, labels: { primary: "÷" } }),
        expect.objectContaining({ code: ModifierCodes.ALTGR + 5, labels: { primary: "@" } }),
      ]),
    );
  });

  it("keeps the visual picker legends synchronized with the keycode table", () => {
    const visualKeys = new Map(getLanguage("hr-HR").map(key => [key.id, key.content]));

    expect(visualKeys.get(28)).toMatchObject({ first: "Z" });
    expect(visualKeys.get(29)).toMatchObject({ first: "Y" });
    expect(visualKeys.get(47)).toMatchObject({ first: "Š", second: "÷" });
    expect(visualKeys.get(48)).toMatchObject({ first: "Đ", second: "×" });
    expect(visualKeys.get(51)).toMatchObject({ first: "Č" });
    expect(visualKeys.get(52)).toMatchObject({ first: "Ć", second: "ß" });
    expect(visualKeys.get(49)).toMatchObject({ first: "Ž", second: "¤" });
  });
});
