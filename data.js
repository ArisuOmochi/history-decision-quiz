/**
 * 历史十字路口 · 50 道完整题库与历史人物特征向量数据库
 * 
 * 此文件独立于 index.html，供前端直接通过 <script src="data.js"> 加载。
 * 兼容性保证：支持本地双击打开（file://）及 GitHub Pages 静态环境。
 * 
 * - questions: 50 道横跨古典、中古、启蒙与革命、工业化与冷战至当代的历史情境决策题
 * - characters: 18 位典型历史人物画像与 5 维基准特征向量 [-100, +100]
 */

window.QUIZ_DATABASE = {
  "questions": [
    {
      "id": 1,
      "era": "古典时代 · 前49年",
      "role": "【你的身份】：尤利乌斯·凯撒，高卢总督兼军团统帅",
      "title": "卢比孔河前的破局抉择",
      "desc": "元老院颁布最后通牒，剥夺你的军职，命你解除武装孤身回罗马受审。寡头贵族已罗织罪名欲将你置于死地，而你的第十三军团就在卢比孔河北岸整装待发。",
      "options": [
        {
          "key": "A",
          "headline": "骰子已经掷下：率军渡河向罗马进军",
          "analysis": "以绝对武力摧毁腐朽寡头体制，开创强力集权的新帝国秩序。",
          "deltas": {
            "authority": 25,
            "radicalism": 25,
            "foreign": 15,
            "realpolitik": 20,
            "economy": 10
          }
        },
        {
          "key": "B",
          "headline": "服从法律辞去兵权，回罗马依靠平民声望进行公开司法抗辩",
          "analysis": "严守共和国法统底线，宁背负政敌暗算亦不主动践踏宪制传统。",
          "deltas": {
            "authority": -20,
            "radicalism": -25,
            "foreign": -10,
            "realpolitik": -25,
            "economy": -10
          }
        },
        {
          "key": "C",
          "headline": "在山南高卢拥兵割据，暗中拉拢东方行省伺机谋求妥协",
          "analysis": "避开正面决裂，利用地缘纵深与实力进行现实博弈。",
          "deltas": {
            "authority": 10,
            "radicalism": -10,
            "foreign": 5,
            "realpolitik": 25,
            "economy": 0
          }
        },
        {
          "key": "D",
          "headline": "要求元老院重组执政官选举，以保留两支军团为退让条件达成共治",
          "analysis": "在体制框架内追求实力与制度的折中平衡。",
          "deltas": {
            "authority": 0,
            "radicalism": 0,
            "foreign": 0,
            "realpolitik": 15,
            "economy": -5
          }
        }
      ]
    },
    {
      "id": 2,
      "era": "战国秦国 · 前356年",
      "role": "【你的身份】：商鞅，秦孝公任用的变法大良造",
      "title": "变法图存与刑不上大夫的冲突",
      "desc": "新法推行未久，太子犯法，宗室勋贵群起抵制，旧贵族宣称严刑峻法乃亡国之道，秦国境内人心惶惶，孝公面临空前内部压力。",
      "options": [
        {
          "key": "A",
          "headline": "法及公室：刑太子之傅公子虔，断右傅公孙贾之鼻",
          "analysis": "法不阿贵，彻底击碎世卿世禄特权，以铁腕法家极权建立耕战机器。",
          "deltas": {
            "authority": 30,
            "radicalism": 30,
            "foreign": 15,
            "realpolitik": 25,
            "economy": 25
          }
        },
        {
          "key": "B",
          "headline": "以德化民：对宗室从宽赦免，放宽什伍连坐，缓和激化矛盾",
          "analysis": "顺应礼法人情，采取温和改良以保全变法长期成果。",
          "deltas": {
            "authority": -15,
            "radicalism": -25,
            "foreign": -10,
            "realpolitik": -20,
            "economy": -15
          }
        },
        {
          "key": "C",
          "headline": "借力打力：暂缓内地宗室制裁，即刻发兵征讨魏国以转移国内矛盾",
          "analysis": "用对外军事胜利换取君臣凝聚力，以军功爵重塑权力阶层。",
          "deltas": {
            "authority": 20,
            "radicalism": 10,
            "foreign": 30,
            "realpolitik": 25,
            "economy": 15
          }
        },
        {
          "key": "D",
          "headline": "专务富国：暂停严酷肉刑，全力推进均田开阡陌与盐铁实业",
          "analysis": "注重实用经济基础积累，避免过早陷入高层政治流血。",
          "deltas": {
            "authority": 10,
            "radicalism": 5,
            "foreign": 0,
            "realpolitik": 10,
            "economy": 20
          }
        }
      ]
    },
    {
      "id": 3,
      "era": "古典希腊 · 前431年",
      "role": "【你的身份】：伯里克利，雅典城邦第一公民",
      "title": "斯巴达的宣战通牒与雅典帝国前途",
      "desc": "伯罗奔尼撒同盟向雅典下达最后通牒：要求雅典废除针对麦加拉的经济制裁禁令，并解散提洛同盟，否则全面开战。议事会中主和派与主战派激烈交锋。",
      "options": [
        {
          "key": "A",
          "headline": "寸步不让：将陆地平民撤入长墙，依靠无敌海军封锁伯罗奔尼撒",
          "analysis": "坚持雅典海上霸权与民主制度优越性，进行总体消耗战。",
          "deltas": {
            "authority": -10,
            "radicalism": 20,
            "foreign": 25,
            "realpolitik": 10,
            "economy": -10
          }
        },
        {
          "key": "B",
          "headline": "废除制裁令，同意对斯巴达仲裁以避免全希腊生灵涂炭",
          "analysis": "遵循和平与国际仲裁理性，恪守希腊城邦同盟传统友谊。",
          "deltas": {
            "authority": -20,
            "radicalism": -25,
            "foreign": -25,
            "realpolitik": -20,
            "economy": -15
          }
        },
        {
          "key": "C",
          "headline": "秘密遣使波斯帝国借款，扶植斯巴达国内黑劳士奴隶叛乱",
          "analysis": "不拘泥于希腊民族名分，运用纯粹离间与代理人战争削弱强敌。",
          "deltas": {
            "authority": 10,
            "radicalism": 15,
            "foreign": 15,
            "realpolitik": 30,
            "economy": 10
          }
        },
        {
          "key": "D",
          "headline": "放弃提洛同盟贡金要求，转为互助防御自愿联盟",
          "analysis": "卸下帝国霸权包袱，以制度自律换取城邦自决与内安。",
          "deltas": {
            "authority": -30,
            "radicalism": -10,
            "foreign": -20,
            "realpolitik": -15,
            "economy": -25
          }
        }
      ]
    },
    {
      "id": 4,
      "era": "大汉帝国 · 前140年",
      "role": "【你的身份】：汉武帝刘彻，即位之初的年轻帝王",
      "title": "黄老清静与主动出击匈奴的路线抉择",
      "desc": "经过文景之治数十年休养生息，汉朝国库充盈，但北方匈奴年年寇边掳掠。窦太后等长辈恪守黄老无为、和亲岁币祖训，严厉警告一旦大举用兵必使天下民力凋敝。",
      "options": [
        {
          "key": "A",
          "headline": "厉兵秣马：行盐铁官营、告缗平准，倾全国财力北击匈奴封狼居胥",
          "analysis": "实行国家统制经济，调动举国体制发起战略总攻，洗刷百年屈辱。",
          "deltas": {
            "authority": 30,
            "radicalism": 20,
            "foreign": 35,
            "realpolitik": 20,
            "economy": 30
          }
        },
        {
          "key": "B",
          "headline": "恪守黄老：继续维持和亲与边市，省刑罚薄赋敛以安天下百姓",
          "analysis": "以民生福祉为至上目标，避免国进民退与兵戈破家之祸。",
          "deltas": {
            "authority": -25,
            "radicalism": -30,
            "foreign": -30,
            "realpolitik": -15,
            "economy": -30
          }
        },
        {
          "key": "C",
          "headline": "远交近攻：派张骞凿空西域结好大月氏，以夷制夷遏制匈奴右翼",
          "analysis": "以外交博弈与地缘联盟为先，辅以有限军事威慑。",
          "deltas": {
            "authority": 10,
            "radicalism": 5,
            "foreign": 15,
            "realpolitik": 20,
            "economy": 5
          }
        },
        {
          "key": "D",
          "headline": "专筑长城修边塞，实施军屯自给，严禁主动出塞深入大漠",
          "analysis": "重防守实用主义，既坚决抗击入侵又极力控制财政赤字。",
          "deltas": {
            "authority": 15,
            "radicalism": -10,
            "foreign": -10,
            "realpolitik": 15,
            "economy": 15
          }
        }
      ]
    },
    {
      "id": 5,
      "era": "早期罗马帝国 · 公元14年",
      "role": "【你的身份】：提比略，接替奥古斯都的新元首",
      "title": "奥古斯都离世与莱茵军团哗变",
      "desc": "国父奥古斯都逝世，潘诺尼亚与日耳曼尼亚的常备军团爆发大规模骚乱，军团士兵要求退役金并威胁拥立将领日耳曼尼库斯为帝，元老院亦暗中试探恢复共和旧制的可能。",
      "options": [
        {
          "key": "A",
          "headline": "铁腕镇压首谋，派遣亲信近卫军处决兵变骨干，重申元首无上绝对统治",
          "analysis": "强化独裁威权，将禁卫军作为中央集权不可动摇之基石。",
          "deltas": {
            "authority": 30,
            "radicalism": 15,
            "foreign": 10,
            "realpolitik": 25,
            "economy": 15
          }
        },
        {
          "key": "B",
          "headline": "全盘移交大权于元老院，宣布退居卡普里岛并恢复平民大会选举",
          "analysis": "回归古典共和分权，拒绝元首专制特权。",
          "deltas": {
            "authority": -35,
            "radicalism": -25,
            "foreign": -20,
            "realpolitik": -25,
            "economy": -25
          }
        },
        {
          "key": "C",
          "headline": "全额兑现士兵赏金要求，允许日耳曼尼库斯出击易北河宣泄怒火",
          "analysis": "花钱消灾并借对外征伐消化军团叛逆元气。",
          "deltas": {
            "authority": 5,
            "radicalism": 10,
            "foreign": 25,
            "realpolitik": 20,
            "economy": -10
          }
        },
        {
          "key": "D",
          "headline": "厉行财政节约，缩减边境野战军团规模，转入筑垒防御",
          "analysis": "审慎务实的内政守成，严防赤字失控与武将坐大。",
          "deltas": {
            "authority": 15,
            "radicalism": -15,
            "foreign": -20,
            "realpolitik": 15,
            "economy": 10
          }
        }
      ]
    },
    {
      "id": 6,
      "era": "战国赵国 · 前307年",
      "role": "【你的身份】：赵武灵王赵雍",
      "title": "胡服骑射与华夏冠带传统的冲突",
      "desc": "赵国处于中山国插腹之患，屡受齐秦欺凌。你决心打破中原笨重战车与宽袍大袖传统，推行胡服骑射。叔父公子成等元老痛哭流涕，指责胡服乃背叛先王、夷狄蛮化之大不韪。",
      "options": [
        {
          "key": "A",
          "headline": "强令全境遵行：亲穿胡服上朝，对违抗宗室削爵夺邑，建立机动铁骑",
          "analysis": "打破文化虚骄，以极其实用的强国强军意志彻底破除传统礼制束缚。",
          "deltas": {
            "authority": 25,
            "radicalism": 35,
            "foreign": 25,
            "realpolitik": 30,
            "economy": 15
          }
        },
        {
          "key": "B",
          "headline": "顺应公室：撤回胡服禁令，仍循周礼车战，增修边墙防守",
          "analysis": "恪守华夏正统意识形态与祖制，拒绝社会风俗异化。",
          "deltas": {
            "authority": -15,
            "radicalism": -35,
            "foreign": -20,
            "realpolitik": -25,
            "economy": -15
          }
        },
        {
          "key": "C",
          "headline": "双轨折中：仅前线野战军穿胡服，朝堂与城邑仍尊华夏旧章",
          "analysis": "在军事实用与传统合法性之间寻找阻力最小的平衡点。",
          "deltas": {
            "authority": 10,
            "radicalism": 5,
            "foreign": 15,
            "realpolitik": 15,
            "economy": 5
          }
        },
        {
          "key": "D",
          "headline": "重金雇佣林胡、楼烦骑兵为雇佣前锋，不改本国衣冠体制",
          "analysis": "以外包雇佣兵解决战力短板，维护本国内部制度稳定。",
          "deltas": {
            "authority": -5,
            "radicalism": -10,
            "foreign": 10,
            "realpolitik": 20,
            "economy": -15
          }
        }
      ]
    },
    {
      "id": 7,
      "era": "罗马帝国鼎盛期 · 175年",
      "role": "【你的身份】：马可·奥勒留，哲学家皇帝",
      "title": "叙利亚总督叛变与斯多葛帝王的救赎",
      "desc": "你在多瑙河前线与日耳曼蛮族血战之际，叙利亚总督阿维狄乌斯·卡西乌斯误信你已病逝的谣言，在东方各省僭位称帝。叛乱迅速蔓延，将领们主张以雷霆手段将东方叛乱行省尽数血洗诛灭三族。",
      "options": [
        {
          "key": "A",
          "headline": "践行斯多葛仁爱：赦免叛党全军，封存叛变通信，祈求神明让卡西乌斯自省",
          "analysis": "坚守哲学家的至高道德自律，视复仇与暴政为对灵魂的侵蚀。",
          "deltas": {
            "authority": -20,
            "radicalism": -15,
            "foreign": -25,
            "realpolitik": -35,
            "economy": -15
          }
        },
        {
          "key": "B",
          "headline": "铁血惩戒：处死所有参叛行省总督与元老，充公家产以充实帝国行伍",
          "analysis": "现实主义强权逻辑：软弱即是鼓励内战，皇权威仪不容半点挑衅。",
          "deltas": {
            "authority": 30,
            "radicalism": 20,
            "foreign": 15,
            "realpolitik": 30,
            "economy": 25
          }
        },
        {
          "key": "C",
          "headline": "悬赏刺杀卡西乌斯首级，随后宣布无罪大赦并迅速回防多瑙河防线",
          "analysis": "以最小政治成本解决危机，全力维护帝国北部防线根本大局。",
          "deltas": {
            "authority": 15,
            "radicalism": 0,
            "foreign": 5,
            "realpolitik": 25,
            "economy": 5
          }
        },
        {
          "key": "D",
          "headline": "设共治双皇帝分管东西，承认东方行省事实自治以防帝国断裂",
          "analysis": "主动向地缘现实让步，开启分权自治改革以防过度集权瘫痪。",
          "deltas": {
            "authority": -30,
            "radicalism": 20,
            "foreign": -15,
            "realpolitik": 15,
            "economy": -20
          }
        }
      ]
    },
    {
      "id": 8,
      "era": "古风斯巴达 · 前6世纪",
      "role": "【你的身份】：斯巴达立法者来库古（或长老会议事长）",
      "title": "铁血城邦的均田与军国制度奠基",
      "desc": "斯巴达黑劳士奴隶数量远超公民，阶级仇杀一触即发；城邦内部贵族兼并土地、贫富悬殊。平民士兵要求彻底打破贫富分化，建立绝对服从军事实体。",
      "options": [
        {
          "key": "A",
          "headline": "推行激进军国极权：废除金银币改用铁块，土地彻底平分，儿童7岁归国家军训",
          "analysis": "抹杀一切个人私产与自由，将整个社会打造成无懈可击的国家战争营垒。",
          "deltas": {
            "authority": 35,
            "radicalism": 35,
            "foreign": 20,
            "realpolitik": 25,
            "economy": 40
          }
        },
        {
          "key": "B",
          "headline": "保护土地私有与自由通商，依靠海外殖民化解本国人口与土地过剩",
          "analysis": "选择自由商业文明道路，排斥军国禁欲专制对人性的压抑。",
          "deltas": {
            "authority": -30,
            "radicalism": -25,
            "foreign": -10,
            "realpolitik": -20,
            "economy": -35
          }
        },
        {
          "key": "C",
          "headline": "解放部分勤勉黑劳士为准公民，扩大军队基数同时保持贵族议事特权",
          "analysis": "采取适度改良缓和内部仇恨，维持混合政制稳定。",
          "deltas": {
            "authority": 0,
            "radicalism": 5,
            "foreign": 5,
            "realpolitik": 15,
            "economy": 0
          }
        },
        {
          "key": "D",
          "headline": "严酷镇压黑劳士，设立每年合法的秘密屠杀令(Krypteia)，固化寡头统治",
          "analysis": "纯粹依靠国家恐怖主义维持对被征服阶级的绝对专政。",
          "deltas": {
            "authority": 30,
            "radicalism": -10,
            "foreign": 15,
            "realpolitik": 35,
            "economy": 20
          }
        }
      ]
    },
    {
      "id": 9,
      "era": "秦末楚汉风云 · 前206年",
      "role": "【你的身份】：西楚霸王项羽，灭秦诸侯盟主",
      "title": "咸阳分封与大一统郡县之争",
      "desc": "秦朝覆灭，咸阳已破。面前摆着两条治世道路：是沿袭秦始皇的中央集权郡县制，由楚国直辖天下；还是重回周朝分封古制，裂土分封十八路诸侯，衣锦还乡？",
      "options": [
        {
          "key": "A",
          "headline": "承袭秦制：以楚军为骨干直辖四海，废除诸侯王，实行中央绝对集权",
          "analysis": "顺应历史大一统潮流，以绝对军政权力统御天下。",
          "deltas": {
            "authority": 30,
            "radicalism": 25,
            "foreign": 20,
            "realpolitik": 20,
            "economy": 25
          }
        },
        {
          "key": "B",
          "headline": "大封诸侯：分封十八路功臣霸王，楚国退守西楚，行诸侯自治盟主之制",
          "analysis": "信奉西周宗法封建古道，尊重贵族领地主权与邦联共和传统。",
          "deltas": {
            "authority": -30,
            "radicalism": -30,
            "foreign": -25,
            "realpolitik": -25,
            "economy": -25
          }
        },
        {
          "key": "C",
          "headline": "表面分封，将刘邦、章邯等强劲对手封入偏僻险阻之地，暗中挑拨兼并",
          "analysis": "运用地缘阴谋削弱潜在劲敌，以分而治之手段图谋最终吞并。",
          "deltas": {
            "authority": 15,
            "radicalism": 0,
            "foreign": 15,
            "realpolitik": 30,
            "economy": 10
          }
        },
        {
          "key": "D",
          "headline": "定都关中，依托秦国成熟官僚法家机器与险要山川经营帝国",
          "analysis": "摒弃楚人乡土执念，依托实用主义地缘资本奠定霸业。",
          "deltas": {
            "authority": 25,
            "radicalism": 15,
            "foreign": 10,
            "realpolitik": 25,
            "economy": 20
          }
        }
      ]
    },
    {
      "id": 10,
      "era": "孔雀帝国 · 前261年",
      "role": "【你的身份】：阿育王，孔雀帝国最高统治者",
      "title": "羯陵伽血战后的信仰与政道转变",
      "desc": "经过惨烈的羯陵伽之战，十万人被杀，十五万人被俘流放。尸横遍野的惨状震撼了你的灵魂。军方功臣欢呼帝国版图统一印度半岛，敦促你继续向南开疆拓土。",
      "options": [
        {
          "key": "A",
          "headline": "放下屠刀：皈依佛门立正法敕令，全面废止征伐，向全境推广不杀生与宽容",
          "analysis": "将国家治理基石由暴力军武彻底转向神圣道德正法与人文关怀。",
          "deltas": {
            "authority": -20,
            "radicalism": 35,
            "foreign": -35,
            "realpolitik": -35,
            "economy": -20
          }
        },
        {
          "key": "B",
          "headline": "乘胜南征：兵锋直抵半岛最南端，彻底统一印度全境方能休战",
          "analysis": "帝王霸业高于个人良知，唯有一鼓作气消灭割据方有长治久安。",
          "deltas": {
            "authority": 30,
            "radicalism": 10,
            "foreign": 35,
            "realpolitik": 30,
            "economy": 20
          }
        },
        {
          "key": "C",
          "headline": "内圣外王：对内宣扬正法安抚遗老，对外维持绝对军力威慑朝贡体系",
          "analysis": "将宗教道德作为凝聚臣民的柔性工具，同时不放弃强权基本盘。",
          "deltas": {
            "authority": 15,
            "radicalism": 5,
            "foreign": 5,
            "realpolitik": 25,
            "economy": 10
          }
        },
        {
          "key": "D",
          "headline": "将羯陵伽设为高度自治朝贡国，留存其王室以化解世代仇恨",
          "analysis": "放弃吞并集权，以宽厚自治换取边疆长久安宁。",
          "deltas": {
            "authority": -25,
            "radicalism": -15,
            "foreign": -20,
            "realpolitik": 0,
            "economy": -15
          }
        }
      ]
    },
    {
      "id": 11,
      "era": "拜占庭帝国 · 532年",
      "role": "【你的身份】：查士丁尼一世与狄奥多拉皇后",
      "title": "尼卡暴动：赛车党狂澜与君权生死",
      "desc": "君士坦丁堡赛车场的蓝党与绿党联合发动大起义，市民拥立新皇，皇宫已被团团包围，城内烈火焚天。大臣们哀求你立刻乘船流亡海外以保性命。",
      "options": [
        {
          "key": "A",
          "headline": "紫袍是最美丽的裹尸布：命贝利撒留率忠诚蛮族卫队血洗赛车场",
          "analysis": "以绝对铁腕暴力剿灭叛乱，维护神授君权绝不后退半步。",
          "deltas": {
            "authority": 35,
            "radicalism": 20,
            "foreign": 15,
            "realpolitik": 30,
            "economy": 20
          }
        },
        {
          "key": "B",
          "headline": "乘船退往色雷斯，宣布退位并召集全城元老重组立宪元老院",
          "analysis": "宁失王权亦不愿使帝国万民喋血街头，承认市民政治权利。",
          "deltas": {
            "authority": -35,
            "radicalism": -25,
            "foreign": -20,
            "realpolitik": -30,
            "economy": -25
          }
        },
        {
          "key": "C",
          "headline": "分化瓦解：派亲信携重金潜入赛车场收买蓝党首领，挑起蓝绿党内斗",
          "analysis": "高超阴谋与现实收买手腕，以金钱与信息差借力打力化解险境。",
          "deltas": {
            "authority": 15,
            "radicalism": 0,
            "foreign": 0,
            "realpolitik": 35,
            "economy": -5
          }
        },
        {
          "key": "D",
          "headline": "公开签署赦免免税令，接受市民提出的罢免贪腐大臣全部要求",
          "analysis": "向民众合理诉求妥协，退让求安稳渡过政权危机。",
          "deltas": {
            "authority": -15,
            "radicalism": -10,
            "foreign": -10,
            "realpolitik": -10,
            "economy": -20
          }
        }
      ]
    },
    {
      "id": 12,
      "era": "大唐贞观 · 626年",
      "role": "【你的身份】：唐太宗李世民，刚刚经历玄武门之变的新君",
      "title": "渭水之盟：突厥兵临城下的决断",
      "desc": "颉利可汗率突厥二十万铁骑深入关中，陈兵便桥，距长安仅四十里。长安兵力单薄、政局未稳。将领们有的主张闭关死守并准备焚城迁都，有的主张拼死背水一战。",
      "options": [
        {
          "key": "A",
          "headline": "单骑赴会：设空城疑兵，亲临便桥斥责颉利背约，倾尽府库金帛结渭水之盟",
          "analysis": "深谙兵者诡道，以极度隐忍的现实博弈换取休养生息时间。",
          "deltas": {
            "authority": 15,
            "radicalism": -15,
            "foreign": -15,
            "realpolitik": 35,
            "economy": 5
          }
        },
        {
          "key": "B",
          "headline": "玉石俱焚：动员长安城内全部男女老幼登城决一死战，绝不付一文岁币",
          "analysis": "将国家民族气节置于最高位，以尊严抗击蛮族入侵哪怕亡国。",
          "deltas": {
            "authority": 20,
            "radicalism": 25,
            "foreign": 30,
            "realpolitik": -30,
            "economy": -10
          }
        },
        {
          "key": "C",
          "headline": "迁都襄阳：坚壁清野诱敌深入，依靠南方财富与关隘打持久战",
          "analysis": "避其锐气求自保，退守南方重组政局。",
          "deltas": {
            "authority": -10,
            "radicalism": -20,
            "foreign": -25,
            "realpolitik": 10,
            "economy": -15
          }
        },
        {
          "key": "D",
          "headline": "策动突厥内部突利可汗倒戈，许以北方半数汗位分化其草原同盟",
          "analysis": "以夷制夷的高超地缘操纵术，从内部瓦解对手统一阵线。",
          "deltas": {
            "authority": 10,
            "radicalism": 10,
            "foreign": 15,
            "realpolitik": 30,
            "economy": 10
          }
        }
      ]
    },
    {
      "id": 13,
      "era": "伊斯兰帝国黄金时代 · 750年",
      "role": "【你的身份】：阿拔斯王朝哈里发阿布·阿拔斯",
      "title": "帝国定都巴格达与多民族包容",
      "desc": "推翻大马士革倭马亚家族后，老近卫军要求延续纯阿拉伯血统专权，严禁波斯人与突厥人参与军政；但东方改宗穆民（马瓦里）要求平权，帝国正处于分裂边缘。",
      "options": [
        {
          "key": "A",
          "headline": "迁都巴格达：破除血统垄断，大举任用波斯官僚，开启翻译运动与世界商贸",
          "analysis": "以开放包容普世主义重塑帝国，促进多元文化科学交融繁荣。",
          "deltas": {
            "authority": 10,
            "radicalism": 30,
            "foreign": 15,
            "realpolitik": 20,
            "economy": -10
          }
        },
        {
          "key": "B",
          "headline": "恪守阿拉伯至高血统：清洗波斯宰相家族（如巴尔马克家族），固化宗族圣战",
          "analysis": "维护部族本位纯洁性，以宗教原教旨维持核心统治圈层。",
          "deltas": {
            "authority": 25,
            "radicalism": -25,
            "foreign": 25,
            "realpolitik": -15,
            "economy": 20
          }
        },
        {
          "key": "C",
          "headline": "设立突厥奴隶军团（古拉姆）作为哈里发禁卫军，全面剥夺地方封建军权",
          "analysis": "打造无家族背景的职业官僚军事极权机器巩固皇权。",
          "deltas": {
            "authority": 35,
            "radicalism": 20,
            "foreign": 10,
            "realpolitik": 30,
            "economy": 25
          }
        },
        {
          "key": "D",
          "headline": "分封伊比利亚与北非独立酋长国，中央仅保留伊斯兰宗主名义",
          "analysis": "接受地缘分散事实，走去中心化的宗主联盟道路。",
          "deltas": {
            "authority": -30,
            "radicalism": -10,
            "foreign": -25,
            "realpolitik": 10,
            "economy": -25
          }
        }
      ]
    },
    {
      "id": 14,
      "era": "中世纪欧洲 · 1077年",
      "role": "【你的身份】：德意志国王亨利四世",
      "title": "卡诺莎之行：主教叙任权与世俗皇权博弈",
      "desc": "教皇格里高利七世宣布剥夺你的世俗主教任命权，并对你处以绝罚。德意志各大诸侯纷纷叛离，宣称若一年内无法解除教皇绝罚将废黜你的王位，天下诸侯虎视眈眈。",
      "options": [
        {
          "key": "A",
          "headline": "雪地跪伏三天三夜：以隐忍忏悔换取教皇撤销绝罚，回国即起兵扫灭封建叛党",
          "analysis": "深谙马基雅维利权谋之道，不惜抛下帝王尊严以破政治死局。",
          "deltas": {
            "authority": 20,
            "radicalism": 0,
            "foreign": 10,
            "realpolitik": 35,
            "economy": 10
          }
        },
        {
          "key": "B",
          "headline": "绝不低头：进军罗马废黜教皇，另立帝国支持的对立教皇，确立君权神授绝对化",
          "analysis": "以剑刃对抗神权，坚决捍卫国家世俗主权不容教会干涉。",
          "deltas": {
            "authority": 30,
            "radicalism": 30,
            "foreign": 25,
            "realpolitik": 15,
            "economy": 15
          }
        },
        {
          "key": "C",
          "headline": "彻底接受教皇《教皇敕令》：承认教会凌驾于世俗政权之上，做圣座忠诚骑士",
          "analysis": "恪守中世纪天主教普世神学秩序与道德虔敬。",
          "deltas": {
            "authority": -30,
            "radicalism": -25,
            "foreign": -25,
            "realpolitik": -35,
            "economy": -20
          }
        },
        {
          "key": "D",
          "headline": "与德意志大诸侯妥协分享权力，将直属采邑让渡以换取贵族联合对抗罗马",
          "analysis": "以封建分权换取国内抗衡神权干预的联合战线。",
          "deltas": {
            "authority": -25,
            "radicalism": -15,
            "foreign": 0,
            "realpolitik": 20,
            "economy": -25
          }
        }
      ]
    },
    {
      "id": 15,
      "era": "北宋熙宁 · 1069年",
      "role": "【你的身份】：王安石，宋神宗授命的参知政事（副相）",
      "title": "熙宁变法与天变不足畏",
      "desc": "三冗（冗官、冗兵、冗费）积弊压垮大宋财政，辽国与西夏重兵逼境。司马光与满朝元老谏官齐声反对青苗法与市易法，指责此乃“与民争利、破坏祖宗成法”，天灾频现更被指为天谴。",
      "options": [
        {
          "key": "A",
          "headline": "天变不足畏，祖宗不足法：强推市易青苗法与保甲制，统制全国经济命脉",
          "analysis": "以国家干预主义统合财政与国防，雷厉风行打破官僚贵族特权阻挠。",
          "deltas": {
            "authority": 30,
            "radicalism": 35,
            "foreign": 20,
            "realpolitik": 15,
            "economy": 35
          }
        },
        {
          "key": "B",
          "headline": "顺应天意祖制：罢黜新法，行黄老养民，严守士大夫与皇帝共天下之分权格局",
          "analysis": "尊重士绅共治与传统私产自治，反对国家过度干涉民间自由经济。",
          "deltas": {
            "authority": -25,
            "radicalism": -35,
            "foreign": -20,
            "realpolitik": -25,
            "economy": -30
          }
        },
        {
          "key": "C",
          "headline": "只裁冗员冗兵，暂缓开征商税与青苗借贷，专注于边境堡垒营建",
          "analysis": "稳健行政改良，重点防范财政硬伤而不触动深层社会生产关系。",
          "deltas": {
            "authority": 10,
            "radicalism": -10,
            "foreign": 5,
            "realpolitik": 20,
            "economy": 10
          }
        },
        {
          "key": "D",
          "headline": "放开全部矿冶与对外海贸专卖，以民间资本自发活力抵充岁入",
          "analysis": "相信重商主义与民间自由市场力量，藏富于民。",
          "deltas": {
            "authority": -20,
            "radicalism": 15,
            "foreign": 10,
            "realpolitik": 15,
            "economy": -35
          }
        }
      ]
    },
    {
      "id": 16,
      "era": "大元帝国 · 1260年",
      "role": "【你的身份】：忽必烈，开平自立的蒙古大汗",
      "title": "汉法集权与草原旧俗的汗统大决裂",
      "desc": "蒙哥汗死于钓鱼城，幼弟阿里不哥在哈拉和林被草原诸王拥立。传统蒙古王公坚决反对定居农耕文明，主张将中原良田化为牧场；而你身边的汉地士大夫力劝你建元称帝、行郡县汉制。",
      "options": [
        {
          "key": "A",
          "headline": "兼采汉法建元“大元”，定都燕京建立中央三省六部，击溃漠北保守宗王",
          "analysis": "融入定居帝国统治智慧，以大一统官僚集权体制替代落后部族军事民主。",
          "deltas": {
            "authority": 30,
            "radicalism": 25,
            "foreign": 20,
            "realpolitik": 25,
            "economy": 20
          }
        },
        {
          "key": "B",
          "headline": "回归和林：尊奉忽里勒台部族大会，保持蒙古游牧纯洁传统与劫掠自给",
          "analysis": "捍卫草原祖训与部族独立传统，拒绝被农耕儒家制度“同化”。",
          "deltas": {
            "authority": -15,
            "radicalism": -30,
            "foreign": 30,
            "realpolitik": -15,
            "economy": -10
          }
        },
        {
          "key": "C",
          "headline": "划江分治：只统治华北与草原，任由南宋偏安并收取巨额朝贡岁币",
          "analysis": "见好就收的地缘均势止损，避免陷入南方长期消耗战泥潭。",
          "deltas": {
            "authority": 5,
            "radicalism": -15,
            "foreign": -25,
            "realpolitik": 20,
            "economy": 10
          }
        },
        {
          "key": "D",
          "headline": "全面实行包税制与斡脱商人物质垄断，以商业中介代管财政",
          "analysis": "以纯粹商业金融联盟驱动帝国行政运作。",
          "deltas": {
            "authority": 10,
            "radicalism": 10,
            "foreign": 10,
            "realpolitik": 30,
            "economy": -20
          }
        }
      ]
    },
    {
      "id": 17,
      "era": "英格兰中世纪 · 1215年",
      "role": "【你的身份】：约翰王（无地王约翰）",
      "title": "兰尼米德草地与《大宪章》签署",
      "desc": "历经布汶战役惨败，海外领地丧失殆尽。全英国男爵与伦敦市民起义占领首都，在兰尼米德草地将一份包含63条条款的《大宪章》推到你面前，要求限制王权、不经议会同意不得征税。",
      "options": [
        {
          "key": "A",
          "headline": "签字画押认可《大宪章》：承认“王在法下”，开启法治与代议制宪政时代",
          "analysis": "在制度上接受封建契约与法律对王权的根本约束，奠定宪政自由基石。",
          "deltas": {
            "authority": -35,
            "radicalism": 25,
            "foreign": -15,
            "realpolitik": -20,
            "economy": -25
          }
        },
        {
          "key": "B",
          "headline": "暗修国书求助罗马教皇：让教皇宣布宪章非法无效，雇佣外国兵团血腥讨伐",
          "analysis": "誓死维护封建君主专制特权，不惜借助宗教神权与武力彻底碾碎叛逆。",
          "deltas": {
            "authority": 35,
            "radicalism": -20,
            "foreign": 15,
            "realpolitik": 35,
            "economy": 20
          }
        },
        {
          "key": "C",
          "headline": "私下与伦敦自治市商人结盟：单方面豁免商贸关税，挑拨商人与贵族内斗",
          "analysis": "运用商业阶层力量打破贵族垄断围攻，以利益分化现实破局。",
          "deltas": {
            "authority": 10,
            "radicalism": 10,
            "foreign": 0,
            "realpolitik": 30,
            "economy": -15
          }
        },
        {
          "key": "D",
          "headline": "放弃英格兰直辖领地，退往阿基坦等法国领地专心经营海外领地",
          "analysis": "规避本土宪政死斗，在海外封建领地保存家族实力。",
          "deltas": {
            "authority": -10,
            "radicalism": -15,
            "foreign": 10,
            "realpolitik": 10,
            "economy": -10
          }
        }
      ]
    },
    {
      "id": 18,
      "era": "大明洪武 · 1380年",
      "role": "【你的身份】：明太祖朱元璋",
      "title": "废丞相与胡惟庸案的皇权顶峰",
      "desc": "丞相胡惟庸专权擅宠，文官集团日渐做大，朝臣隐隐有架空君主之势。历代相权与皇权数千年博弈再次摆在你的案头。",
      "options": [
        {
          "key": "A",
          "headline": "废丞相罢中书省：诛杀胡党数万人，永不许立丞相，皇权直辖六部",
          "analysis": "将东方君主专制推向极致巅峰，彻底消除任何行政权制衡的隐患。",
          "deltas": {
            "authority": 40,
            "radicalism": 30,
            "foreign": 10,
            "realpolitik": 30,
            "economy": 30
          }
        },
        {
          "key": "B",
          "headline": "设贤相辅政监察：依《周礼》设宰相与御史台相互制约，不搞株连株杀",
          "analysis": "遵从儒家文官官僚共治理想，维护相权对皇权非理性的制度缓冲。",
          "deltas": {
            "authority": -25,
            "radicalism": -30,
            "foreign": -15,
            "realpolitik": -25,
            "economy": -20
          }
        },
        {
          "key": "C",
          "headline": "改设殿阁大学士协助批红，成立锦衣卫等特务直辖耳目密控群臣",
          "analysis": "以内廷秘书配合秘密特务警察维系统治，精细化管理官僚。",
          "deltas": {
            "authority": 35,
            "radicalism": 15,
            "foreign": 0,
            "realpolitik": 35,
            "economy": 20
          }
        },
        {
          "key": "D",
          "headline": "大封诸皇子为塞王：命燕王、晋王等分兵戍边，以宗室藩屏代替外臣集权",
          "analysis": "退守宗亲血缘羁绊，以家天下封建分权屏障中央安全。",
          "deltas": {
            "authority": -10,
            "radicalism": -10,
            "foreign": 15,
            "realpolitik": 15,
            "economy": 10
          }
        }
      ]
    },
    {
      "id": 19,
      "era": "中世纪中东 · 1187年",
      "role": "【你的身份】：萨拉丁，阿尤布王朝苏丹",
      "title": "收复耶路撒冷后的异教徒处置",
      "desc": "哈丁战役大捷，被十字军占领近百年的圣城耶路撒冷重回穆斯林手中。近卫军与宗教法官群情汹涌，要求按照近百年前十字军入城血洗全城之先例，屠尽城内所有基督徒以报血仇。",
      "options": [
        {
          "key": "A",
          "headline": "行骑士仁德：严禁屠杀抢掠，允许付微薄赎金自由离去，贫弱者全额由苏丹资助",
          "analysis": "将崇高的文明宽容与道德信仰立于仇恨之上，彰显大国君王的骑士风范。",
          "deltas": {
            "authority": -15,
            "radicalism": 25,
            "foreign": -20,
            "realpolitik": -35,
            "economy": -15
          }
        },
        {
          "key": "B",
          "headline": "以血还血：彻底屠尽城内全部圣殿骑士与医院骑士，捣毁圣墓大教堂",
          "analysis": "以原教旨主义圣战报复瓦解西方异教徒抵抗意志，树立军事恐怖威权。",
          "deltas": {
            "authority": 30,
            "radicalism": 15,
            "foreign": 30,
            "realpolitik": 25,
            "economy": 20
          }
        },
        {
          "key": "C",
          "headline": "扣押所有贵族与富商索取巨额黄金赎金，将穷人全部变卖为奴隶充实国库",
          "analysis": "完全以战利品收益与财政利益为导向的商业战争实用处置。",
          "deltas": {
            "authority": 20,
            "radicalism": -10,
            "foreign": 15,
            "realpolitik": 30,
            "economy": 25
          }
        },
        {
          "key": "D",
          "headline": "宣布圣城对三大宗教信徒完全开放朝圣，设立三方共管委员会",
          "analysis": "开创宗教多边宽容共治新典范，从源头消解圣战冲突根源。",
          "deltas": {
            "authority": -30,
            "radicalism": 35,
            "foreign": -30,
            "realpolitik": -20,
            "economy": -25
          }
        }
      ]
    },
    {
      "id": 20,
      "era": "日本战国 · 1582年",
      "role": "【你的身份】：丰臣秀吉，本能寺之变后主导局面的羽柴秀吉",
      "title": "清洲会议与天下统一的大统方略",
      "desc": "山崎之战斩杀明智光秀后，织田家臣团召开清洲会议。柴田胜家主张拥立成年皇子延续割据，大名各自独立自治；而天下大乱数百年，万民盼安，社会亟需彻底的制度重构。",
      "options": [
        {
          "key": "A",
          "headline": "颁布太阁检地与刀狩令：彻底兵农分离，收缴民间武器，建立中央大一统体制",
          "analysis": "以铁腕扫平地方封建武士自治土壤，建立高度集中的近世中央政权。",
          "deltas": {
            "authority": 35,
            "radicalism": 30,
            "foreign": 20,
            "realpolitik": 30,
            "economy": 30
          }
        },
        {
          "key": "B",
          "headline": "拥立织田三法师做名义主公，退回播磨领地恪守家臣本分",
          "analysis": "恪守封建忠义纲常伦理，宁守臣节亦不图染指天下重器。",
          "deltas": {
            "authority": -25,
            "radicalism": -35,
            "foreign": -20,
            "realpolitik": -30,
            "economy": -20
          }
        },
        {
          "key": "C",
          "headline": "大举开展对外征伐：以朝鲜与明帝国为目标，将各路大名野心宣泄于海外",
          "analysis": "以无限对外军事冒险消化国内过剩武士力量，转移国内矛盾。",
          "deltas": {
            "authority": 25,
            "radicalism": 20,
            "foreign": 40,
            "realpolitik": 25,
            "economy": 20
          }
        },
        {
          "key": "D",
          "headline": "与德川家康等强藩妥协建立大名评议会，实行地方联邦均势",
          "analysis": "承认实力派现实地盘，走温和封建共治盟主之路。",
          "deltas": {
            "authority": -15,
            "radicalism": -15,
            "foreign": -10,
            "realpolitik": 20,
            "economy": -15
          }
        }
      ]
    },
    {
      "id": 21,
      "era": "英国革命 · 1649年",
      "role": "【你的身份】：奥利弗·克伦威尔，新模范军统帅",
      "title": "查理一世的处决与护国公专政",
      "desc": "国王查理一世再次战败沦为阶下囚。议会长老派主张妥协保留王位；军队平等派要求普选权与均产；而你深知一旦保留国王，反扑复辟的内战流血将永无止境。",
      "options": [
        {
          "key": "A",
          "headline": "断头台审判：以叛国罪处死查理一世，驱散普莱德议会，就任终身护国公独裁",
          "analysis": "以军人清教徒铁腕斩断君权神授幻想，不惜实行战时军事专政维护革命成果。",
          "deltas": {
            "authority": 35,
            "radicalism": 35,
            "foreign": 20,
            "realpolitik": 30,
            "economy": 15
          }
        },
        {
          "key": "B",
          "headline": "与国王达成妥协：推行君主立宪制，国王统而不治，保留上议院与传统习惯法",
          "analysis": "遵从英国传统普通法渐进改良智慧，避免激进流血与军事独裁怪圈。",
          "deltas": {
            "authority": -25,
            "radicalism": -25,
            "foreign": -15,
            "realpolitik": 15,
            "economy": -20
          }
        },
        {
          "key": "C",
          "headline": "采纳掘地派与平等派诉求：开放全民普选权，公社化开垦荒地平分粮食",
          "analysis": "彻底走向激进民权与早期社会主义乌托邦实践。",
          "deltas": {
            "authority": -20,
            "radicalism": 40,
            "foreign": -20,
            "realpolitik": -30,
            "economy": 35
          }
        },
        {
          "key": "D",
          "headline": "颁布《航海条例》向荷兰宣战，利用海洋争霸和海外贸易转移国内教派纷争",
          "analysis": "以重商主义海洋帝国战略凝聚国内各阶级利益。",
          "deltas": {
            "authority": 20,
            "radicalism": 10,
            "foreign": 35,
            "realpolitik": 30,
            "economy": 25
          }
        }
      ]
    },
    {
      "id": 22,
      "era": "俄罗斯帝国 · 1703年",
      "role": "【你的身份】：彼得大帝",
      "title": "欧化改革与圣彼得堡的泥沼筑城",
      "desc": "俄国落后闭塞，缺乏出海口。你在芬兰湾的泥泞荒原上强行征集数十万农奴营建新都圣彼得堡，并下令强行剪去贵族大胡子、废除传统大教长。教会与老贵族诅咒你是“反基督降临”。",
      "options": [
        {
          "key": "A",
          "headline": "铁腕西化：设立官秩表，废黜宗主教，以国家专制暴力强行拖拽俄国步入近代",
          "analysis": "开明专制极峰：为打破文明愚昧与落后，不惜采取一切冷酷的专制手段。",
          "deltas": {
            "authority": 35,
            "radicalism": 35,
            "foreign": 30,
            "realpolitik": 30,
            "economy": 30
          }
        },
        {
          "key": "B",
          "headline": "尊重东正教传统：停止圣彼得堡建都，退守莫斯科克里姆林宫，顺应斯拉夫旧俗",
          "analysis": "守望斯拉夫本位文化独特性与宗教神圣传统，拒绝盲目崇洋。",
          "deltas": {
            "authority": -15,
            "radicalism": -35,
            "foreign": -25,
            "realpolitik": -25,
            "economy": -15
          }
        },
        {
          "key": "C",
          "headline": "仅引进西欧造船与火器技术，严格封锁西方政治启蒙思想渗入国内",
          "analysis": "中体西用式实用主义：只要坚船利炮，不要西方法政。",
          "deltas": {
            "authority": 25,
            "radicalism": -10,
            "foreign": 20,
            "realpolitik": 25,
            "economy": 15
          }
        },
        {
          "key": "D",
          "headline": "宣布废除农奴制：让千万农奴获得人身自由与私产，以自由劳动力兴办工厂",
          "analysis": "从根基上解放人身依附，走自下而上的自由资本主义现代化道路。",
          "deltas": {
            "authority": -30,
            "radicalism": 40,
            "foreign": -10,
            "realpolitik": -20,
            "economy": -35
          }
        }
      ]
    },
    {
      "id": 23,
      "era": "美国制宪 · 1787年",
      "role": "【你的身份】：乔治·华盛顿，制宪会议主席",
      "title": "强力联邦与各州自治权力的争鸣",
      "desc": "旧邦联条例下中央政府无征税权与常备军，各州贸易战与债务暴动（如谢斯起义）频发。大州代表要求建立按人口代表的强权中央，小州代表则威胁退出并重返各自独立。",
      "options": [
        {
          "key": "A",
          "headline": "主持康涅狄格大妥协：参议院各州平等，众议院按人头，设立宪政分权",
          "analysis": "捍卫古典共和制衡与法治精神，在现实妥协中奠定长治久安制度基石。",
          "deltas": {
            "authority": -15,
            "radicalism": -10,
            "foreign": -20,
            "realpolitik": -15,
            "economy": -15
          }
        },
        {
          "key": "B",
          "headline": "建立无上中央集权政府，废止州长直选，统一征税与终身总统制",
          "analysis": "彻底粉碎松散邦联，以中央集权确保国家在残酷列强竞争中生存。",
          "deltas": {
            "authority": 30,
            "radicalism": 25,
            "foreign": 15,
            "realpolitik": 15,
            "economy": 20
          }
        },
        {
          "key": "C",
          "headline": "保留各州绝对主权，中央仅作关税同盟，严禁设立全国性中央银行",
          "analysis": "信奉激进的农业地方自治与自然权利，警惕任何国家机器异化。",
          "deltas": {
            "authority": -35,
            "radicalism": -20,
            "foreign": -30,
            "realpolitik": -25,
            "economy": -30
          }
        },
        {
          "key": "D",
          "headline": "强化联邦军队与财政部行政权力，由精英阶层代管金融与工商业",
          "analysis": "以国家重商主义推动工业化与国家信贷信用重塑。",
          "deltas": {
            "authority": 20,
            "radicalism": 10,
            "foreign": 5,
            "realpolitik": 20,
            "economy": 25
          }
        }
      ]
    },
    {
      "id": 24,
      "era": "法国大革命 · 1794年",
      "role": "【你的身份】：马克西米连·罗伯斯庇尔，救国委员会领袖",
      "title": "美德共和国与雅各宾恐怖统治的极限",
      "desc": "反法同盟兵临城下，旺代叛乱未息，国内投机商囤积居奇、物价飞涨。激进埃贝尔派要求更严厉的流血清洗，温和丹东派则疾呼宽容与结束断头台恐怖。",
      "options": [
        {
          "key": "A",
          "headline": "美德若无恐怖则无力：全面实施全面限价令并处决丹东与埃贝尔两翼",
          "analysis": "为了崇高的平民平等理想与革命生存，不惜以专政铁腕碾碎一切妥协。",
          "deltas": {
            "authority": 35,
            "radicalism": 35,
            "foreign": 10,
            "realpolitik": -30,
            "economy": 35
          }
        },
        {
          "key": "B",
          "headline": "采纳丹东建议：释放政治嫌犯，恢复言论自由与市场自由贸易",
          "analysis": "退出紧急独裁状态，让国家回归宪政与法治温和轨道。",
          "deltas": {
            "authority": -25,
            "radicalism": -25,
            "foreign": -15,
            "realpolitik": 15,
            "economy": -25
          }
        },
        {
          "key": "C",
          "headline": "军队全面接管巴黎：宣布军法管制，将革命热情转化为对外全面征服",
          "analysis": "摆脱意识形态清算泥潭，建立军人寡头秩序输出革命。",
          "deltas": {
            "authority": 30,
            "radicalism": 15,
            "foreign": 35,
            "realpolitik": 30,
            "economy": 10
          }
        },
        {
          "key": "D",
          "headline": "退居议会二线，推动最高主宰教全民公投以凝聚宗教共识",
          "analysis": "寄希望于道德重构与精神教化化解撕裂。",
          "deltas": {
            "authority": -10,
            "radicalism": 0,
            "foreign": -10,
            "realpolitik": -25,
            "economy": 0
          }
        }
      ]
    },
    {
      "id": 25,
      "era": "法兰西第一帝国 · 1804年",
      "role": "【你的身份】：拿破仑·波拿巴",
      "title": "巴黎圣母院加冕称帝与《法国民法典》",
      "desc": "雾月政变后你平定内乱、击溃第二次反法同盟。元老院与保皇党敦促你加冕为世袭皇帝稳定秩序，但共和派将军指责你背叛了革命与自由原则。",
      "options": [
        {
          "key": "A",
          "headline": "加冕称帝，颁布《民法典》：确立民事平等与私产原则，用帝国强权捍卫革命成果",
          "analysis": "以开明专制建立最高效率的国家机器，以法治与军功重塑欧洲秩序。",
          "deltas": {
            "authority": 35,
            "radicalism": 25,
            "foreign": 35,
            "realpolitik": 25,
            "economy": 15
          }
        },
        {
          "key": "B",
          "headline": "固守共和国：拒绝帝冕，辞去终身执政，将最高立法权力归还国民议会",
          "analysis": "恪守古典共和道德与权力制衡底线，拒绝任何形式的僭主独裁。",
          "deltas": {
            "authority": -30,
            "radicalism": -20,
            "foreign": -25,
            "realpolitik": -25,
            "economy": -20
          }
        },
        {
          "key": "C",
          "headline": "实施全欧“大陆封锁令”：切断英国贸易，以国家统制垄断欧陆海关",
          "analysis": "以总体经济战与帝国统制扼杀对手，全面服务地缘争霸。",
          "deltas": {
            "authority": 25,
            "radicalism": 15,
            "foreign": 35,
            "realpolitik": 30,
            "economy": 35
          }
        },
        {
          "key": "D",
          "headline": "恢复波旁王室虚位君主立宪，由自己出任终身首相统揽实权",
          "analysis": "在传统合法性与个人军政实权间寻找折中妥协之道。",
          "deltas": {
            "authority": 15,
            "radicalism": -15,
            "foreign": 10,
            "realpolitik": 35,
            "economy": 0
          }
        }
      ]
    },
    {
      "id": 26,
      "era": "大清康熙朝 · 1683年",
      "role": "【你的身份】：康熙帝与水师提督施琅",
      "title": "澎湖海战后台湾的“弃留之争”",
      "desc": "施琅攻克澎湖，郑克塽纳土归降。朝中多位重臣认为“台湾孤悬海外，乃弹丸之地，得之不足以广中国，不得不足以亏中国”，主张放弃台湾、将百姓迁回大陆。",
      "options": [
        {
          "key": "A",
          "headline": "坚决留台：设台湾府隶属福建，派水陆大军常驻，筑城屯垦严防外夷",
          "analysis": "高瞻远瞩的海防主权意识，深知台湾乃江浙闽粤四省天然门户屏障。",
          "deltas": {
            "authority": 25,
            "radicalism": 15,
            "foreign": 25,
            "realpolitik": 20,
            "economy": 15
          }
        },
        {
          "key": "B",
          "headline": "采纳弃地议：迁民回内地，将岛屿尽数废弃，强化内陆闭关锁国海禁",
          "analysis": "固守传统大陆农耕自足思维，视海洋防守为财政无底洞包袱。",
          "deltas": {
            "authority": 10,
            "radicalism": -30,
            "foreign": -35,
            "realpolitik": -20,
            "economy": 20
          }
        },
        {
          "key": "C",
          "headline": "租借给荷兰或西方东印度公司换取巨额关税，免除清廷驻军兵饷开支",
          "analysis": "以商业利益和转让地盘换取免除防务包袱的极端功利主义抉择。",
          "deltas": {
            "authority": -20,
            "radicalism": 20,
            "foreign": -10,
            "realpolitik": 35,
            "economy": -25
          }
        },
        {
          "key": "D",
          "headline": "设为朝贡自治藩属，不派八旗官吏，由原郑氏旧将代为自治管理",
          "analysis": "封建藩属自治传统，低成本维持名义天朝宗主权。",
          "deltas": {
            "authority": -25,
            "radicalism": -10,
            "foreign": -15,
            "realpolitik": 10,
            "economy": -20
          }
        }
      ]
    },
    {
      "id": 27,
      "era": "拉美独立解放 · 1826年",
      "role": "【你的身份】：西蒙·玻利瓦尔，南美解放者",
      "title": "大哥伦比亚联盟与独裁总统制的争议",
      "desc": "西属南美彻底解放，但大哥伦比亚联邦内部地方主义抬头，委内瑞拉与厄瓜多尔军阀互不相让。你提倡设立终身总统制以维系大一统，被反对派痛斥为野心勃勃的独裁僭主。",
      "options": [
        {
          "key": "A",
          "headline": "铁腕推行终身总统制与中央统辖，以绝对军政权威维系泛南美大统一",
          "analysis": "深感拉美民智未开与军阀割据之险，宁担独裁骂名亦要保全大一统力量。",
          "deltas": {
            "authority": 35,
            "radicalism": 20,
            "foreign": 20,
            "realpolitik": 25,
            "economy": 20
          }
        },
        {
          "key": "B",
          "headline": "顺应地方自决：辞去一切职务流亡海外，任由各国各自建国实行松散联邦",
          "analysis": "尊重地方共和自决与分权传统，拒绝将个人意志凌驾于法律之上。",
          "deltas": {
            "authority": -35,
            "radicalism": -15,
            "foreign": -25,
            "realpolitik": -30,
            "economy": -25
          }
        },
        {
          "key": "C",
          "headline": "寻求英国建立保护国关系，出让关税与采矿权以换取皇家海军军力维和",
          "analysis": "引外力以制内乱，依靠列强金融与秩序维系统治稳定。",
          "deltas": {
            "authority": 10,
            "radicalism": -10,
            "foreign": 15,
            "realpolitik": 30,
            "economy": -15
          }
        },
        {
          "key": "D",
          "headline": "召开泛美大陆联盟峰会，仅建立类似国际联盟的争端仲裁公署",
          "analysis": "走多边国际法制协调道路，维持主权独立下的互不侵犯。",
          "deltas": {
            "authority": -25,
            "radicalism": 10,
            "foreign": -15,
            "realpolitik": -10,
            "economy": -20
          }
        }
      ]
    },
    {
      "id": 28,
      "era": "启蒙专制 · 1770年代",
      "role": "【你的身份】：腓特烈大帝，普鲁士国王",
      "title": "开明君主法治与容克贵族特权之界",
      "desc": "伏尔泰的启蒙思潮风靡欧洲，你视自己为“国家的第一公仆”。然而在普鲁士，支持军队骨干的容克贵族坚决反对解放农奴与普征地税，威胁一旦侵犯其特权将拒绝带兵参战。",
      "options": [
        {
          "key": "A",
          "headline": "渐进改良：编纂《普鲁士普通邦法》，禁止虐待农奴，维护容克军职垄断",
          "analysis": "典型开明专制：在确保军国主义核心战斗力前提下推行审慎法制现代化。",
          "deltas": {
            "authority": 20,
            "radicalism": -10,
            "foreign": 15,
            "realpolitik": 30,
            "economy": 15
          }
        },
        {
          "key": "B",
          "headline": "激进破旧：彻底废除农奴制并没收容克免税特权，全面普及全民义务教育",
          "analysis": "以启蒙理性彻底重构社会阶层，不惜与旧军事实力派决裂。",
          "deltas": {
            "authority": 10,
            "radicalism": 35,
            "foreign": -10,
            "realpolitik": -20,
            "economy": 25
          }
        },
        {
          "key": "C",
          "headline": "对外瓜分波兰：将国内军功贵族目光转向东方领土扩张，掠夺新土地赏赐容克",
          "analysis": "用对外领土扩张红利调和国内尖锐矛盾的经典现实政治手腕。",
          "deltas": {
            "authority": 25,
            "radicalism": 10,
            "foreign": 35,
            "realpolitik": 35,
            "economy": 20
          }
        },
        {
          "key": "D",
          "headline": "全面放开对外自由贸易与犹太金融家信贷，走自由工商业重商道路",
          "analysis": "以资本金融力量冲击传统土地贵族根基，藏富于商。",
          "deltas": {
            "authority": -15,
            "radicalism": 20,
            "foreign": 5,
            "realpolitik": 20,
            "economy": -30
          }
        }
      ]
    },
    {
      "id": 29,
      "era": "日本明治维新 · 1871年",
      "role": "【你的身份】：大久保利通与木户孝允，明治维新核心巨头",
      "title": "废藩置县与四民平等生死关",
      "desc": "王政复古后，萨摩、长州等旧强藩依然拥兵自重，藩主视领地为私产。要建立近代国民国家，必须彻底剥夺大名封建领地与武士特权。西乡隆盛警告此举极可能引发全日本武士大暴动。",
      "options": [
        {
          "key": "A",
          "headline": "断然废藩置县：调集御亲兵威慑，彻底废除武士俸禄，设立中央直属府县",
          "analysis": "以无畏气魄摧毁千年封建割据，建立高度中央集权的现代化近代民族国家。",
          "deltas": {
            "authority": 35,
            "radicalism": 35,
            "foreign": 15,
            "realpolitik": 25,
            "economy": 25
          }
        },
        {
          "key": "B",
          "headline": "维持藩国自治：保留大名治理权与武士佩刀特权，中央仅统管外交与关税",
          "analysis": "选择妥协退让的封建渐进道路，避免过早激起内战兵燹。",
          "deltas": {
            "authority": -30,
            "radicalism": -30,
            "foreign": -20,
            "realpolitik": -20,
            "economy": -25
          }
        },
        {
          "key": "C",
          "headline": "征韩论策：立即组织失业武士渡海征讨朝鲜，以海外征服消化武士不满",
          "analysis": "以军国主义对外扩张转移国内下层武士生存危机。",
          "deltas": {
            "authority": 20,
            "radicalism": 15,
            "foreign": 35,
            "realpolitik": 25,
            "economy": 15
          }
        },
        {
          "key": "D",
          "headline": "以国家公债赎买武士俸禄，引导武士阶层投资近代缫丝、铁道与银行",
          "analysis": "运用金融公债与市场化手段温和赎买化解封建特权。",
          "deltas": {
            "authority": 10,
            "radicalism": 15,
            "foreign": 0,
            "realpolitik": 30,
            "economy": -10
          }
        }
      ]
    },
    {
      "id": 30,
      "era": "德意志统一 · 1866年",
      "role": "【你的身份】：奥托·冯·俾斯麦，普鲁士首相",
      "title": "萨多瓦大胜后是否进军维也纳",
      "desc": "普奥战争中普军主力在萨多瓦摧枯拉朽击溃奥地利军。威廉一世与参谋长毛奇等将帅群情亢奋，坚持要乘胜进军维也纳举行胜利阅兵并瓜分奥地利领土。",
      "options": [
        {
          "key": "A",
          "headline": "坚决力阻国王：拒绝割占奥地利寸土，缔结宽大和约以孤立法国",
          "analysis": "教科书级现实政治：深知奥地利为欧洲地缘均势支柱，绝不结死仇。",
          "deltas": {
            "authority": 10,
            "radicalism": -20,
            "foreign": 5,
            "realpolitik": 35,
            "economy": 5
          }
        },
        {
          "key": "B",
          "headline": "顺从军方意志攻占维也纳，合并德意志奥地利省份，完成大德意志大一统",
          "analysis": "顺应狂热泛日耳曼民族主义浪潮，以彻底战争打破中欧均势格局。",
          "deltas": {
            "authority": 25,
            "radicalism": 25,
            "foreign": 35,
            "realpolitik": -15,
            "economy": 15
          }
        },
        {
          "key": "C",
          "headline": "乘胜策动匈牙利与斯拉夫各族从奥匈内部独立，彻底解体哈布斯堡",
          "analysis": "以彻底激进地缘重构彻底消除南部竞争者威胁。",
          "deltas": {
            "authority": 15,
            "radicalism": 30,
            "foreign": 25,
            "realpolitik": 25,
            "economy": 0
          }
        },
        {
          "key": "D",
          "headline": "交由欧洲列强召开四国和会调停，换取英国对北德联邦合法性的承认",
          "analysis": "依托多边国际协调框架维护欧洲传统合法性秩序。",
          "deltas": {
            "authority": -15,
            "radicalism": -25,
            "foreign": -20,
            "realpolitik": -10,
            "economy": -10
          }
        }
      ]
    },
    {
      "id": 31,
      "era": "美国内战 · 1862年",
      "role": "【你的身份】：亚伯拉罕·林肯，美利坚合众国总统",
      "title": "安提塔姆战役后的《解放黑奴宣言》抉择",
      "desc": "内战旷日持久，北军伤亡惨重。保全联邦是宪法最高宗旨，但边境蓄奴州警告：一旦宣布废奴，他们将立即倒向南方叛军；而激进共和党人则斥责妥协是道德耻辱。",
      "options": [
        {
          "key": "A",
          "headline": "签发《解放黑奴宣言》：将战争升华为废除奴隶制的正义道德十字军",
          "analysis": "以坚定宪政道德原则争取欧洲民意支持，瓦解南方种植园经济根基。",
          "deltas": {
            "authority": 20,
            "radicalism": 25,
            "foreign": 0,
            "realpolitik": 15,
            "economy": 15
          }
        },
        {
          "key": "B",
          "headline": "搁置废奴主张：承诺保留现有奴隶制，只要南方各州无条件重返联邦",
          "analysis": "保全宪政统一高于一切伦理诉求，哪怕向罪恶旧建制低头妥协。",
          "deltas": {
            "authority": 10,
            "radicalism": -25,
            "foreign": -10,
            "realpolitik": 25,
            "economy": -10
          }
        },
        {
          "key": "C",
          "headline": "提出赎买补偿方案：由联邦出资购买黑奴并组织移民西非或拉美",
          "analysis": "尝试以温和赎买与渐进分流缓解白人与黑人族群激烈冲突。",
          "deltas": {
            "authority": 0,
            "radicalism": -15,
            "foreign": -15,
            "realpolitik": 5,
            "economy": 10
          }
        },
        {
          "key": "D",
          "headline": "同意停火划界：承认南部联盟独立，建立北美南北双雄并立均势",
          "analysis": "承认现实分裂，放弃流血强求统一。",
          "deltas": {
            "authority": -30,
            "radicalism": -10,
            "foreign": -25,
            "realpolitik": -20,
            "economy": -25
          }
        }
      ]
    },
    {
      "id": 32,
      "era": "同治中兴 · 1874年",
      "role": "【你的身份】：军机重臣，面对日本侵台与阿古柏侵占新疆",
      "title": "海防与塞防之大争辩",
      "desc": "清廷岁入拮据，国库仅能全力保障一端。李鸿章力主“海防优先”，停撤西征饷银全力建设北洋水师；左宗棠力主“塞防不可废”，直言“重新疆所以保蒙古，保蒙古所以卫京师”。",
      "options": [
        {
          "key": "A",
          "headline": "采纳左宗棠塞防策：抬棺出关克复新疆，借外债整军西征确保疆土完整",
          "analysis": "寸土不让的国家主权与地缘意志，哪怕耗尽库银亦不弃故土。",
          "deltas": {
            "authority": 25,
            "radicalism": 15,
            "foreign": 25,
            "realpolitik": 15,
            "economy": 20
          }
        },
        {
          "key": "B",
          "headline": "采纳李鸿章海防策：移塞防经费专办沿海铁甲舰与机器制造局",
          "analysis": "正视西洋近代化坚船利炮致命威胁，集中有限资源实现海军工业化突破。",
          "deltas": {
            "authority": 15,
            "radicalism": 10,
            "foreign": 10,
            "realpolitik": 25,
            "economy": 25
          }
        },
        {
          "key": "C",
          "headline": "两皆弃置：停建水师撤销西征，全额削减洋务支出以抚恤天下穷苦农人",
          "analysis": "传统儒家仁政理想，排斥近代化军工扩张，固守农耕天下太平。",
          "deltas": {
            "authority": -20,
            "radicalism": -35,
            "foreign": -35,
            "realpolitik": -30,
            "economy": -25
          }
        },
        {
          "key": "D",
          "headline": "海塞并举：开放外商采矿设厂与金融特许权，以出让经济利益换借巨资",
          "analysis": "打破闭关自守思维，以激进资本开放与国际借贷破局双重危机。",
          "deltas": {
            "authority": -10,
            "radicalism": 25,
            "foreign": 0,
            "realpolitik": 20,
            "economy": -15
          }
        }
      ]
    },
    {
      "id": 33,
      "era": "俄国大革命 · 1917年",
      "role": "【你的身份】：弗拉基米尔·列宁，布尔什维克领袖",
      "title": "从《四月提纲》到布列斯特和约",
      "desc": "二月革命后临时政府坚持进行一战帝国主义战争，前线溃败，彼得格勒工人饥寒交迫。德军兵临城下要求割地赔款，布哈林等党内同志主张打“革命圣战”，托洛茨基提出“不战不和”。",
      "options": [
        {
          "key": "A",
          "headline": "签署《布列斯特和约》：哪怕割让数百万平方公里土地，也要保住苏维埃政权火种",
          "analysis": "彻底的唯物辩证现实主义：以空间换时间，政权生存高于一切领土名分。",
          "deltas": {
            "authority": 30,
            "radicalism": 35,
            "foreign": -25,
            "realpolitik": 35,
            "economy": 35
          }
        },
        {
          "key": "B",
          "headline": "采纳布哈林革命战策：动员赤卫军与德帝国决一死战，催化全欧洲无产阶级革命",
          "analysis": "信奉原教旨国际主义理想，为世界革命甘愿押上民族一切赌注。",
          "deltas": {
            "authority": 25,
            "radicalism": 40,
            "foreign": 30,
            "realpolitik": -35,
            "economy": 35
          }
        },
        {
          "key": "C",
          "headline": "与临时政府及立宪会议妥协，组建包括孟什维克在内的全社会主义联合内阁",
          "analysis": "选择代议民主框架，放弃暴力先锋队一党独揽大权。",
          "deltas": {
            "authority": -30,
            "radicalism": -25,
            "foreign": -10,
            "realpolitik": -15,
            "economy": 10
          }
        },
        {
          "key": "D",
          "headline": "恢复自由粮食贸易与私有农庄，放弃战时共产主义征粮制",
          "analysis": "提前转向新经济政策，以市场机制安抚千万小农。",
          "deltas": {
            "authority": -10,
            "radicalism": -15,
            "foreign": -15,
            "realpolitik": 25,
            "economy": -30
          }
        }
      ]
    },
    {
      "id": 34,
      "era": "墨西哥革命 · 1915年",
      "role": "【你的身份】：埃米利亚诺·萨帕塔，南方解放军总司令",
      "title": "土地与自由的阿亚拉纲领抉择",
      "desc": "推翻迪亚斯独裁后，以卡兰萨为首的北方立宪派占据墨西哥城，主张维护大庄园私产权并建立欧美式自由宪政；而你的南方农民誓死要求立即无偿没收地主庄园并平分土地。",
      "options": [
        {
          "key": "A",
          "headline": "宁死不退：坚守《阿亚拉纲领》，土地彻底归村社公有，血战立宪派到底",
          "analysis": "平民主义与原生态土地公有制的殉道者，拒绝向买办精英妥协。",
          "deltas": {
            "authority": -10,
            "radicalism": 35,
            "foreign": -20,
            "realpolitik": -30,
            "economy": 35
          }
        },
        {
          "key": "B",
          "headline": "接受立宪派整编：交出武器换取在1917年宪法中写入劳动与土地保护条款",
          "analysis": "在资产阶级宪法框架内争取最大的合法工人农民权益。",
          "deltas": {
            "authority": 10,
            "radicalism": 5,
            "foreign": 0,
            "realpolitik": 20,
            "economy": 10
          }
        },
        {
          "key": "C",
          "headline": "与美国石油资本巨头结盟，借美军干预换取南方实际自治割据",
          "analysis": "引狼入室的军阀割据现实主义，出卖主权换取一隅自保。",
          "deltas": {
            "authority": 15,
            "radicalism": -15,
            "foreign": 10,
            "realpolitik": 35,
            "economy": -20
          }
        },
        {
          "key": "D",
          "headline": "建立南方军事独裁委员会，强制推行军事集体农庄与全民皆兵",
          "analysis": "走向战时农业极权，以铁腕纪律对抗外敌。",
          "deltas": {
            "authority": 35,
            "radicalism": 25,
            "foreign": 15,
            "realpolitik": 25,
            "economy": 35
          }
        }
      ]
    },
    {
      "id": 35,
      "era": "土耳其现代建国 · 1923年",
      "role": "【你的身份】：穆斯塔法·凯末尔·阿塔图尔克",
      "title": "废除哈里发国与彻底世俗化革命",
      "desc": "独立战争将希腊侵略军赶入大海，奥斯曼帝国寿终正寝。宗教狂热派与传统伊玛目强烈要求保留哈里发作为伊斯兰世界精神领袖，警告废黜哈里发必将引起全国穆斯林叛乱。",
      "options": [
        {
          "key": "A",
          "headline": "彻底世俗化：废除哈里发与宗教法庭，改用拉丁字母，禁止戴土耳其毯帽",
          "analysis": "以绝对铁腕斩断宗教与国家脐带，全方位激进西化融入现代文明。",
          "deltas": {
            "authority": 35,
            "radicalism": 40,
            "foreign": 0,
            "realpolitik": 25,
            "economy": 20
          }
        },
        {
          "key": "B",
          "headline": "保留哈里发虚位：政教分离但保留国教地位，温和尊重国民宗教情感",
          "analysis": "兼顾传统宗教信仰与现代代议制，避免社会急剧撕裂震荡。",
          "deltas": {
            "authority": -15,
            "radicalism": -25,
            "foreign": -15,
            "realpolitik": 15,
            "economy": -10
          }
        },
        {
          "key": "C",
          "headline": "泛突厥主义扩张：利用哈里发号召力向中亚突厥诸国挺进，建立中亚大帝国",
          "analysis": "拥抱激进民族主义地缘争霸，寻求大帝国扩张虚荣。",
          "deltas": {
            "authority": 25,
            "radicalism": 20,
            "foreign": 40,
            "realpolitik": -10,
            "economy": 15
          }
        },
        {
          "key": "D",
          "headline": "实行多党自由竞选与经济全面私有化，不以政令干预社会习俗",
          "analysis": "信奉古典自由主义与社会自发秩序，排斥国家强制教化。",
          "deltas": {
            "authority": -35,
            "radicalism": -10,
            "foreign": -20,
            "realpolitik": -20,
            "economy": -35
          }
        }
      ]
    },
    {
      "id": 36,
      "era": "大萧条危机 · 1933年",
      "role": "【你的身份】：富兰克林·罗斯福，临危受命的新任美国总统",
      "title": "百日新政与国家干预的界碑",
      "desc": "全美四分之一人口失业，数千家银行倒闭挤兑，工业生产腰斩。保守派法官与财阀指责任何政府救济皆是违宪与赤化，底层民众甚至喊出激进革命口号。",
      "options": [
        {
          "key": "A",
          "headline": "全面实施新政：颁布紧急银行法、成立以工代赈局与田纳西管理局(TVA)",
          "analysis": "以国家统筹干预修正自由市场失灵，构筑现代福利国家与中央行政权。",
          "deltas": {
            "authority": 25,
            "radicalism": 25,
            "foreign": 5,
            "realpolitik": 20,
            "economy": 35
          }
        },
        {
          "key": "B",
          "headline": "恪守自由放任：严守金本位与预算平衡，任由市场机制出清破产机构",
          "analysis": "捍卫宪法对私产保护与古典自由主义经济原则，抵制行政权膨胀扩张。",
          "deltas": {
            "authority": -25,
            "radicalism": -25,
            "foreign": -15,
            "realpolitik": -20,
            "economy": -35
          }
        },
        {
          "key": "C",
          "headline": "产业全面国有化：宣布铁路、电力、矿山归联邦所有，强制工农参政",
          "analysis": "激进社会重组，直接向社会主义公有制模式靠拢。",
          "deltas": {
            "authority": 35,
            "radicalism": 35,
            "foreign": 0,
            "realpolitik": 10,
            "economy": 40
          }
        },
        {
          "key": "D",
          "headline": "大幅提高进口关税保护国内工商业，并严禁海外借款与介入欧洲",
          "analysis": "退守经济民族主义与绝对美洲孤立主义城池。",
          "deltas": {
            "authority": 10,
            "radicalism": -10,
            "foreign": -30,
            "realpolitik": 15,
            "economy": 15
          }
        }
      ]
    },
    {
      "id": 37,
      "era": "二战危急关头 · 1940年",
      "role": "【你的身份】：温斯顿·丘吉尔，新任英国战时首相",
      "title": "敦刻尔克撤退后的抵抗抑或求和",
      "desc": "法国溃败投降在即，远征军丢盔弃甲退回英伦。内阁外交大臣哈利法克斯勋爵极力建议通过墨索里尼斡旋，与希特勒举行秘密和平谈判，以保留大英帝国海外殖民地。",
      "options": [
        {
          "key": "A",
          "headline": "绝不屈服：“我们将在海滩作战，我们决不投降”，誓死抗争到底",
          "analysis": "将整个民族意志凝聚为不惜粉身碎骨的抗战灯塔，誓死保卫西方文明自由。",
          "deltas": {
            "authority": 20,
            "radicalism": 10,
            "foreign": 25,
            "realpolitik": -15,
            "economy": 15
          }
        },
        {
          "key": "B",
          "headline": "接受哈利法克斯提议：通过意大利试探体面和谈条件，保留帝国舰队与殖民地",
          "analysis": "遵循英帝国历来的离岸均势与现实止损传统，不冒本岛彻底毁灭之风险。",
          "deltas": {
            "authority": 0,
            "radicalism": -25,
            "foreign": -20,
            "realpolitik": 30,
            "economy": -10
          }
        },
        {
          "key": "C",
          "headline": "王室与内阁即刻迁往加拿大，在海外自治领指挥泛英帝国长期对抗",
          "analysis": "避敌锋芒保全元气，以全球海洋帝国抗衡欧陆独裁者。",
          "deltas": {
            "authority": -10,
            "radicalism": 15,
            "foreign": 15,
            "realpolitik": 20,
            "economy": 0
          }
        },
        {
          "key": "D",
          "headline": "与苏联立即签署瓜分欧洲秘密军事互助协定，邀请红军介入中东",
          "analysis": "不问信仰与制度差异，与一切强敌之敌联手以图反戈。",
          "deltas": {
            "authority": 15,
            "radicalism": 20,
            "foreign": 20,
            "realpolitik": 35,
            "economy": 10
          }
        }
      ]
    },
    {
      "id": 38,
      "era": "印度非暴力抗争 · 1930年",
      "role": "【你的身份】：莫罕达斯·甘地（圣雄甘地）",
      "title": "食盐进军与非暴力不合作道路",
      "desc": "英国殖民政府对食盐专卖课以重税，剥夺底层最卑微的生存权利。国大党激进青年主张效仿爱尔兰共和军开展暗杀与武装暴动，殖民总督已部署机枪严阵以待。",
      "options": [
        {
          "key": "A",
          "headline": "发起食盐长征：徒步390公里到海边亲手煮盐，以真理与非暴力承受警棍流血",
          "analysis": "以崇高超然的道德勇气唤醒侵略者的良知，拒绝以仇恨消灭仇恨。",
          "deltas": {
            "authority": -35,
            "radicalism": 30,
            "foreign": -35,
            "realpolitik": -40,
            "economy": -25
          }
        },
        {
          "key": "B",
          "headline": "发动全印度总起义：工农暴动占领军火库，武装推翻大英帝国总督统治",
          "analysis": "枪杆子里面出独立，以血还血打破殖民枷锁。",
          "deltas": {
            "authority": 25,
            "radicalism": 35,
            "foreign": 25,
            "realpolitik": 25,
            "economy": 25
          }
        },
        {
          "key": "C",
          "headline": "参加伦敦圆桌会议：争取印度成为英联邦内部自治领，保留英国总督驻军",
          "analysis": "通过体制内法律精英谈判，走渐进温和宪政自治道路。",
          "deltas": {
            "authority": -10,
            "radicalism": -25,
            "foreign": -10,
            "realpolitik": 20,
            "economy": -15
          }
        },
        {
          "key": "D",
          "headline": "支持土邦王公继续割据自保，以印度教宗教本位排斥一切世俗政治",
          "analysis": "退守封建传统种姓秩序与宗教信仰孤岛。",
          "deltas": {
            "authority": 10,
            "radicalism": -30,
            "foreign": -30,
            "realpolitik": -20,
            "economy": 10
          }
        }
      ]
    },
    {
      "id": 39,
      "era": "战后日本重建 · 1946年",
      "role": "【你的身份】：吉田茂，战后日本内阁总理大臣",
      "title": "和平宪法第九条与“吉田路线”",
      "desc": "麦克阿瑟盟军司令部出台《和平宪法》，永久放弃发动战争权与军队编制。保守派政客疾呼这是国家阉割与历史奇耻大辱，要求重整自卫军备并恢复大国荣光。",
      "options": [
        {
          "key": "A",
          "headline": "坚决践行“吉田路线”：专心经济复兴，防务全托付美日安保条约，轻武装发展",
          "analysis": "极致现实主义：把面子丢在一旁，以极低军费成本创造战后经济奇迹。",
          "deltas": {
            "authority": -15,
            "radicalism": -10,
            "foreign": -30,
            "realpolitik": 35,
            "economy": -20
          }
        },
        {
          "key": "B",
          "headline": "修改和平宪法：重组国防军与皇室神圣地位，誓死摆脱占领军监护",
          "analysis": "坚守传统民族国家主权尊严与防务自主，追求大国政治独立。",
          "deltas": {
            "authority": 25,
            "radicalism": 20,
            "foreign": 30,
            "realpolitik": -10,
            "economy": 15
          }
        },
        {
          "key": "C",
          "headline": "实行彻底非武装中立：废除美日安保条约，依靠联合国多边体系保障安全",
          "analysis": "信奉绝对和平主义与非军事化理想。",
          "deltas": {
            "authority": -35,
            "radicalism": 25,
            "foreign": -35,
            "realpolitik": -35,
            "economy": -20
          }
        },
        {
          "key": "D",
          "headline": "重建战前通商产业省垄断统制：由官僚系统严密指导全国财阀产业投资",
          "analysis": "打造发展型国家行政垄断模式，由官僚统筹指导国民经济。",
          "deltas": {
            "authority": 30,
            "radicalism": 10,
            "foreign": 10,
            "realpolitik": 25,
            "economy": 35
          }
        }
      ]
    },
    {
      "id": 40,
      "era": "冷战揭幕 · 1947年",
      "role": "【你的身份】：哈里·杜鲁门，美国总统",
      "title": "马歇尔计划与遏制战略出台",
      "desc": "战后欧洲化为焦土，饥馑与严寒肆虐，希腊内战危急，法意共产党席卷选票。美国国内孤立主义议员强烈反对再度对外援助纳税人巨资，要求立即撤军回归美洲。",
      "options": [
        {
          "key": "A",
          "headline": "推出马歇尔计划与杜鲁门主义：不惜百亿美元援助重建西欧，组建北约对抗",
          "analysis": "承担全球超级大国领导责任，以经援与军事同盟体系构筑自由世界防线。",
          "deltas": {
            "authority": 20,
            "radicalism": 20,
            "foreign": 35,
            "realpolitik": 25,
            "economy": 10
          }
        },
        {
          "key": "B",
          "headline": "重回门罗主义：完全撤出欧洲驻军，严禁对外无偿援助，专注国内降税减赤",
          "analysis": "恪守古典孤立主义底线，拒绝背负世界帝国财政与流血包袱。",
          "deltas": {
            "authority": -25,
            "radicalism": -25,
            "foreign": -35,
            "realpolitik": -15,
            "economy": -30
          }
        },
        {
          "key": "C",
          "headline": "趁美国独享核垄断优势，向莫斯科发出最后通牒甚至先发制人核打击",
          "analysis": "极端军国激进霸权，试图在核失衡窗口期毕其功于一役彻底消灭宿敌。",
          "deltas": {
            "authority": 35,
            "radicalism": 35,
            "foreign": 40,
            "realpolitik": 30,
            "economy": 20
          }
        },
        {
          "key": "D",
          "headline": "依托联合国安理会开展美苏四大国共管，全面承认东欧为苏联合法势力范围",
          "analysis": "尊重雅尔塔密约大国势力范围瓜分，走多边大国协调均势路线。",
          "deltas": {
            "authority": -10,
            "radicalism": -15,
            "foreign": -10,
            "realpolitik": 20,
            "economy": -10
          }
        }
      ]
    },
    {
      "id": 41,
      "era": "核阴云绝境 · 1962年",
      "role": "【你的身份】：约翰·肯尼迪，古巴导弹危机中的美国总统",
      "title": "十三天核毁灭边缘的生死决断",
      "desc": "侦察机发现苏联正在古巴建造搭载核弹头的弹道导弹基地，射程覆盖华盛顿。参谋长联席会议一致强力要求立即对古巴进行全面空袭并两栖登陆占领，哪怕引发美苏核交火。",
      "options": [
        {
          "key": "A",
          "headline": "采纳海上隔离方案：对古巴进行严密海军封锁，同时通过秘密渠道开展和谈",
          "analysis": "在坚定的战略威慑与给对手留出体面退路的精细博弈中化解末日危机。",
          "deltas": {
            "authority": 10,
            "radicalism": 0,
            "foreign": 10,
            "realpolitik": 25,
            "economy": 5
          }
        },
        {
          "key": "B",
          "headline": "执行先发制人空中打击：彻底炸平古巴核阵地，并出兵登岛推翻卡斯特罗",
          "analysis": "以绝对硬实力碾碎地缘挑衅，不容忍西半球存在任何直接威胁。",
          "deltas": {
            "authority": 25,
            "radicalism": 25,
            "foreign": 35,
            "realpolitik": 15,
            "economy": 10
          }
        },
        {
          "key": "C",
          "headline": "诉诸联合国安理会公开辩论，签署多边条约接纳古巴中立并自撤驻欧核武",
          "analysis": "遵循国际法秩序与多边共治，以单方面实质退让消除全球战争风险。",
          "deltas": {
            "authority": -20,
            "radicalism": -15,
            "foreign": -30,
            "realpolitik": -25,
            "economy": -15
          }
        },
        {
          "key": "D",
          "headline": "秘密同意撤出土耳其核导弹作为交换，换取赫鲁晓夫当即撤除古巴导弹",
          "analysis": "低调实用主义交易，保全实质安全利益而不在公共场域争强好胜。",
          "deltas": {
            "authority": 5,
            "radicalism": -10,
            "foreign": -5,
            "realpolitik": 30,
            "economy": 0
          }
        }
      ]
    },
    {
      "id": 42,
      "era": "法兰西重构 · 1958年",
      "role": "【你的身份】：夏尔·戴高乐，应召复出的法兰西救星",
      "title": "第五共和国宪法与阿尔及利亚断腕",
      "desc": "第四共和国党派内讧导致议会瘫痪，驻阿尔及利亚法国军官发动叛乱逼宫。军方坚决主张“阿尔及利亚永远属于法国”，不惜进行残酷焦土战争；而第三世界反殖民浪潮势不可挡。",
      "options": [
        {
          "key": "A",
          "headline": "通过新宪法确立强势总统制，力排众议允许阿尔及利亚公民自决独立",
          "analysis": "壮士断腕卸下殖民帝国道义与经济包袱，集中强力总统行政权经营大国战略。",
          "deltas": {
            "authority": 30,
            "radicalism": 25,
            "foreign": -10,
            "realpolitik": 35,
            "economy": 15
          }
        },
        {
          "key": "B",
          "headline": "顺从军方：派大军铁血镇压阿尔及利亚民族解放阵线，宣布誓死保卫帝国版图",
          "analysis": "坚持大帝国殖民荣光，视任何退让为法兰西民族之耻辱。",
          "deltas": {
            "authority": 35,
            "radicalism": -15,
            "foreign": 35,
            "realpolitik": 10,
            "economy": 20
          }
        },
        {
          "key": "C",
          "headline": "退出北约军事一体化机构，自主发展“独立核力量”推行戴高乐主义",
          "analysis": "在美苏两极霸权之外追求战略自主与独立外交风骨。",
          "deltas": {
            "authority": 20,
            "radicalism": 20,
            "foreign": 30,
            "realpolitik": 30,
            "economy": 15
          }
        },
        {
          "key": "D",
          "headline": "恢复议会内阁制多党协商，完全遵照联合国民权公约办案",
          "analysis": "重返古典自由代议制度，拒绝任何强人个人集权。",
          "deltas": {
            "authority": -30,
            "radicalism": -20,
            "foreign": -25,
            "realpolitik": -25,
            "economy": -20
          }
        }
      ]
    },
    {
      "id": 43,
      "era": "东方历史转折 · 1978年",
      "role": "【你的身份】：邓小平，改革开放的总设计师",
      "title": "真理标准大讨论与工作重心历史性转移",
      "desc": "十年浩劫结束，国民经济濒临崩溃，思想界仍受教条禁锢。面对“两个凡是”的阻碍，百废待兴的十亿人口大国面临向何处去的根本方向抉择。",
      "options": [
        {
          "key": "A",
          "headline": "实践是检验真理的唯一标准：停止以阶级斗争为纲，设立经济特区实行改革开放",
          "analysis": "实事求是之极致：打破教条僵化，以无与伦比的政治魄力重塑国家繁荣大道。",
          "deltas": {
            "authority": 15,
            "radicalism": 35,
            "foreign": 15,
            "realpolitik": 40,
            "economy": -25
          }
        },
        {
          "key": "B",
          "headline": "恪守“两个凡是”：一切按既定方针办，不搞任何包产到户与市场资本妥协",
          "analysis": "坚守教条主义意识形态纯洁性，视任何市场改革为走资本主义道路。",
          "deltas": {
            "authority": 35,
            "radicalism": -35,
            "foreign": -20,
            "realpolitik": -35,
            "economy": 40
          }
        },
        {
          "key": "C",
          "headline": "只搞沿海代工特区，内地农村严格维持人民公社集体劳作制不变",
          "analysis": "局部有限试验，在全局上仍旧力求维持计划经济基本盘。",
          "deltas": {
            "authority": 25,
            "radicalism": -10,
            "foreign": 5,
            "realpolitik": 15,
            "economy": 25
          }
        },
        {
          "key": "D",
          "headline": "立即全面放开价格与企业私有化，实行一步到位的休克疗法",
          "analysis": "激进化市场转轨，忽视社会承受力与秩序底线。",
          "deltas": {
            "authority": -25,
            "radicalism": 40,
            "foreign": 10,
            "realpolitik": 0,
            "economy": -40
          }
        }
      ]
    },
    {
      "id": 44,
      "era": "新自由主义浪潮 · 1979年",
      "role": "【你的身份】：玛格丽特·撒切尔，英国首位女首相",
      "title": "打破“英国病”与对抗矿工工会大罢工",
      "desc": "国有企业连年巨额亏损，通胀两位数高企，工会罢工导致垃圾堆满街头、遗体无法安葬。工会领袖宣称罢工将瘫痪全英电力，要求政府继续巨额补贴国企并扩大福利。",
      "options": [
        {
          "key": "A",
          "headline": "铁娘子不妥协：国企全面私有化、削减福利开支，储备煤炭强硬挫败工会罢工",
          "analysis": "新自由主义旗手：坚信市场自发秩序与个人责任，断然拔除福利国家腐败根茎。",
          "deltas": {
            "authority": 20,
            "radicalism": 30,
            "foreign": 20,
            "realpolitik": 25,
            "economy": -40
          }
        },
        {
          "key": "B",
          "headline": "向工会屈服妥协：全额发放罢工补贴，提高最低工资并增加国企财政兜底",
          "analysis": "维护二战后凯恩斯主义“战后共识”，视充分就业与工人民生为最高底线。",
          "deltas": {
            "authority": -15,
            "radicalism": -25,
            "foreign": -15,
            "realpolitik": -20,
            "economy": 35
          }
        },
        {
          "key": "C",
          "headline": "派遣军队强行接管矿山与铁道，对罢工工会首脑以叛国罪入刑审判",
          "analysis": "动用国家暴力机器摧毁劳工运动，建立威权秩序。",
          "deltas": {
            "authority": 35,
            "radicalism": 25,
            "foreign": 10,
            "realpolitik": 30,
            "economy": 10
          }
        },
        {
          "key": "D",
          "headline": "在马岛战争中坚决派远征军夺回福克兰群岛，以爱国热潮凝聚衰落民心",
          "analysis": "以坚决对外军事胜利重塑大英帝国自豪感，带动内政突破。",
          "deltas": {
            "authority": 15,
            "radicalism": 10,
            "foreign": 35,
            "realpolitik": 25,
            "economy": -10
          }
        }
      ]
    },
    {
      "id": 45,
      "era": "彩虹之国新生 · 1994年",
      "role": "【你的身份】：纳尔逊·曼德拉，南非首位黑人总统",
      "title": "种族隔离终结后的和解与清算抉择",
      "desc": "结束白人少数统治后，激进黑人青年要求以血还血、没收全部白人土地与工厂驱逐出境；极端白人士兵威胁武装分裂独立。数十年的血海深仇将南非推向全面种族内战边缘。",
      "options": [
        {
          "key": "A",
          "headline": "设立真相与和解委员会：坦白罪行即可获得特赦，倡导黑白共存彩虹之国",
          "analysis": "以超凡的博爱与宽容斩断仇恨死循环，以宪法平权与法治维护国家和平新生。",
          "deltas": {
            "authority": -25,
            "radicalism": 20,
            "foreign": -20,
            "realpolitik": -35,
            "economy": -15
          }
        },
        {
          "key": "B",
          "headline": "激进全面土改：无偿没收全部白人土地、矿山并国有化，全面驱逐旧特权阶层",
          "analysis": "以激进革命正义摧毁历史压迫基础，哪怕经济崩溃亦要实现绝对平权。",
          "deltas": {
            "authority": 30,
            "radicalism": 40,
            "foreign": 15,
            "realpolitik": -10,
            "economy": 40
          }
        },
        {
          "key": "C",
          "headline": "维持现有经济所有制原封不动，建立黑人政客与白人寡头的政治分赃共治",
          "analysis": "低成本现实妥协，维护既得经济资本稳定而不触及底层分配根基。",
          "deltas": {
            "authority": 10,
            "radicalism": -25,
            "foreign": 0,
            "realpolitik": 30,
            "economy": -25
          }
        },
        {
          "key": "D",
          "headline": "划界自治：将部分省份划归白人建立独立自治国，黑人与白人分而治之",
          "analysis": "退守族群地理隔离，放弃构建多元一体民族国家理想。",
          "deltas": {
            "authority": -30,
            "radicalism": -15,
            "foreign": -25,
            "realpolitik": 15,
            "economy": -20
          }
        }
      ]
    },
    {
      "id": 46,
      "era": "欧洲一体化 · 1992年",
      "role": "【你的身份】：弗朗索瓦·密特朗与赫尔穆特·科尔，法德轴心首脑",
      "title": "《马斯特里赫特条约》与欧元诞生",
      "desc": "冷战落幕，两德统一。法德两国构想通过放弃本国货币主权（法郎与马克），创立单一欧洲货币欧元，推进欧洲超国家联盟。但各国选民深怀对失去国家自主性的恐惧与怀疑。",
      "options": [
        {
          "key": "A",
          "headline": "坚定签署《马约》：让渡货币发行权创立欧元，推动向欧洲联邦终极迈进",
          "analysis": "以超国家一体化理想彻底埋葬欧陆百年内战仇恨，打造独立于美苏的欧洲极。",
          "deltas": {
            "authority": 15,
            "radicalism": 35,
            "foreign": 15,
            "realpolitik": 10,
            "economy": 15
          }
        },
        {
          "key": "B",
          "headline": "严守国家主权：仅维持关税同盟与共同市场，坚决反对单一货币与财政绑架",
          "analysis": "捍卫主权民族国家独立自主，拒绝让未经民选的布鲁塞尔官僚凌驾主权。",
          "deltas": {
            "authority": -25,
            "radicalism": -30,
            "foreign": -20,
            "realpolitik": 20,
            "economy": -30
          }
        },
        {
          "key": "C",
          "headline": "仅在法德荷比卢等核心北欧国家推行欧元，将南欧债务风险国家彻底排除在外",
          "analysis": "注重经济趋同与财政纪律的严谨务实方案，严防债务搭便车。",
          "deltas": {
            "authority": 5,
            "radicalism": 10,
            "foreign": 5,
            "realpolitik": 30,
            "economy": -10
          }
        },
        {
          "key": "D",
          "headline": "欧洲优先建立统一欧洲军替代北约，政治军事一体化先于货币一体化",
          "analysis": "以硬实力安全一体化驱动欧洲大一统进程。",
          "deltas": {
            "authority": 25,
            "radicalism": 25,
            "foreign": 30,
            "realpolitik": 15,
            "economy": 10
          }
        }
      ]
    },
    {
      "id": 47,
      "era": "冷战遗局 · 1992年",
      "role": "【你的身份】：叶利钦与盖达尔，后苏联初期的俄罗斯决策者",
      "title": "休克疗法与转轨之痛",
      "desc": "苏联红旗落地，莫斯科商品货架空空如也，卢布沦为废纸，外汇储备消耗殆尽。西方经济学家力荐立刻全面放开物价与私有化，老官僚则警告一旦取消国家管制将导致亿万人赤贫。",
      "options": [
        {
          "key": "A",
          "headline": "全面实施休克疗法：一日内放开所有物价，发行私有化凭证，全盘西化转轨",
          "analysis": "以快刀斩乱麻之极端激进破旧立新，彻底摧毁旧苏联计划经济官僚还魂可能。",
          "deltas": {
            "authority": -15,
            "radicalism": 45,
            "foreign": 15,
            "realpolitik": -20,
            "economy": -40
          }
        },
        {
          "key": "B",
          "headline": "走渐进式双轨制改革：国家牢牢掌控军工能源骨干，逐步放开轻工农业价格",
          "analysis": "稳健国家调控，确保老百姓基本面包供应与社会秩序稳定。",
          "deltas": {
            "authority": 25,
            "radicalism": -25,
            "foreign": -10,
            "realpolitik": 25,
            "economy": 30
          }
        },
        {
          "key": "C",
          "headline": "实行战时粮食配给管制，由安全部门接管关键物流链，严打投机寡头倒爷",
          "analysis": "重返国家强力威权管制，压倒一切保基本民生。",
          "deltas": {
            "authority": 35,
            "radicalism": -15,
            "foreign": -15,
            "realpolitik": 25,
            "economy": 35
          }
        },
        {
          "key": "D",
          "headline": "向国际货币基金组织(IMF)让渡央行独立权，全面换取百亿美元紧急救助贷款",
          "analysis": "以出让宏观经济主权换取外援渡过燃眉之急。",
          "deltas": {
            "authority": -20,
            "radicalism": 15,
            "foreign": 0,
            "realpolitik": 30,
            "economy": -30
          }
        }
      ]
    },
    {
      "id": 48,
      "era": "反恐战争纪元 · 2001年",
      "role": "【你的身份】：乔治·W·布什，911事件后的美国总统",
      "title": "反恐十字路口：《爱国者法案》与阿富汗战云",
      "desc": "双子塔坍塌，全美陷入前所未有的创伤与恐惧。内阁主张立即颁布《爱国者法案》扩大情报监控，对庇护基地组织的政权发动全球反恐战争；公民自由组织抗议监控将扼杀宪法隐私权利。",
      "options": [
        {
          "key": "A",
          "headline": "签发《爱国者法案》并出兵中东：国家安全压倒一切，“不支持我们就是支持恐怖”",
          "analysis": "以国家强权与全球军事干涉保卫国土安全，重塑单极霸权秩序与反恐威慑。",
          "deltas": {
            "authority": 35,
            "radicalism": 25,
            "foreign": 35,
            "realpolitik": 25,
            "economy": 20
          }
        },
        {
          "key": "B",
          "headline": "严守宪法权利法案：坚决否决无差别监听法案，拒绝轻启海外地面战争",
          "analysis": "宁受风险亦不可自毁自由宪制基石，恐怖分子最渴望的就是诱使自由自我毁灭。",
          "deltas": {
            "authority": -35,
            "radicalism": -20,
            "foreign": -30,
            "realpolitik": -25,
            "economy": -25
          }
        },
        {
          "key": "C",
          "headline": "完全交付联合国安理会组建多边国际法庭，仅以精准巡航导弹与特战实施定点清除",
          "analysis": "依托多边国际法与低强度特战，避免陷入中东帝国坟场长期泥潭。",
          "deltas": {
            "authority": -10,
            "radicalism": 0,
            "foreign": 5,
            "realpolitik": 15,
            "economy": -10
          }
        },
        {
          "key": "D",
          "headline": "全力封锁本土边境与移民入境，收缩海外军事基地退守美洲堡垒",
          "analysis": "重拾美洲传统孤立自保主义，隔绝外部地缘祸水。",
          "deltas": {
            "authority": 15,
            "radicalism": -15,
            "foreign": -35,
            "realpolitik": 10,
            "economy": 5
          }
        }
      ]
    },
    {
      "id": 49,
      "era": "金融海啸 · 2008年",
      "role": "【你的身份】：本·伯南克与汉克·保尔森，美联储主席与财政部长",
      "title": "雷曼兄弟崩塌与“大而不倒”救助抉择",
      "desc": "第四大投行雷曼兄弟轰然倒闭，全球信贷市场彻底冻结，AIG与华尔街五大投行排队走向悬崖。国会两党痛斥华尔街贪婪，要求政府绝不可用纳税人血汗钱去救助投机财阀。",
      "options": [
        {
          "key": "A",
          "headline": "推出7000亿不良资产救助计划(TARP)并开启量化宽松(QE)：开直升机撒钱挽救体系",
          "analysis": "在系统性崩盘面前，不惜动用国家最终兜底人权力，实用干预压倒教条道德风险。",
          "deltas": {
            "authority": 25,
            "radicalism": 30,
            "foreign": 15,
            "realpolitik": 30,
            "economy": 35
          }
        },
        {
          "key": "B",
          "headline": "绝不出台公共资金救助：任由资不抵债金融机构全部清算破产，重申市场纪律",
          "analysis": "捍卫自由市场优胜劣汰法则，杜绝政府权力干预市场形成恶性道德风险。",
          "deltas": {
            "authority": -25,
            "radicalism": -25,
            "foreign": -15,
            "realpolitik": -25,
            "economy": -40
          }
        },
        {
          "key": "C",
          "headline": "将濒临破产的大银行与保险巨头全面收归国有，限制高管薪酬追究刑责",
          "analysis": "借危机契机重塑公共金融所有制，惩戒金融寡头贪婪。",
          "deltas": {
            "authority": 35,
            "radicalism": 35,
            "foreign": 0,
            "realpolitik": 15,
            "economy": 40
          }
        },
        {
          "key": "D",
          "headline": "仅救助面临断供被驱逐的普通房贷家庭，任由华尔街投行自生自灭",
          "analysis": "平民主义直接救济路线，优先保障弱势劳动者基本生存。",
          "deltas": {
            "authority": 10,
            "radicalism": 25,
            "foreign": -10,
            "realpolitik": -10,
            "economy": 25
          }
        }
      ]
    },
    {
      "id": 50,
      "era": "智能奇点纪元 · 当代",
      "role": "【你的身份】：负责新兴技术与未来治理的最高决策顾问",
      "title": "通用人工智能(AGI)与算力文明的分水岭",
      "desc": "具备自我迭代能力的通用人工智能与超级算力集群横空出世，知识垄断、算法深度伪造、认知战与大规模自动化失业威胁席卷全球；而地缘竞争对手正全力狂飙算法试图获得战略霸权。",
      "options": [
        {
          "key": "A",
          "headline": "全面实施国家算力牌照管制与AI对齐严苛安全审查，甚至必要时按下“暂停键”",
          "analysis": "以人类文明最高安全与伦理为绝对红线，宁减缓技术迭代亦不冒物种失控风险。",
          "deltas": {
            "authority": 35,
            "radicalism": 15,
            "foreign": -10,
            "realpolitik": -20,
            "economy": 30
          }
        },
        {
          "key": "B",
          "headline": "放任全球自由开源竞争：零监管红利优先，全力抢夺AI第一霸权，在演进中解决问题",
          "analysis": "信奉科技加速主义与自由市场竞争，唯有最快最强者方能在残酷博弈中生还。",
          "deltas": {
            "authority": -30,
            "radicalism": 35,
            "foreign": 30,
            "realpolitik": 35,
            "economy": -35
          }
        },
        {
          "key": "C",
          "headline": "推进全球多边联合国公约：建立类似国际原子能机构的全球算力与数据核查机制",
          "analysis": "依托多边国际主义与全人类共同命运框架，共同遏制技术野蛮生长。",
          "deltas": {
            "authority": -15,
            "radicalism": 20,
            "foreign": -25,
            "realpolitik": -30,
            "economy": -10
          }
        },
        {
          "key": "D",
          "headline": "设立AI超级暴利税与机器人税，由国家全面发放全民无条件基本收入(UBI)",
          "analysis": "以国家再分配兜底被技术颠覆的社会底层，打造数字社会主义福利方舟。",
          "deltas": {
            "authority": 25,
            "radicalism": 30,
            "foreign": 0,
            "realpolitik": 15,
            "economy": 40
          }
        }
      ]
    }
  ],
  "characters": [
    {
      "id": "shangyang",
      "name": "商鞅",
      "title": "大秦变法首倡者 · 极端法家拓荒者",
      "archetype": "【极权统御 · 铁腕重构革新派】",
      "quote": "治世不一道，便国不法古。法之不行，自上犯之。",
      "desc": "你在治理中崇尚绝对的中央统御与严明法度。面对积弊丛生的旧制度，你展现出摧枯拉朽的激进重组意志；在经济上善用国家机器统筹调配，以富国强兵为最高目标，是典型的意志坚如磐石的法家统筹者。",
      "vector": {
        "authority": 85,
        "radicalism": 90,
        "foreign": 75,
        "realpolitik": 90,
        "economy": 80
      }
    },
    {
      "id": "washington",
      "name": "乔治·华盛顿",
      "title": "美利坚合众国国父 · 宪政共和奠基人",
      "archetype": "【古典共和 · 制衡法治守望者】",
      "quote": "宪法乃是吾等至高之契约，对权力的约束乃自由之唯一屏障。",
      "desc": "你深怀对专断强权的天然戒惧，信奉宪政分权与程序正义。在国家面临危机时，你克制个人欲望，甘愿隐退以确立制度典范；对外崇尚和平与不结盟，坚信道德准则与公民自决是国家长治久安之本。",
      "vector": {
        "authority": -75,
        "radicalism": -25,
        "foreign": -65,
        "realpolitik": -70,
        "economy": -60
      }
    },
    {
      "id": "bismarck",
      "name": "奥托·冯·俾斯麦",
      "title": "德意志帝国铁血宰相 · 均势棋手",
      "archetype": "【现实政治 · 稳健均势操盘手】",
      "quote": "当代的重大问题不是通过演说和多数决议所能解决的，而是要用铁和血。",
      "desc": "你是不折不扣的现实主义政治大师。你蔑视虚伪的道德说教，深刻洞悉力量对比与地缘博弈的冷酷本质。在必要时刻挥舞铁拳，在达成目标后又极度审慎克制，以无与伦比的外交手腕操弄大局。",
      "vector": {
        "authority": 65,
        "radicalism": -30,
        "foreign": 45,
        "realpolitik": 85,
        "economy": 30
      }
    },
    {
      "id": "caesar",
      "name": "尤利乌斯·凯撒",
      "title": "终身独裁官 · 罗马帝业奠基人",
      "archetype": "【开明威权 · 决绝进取统帅】",
      "quote": "骰子已经掷下（Alea iacta est）。我来，我见，我征服。",
      "desc": "你拥有敢于踏过卢比孔河的决断与魄力。你善于打破因循守旧的元老院寡头僵局，依靠军功与平民爱戴集大权于一身；在对外扩张中纵横捭阖，是一位具有宏大开明格局的非凡统帅。",
      "vector": {
        "authority": 75,
        "radicalism": 70,
        "foreign": 80,
        "realpolitik": 65,
        "economy": 40
      }
    },
    {
      "id": "roosevelt",
      "name": "富兰克林·罗斯福",
      "title": "四届美国总统 · 新政与反法西斯领袖",
      "archetype": "【实用干预 · 自由民主捍卫者】",
      "quote": "我们唯一值得恐惧的，就是恐惧本身。",
      "desc": "你在大危机面前既不陷入教条的自由放任，亦不投向极权狂热。你以实用主义精神勇于尝试政府调控与社会福利保障，重塑国家职能；同时以崇高的反法西斯同盟担当领导自由世界，兼顾道义与手腕。",
      "vector": {
        "authority": 45,
        "radicalism": 50,
        "foreign": 40,
        "realpolitik": 50,
        "economy": 75
      }
    },
    {
      "id": "pericles",
      "name": "伯里克利",
      "title": "雅典全盛期统帅 · 公民民主领袖",
      "archetype": "【公民城邦 · 海权自豪领袖】",
      "quote": "我们的制度之所以被称为民主政治，是因为政权在全体公民手中，而不是在少数人手中。",
      "desc": "你深深自豪于开放平等的公民参政制度。你相信文化、法治与公民尊严的力量，同时具有开拓海权帝国的雄心，在雅典卫城的光芒下将城邦民主与地缘威慑完美融合。",
      "vector": {
        "authority": -55,
        "radicalism": 45,
        "foreign": 60,
        "realpolitik": 10,
        "economy": -20
      }
    },
    {
      "id": "zhugeliang",
      "name": "诸葛亮",
      "title": "蜀汉丞相兼司隶校尉 · 忠贞楷模",
      "archetype": "【德法并济 · 理想主义践行者】",
      "quote": "鞠躬尽瘁，死而后已。治蜀以严，法加于贵族。",
      "desc": "你在严酷的地缘夹缝中恪守汉贼不两立的政治理想。治内立法严明、赏罚必信，对外六出祁山进取中原；你将法家的执行力与儒家的道德仁爱融为一体，是历代知识分子心中的终极典范。",
      "vector": {
        "authority": 70,
        "radicalism": 20,
        "foreign": 60,
        "realpolitik": -60,
        "economy": 65
      }
    },
    {
      "id": "lincoln",
      "name": "亚伯拉罕·林肯",
      "title": "美利坚拯救者 · 伟大解放者",
      "archetype": "【宪制坚守 · 坚毅悲悯统一者】",
      "quote": "一个分裂的家庭必不能持久。吾人愿合众国常在，民有、民治、民享之政权永续于世。",
      "desc": "你在国家面临分崩离析的血火考验中展现出超常的定力。你在维持联邦统一的核心宪制原则上寸步不让，在手段上兼具审慎与决断，以深沉的悲悯心与历史大局观引领时代度过长夜。",
      "vector": {
        "authority": 40,
        "radicalism": 45,
        "foreign": -20,
        "realpolitik": 35,
        "economy": 20
      }
    },
    {
      "id": "napoleon",
      "name": "拿破仑·波拿巴",
      "title": "法兰西第一帝国皇帝 · 欧陆征服者",
      "archetype": "【宏大重构 · 帝国秩序立法者】",
      "quote": "我真正的光荣并非打了四十次胜仗，而是我那将永垂不朽的《民法典》。",
      "desc": "你是开明专制与现代国家制度的巨匠。你以无匹的军事天才扫荡欧洲封建旧势力，颁布法典奠定现代民法根基；你相信中央高效统治与贤能拔擢，以宏伟的意志改写欧陆版图。",
      "vector": {
        "authority": 80,
        "radicalism": 85,
        "foreign": 90,
        "realpolitik": 65,
        "economy": 55
      }
    },
    {
      "id": "emperor_wen",
      "name": "汉文帝刘恒",
      "title": "西汉开国明君 · 文景之治奠基者",
      "archetype": "【无为而治 · 仁厚休养守成派】",
      "quote": "农，天下之本，务莫大焉。日者赐民农田租之半，除肉刑，与民休息。",
      "desc": "你深谙繁刑重敛之祸，信奉黄老清静之道。面对边疆袭扰与宗藩问题，你以大智若愚的克制与柔道化解纷争；轻徭薄赋、省刑宽政，让社会在自发生机中积累出雄厚的文明底蕴。",
      "vector": {
        "authority": -45,
        "radicalism": -80,
        "foreign": -75,
        "realpolitik": 20,
        "economy": -70
      }
    },
    {
      "id": "robespierre",
      "name": "罗伯斯庇尔",
      "title": "法兰西雅各宾领袖 · 不可腐蚀者",
      "archetype": "【纯粹美德 · 激进平等革命派】",
      "quote": "如果和平时期人民政府的支柱是美德，那么革命时期它的支柱则是美德与恐怖。",
      "desc": "你对平民正义与纯洁社会怀有宗教般的狂热。你拒绝一切政治分赃与道德妥协，坚信为了扫除不平等，不惜运用国家绝对暴力清洗腐化旧世界，是一位令世人既敬畏又战栗的殉道者。",
      "vector": {
        "authority": 85,
        "radicalism": 95,
        "foreign": 20,
        "realpolitik": -80,
        "economy": 85
      }
    },
    {
      "id": "churchill",
      "name": "温斯顿·丘吉尔",
      "title": "大英帝国战时首相 · 自由之盾",
      "archetype": "【豪迈不屈 · 帝国传统捍卫者】",
      "quote": "在战争中：决心；在失败中：不屈；在胜利中：宽容；在和平中：善意。",
      "desc": "你是古典帝国荣耀与议会自由传统的坚定保卫者。在至暗时刻，你断然拒绝任何绥靖媾和，以钢铁意志和激昂演说唤醒自由世界的抗争血性；深谙地缘均势与海洋帝国战略。",
      "vector": {
        "authority": 25,
        "radicalism": -40,
        "foreign": 75,
        "realpolitik": 55,
        "economy": -30
      }
    },
    {
      "id": "gandhi",
      "name": "莫罕达斯·甘地",
      "title": "印度国父 · 圣雄",
      "archetype": "【神圣良知 · 非暴力抵抗圣者】",
      "quote": "以眼还眼，只会让整个世界盲目。真正的力量不在于肉体的能力，而在于不可征服的意志。",
      "desc": "你深信精神与道德的力量凌驾于一切世俗强权之上。面对帝国霸权与残酷武装，你以非暴力的至高自律唤醒良知；在治理上推崇分散的乡村自治与手工自给，是人类抗争史上的一座精神灯塔。",
      "vector": {
        "authority": -80,
        "radicalism": 60,
        "foreign": -85,
        "realpolitik": -90,
        "economy": -45
      }
    },
    {
      "id": "mandela",
      "name": "纳尔逊·曼德拉",
      "title": "新南非国父 · 自由斗士",
      "archetype": "【宏大和解 · 多元宽容奠基人】",
      "quote": "当我走出囚室迈向通往自由的监狱大门时，我已经清楚：若不能把悲痛与怨恨留在身后，我依然还在狱中。",
      "desc": "在种族血海深仇的悬崖边缘，你展现出超越凡人的宽广胸襟。你拒绝狭隘的报复性清算，以真相与和解筑牢宪政民主基础，用坚定而温和的力量铸就彩虹之国。",
      "vector": {
        "authority": -40,
        "radicalism": 40,
        "foreign": -40,
        "realpolitik": -50,
        "economy": 10
      }
    },
    {
      "id": "thatcher",
      "name": "玛格丽特·撒切尔",
      "title": "英国首相 · 铁娘子",
      "archetype": "【自由市场 · 强硬反统制战将】",
      "quote": "社会主义的问题在于，他们最终总会把别人的钱花光。没有自由的市场，就没有个人的自由。",
      "desc": "你是战后新自由主义浪潮中意志最坚定的操盘手。你坚决削减国家干预与社会福利，推进国有企业彻底私有化；在外面对领土争端展现出毫不妥协的铁血决心，是捍卫自由企业制度的标志性领袖。",
      "vector": {
        "authority": 30,
        "radicalism": 40,
        "foreign": 50,
        "realpolitik": 60,
        "economy": -85
      }
    },
    {
      "id": "de_gaulle",
      "name": "夏尔·戴高乐",
      "title": "自由法国领袖 · 第五共和国首任总统",
      "archetype": "【战略自主 · 宏大荣光守望者】",
      "quote": "法兰西如果不具备伟大，就称不上是法兰西。伟人之所以伟大，是因为他们立志高远。",
      "desc": "你将法兰西民族的独立自尊镌刻进骨髓。在内政上果断建立强有力的总统行政集权以终结党争内耗；在对外上敢于对超级大国说不，坚持独立核威慑与战略自主，是典型的威权爱国者典范。",
      "vector": {
        "authority": 65,
        "radicalism": 30,
        "foreign": 65,
        "realpolitik": 70,
        "economy": 40
      }
    },
    {
      "id": "wang_anshi",
      "name": "王安石",
      "title": "北宋宰相 · 荆国公",
      "archetype": "【宏图经纬 · 国家干预变法家】",
      "quote": "天变不足畏，祖宗不足法，人言不足恤。善理财者，民不加赋而国用饶。",
      "desc": "你拥有傲视流俗的思想穿透力与坚韧执拗的变法意志。你力排满朝旧党清议，以国家统筹均输平准对抗豪商兼并；你坚信国家机器的主动干预能救积贫积弱之局，是东方罕见的锐意改革巨匠。",
      "vector": {
        "authority": 75,
        "radicalism": 80,
        "foreign": 50,
        "realpolitik": 20,
        "economy": 85
      }
    },
    {
      "id": "justinian",
      "name": "查士丁尼一世",
      "title": "东罗马拜占庭大帝 · 罗马法的最后守护者",
      "archetype": "【古典集权 · 神权帝国复兴者】",
      "quote": "皇帝的意志具有法律的力量。编纂《法学总论》，恢复大一统地中海荣光。",
      "desc": "你以恢弘的野心试图重现罗马帝国极盛疆土。你编纂不朽的《民法大全》为后世奠定法理秩序，以神权君主的专制意志弹压一切内部暴乱；兼具法典编纂家的深邃与专制帝王的冷酷。",
      "vector": {
        "authority": 85,
        "radicalism": 40,
        "foreign": 85,
        "realpolitik": 60,
        "economy": 60
      }
    }
  ]
};
