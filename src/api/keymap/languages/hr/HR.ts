import { ModifierCodes, withModifiers } from "../../db/utils";
import { BaseKeycodeTableType, KeymapCodeTableType } from "../../types";

const hrHRLetters: KeymapCodeTableType[] = [
  {
    code: 28,
    labels: {
      primary: "Z",
    },
  },
  {
    code: 47,
    labels: {
      primary: "Š",
    },
    newGroupName: "Letters",
  },
  {
    code: 48,
    labels: {
      primary: "Đ",
    },
    newGroupName: "Letters",
  },
  {
    code: 51,
    labels: {
      primary: "Č",
    },
    newGroupName: "Letters",
  },
  {
    code: 52,
    labels: {
      primary: "Ć",
    },
    newGroupName: "Letters",
  },
  {
    code: 49,
    labels: {
      primary: "Ž",
    },
    newGroupName: "Letters",
  },
  {
    code: 29,
    labels: {
      primary: "Y",
    },
  },
];

const hrHRModifierKeys: KeymapCodeTableType[] = [
  {
    code: 53,
    labels: {
      primary: "¸",
    },
  },
  {
    code: 45,
    labels: {
      primary: "'",
    },
  },
  {
    code: 46,
    labels: {
      primary: "+",
    },
  },
  {
    code: 100,
    labels: {
      primary: "<",
    },
  },
  {
    code: 54,
    labels: {
      primary: ",",
    },
  },
  {
    code: 55,
    labels: {
      primary: ".",
    },
  },
  {
    code: 56,
    labels: {
      primary: "-",
    },
  },
  {
    code: 99,
    labels: {
      top: "Num",
      primary: ",",
    },
  },
];

const shiftModifier: BaseKeycodeTableType = {
  groupName: "Shifted Croatian",
  keys: [
    [53, "¨"],
    [30, "!"],
    [31, '"'],
    [32, "#"],
    [33, "$"],
    [34, "%"],
    [35, "&"],
    [36, "/"],
    [37, "("],
    [38, ")"],
    [39, "="],
    [45, "?"],
    [46, "*"],
    [100, ">"],
    [54, ";"],
    [55, ":"],
    [56, "_"],
  ].map(([code, primary]) => ({
    code: ModifierCodes.SHIFT + (code as number),
    labels: {
      primary: primary as string,
    },
    alt: true,
  })),
};

const altGrSymbols: KeymapCodeTableType[] = [
  [30, "~"],
  [31, "ˇ"],
  [32, "^"],
  [33, "˘"],
  [34, "°"],
  [35, "˛"],
  [36, "`"],
  [37, "˙"],
  [38, "´"],
  [39, "˝"],
  [45, "¨"],
  [46, "¸"],
  [20, "\\"],
  [26, "|"],
  [8, "€"],
  [47, "÷"],
  [48, "×"],
  [9, "["],
  [10, "]"],
  [14, "ł"],
  [15, "Ł"],
  [52, "ß"],
  [49, "¤"],
  [5, "@"],
  [17, "{"],
  [16, "}"],
  [54, "§"],
  [55, "<"],
  [56, ">"],
].map(([code, primary]) => ({
  code: code as number,
  labels: {
    primary: primary as string,
  },
  alt: true,
}));

const altCtrlModifier: BaseKeycodeTableType = {
  groupName: "AltCtrl Croatian",
  keys: altGrSymbols.map(key => ({
    ...key,
    code: ModifierCodes.CONTROL_ALT + key.code,
  })),
};

const altGrModifier: BaseKeycodeTableType = {
  groupName: "AltGr Croatian",
  keys: altGrSymbols.map(key => ({
    ...key,
    code: ModifierCodes.ALTGR + key.code,
  })),
};

const hrHR = hrHRLetters.concat(hrHRModifierKeys);

const table: BaseKeycodeTableType = { keys: hrHR, groupName: "" };
const tableWithoutModifier: BaseKeycodeTableType = { keys: hrHRLetters, groupName: "" };

const hrHRCtrlTable = withModifiers(table, "Control +", "C+", 256);
const hrHRLAltTable = withModifiers(table, "Alt +", "A+", 512);
const hrHRRAltTable = withModifiers(table, "AltGr +", "AGr+", 1024);
const hrHRShiftTable = withModifiers(tableWithoutModifier, "Shift +", "S+", 2048);
const hrHRGuiTable = withModifiers(table, "Os+", "O+", 4096);

const hrHRCATable = withModifiers(table, "Control + Alt +", "C+A+", 768);
const hrHRCAGrTable = withModifiers(table, "Control + AltGr +", "C+AGr+", 1280);
const hrHRCSTable = withModifiers(table, "Control + Shift +", "C+S+", 2304);
const hrHRCGTable = withModifiers(table, "Control + Os +", "C+O+", 4352);
const hrHRAAGrTable = withModifiers(table, "Alt + AltGr +", "A+AGr+", 1536);
const hrHRASTable = withModifiers(table, "Alt + Shift +", "A+S+", 2560);
const hrHRAGTable = withModifiers(table, "Alt + Os +", "A+O+", 4608);
const hrHRAGrSTable = withModifiers(table, "AltGr + Shift +", "AGr+S+", 3072);
const hrHRAGrGTable = withModifiers(table, "AltGr + Os +", "AGr+O+", 5120);
const hrHRSGTable = withModifiers(table, "Shift + Os +", "S+O+", 6144);

const hrHRCAAGTable = withModifiers(table, "Control + Alt + AltGr +", "C+A+AGr+", 1792);
const hrHRCASTable = withModifiers(table, "Meh +", "Meh+", 2816);
const hrHRCAGTable = withModifiers(table, "Control + Alt + Os +", "C+A+O+", 4864);
const hrHRCAGSTable = withModifiers(table, "Control + AltGr + Shift +", "C+AGr+S+", 3328);
const hrHRCAGGTable = withModifiers(table, "Control + AltGr + Os +", "C+AGr+O+", 5376);
const hrHRCSGTable = withModifiers(table, "Control + Shift + Os +", "C+S+O+", 6400);
const hrHRAAGSTable = withModifiers(table, "Alt + AltGr + Shift +", "A+AGr+S+", 3584);
const hrHRAAGGTable = withModifiers(table, "Alt + AltGr + Os +", "A+AGr+O+", 5632);
const hrHRASGTable = withModifiers(table, "Alt + Shift + Os +", "A+S+O+", 6656);
const hrHRAGSGTable = withModifiers(table, "AltGr + Shift + Os +", "AGr+S+O+", 7168);

const hrHRCAAGrSTable = withModifiers(table, "Meh + AltGr +", "M+AGr+", 3840);
const hrHRCAAGrGTable = withModifiers(table, "Control + Alt + AltGr + Os +", "C+A+AGr+O+", 5888);
const hrHRCAGrSGTable = withModifiers(table, "Control + AltGr + Shift + Os +", "C+AGr+S+O+", 7424);
const hrHRAAGrSGTable = withModifiers(table, "Alt + AltGr + Shift + Os +", "A+AGr+S+O+", 7680);
const hrHRAllModTable = withModifiers(table, "Hyper + AltGr +", "H+AGr+", 7936);

const dualUseCtrlTable = withModifiers(table, "Control /", "CTRL/", 49169);
const dualUseShiftTable = withModifiers(table, "Shift /", "SHIFT/", 49425);
const dualUseAltTable = withModifiers(table, "Alt /", "ALT/", 49681);
const dualUseGuiTable = withModifiers(table, "Os /", "OS/", 49937);
const dualUseAltGrTable = withModifiers(table, "AltGr /", "ALTGR/", 50705);
const dualUseLayer1Tables = withModifiers(table, "Layer #1 /", "L#1/", 51218);
const dualUseLayer2Tables = withModifiers(table, "Layer #2 /", "L#2/", 51474);
const dualUseLayer3Tables = withModifiers(table, "Layer #3 /", "L#3/", 51730);
const dualUseLayer4Tables = withModifiers(table, "Layer #4 /", "L#4/", 51986);
const dualUseLayer5Tables = withModifiers(table, "Layer #5 /", "L#5/", 52242);
const dualUseLayer6Tables = withModifiers(table, "Layer #6 /", "L#6/", 52498);
const dualUseLayer7Tables = withModifiers(table, "Layer #7 /", "L#7/", 52754);
const dualUseLayer8Tables = withModifiers(table, "Layer #8 /", "L#8/", 53010);

const hrHRModifiedTables = [
  shiftModifier,
  hrHRCtrlTable,
  hrHRLAltTable,
  hrHRRAltTable,
  hrHRShiftTable,
  hrHRGuiTable,
  hrHRCATable,
  altCtrlModifier,
  altGrModifier,
  hrHRCAGrTable,
  hrHRCSTable,
  hrHRCGTable,
  hrHRAAGrTable,
  hrHRASTable,
  hrHRAGTable,
  hrHRAGrSTable,
  hrHRAGrGTable,
  hrHRSGTable,
  hrHRCAAGTable,
  hrHRCASTable,
  hrHRCAGTable,
  hrHRCAGSTable,
  hrHRCAGGTable,
  hrHRCSGTable,
  hrHRAAGSTable,
  hrHRAAGGTable,
  hrHRASGTable,
  hrHRAGSGTable,
  hrHRCAAGrSTable,
  hrHRCAAGrGTable,
  withModifiers(table, "Hyper +", "Hyper+", 6912),
  hrHRCAGrSGTable,
  hrHRAAGrSGTable,
  hrHRAllModTable,
  dualUseCtrlTable,
  dualUseShiftTable,
  dualUseAltTable,
  dualUseGuiTable,
  dualUseAltGrTable,
  dualUseLayer1Tables,
  dualUseLayer2Tables,
  dualUseLayer3Tables,
  dualUseLayer4Tables,
  dualUseLayer5Tables,
  dualUseLayer6Tables,
  dualUseLayer7Tables,
  dualUseLayer8Tables,
];

export { hrHR, hrHRModifiedTables };
