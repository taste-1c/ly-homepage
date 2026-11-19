import type { businessDetails } from "./businessDetails";
import type { Service } from "./site";

type BusinessTranslation = Omit<(typeof businessDetails)[Service["id"]], "image"> & {
  title: string;
  category: string;
  summary: string;
  description: string;
};

export const businessDetailsZh: Record<Service["id"], BusinessTranslation> = {
  development: {
    title: "房地产开发",
    category: "房地产开发",
    summary: "我们结合地块特点，建设符合当地居民生活和社区需求的建筑。",
    description:
      "我们负责住宅、商业设施、酒店和综合楼宇的策划与开发，覆盖寻找项目用地、地质和市场调查、设计、施工与交付各环节。",
    imageAlt: "面向林荫街道的集合住宅示意图",
    lead: "从用地调查、项目策划，到设计、施工与交付。",
    overviewLabel: "开发概览",
    headline: ["因地制宜，", "建设契合用地特点的建筑。"],
    sectionTitle: "主要开发领域",
    sectionLabel: "项目类型",
    sectionDescription: "我们根据地块特点和使用者需求策划项目。",
    items: [
      { title: "住宅", description: "结合区位和居住需求，规划贴合日常生活的住宅。" },
      { title: "商业设施", description: "根据周边客流动线和区域需求，规划便于到访和使用的设施。" },
      { title: "酒店", description: "兼顾住客体验和运营便利，梳理项目条件。" },
      { title: "综合楼宇", description: "厘清各类用途的功能，考虑楼宇整体与周边街区的联系。" },
    ],
  },
  investment: {
    title: "投资运营",
    category: "投资与资产策略",
    summary: "我们兼顾收益与风险，制定所持房地产的运营方向。",
    description:
      "我们取得、持有并运营房地产，根据市场走势和物业特点制定长期运营方针，维护并提升资产价值。",
    imageAlt: "从办公室窗内望见的商业设施和街区示意图",
    lead: "研判市场和物业状况，从长期角度运营资产。",
    overviewLabel: "投资概览",
    headline: ["从取得到运营，", "评估资产的潜力。"],
    sectionTitle: "投资运营工作",
    sectionLabel: "资产策略",
    sectionDescription: "结合市场变化和所持资产的状况，研究运营方针。",
    items: [
      { title: "收购评估", description: "调查区位、物业状况和租赁需求，评估收购机会。" },
      { title: "投资组合设计", description: "比较不同用途和地区的特点，研究整体资产配置。" },
      { title: "收益与风险分析", description: "根据租金和维护费用等测算收益，识别可能的波动因素。" },
      { title: "持有资产评估", description: "持续跟踪盈利能力和使用状况，为调整运营方针提供依据。" },
    ],
  },
  management: {
    title: "资产管理",
    category: "物业管理",
    summary: "我们负责物业运营和租户服务，让使用者安心使用建筑。",
    description:
      "我们通过物业管理和租赁服务维护资产的长期价值，从日常运营到维护计划，兼顾物业的当前需要和长远状况。",
    imageAlt: "工作人员在建筑入口检查照明的示意图",
    lead: "从日常运营到长期维护计划，为建筑及其使用者提供支持。",
    overviewLabel: "管理概览",
    headline: ["做好日常运营，", "维护建筑价值。"],
    sectionTitle: "主要管理工作",
    sectionLabel: "管理服务",
    sectionDescription: "根据物业用途和使用状况，安排日常管理及中长期维护。",
    items: [
      { title: "物业运营", description: "根据业主方针，掌握物业运营状况和日常管理中遇到的问题。" },
      { title: "租赁服务", description: "结合周边租赁需求和物业特点，协助招募租户和办理签约手续。" },
      { title: "租户服务", description: "受理租户的咨询与意见，并与相关方协调处理。" },
      { title: "维护与维修计划", description: "检查建筑和设备状况，确定检查与维修的时机和优先级。" },
    ],
  },
  global: {
    title: "海外投资者支持",
    category: "海外投资者服务",
    summary: "我们用多种语言提供自有物业信息，帮助海外客户了解日本房地产项目。",
    description:
      "我们面向关注日本房地产的海外个人投资者与企业客户，以日语、英语和中文介绍自有物业，并说明物业信息与购买流程。",
    imageAlt: "两人查看房地产图纸并商谈的示意图",
    lead: "向海外个人投资者和企业客户介绍我们在日本持有的物业。",
    overviewLabel: "服务概览",
    headline: ["向海外客户介绍", "日本房地产。"],
    sectionTitle: "主要服务内容",
    sectionLabel: "投资者支持",
    sectionDescription: "根据客户所处的考察阶段，提供自有物业信息，介绍购买流程。",
    items: [
      { title: "多语言物业介绍", description: "以日语、英语和中文说明物业概况、区位和使用状况。" },
      { title: "协助调查物业", description: "梳理物业状况、合同条件等资料和待确认事项，供客户作出购买判断。" },
      { title: "购买手续说明", description: "说明从考察、签约到交付各阶段所需办理的手续。" },
      { title: "相关方协调", description: "根据咨询内容，协助日本境内外相关方共享信息。" },
    ],
  },
};
