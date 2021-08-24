/**
 * @see https://www.matroska.org/technical/specs/index.html
 */
export const ID = {
  EBML: Uint8Array.of(0x1a, 0x45, 0xdf, 0xa3),
  EBMLVersion: Uint8Array.of(0x42, 0x86),
  EBMLReadVersion: Uint8Array.of(0x42, 0xf7),
  EBMLMaxIDLength: Uint8Array.of(0x42, 0xf2),
  EBMLMaxSizeLength: Uint8Array.of(0x42, 0xf3),
  DocType: Uint8Array.of(0x42, 0x82),
  DocTypeVersion: Uint8Array.of(0x42, 0x87),
  DocTypeReadVersion: Uint8Array.of(0x42, 0x85),
  Void: Uint8Array.of(0xec),
  CRC32: Uint8Array.of(0xbf),
  Segment: Uint8Array.of(0x18, 0x53, 0x80, 0x67),
  SeekHead: Uint8Array.of(0x11, 0x4d, 0x9b, 0x74),
  Seek: Uint8Array.of(0x4d, 0xbb),
  SeekID: Uint8Array.of(0x53, 0xab),
  SeekPosition: Uint8Array.of(0x53, 0xac),
  Info: Uint8Array.of(0x15, 0x49, 0xa9, 0x66),
  SegmentUID: Uint8Array.of(0x73, 0xa4),
  SegmentFilename: Uint8Array.of(0x73, 0x84),
  PrevUID: Uint8Array.of(0x3c, 0xb9, 0x23),
  PrevFilename: Uint8Array.of(0x3c, 0x83, 0xab),
  NextUID: Uint8Array.of(0x3e, 0xb9, 0x23),
  NextFilename: Uint8Array.of(0x3e, 0x83, 0xbb),
  SegmentFamily: Uint8Array.of(0x44, 0x44),
  ChapterTranslate: Uint8Array.of(0x69, 0x24),
  ChapterTranslateEditionUID: Uint8Array.of(0x69, 0xfc),
  ChapterTranslateCodec: Uint8Array.of(0x69, 0xbf),
  ChapterTranslateID: Uint8Array.of(0x69, 0xa5),
  TimecodeScale: Uint8Array.of(0x2a, 0xd7, 0xb1),
  Duration: Uint8Array.of(0x44, 0x89),
  DateUTC: Uint8Array.of(0x44, 0x61),
  Title: Uint8Array.of(0x7b, 0xa9),
  MuxingApp: Uint8Array.of(0x4d, 0x80),
  WritingApp: Uint8Array.of(0x57, 0x41),
  Cluster: Uint8Array.of(0x1f, 0x43, 0xb6, 0x75),
  Timecode: Uint8Array.of(0xe7),
  SilentTracks: Uint8Array.of(0x58, 0x54),
  SilentTrackNumber: Uint8Array.of(0x58, 0xd7),
  Position: Uint8Array.of(0xa7),
  PrevSize: Uint8Array.of(0xab),
  SimpleBlock: Uint8Array.of(0xa3),
  BlockGroup: Uint8Array.of(0xa0),
  Block: Uint8Array.of(0xa1),
  BlockAdditions: Uint8Array.of(0x75, 0xa1),
  BlockMore: Uint8Array.of(0xa6),
  BlockAddID: Uint8Array.of(0xee),
  BlockAdditional: Uint8Array.of(0xa5),
  BlockDuration: Uint8Array.of(0x9b),
  ReferencePriority: Uint8Array.of(0xfa),
  ReferenceBlock: Uint8Array.of(0xfb),
  CodecState: Uint8Array.of(0xa4),
  DiscardPadding: Uint8Array.of(0x75, 0xa2),
  Slices: Uint8Array.of(0x8e),
  TimeSlice: Uint8Array.of(0xe8),
  LaceNumber: Uint8Array.of(0xcc),
  Tracks: Uint8Array.of(0x16, 0x54, 0xae, 0x6b),
  TrackEntry: Uint8Array.of(0xae),
  TrackNumber: Uint8Array.of(0xd7),
  TrackUID: Uint8Array.of(0x73, 0xc5),
  TrackType: Uint8Array.of(0x83),
  FlagEnabled: Uint8Array.of(0xb9),
  FlagDefault: Uint8Array.of(0x88),
  FlagForced: Uint8Array.of(0x55, 0xaa),
  FlagLacing: Uint8Array.of(0x9c),
  MinCache: Uint8Array.of(0x6d, 0xe7),
  MaxCache: Uint8Array.of(0x6d, 0xf8),
  DefaultDuration: Uint8Array.of(0x23, 0xe3, 0x83),
  DefaultDecodedFieldDuration: Uint8Array.of(0x23, 0x4e, 0x7a),
  MaxBlockAdditionID: Uint8Array.of(0x55, 0xee),
  Name: Uint8Array.of(0x53, 0x6e),
  Language: Uint8Array.of(0x22, 0xb5, 0x9c),
  CodecID: Uint8Array.of(0x86),
  CodecPrivate: Uint8Array.of(0x63, 0xa2),
  CodecName: Uint8Array.of(0x25, 0x86, 0x88),
  AttachmentLink: Uint8Array.of(0x74, 0x46),
  CodecDecodeAll: Uint8Array.of(0xaa),
  TrackOverlay: Uint8Array.of(0x6f, 0xab),
  CodecDelay: Uint8Array.of(0x56, 0xaa),
  SeekPreRoll: Uint8Array.of(0x56, 0xbb),
  TrackTranslate: Uint8Array.of(0x66, 0x24),
  TrackTranslateEditionUID: Uint8Array.of(0x66, 0xfc),
  TrackTranslateCodec: Uint8Array.of(0x66, 0xbf),
  TrackTranslateTrackID: Uint8Array.of(0x66, 0xa5),
  Video: Uint8Array.of(0xe0),
  FlagInterlaced: Uint8Array.of(0x9a),
  FieldOrder: Uint8Array.of(0x9d),
  StereoMode: Uint8Array.of(0x53, 0xb8),
  AlphaMode: Uint8Array.of(0x53, 0xc0),
  PixelWidth: Uint8Array.of(0xb0),
  PixelHeight: Uint8Array.of(0xba),
  PixelCropBottom: Uint8Array.of(0x54, 0xaa),
  PixelCropTop: Uint8Array.of(0x54, 0xbb),
  PixelCropLeft: Uint8Array.of(0x54, 0xcc),
  PixelCropRight: Uint8Array.of(0x54, 0xdd),
  DisplayWidth: Uint8Array.of(0x54, 0xb0),
  DisplayHeight: Uint8Array.of(0x54, 0xba),
  DisplayUnit: Uint8Array.of(0x54, 0xb2),
  AspectRatioType: Uint8Array.of(0x54, 0xb3),
  ColourSpace: Uint8Array.of(0x2e, 0xb5, 0x24),
  Colour: Uint8Array.of(0x55, 0xb0),
  MatrixCoefficients: Uint8Array.of(0x55, 0xb1),
  BitsPerChannel: Uint8Array.of(0x55, 0xb2),
  ChromaSubsamplingHorz: Uint8Array.of(0x55, 0xb3),
  ChromaSubsamplingVert: Uint8Array.of(0x55, 0xb4),
  CbSubsamplingHorz: Uint8Array.of(0x55, 0xb5),
  CbSubsamplingVert: Uint8Array.of(0x55, 0xb6),
  ChromaSitingHorz: Uint8Array.of(0x55, 0xb7),
  ChromaSitingVert: Uint8Array.of(0x55, 0xb8),
  Range: Uint8Array.of(0x55, 0xb9),
  TransferCharacteristics: Uint8Array.of(0x55, 0xba),
  Primaries: Uint8Array.of(0x55, 0xbb),
  MaxCLL: Uint8Array.of(0x55, 0xbc),
  MaxFALL: Uint8Array.of(0x55, 0xbd),
  MasteringMetadata: Uint8Array.of(0x55, 0xd0),
  PrimaryRChromaticityX: Uint8Array.of(0x55, 0xd1),
  PrimaryRChromaticityY: Uint8Array.of(0x55, 0xd2),
  PrimaryGChromaticityX: Uint8Array.of(0x55, 0xd3),
  PrimaryGChromaticityY: Uint8Array.of(0x55, 0xd4),
  PrimaryBChromaticityX: Uint8Array.of(0x55, 0xd5),
  PrimaryBChromaticityY: Uint8Array.of(0x55, 0xd6),
  WhitePointChromaticityX: Uint8Array.of(0x55, 0xd7),
  WhitePointChromaticityY: Uint8Array.of(0x55, 0xd8),
  LuminanceMax: Uint8Array.of(0x55, 0xd9),
  LuminanceMin: Uint8Array.of(0x55, 0xda),
  Audio: Uint8Array.of(0xe1),
  SamplingFrequency: Uint8Array.of(0xb5),
  OutputSamplingFrequency: Uint8Array.of(0x78, 0xb5),
  Channels: Uint8Array.of(0x9f),
  BitDepth: Uint8Array.of(0x62, 0x64),
  TrackOperation: Uint8Array.of(0xe2),
  TrackCombinePlanes: Uint8Array.of(0xe3),
  TrackPlane: Uint8Array.of(0xe4),
  TrackPlaneUID: Uint8Array.of(0xe5),
  TrackPlaneType: Uint8Array.of(0xe6),
  TrackJoinBlocks: Uint8Array.of(0xe9),
  TrackJoinUID: Uint8Array.of(0xed),
  ContentEncodings: Uint8Array.of(0x6d, 0x80),
  ContentEncoding: Uint8Array.of(0x62, 0x40),
  ContentEncodingOrder: Uint8Array.of(0x50, 0x31),
  ContentEncodingScope: Uint8Array.of(0x50, 0x32),
  ContentEncodingType: Uint8Array.of(0x50, 0x33),
  ContentCompression: Uint8Array.of(0x50, 0x34),
  ContentCompAlgo: Uint8Array.of(0x42, 0x54),
  ContentCompSettings: Uint8Array.of(0x42, 0x55),
  ContentEncryption: Uint8Array.of(0x50, 0x35),
  ContentEncAlgo: Uint8Array.of(0x47, 0xe1),
  ContentEncKeyID: Uint8Array.of(0x47, 0xe2),
  ContentSignature: Uint8Array.of(0x47, 0xe3),
  ContentSigKeyID: Uint8Array.of(0x47, 0xe4),
  ContentSigAlgo: Uint8Array.of(0x47, 0xe5),
  ContentSigHashAlgo: Uint8Array.of(0x47, 0xe6),
  Cues: Uint8Array.of(0x1c, 0x53, 0xbb, 0x6b),
  CuePoint: Uint8Array.of(0xbb),
  CueTime: Uint8Array.of(0xb3),
  CueTrackPositions: Uint8Array.of(0xb7),
  CueTrack: Uint8Array.of(0xf7),
  CueClusterPosition: Uint8Array.of(0xf1),
  CueRelativePosition: Uint8Array.of(0xf0),
  CueDuration: Uint8Array.of(0xb2),
  CueBlockNumber: Uint8Array.of(0x53, 0x78),
  CueCodecState: Uint8Array.of(0xea),
  CueReference: Uint8Array.of(0xdb),
  CueRefTime: Uint8Array.of(0x96),
  Attachments: Uint8Array.of(0x19, 0x41, 0xa4, 0x69),
  AttachedFile: Uint8Array.of(0x61, 0xa7),
  FileDescription: Uint8Array.of(0x46, 0x7e),
  FileName: Uint8Array.of(0x46, 0x6e),
  FileMimeType: Uint8Array.of(0x46, 0x60),
  FileData: Uint8Array.of(0x46, 0x5c),
  FileUID: Uint8Array.of(0x46, 0xae),
  Chapters: Uint8Array.of(0x10, 0x43, 0xa7, 0x70),
  EditionEntry: Uint8Array.of(0x45, 0xb9),
  EditionUID: Uint8Array.of(0x45, 0xbc),
  EditionFlagHidden: Uint8Array.of(0x45, 0xbd),
  EditionFlagDefault: Uint8Array.of(0x45, 0xdb),
  EditionFlagOrdered: Uint8Array.of(0x45, 0xdd),
  ChapterAtom: Uint8Array.of(0xb6),
  ChapterUID: Uint8Array.of(0x73, 0xc4),
  ChapterStringUID: Uint8Array.of(0x56, 0x54),
  ChapterTimeStart: Uint8Array.of(0x91),
  ChapterTimeEnd: Uint8Array.of(0x92),
  ChapterFlagHidden: Uint8Array.of(0x98),
  ChapterFlagEnabled: Uint8Array.of(0x45, 0x98),
  ChapterSegmentUID: Uint8Array.of(0x6e, 0x67),
  ChapterSegmentEditionUID: Uint8Array.of(0x6e, 0xbc),
  ChapterPhysicalEquiv: Uint8Array.of(0x63, 0xc3),
  ChapterTrack: Uint8Array.of(0x8f),
  ChapterTrackNumber: Uint8Array.of(0x89),
  ChapterDisplay: Uint8Array.of(0x80),
  ChapString: Uint8Array.of(0x85),
  ChapLanguage: Uint8Array.of(0x43, 0x7c),
  ChapCountry: Uint8Array.of(0x43, 0x7e),
  ChapProcess: Uint8Array.of(0x69, 0x44),
  ChapProcessCodecID: Uint8Array.of(0x69, 0x55),
  ChapProcessPrivate: Uint8Array.of(0x45, 0x0d),
  ChapProcessCommand: Uint8Array.of(0x69, 0x11),
  ChapProcessTime: Uint8Array.of(0x69, 0x22),
  ChapProcessData: Uint8Array.of(0x69, 0x33),
  Tags: Uint8Array.of(0x12, 0x54, 0xc3, 0x67),
  Tag: Uint8Array.of(0x73, 0x73),
  Targets: Uint8Array.of(0x63, 0xc0),
  TargetTypeValue: Uint8Array.of(0x68, 0xca),
  TargetType: Uint8Array.of(0x63, 0xca),
  TagTrackUID: Uint8Array.of(0x63, 0xc5),
  TagEditionUID: Uint8Array.of(0x63, 0xc9),
  TagChapterUID: Uint8Array.of(0x63, 0xc4),
  TagAttachmentUID: Uint8Array.of(0x63, 0xc6),
  SimpleTag: Uint8Array.of(0x67, 0xc8),
  TagName: Uint8Array.of(0x45, 0xa3),
  TagLanguage: Uint8Array.of(0x44, 0x7a),
  TagDefault: Uint8Array.of(0x44, 0x84),
  TagString: Uint8Array.of(0x44, 0x87),
  TagBinary: Uint8Array.of(0x44, 0x85),
};
