// https://www.image-map.net/
var carnegie = [
    //Basement
    { name: "04", type: "rect", cords: [[248,235],[187,87]]},
    { name: "04E", type: "rect", cords: [[130,35],[198,79]]},
    { name: "04F", type: "rect", cords: [[207,35],[243,76]]},
    { name: "04D", type: "rect", cords: [[129,87],[180,133]]},
    { name: "04C", type: "rect", cords: [[128,146],[181,195]]},
    { name: "04H", type: "rect", cords: [[261,41],[293,82]]},
    { name: "04A", type: "rect", cords: [[256,217],[335,278]]},
    { name: "04G", type: "rect", cords: [[257,92],[357,130]]},
    { name: "041", type: "rect", cords: [[300,41],[353,80]]},
    { name: "03", type: "rect", cords: [[260,186],[291,208]]},
    { name: "09", type: "rect", cords: [[343,226],[416,275]]},
    { name: "01", type: "rect", cords: [[363,39],[395,91]]},
    { name: "05", type: "rect", cords: [[402,40],[500,128]]},
    { name: "06", type: "rect", cords: [[511,36],[627,179]]},
    { name: "06B", type: "rect", cords: [[514,185],[628,281]]},
    { name: "07B", type: "rect", cords: [[469,184],[503,273]]},
    { name: "07A", type: "rect", cords: [[428,189],[460,270]]},
    { name: "02", type: "rect", cords: [[359,100],[396,168]]},
   { name: "04B", type: "poly", cords: [[130,203],[183,204],[182,239],[248,240],[248,282],[130,282]]}, 
    //Floor 1
    { name: "104E", type: "rect", cords: [[103, 37],[171,86]]}, /** 103, 37, 17, 88 */
    { name: "104F", type: "rect", cords: [[218, 86],[176, 37]]}, /**  218, 86, 176, 37*/
    { name: "104D", type: "rect", cords: [[103, 114],[156, 175]]}, /** 103, 114, 156, 175 */
    { name: "104C", type: "rect", cords: [[103, 178],[156, 228]]}, /**  103, 178, 156, 228*/
    { name: "104B", type: "rect", cords: [[102, 230],[179, 279]]}, /**  102, 230, 179, 279*/
    { name: "104A", type: "rect", cords: [[175, 216],[219, 279]]}, /**  175, 216, 219, 279*/
    { name: "102", type: "rect", cords: [[223, 182],[243, 208]]}, /**  223, 182, 243, 208*/
    { name: "103", type: "rect", cords: [[224, 209],[262, 275]]}, /**  224, 209, 262, 275*/
    { name: "103A", type: "rect", cords: [[264, 209],[300, 274]]}, /**  264, 209, 300, 274*/
    { name: "105", type: "rect", cords: [[223, 40],[324, 134]]}, /**  223, 40, 324, 134*/
    { name: "106", type: "rect", cords: [[325, 39],[361, 133]]}, /**  325, 39, 361, 133*/
    { name: "107", type: "rect", cords: [[363, 41],[463, 133]]}, /**  363, 41, 463, 133*/
    { name: "108", type: "poly", cords: [[469, 36],[470, 158],[493, 158],[493, 180],[586, 180,],[586, 36]]}, /**  469, 36, 470, 158, 493, 158, 493, 180, 586, 180, 586, 36*/
    { name: "109", type: "poly", cords: [[470, 159],[470, 279],[586, 279],[585, 182],[491, 181],[491, 159]]}, /**  470, 159, 470, 279, 586, 279, 585, 182, 491, 181, 491, 159*/
    { name: "110", type: "rect", cords: [[387, 182],[463, 275]]}, /** 387, 182, 463, 275 */
    //Floor 2
    { name: "203G", type: "rect", cords: [[105, 39],[180, 92]]}, /**  105, 39, 180, 92*/
    { name: "203H", type: "rect", cords: [[183, 39],[227, 92]]}, /**  183, 39, 227, 92*/
    { name: "203F", type: "rect", cords: [[105, 120],[159, 185]]}, /**  105, 120, 159, 185*/
    { name: "203E", type: "rect", cords: [[104, 187],[158, 240]]}, /**  104, 187, 158, 240*/
    { name: "203D", type: "rect", cords: [[105, 243],[177, 295]]}, /**  105, 243, 177, 295*/
    { name: "203C", type: "rect", cords: [[180, 243],[227, 295]]}, /**  180, 243, 227, 295*/
    { name: "203A", type: "rect", cords: [[234, 222],[274, 293]]}, /**  234, 222, 274, 293*/
    { name: "203B", type: "rect", cords: [[275, 222],[313, 290]]}, /**  275, 222, 313, 290*/
    { name: "202", type: "rect", cords: [[243, 192],[273, 219]]}, /**  243, 192, 273, 219*/
    { name: "204", type: "rect", cords: [[242, 45],[337, 142]]}, /**  242, 45, 337, 142*/
    { name: "205", type: "rect", cords: [[341, 44],[377, 141]]}, /**  341, 44, 377, 141*/
    { name: "206", type: "rect", cords: [[381, 42],[484, 143]]}, /**  381, 42, 484, 143*/
    { name: "208", type: "rect", cords: [[404, 193],[484, 291]]}, /**  404, 193, 484, 291*/
    { name: "207", type: "rect", cords: [[491, 108],[559, 242]]}, /**  491, 108, 559, 242*/
    { name: "207A", type: "rect", cords: [[537, 107],[491, 38]]}, /**  537, 107, 491, 38*/
    { name: "207B", type: "rect", cords: [[538, 38],[614, 89]]}, /** 538, 38, 614, 89 */
    { name: "207C", type: "rect", cords: [[560, 91],[613, 137]]}, /**  560, 91, 613, 137*/
    { name: "207D", type: "rect", cords: [[560, 139],[615, 187]]}, /**  560, 139, 615, 187*/
    { name: "207E", type: "rect", cords: [[560, 191],[613, 238]]}, /**  560, 191, 613, 238*/
    { name: "207F", type: "rect", cords: [[539, 240],[613, 295]]}, /**  539, 240, 613, 295*/
    { name: "207G", type: "rect", cords: [[490, 242],[536, 295]]}, /**  490, 242, 536, 295*/
    // Floor 3
  { name: "304", type: "rect", cords:[[120,146],[235,269]]},
  { name: "305", type: "rect", cords:[[121,24],[237,144]]},
  { name: "306", type: "rect", cords:[[251,28],[303,102]]},
  { name: "307", type: "rect", cords:[[279,103],[305,120]]},
  { name: "303", type: "rect", cords:[[243,197],[319,262]]},
  { name: "302", type: "rect", cords:[[254,173],[281,193]]},
  { name: "308", type: "rect", cords:[[307,30],[345,119]]},
  { name: "309", type: "rect", cords:[[347,27],[486,121]]},
  { name: "309A", type: "poly", cords:[[64,57],[464,41],[485,42],[483,59]]},
  { name: "310A", type: "rect", cords:[[489,24],[531,86]]},
  { name: "310B", type: "rect", cords:[[535,24],[606,69]]},
  { name: "310C", type: "rect", cords:[[555,75],[602,113]]},
  { name: "310D", type: "rect", cords:[[556,123],[603,158]]},
  { name: "310E", type: "rect", cords:[[555,172],[603,212]]},
  { name: "310F", type: "rect", cords:[[537,215],[605,265]]},
  { name: "310G", type: "rect", cords:[[490,219],[530,264]]},
  { name: "310", type: "rect", cords:[[490,90],[549,211]]},
  //Floor 4
  { name: "403", type: "rect", cords:[[233,167],[261,197]]},
  { name: "404", type: "rect", cords: [[101,115],[219,205]]},
  { name: "404A", type: "rect", cords:[[102,208],[216,268]]},
  { name: "404B", type: "rect", cords:[[101,26],[221,111]]},
  { name: "405", type: "rect", cords:[[234,71],[318,127]]},
  { name: "407", type: "rect", cords:[[323,71],[363,126]]},
  { name: "407A", type: "rect", cords:[[224,31],[464,66]]},
  { name: "409", type: "rect", cords:[[369,71],[451,127]]},
  { name: "410A", type: "poly", cords:[[471,27],[469,71],[456,69],[456,110],[584,111],[585,25]]},
  { name: "410", type: "rect", cords:[[505,114],[584,163]]},
  { name: "401", type: "rect", cords:[[463,112],[504,165]]},
  { name: "412", type: "rect", cords:[[463,169],[488,202]]},
  { name: "413", type: "rect", cords:[[380,167],[462,205]]},
  { name: "413A", type: "rect", cords:[[386,231],[462,266]]},
  { name: "411A", type: "rect", cords:[[470,234],[585,270]]},
  { name: "411B", type: "rect", cords:[[466,207],[476,229]]},
  { name: "411", type: "poly", cords:[[492,167],[490,203],[478,207],[478,228],[587,230],[582,168]]}
];

var humanities = [
    //Basement
    {name: "04E", type: "rect", cords: [[129,32],[202,83]]},
    {name: "04F", type: "rect", cords: [[205,33],[248,83]]},
    {name: "04D", type: "rect", cords: [[129,87],[183,136]]},
    {name: "04C", type: "rect", cords: [[129,140],[183,197]]},
    {name: "04", type: "rect", cords: [[186,86],[248,237]]},
    {name: "04H", type: "rect", cords: [[255,37],[295,86]]},
    {name: "04I", type: "rect", cords: [[298,37],[359,87]]},
    {name: "04G", type: "rect", cords: [[254,89],[359,134]]},
    {name: "05", type: "rect", cords: [[401,37],[505,133]]},
    {name: "06", type: "rect", cords: [[512,32],[631,182]]},
    {name: "04A", type: "rect", cords: [[255,213],[335,274]]},
    {name: "03", type: "rect", cords: [[260,184],[294,210]]},
    {name: "01", type: "rect", cords: [[362,99],[398,37]]},
    {name: "07A", type: "rect", cords: [[425,184],[462,280]]},
    {name: "07B", type: "rect", cords: [[505,184],[466,280]]},
    {name: "06B", type: "rect", cords: [[631,284],[617,273]]},
    {name: "04B", type: "poly", cords: [[129,201],[182,201],[182,241],[248,241],[248,284],[129,284]]},
    {name: "09", type: "rect", cords: [[342,223],[364,222],[363,170],[396,170],[396,223],[418,223],[418,281],[342,281]]},
    {name: "02", type: "rect", cords: [[256,141],[256,176],[505,176],[505,140],[398,140],[397,101],[361,101],[362,140]]},
    //Floor one
    {name: "100B", type: "rect", cords: [[34,26],[68,80]]},
    {name: "100C", type: "rect", cords: [[71,25],[127,59]]},
    {name: "100", type: "rect", cords: [[70,63],[126,81]]},
    {name: "100D", type: "rect", cords: [[129,27],[160,81]]},
    {name: "101", type: "rect", cords: [[164,27],[197,81]]},
    {name: "102", type: "rect", cords: [[201,27],[260,81]]},
    {name: "103", type: "rect", cords: [[263,26],[297,81]]},
    {name: "104", type: "rect", cords: [[300,26],[333,81]]},
    {name: "106", type: "rect", cords: [[336,26],[380,56]]},
    {name: "105", type: "rect", cords: [[336,59],[380,81]]},
    {name: "107A", type: "rect", cords: [[427,26],[460,74]]},
    {name: "107B", type: "rect", cords: [[463,26],[496,74]]},
    {name: "107", type: "rect", cords: [[425,77],[496,104]]},
    {name: "107C", type: "rect", cords: [[440,107],[496,150]]},
    {name: "108A", type: "rect", cords: [[440,226],[497,257]]},
    {name: "108B", type: "rect", cords: [[463,261],[496,304]]},
    {name: "108", type: "rect", cords: [[439,271],[462,304]]},
    {name: "108C", type: "rect", cords: [[442,308],[497,349]]},
    {name: "108D", type: "rect", cords: [[403,293],[449,351]]},
    {name: "1C5C", type: "rect", cords: [[413,272],[439,291]]},
    {name: "1C5B", type: "rect", cords: [[389,274],[412,290]]},
    {name: "109", type: "rect", cords: [[371,274],[406,350]]},
    {name: "110", type: "rect", cords: [[303,274],[369,350]]},
    {name: "111", type: "rect", cords: [[234,274],[300,351]]},
    {name: "112", type: "rect", cords: [[165,274],[231,350]]},
    {name: "113", type: "rect", cords: [[95,273],[162,351]]},
    {name: "114A", type: "rect", cords: [[34,287],[93,350]]},
    {name: "114", type: "rect", cords: [[34,252],[89,286]]},
    {name: "1C1C", type: "rect", cords: [[34,226],[58,248]]},
    {name: "100A", type: "rect", cords: [[34,82],[89,115]]},
    {name: "120", type: "rect", cords: [[116,108],[265,240]]},
    {name: "117", type: "rect", cords: [[301,108],[267,152]]},
    {name: "118", type: "rect", cords: [[268,154],[301,194]]},
    {name: "119", type: "rect", cords: [[267,197],[300,237]]},
    {name: "115J", type: "rect", cords: [[330,108],[367,148]]},
    {name: "116", type: "rect", cords: [[304,167],[414,246]]},
    {name: "115K", type: "rect", cords: [[369,108],[414,164]]},
    {name: "115L", type: "rect", cords: [[303,119],[328,119],[328,149],[368,149],[369,164],[303,164]]},
    //Floor Two
    {name: "222", type:"rect",  cords: [[17,181],[59,219]]},
    {name: "221", type: "rect", cords: [[64,180],[115,219]]},
    {name: "220", type: "rect", cords: [[120,183],[163,219]]},
    {name: "219", type: "rect", cords: [[168,184],[228,218]]},
    {name: "216", type: "rect", cords: [[271,284],[333,353]]},
    {name: "213", type: "rect", cords: [[342,280],[405,353]]},
    {name: "214", type: "rect", cords: [[414,280],[479,353]]},
    {name: "213", type: "rect", cords: [[485,279],[552,354]]},
    {name: "212", type: "rect", cords: [[558,279],[622,357]]},
    {name: "228", type: "rect", cords: [[341,167],[407,249]]},
    {name: "227", type: "rect", cords: [[413,164],[475,246]]},
    {name: "224", type: "rect", cords: [[339,109],[407,158]]},
    {name: "223", type: "rect", cords: [[415,106],[474,158]]},
    {name: "211C", type: "rect", cords:[[629,320],[684,355]]},
    {name: "211B",type: "rect", cords: [[651,264],[684,314]]},
    {name: "211A", type: "rect", cords: [[629,228],[686,258]]},
    {name: "211", type: "rect", cords: [[629,263],[645,314]]},
    {name: "210", type: "rect", cords: [[631,120],[684,147]]},
    {name: "209C", type: "rect", cords:[[631,83],[685,114]]}, 
    {name: "209B", type: "rect", cords:[[653,18],[685,77]]}, 
    {name: "208", type: "rect", cords: [[556,18],[587,73]]},
    {name: "207", type: "rect", cords: [[519,19],[549,75]]},
    {name: "206", type: "rect", cords: [[482,18],[514,72]]},
    {name: "205", type: "rect", cords: [[448,20],[477,71]]},
    {name: "204", type: "rect", cords: [[413,20],[440,71]]},
    {name: "203", type: "rect", cords: [[378,19],[404,72]]},
    {name: "202", type: "rect", cords: [[339,19],[372,72]]},
    {name: "201", type: "rect", cords: [[300,19],[333,74]]},
    {name: "200C", type: "rect", cords: [[243,20],[294,50]]},
    {name: "200B", type: "rect", cords: [[205,20],[234,66]]},
    {name: "200", type: "rect", cords: [[241,58],[292,73]]}, 
    {name: "200A", type: "rect", cords: [[203,77],[258,109]]}, 
    {name: "223", type: "rect", cords: [[290,106],[334,160]]}, 
    {name: "223A", type: "rect", cords: [[291,167],[334,181]]}, 
    {name: "230", type: "rect", cords: [[291,187],[334,215]]}, 
    {name: "229", type: "rect", cords: [[290,221],[334,246]]}, 
    {name: "209A", type: "rect", cords: [[592,18],[646,49]]}, 
    {name: "209", type: "rect", cords: [[590,58],[647,77]]}, 
    {name: "234", type: "rect", cords: [[633,155],[670,219]]}, 
    {name: "217", type: "poly", cords: [[247,277],[263,278],[263,358],[203,356],[201,293],[244,294]]},
    {name: "218", type: "poly", cords: [[201,231],[224,232],[225,247],[240,255],[242,290],[202,288]]},
    {name: "226", type: "poly", cords: [[486,121],[499,121],[503,106],[578,102],[581,120],[599,122],[599,195],[483,196]]},
    {name: "239", type:"rect", cords: [[203,118],[259,147]]},
    {name: "232", type:"rect", cords: [[481,225],[534,237]]},
    {name: "233", type:"rect", cords: [[543,224],[598,236]]},
    {name: "235", type:"rect", cords: [[533,240],[552,247]]},
    {name: "240", type:"rect", cords: [[236,230],[258,248]]},
    {name: "231", type:"rect", cords: [[290,252],[601,271]]},
    //floor 3
    {name: "302", type:"rect", cords: [[181,24],[320,90]]},
    {name: "303", type:"rect", cords: [[327,22],[355,89]]},
    {name: "300", type:"rect", cords: [[34,98,][103,128]]},
    {name: "316", type:"rect", cords: [[33,176],[73,237]]},
    {name: "317", type:"rect", cords: [[32,134],[56,166]]},
    {name: "304", type:"rect", cords: [[399,24],[539,90]]},
    {name: "301", type:"rect", cords: [[113,23],[138,90]]},
    {name: "305", type:"rect", cords: [[469,99],[540,160]]},
    {name: "301B", type:"rect", cords:[[30,25],[104,56]]},
    {name: "301A",type:"rect", cords:[[31,62],[104,93]]},
    {name: "310", type:"rect", cords: [[35,318],[140,384]]},
    {name: "307C", type: "rect", cords:[[399,316],[431,383]]},
    {name: "307B", type: "rect", cords:[[487,316],[539,384]]},
    {name: "307A", type: "rect", cords:[[471,279],[541,311]]},
    {name: "314A", type: "rect", cords:[[309,245],[352,282]]},
    {name: "312" , type: "rect", cords: [[134,128],[176,275]]}, 
    {name: "309" , type: "rect", cords: [[145,315],[213,385]]},
    {name: "308" , type: "rect", cords: [[215,313],[394,384]]},
    {name: "307" , type: "rect", cords: [[435,316],[485,385]]},
    {name: "314" , type: "rect", cords: [[309,122],[439,238]]},
    {name: "313" , type: "rect", cords: [[179,121],[302,217]]},
    {name: "315" , type: "rect", cords: [[180,224],[304,287]]},
    {name: "321" , type: "rect", cords: [[474,243],[493,257]]},
    {name: "303A", type: "rect", cords: [[363,21],[393,90]]}, 
    {name: "301C", type: "rect", cords: [[147,24],[174,91]]}, 
    {name: "318" , type: "rect", cords: [[178,289],[471,309]]}, 
    {name: "311" , type: "poly", cords: [[34,245],[68,243],[69,268],[102,274],[103,309],[36,307]]},
    {name: "306" , type: "poly", cords: [[501,244],[501,257],[475,260],[472,273],[542,272],[545,167],[521,171],[521,238]]},

    //floor 4
    {name: "400", type: "poly", cords: [[85,25],[91,117],[228,116],[233,87],[272,84],[269,24]]},
    {name: "400B", type: "rect", cords:[[29,86],[88,121]]},
    {name: "4C3B", type: "rect", cords:[[231,86],[269,119]]},
    {name: "426", type: "rect", cords: [[142,120],[166,127]]},
    {name: "426", type: "rect", cords: [[142,120],[166,127]]},
    {name: "419", type: "rect", cords:[[30,124],[107,159]]},
    {name: "420", type: "rect", cords:[[31,160],[145,224]]},
    {name: "421", type: "rect", cords:[[27,230],[51,249]]},
    {name: "422", type: "rect", cords:[[87,233],[140,270]]},
    {name: "427", type: "rect", cords:[[29,261],[86,300]]},
    {name: "410", type: "rect", cords:[[90,302],[135,358]]},
    {name: "410A", type: "rect",cords: [[139,317],[190,359]]},
    {name: "424", type: "rect", cords: [[136,299],[155,311]]},
    {name: "412", type: "rect", cords: [[150,161],[272,275]]},
    {name: "413", type: "rect", cords: [[275,230],[330,272]]},
    {name: "414", type: "rect", cords: [[278,155],[416,221]]},
    {name: "409", type: "rect", cords: [[195,302],[263,358]]},
    {name: "408", type: "rect", cords: [[267,299],[317,358]]},
    {name: "407", type: "rect", cords: [[321,303],[370,359]]},
    {name: "406", type: "rect", cords: [[371,302],[405,358]]},
    {name: "405", type: "rect", cords: [[407,303],[447,361]]},
    {name: "404", type: "rect", cords: [[445,230],[506,301]]},
    {name: "401", type: "rect", cords: [[273,28],[374,120]]},
    {name: "402", type: "rect", cords: [[377,25],[447,117]]},
    {name: "415", type: "rect", cords: [[338,228],[369,275]]},
    {name: "416", type: "rect", cords: [[372,224],[418,274]]},
    {name: "417", type: "rect", cords: [[445,158],[509,227]]},
    {name: "418", type: "rect", cords: [[448,125],[464,154]]},
    {name: "425", type: "rect", cords: [[422,118],[443,131]]},
    {name: "403", type: "rect", cords: [[465,121],[504,158]]},
    {name: "403A", type: "rect", cords: [[447,84],[505,119]]}
];

var orl = [
 // floor 1
    {name:"141", type:"rect", cords:[[430,112],[459,153]]},
    {name:"142", type:"rect", cords:[[462,110],[490,150]]},
    {name:"143", type:"rect", cords:[[494,111],[526,152]]},
    {name:"145", type:"rect", cords:[[530,109],[563,153]]},
    {name:"147", type:"rect", cords:[[567,112],[608,155]]},
    {name:"148", type:"rect", cords:[[614,114],[629,152]]},
    {name:"149", type:"rect", cords:[[634,118],[661,185]]},
    {name:"140", type:"rect", cords:[[430,173],[442,183]]},
    {name: "150", type:"rect", cords:[[532,173],[594,217]]},
    {name: "146", type:"rect", cords:[[596,191],[619,217]]},
    {name: "134", type:"rect", cords:[[433,186],[460,218]]},
    {name: "152", type:"rect", cords:[[454,238],[523,280]]},
    {name: "154", type:"rect", cords:[[527,238],[590,279]]},
    {name: "108", type:"rect", cords:[[431,239],[446,278]]},
    {name: "197", type:"rect", cords:[[633,189],[661,203]]},
    {name: "158", type:"rect", cords:[[633,229],[661,250]]},
    {name: "156", type:"rect", cords:[[636,254],[661,272]]},
    {name: "132", type:"rect", cords:[[618,309],[630,336]]},
    {name: "131", type:"rect", cords:[[601,312],[613,335]]},
    {name: "130", type:"rect", cords:[[582,311],[595,334]]},
    {name: "129", type:"rect", cords:[[565,309],[579,332]]},
    {name: "128", type:"rect", cords:[[549,311],[560,334]]},
    {name: "127", type:"rect", cords:[[532,309],[545,337]]},
    {name: "126", type:"rect", cords:[[515,308],[528,334]]},
    {name: "125", type:"rect", cords:[[498,310],[511,334]]},
    {name: "124", type:"rect", cords:[[480,312],[493,335]]},
    {name: "123", type:"rect", cords:[[464,311],[478,334]]},
    {name: "122", type:"rect", cords:[[449,309],[459,334]]},
    {name: "121", type:"rect", cords:[[430,312],[444,335]]},
    {name: "118", type:"rect", cords:[[362,311],[426,333]]},
    {name:"100", type:"rect", cords:[[353,239],[411,290]]},
    {name:"101", type:"rect", cords:[[364,113],[399,156]]},
    {name:"103", type:"rect", cords:[[357,175],[402,201]]},
    {name:"117", type:"rect", cords:[[350,313],[358,330]]},
    {name:"116", type:"rect", cords:[[319,309],[345,334]]},
    {name:"115", type:"rect", cords:[[301,311],[314,336]]},
    {name:"114", type:"rect", cords:[[286,310],[297,335]]},
    {name:"113", type:"rect", cords:[[269,308],[280,334]]},
    {name:"112", type:"rect", cords:[[251,312],[264,334]]},
    {name:"111", type:"rect", cords:[[236,310],[245,334]]},
    {name:"110", type:"rect", cords:[[216,311],[230,334]]},
    {name:"165K", type: "rect", cords: [[238,176],[256,191]]},
    {name:"165J", type: "rect", cords: [[275,176],[285,190]]},
    {name:"165H", type: "rect", cords: [[288,176],[296,189]]},
    {name:"165G", type: "rect", cords: [[303,175],[310,188]]},
    {name:"165F", type: "rect", cords: [[314,174],[332,201]]},
    {name:"165E", type: "rect", cords: [[316,205],[333,216]]},
    {name:"165D", type: "rect", cords: [[316,219],[333,230]]},
    {name:"165L", type: "rect", cords: [[237,203],[256,229]]},
    {name:"165M", type: "rect", cords: [[264,206],[285,230]]},
    {name:"165N", type: "rect", cords: [[290,204],[302,214]]},
    {name:"165P", type: "rect", cords: [[291,223],[301,231]]},
    {name:"100A", type:"rect", cords:[[369,222],[402,235]]},
    {name:"118A", type:"rect", cords:[[364,336],[397,348]]},
    {name:"158A", type:"rect", cords:[[632,205],[661,224]]},
    {name:"140A", type:"rect", cords:[[448,172],[460,183]]},
    {name: "140B", type:"rect", cords:[[466,170],[478,182]]},
    {name: "161D", type:"rect", cords:[[200,309],[212,335]]},
    {name: "161C", type:"rect", cords:[[184,311],[195,334]]},
    {name: "161B", type:"rect", cords:[[165,309],[179,335]]},
    {name: "161A", type:"rect", cords:[[132,310],[162,335]]},
    {name:  "173A", type:"rect", cords:[[179,174],[218,182]]},
    {name:  "171C", type:"rect", cords:[[151,186],[176,205]]},
    {name:  "171A", type:"rect", cords:[[182,187],[222,204]]},
    {name:  "171D", type:"rect", cords:[[153,210],[168,230]]},
    {name:  "171E", type:"rect", cords:[[151,238],[168,253]]},
    {name:  "171F", type:"rect", cords:[[153,258],[177,270]]},
    {name:  "171G", type:"rect", cords:[[183,252],[203,270]]},
     {name:"144", type:"poly", cords:[[466,186],[481,184],[484,172],[528,171],[527,217],[465,218]]},
    {name:"146A",type:"poly", cords:[[597,180],[597,189],[622,187],[622,173],[611,171],[611,176]]},
    {name:"159", type:"poly", cords:[[594,239],[620,237],[621,265],[609,269],[610,280],[594,279]]},
    {name:"105", type:"rect", cords:[[133,290],[145,301]]},
    {name:"135", type:"rect", cords:[[113,304],[128,352]]},
    {name:"133", type:"rect", cords: [[69,289],[94,307]]}, 
    {name:"189", type:"rect", cords:[[74,234],[141,269]]},
    {name:"188", type:"rect", cords:[[75,213],[106,229]]},
    {name:"188A", type:"rect", cords:[[112,215],[128,230]]},
    { name:"188B", type:"rect", cords:[[134,215],[142,229]]},
    {name:"187" , type:"rect", cords:[[75,173],[144,211]]},
    {name:"173"  ,type:"rect", coods:[[164,174],[173,183]]},
    {name: "162", type:"rect",  cords:[[208,240],[223,269]]},
    {name:"171",  type:"poly", cords:[[174,208],[220,210],[220,215],[205,217],[202,245],[172,248]]}, 
    {name: "172", type:"rect",  cords:[[236,136],[266,156]]},
    {name: "170", type:"rect",  cords:[[270,131],[329,155]]},
    {name:"179", type:"rect", cords:[[154,20],[219,61]]},
    {name:"178", type:"rect", cords:[[153,61],[166,98]]},
    {name:"177", type:"rect", cords:[[172,66],[183,95]]},
    {name:"176", type:"rect", cords:[[188,65],[220,95]]},
    {name:"182", type:"rect", cords:[[73,89],[114,109]]},
    {name:"183", type:"rect", cords:[[76,114],[88,153]]},
    {name:"184", type:"rect", cords:[[93,113],[107,156]]},
    {name:"109", type:"rect", cords:[[316,239],[329,270]]},
    {name:"185", type:"rect", cords:[[113,115],[124,153]]},
    {name:"186", type:"rect", cords:[[127,114],[144,155]]},
    {name:"163", type:"rect", cords:[[237,240],[255,270]]},
    {name:"164", type:"rect", cords:[[262,241],[281,272]]},
    {name:"171H", type: "rect", cords:[[210,221],[220,231]]},
    {name:"165C", type: "rect", cords:[[288,240],[302,249]]},
    {name:"165A", type: "rect", cords:[[286,261],[299,271]]},
    {name:"165B", type: "rect", cords:[[295,254],[303,260]]},
   {name:"181",type:"rect", cords:[[75,48],[142,66]]},
   {name:"180", type:"rect", cords:[[75,19],[85,42]]},
   {name:"181A",type:"rect", cords: [[88,19],[99,42]]},
   {name:"182A",type:"rect", cords: [[20,89],[143,108]]},
   {name:"181D",type:"rect", cords:[[119,72],[142,83]]},
   {name:"181E",type:"rect", cords:[[75,71],[112,84]]},
    {name:"181B", type:"rect",cords:[[103,19],[124,42]]},
    {name:"181C", type:"rect",cords:[[127,18],[143,43]]},
   {name:"175", type:"poly", cords: [[151,98],[219,99],[217,111],[206,113],[205,155],[152,157]]},
   {name:"174", type:"rect", cords: [[212,143],[219,155]]}, 
    {name:"174A", type:"rect", cords:[[211,123],[221,136]]},
    {name:"174B", type:"rect", cords:[[215,116],[219,122]]},

 // floor 2

     {name:"284", type:"rect", cords:[[30,27],[96,64]]},
     {name:"285", type:"rect", cords:[[27,68],[96,106]]},
     {name:"280", type:"rect", cords:[[30,110],[91,125]]},
     {name:"287", type:"rect", cords:[[29,133],[98,166]]},
     {name:"282", type:"rect", cords:[[160,42],[176,58]]},
     {name:"281", type:"rect", cords:[[137,60],[177,93]]},
     {name:"280", type:"poly", cords:[[138,96],[173,97],[176,119],[164,119],[164,131],[139,132]]}, 
     {name:"276", type:"rect", cords:[[116,136],[164,167]]},
     {name:"283", type:"poly", cords:[[105,29],[173,28],[174,40],[158,38],[157,57],[123,57],[119,69],[106,65],[107,52]]},
     {name:"278", type:"poly", cords:[[109,72],[133,74],[139,129],[114,129],[111,169],[105,164]]},
     {name:"274B", type:"rect", cords:[[169,126],[176,133]]},
     {name:"274A", type:"rect", cords:[[169,134],[175,147]]},
     {name:"274", type:"rect", cords:[[168,152],[177,168]]},
     {name:"298", type:"rect", cords:[[193,48],[216,66]]}, 
     {name:"272", type:"rect", cords:[[193,143],[222,166]]},
     {name:"270", type:"rect", cords:[[226,141],[290,167]]},
     {name:"288A", type:"rect", cords:[[27,185],[55,198]]},
     {name:"288", type:"rect", cords:[[60,185],[66,197]]}, 
     {name:"288B", type:"rect", cords:[[73,184],[98,199]]},
     {name:"289", type:"rect", cords:[[27,206],[99,247]]},
     {name:"290", type:"rect", cords:[[29,254],[45,274]]},
     {name:"260", type:"rect", cords:[[50,251],[97,286]]},
     {name:"290A", type:"rect", cords:[[29,277],[43,284]]},
     {name:"277", type:"rect", cords:[[118,184],[163,249]]},
     {name:"262", type:"rect", cords:[[119,254],[166,283]]},
     {name:"263", type:"rect", cords:[[172,253],[216,284]]},
     {name:"264", type:"rect", cords:[[220,252],[268,285]]},
     {name:"271A",  type:"rect", cords:[[245,185],[267,199]]},
     {name:"271", type:"rect",cords:[[272,185],[292,198]]}, 
     {name:"273", type:"poly", cords:[[232,185],[240,185],[239,199],[291,203],[295,243],[233,241]]},
     {name:"275", type:"rect", cords:[[165,187],[213,250]]}, 
     {name:"275A", type:"rect", cords:[[217,197],[229,225]]},
     {name:"275B", type:"rect", cords:[[219,230],[229,241]]},
     {name:"209", type:"rect",cords:[[275,252],[289,285]]}, 
     {name:"210",type:"rect", cords:[[86,324],[100,351]]},
     {name:"211", type:"rect", cords:[[104,325],[117,350]]},
     {name:"212", type:"rect", cords:[[121,322],[133,350]]},
     {name:"213", type:"rect", cords:[[138,325],[151,351]]},
     {name:"214", type:"rect", cords:[[156,325],[169,351]]},
     {name:"215", type:"rect", cords:[[174,327],[186,349]]},
     {name:"216", type:"rect", cords:[[191,324],[205,350]]},
     {name:"217", type:"rect", cords:[[210,327],[220,348]]},
     {name:"218", type:"rect", cords:[[227,325],[240,351]]},
     {name:"219", type:"rect", cords:[[242,326],[255,350]]},
     {name:"220", type:"rect", cords:[[261,324],[272,349]]},
     {name:"221A", type:"rect", cords:[[277,323],[288,349]]}, 
     {name:"221", type:"rect", cords:[[293,323],[319,350]]}, 
     {name:"222", type:"rect", cords:[[367,323],[404,350]]}, 
     {name:"223", type:"rect", cords:[[410,328],[420,347]]}, 
     {name:"224", type:"rect", cords:[[427,324],[440,350]]}, 
     {name:"225", type:"rect", cords:[[445,325],[456,350]]}, 
     {name:"226", type:"rect", cords:[[461,325],[472,348]]}, 
     {name:"227", type:"rect", cords:[[479,326],[493,349]]}, 
     {name:"228", type:"rect", cords:[[497,327],[511,352]]}, 
     {name:"229", type:"rect", cords:[[513,327],[526,349]]}, 
     {name:"230", type:"rect", cords:[[530,322],[545,352]]}, 
     {name:"231", type:"rect", cords:[[548,325],[560,348]]}, 
     {name:"232", type:"rect", cords:[[566,325],[579,348]]}, 
     {name:"233", type:"rect", cords:[[584,325],[596,351]]}, 
     {name:"254", type:"rect", cords:[[413,247],[481,293]]}, 
     {name:"256", type:"rect", cords:[[484,251],[529,292]]}, 
     {name:"258", type:"rect", cords:[[531,251],[585,293]]}, 
     {name:"208", type:"rect", cords:[[391,250],[408,290]]}, 
     {name:"234", type:"rect", cords:[[598,272],[626,286]]}, 
     {name:"235", type:"rect", cords:[[600,255],[630,268]]}, 
     {name:"236", type:"rect", cords:[[600,237],[630,251]]}, 
     {name:"237", type:"rect", cords:[[599,219],[628,233]]}, 
     {name:"248", type:"rect", cords:[[598,183],[629,196]]}, 
     {name:"249B", type:"rect", cords:[[616,127],[629,153]]},
     {name:"249A", type:"rect", cords:[[600,128],[610,152]]},
     {name:"249C", type:"rect", cords:[[585,121],[594,152]]},
     {name:"247", type:"rect", cords:[[565,122],[583,164]]},
    {name:"249", type:"poly", cords:[[587,156],[630,157],[631,179],[601,178],[602,165],[587,162]]},
     {name:"245", type:"rect", cords:[[518,119],[561,166]]},
     {name:"243", type:"rect", cords:[[464,122],[513,165]]},
     {name:"241", type:"rect", cords:[[391,122],[462,162]]},
     {name:"250", type:"rect", cords:[[499,186],[557,230]]},
     {name:"255", type:"rect", cords:[[561,202],[585,229]]},
     {name:"246", type:"rect", cords:[[561,191],[575,190],[575,183],[584,182],[588,197],[564,198]]},
     {name:"253", type:"rect", cords:[[444,194],[462,198],[461,187],[493,185],[495,232],[446,228]]},
     {name:"240", type:"rect", cords:[[391,186],[402,193]]},
     {name:"240A", type:"rect", cords:[[409,183],[421,193]]},
     {name:"240B", type:"rect", cords:[[428,184],[440,193]]},
     {name:"240C", type:"rect", cords:[[446,183],[457,192]]},
     {name:"205", type:"poly", cords:[[389,214],[403,214],[406,198],[442,199],[442,228],[390,229]]},
     {name:"200", type:"rect", cords:[[318,190],[363,243]]},
  //floor 3
    {name="382", type: "rect", cords: [[27,9],[119,52]]},
    {name="381", type: "rect", cords: [[121,8],[175,53]]},
    {name="380", type: "rect", cords: [[102,64],[174,104]]},
    {name="383", type: "rect", cords: [[95,116],[23,63]]},
    {name="384", type: "rect", cords: [[25,117],[66,136]]},
    {name="385", type: "rect", cords: [[23,136],[65,163]]},
    {name="386", type: "rect", cords: [[66,116],[96,163]]},
    {name="378", type: "rect", cords: [[162,162],[102,123]]},
    {name="378A", type: "rect", cords: [[103,105],[131,121]]},
    {name="378B", type: "rect", cords: [[163,117],[176,126]]},
    {name="379", type: "poly", cords: [[132,105],[174,105],[176,115],[163,117],[163,122],[132,121]]},
    {name="374", type: "rect", cords: [[176,165],[162,125]]},
    {name="387", type: "rect", cords: [[23,177],[54,223]]},
    {name="388", type: "rect", cords: [[57,178],[101,213]]},
    {name="389", type: "rect", cords: [[23,224],[55,237]]},
    {name="390", type: "rect", cords: [[55,214],[101,247]]},
    {name="391", type: "rect", cords: [[23,238],[56,282]]},
    {name="360", type: "rect", cords: [[56,248],[102,282]]},
    {name="393", type: "rect", cords: [[9,294],[21,317]]},
    {name="361", type: "rect", cords: [[81,294],[101,305]]},
    {name="372", type: "rect", cords: [[190,138],[220,164]]},
    {name="370", type: "rect", cords: [[221,133],[288,164]]},
    {name="371", type: "poly", cords: [[148,178],[291,178],[291,241],[116,245],[116,196],[146,197]]},
    {name="377", type: "rect", cords: [[114,176],[146,196]]},
    {name="362", type: "rect", cords: [[117,247],[154,283]]},
    {name="363", type: "rect", cords: [[153,244],[191,280]]},
    {name="364", type: "rect", cords: [[192,245],[230,281]]},
    {name="365", type: "rect", cords: [[231,246],[268,283]]},
    {name="309", type: "rect", cords: [[270,247,290,283]]},
    {name="310", type: "rect", cords: [[81,320,97,346]]},
    {name="311", type: "rect", cords: [[99,320,116,347]]},
    {name="312", type: "rect", cords: [[116,318],[132,348]]},
    {name="313", type: "rect", cords: [[134,320],[150,347]]},
    {name="314", type: "rect", cords: [[153,317],[168,347]]},
    {name="315", type: "rect", cords: [[169,318],[186,345]]},
    {name="316", type: "rect", cords: [[187,318],[202,347]]},
    {name="317", type: "rect", cords: [[204,318],[221,348]]},
    {name="318", type: "rect", cords: [[223,318],[238,348]]},
    {name="319", type: "rect", cords: [[238,319],[256,347]]},
    {name="320", type: "rect", cords: [[259,319],[288,349]]},
    {name="301", type: "rect", cords: [[317,114],[358,163]]},
    {name="300", type: "circle", cords: [339,200,26]},
    {name="341", type: "rect", cords: [[387,113],[419,158]]},
    {name="343", type: "rect", cords: [[422,112],[492,160]]},
    {name="343A", type: "rect", cords: [[494,114],[521,129]]},
    {name="323", type: "rect", cords: [[440,319],[456,347]]},
    {name="345", type: "rect", cords: [[493,130],[521,160]]},
    {name="347", type: "rect", cords: [[522,110],[592,160]]},
    {name="349", type: "rect", cords: [[595,122],[629,192]]},
    {name="359", type: "rect", cords: [[595,212],[626,284]]},
    {name="321", type: "rect", cords: [[389,319],[420,346]]},
    {name="322", type: "rect", cords: [[423,319],[438,345]]},
    {name="324", type: "rect", cords: [[455,317],[472,345]]},
    {name="325", type: "rect", cords: [[475,318],[490,346]]},
    {name="326", type: "rect", cords: [[492,318],[508,346]]},
    {name="327", type: "rect", cords: [[510,318],[524,346]]},
    {name="328", type: "rect", cords: [[526,318],[541,346]]},
    {name="329", type: "rect", cords: [[543,318],[561,348]]},
    {name="330", type: "rect", cords: [[563,318],[575,346]]},
    {name="331", type: "rect", cords: [[579,321],[597,347]]},
    {name="302", type: "rect", cords: [[386,191],[407,227]]},
    {name="351", type: "rect", cords: [[407,191],[437,226]]},
    {name="353", type: "rect", cords: [[438,190],[457,225]]},
    {name="340", type: "rect", cords: [[383,177],[439,189]]},
    {name="355", type: "rect", cords: [[458,203],[492,225]]},
    {name="344", type: "poly", cords: [[441,177],[497,174],[497,187],[492,202],[460,202],[458,190],[440,190]]},
    {name="350", type: "rect", cords: [[493,178],[556,225]]},
    {name="346", type: "rect", cords: [[558,178],[583,195]]},
    {name="346A", type: "rect", cords: [[558,197],[584,21]]},
    {name="357", type: "rect", cords: [[557,211],[586,228]]},
    {name="308", type: "rect", cords: [[384,243],[408,289]]},
    {name="352", type: "rect", cords: [[409,246],[474,288]]},
    {name="354", type: "rect", cords: [[473,243],[532,287]]},
    {name="356", type: "rect", cords: [[534,241],[551,287]]},
    {name="356A", type: "rect", cords: [[553,242],[584,262]]},
    {name="358", type: "rect", cords: [[555,264],[582,288]]},


  //floor 4
  {name: "406", type: "poly", cords: [[218,295],[219,279],[234,276],[233,266],[199,264],[198,183],[230,186],[232,146],[304,145],[305,184],[323,186],[324,297]]},
  {name: "404", type: "rect", cords: [[116,264],[185,294]]},
  {name: "401", type: "rect", cords: [[91,311],[107,322]]},
  {name: "403", type: "poly", cords: [[110,305],[128,308],[126,333],[92,336],[93,324],[109,322]]},
  {name: "403A", type: "rect", cords: [[129,318],[150,331]]},
  {name: "403B", type: "rect", cords: [[152,315],[176,332]]},
  {name: "403C", type: "rect", cords: [[181,307],[196,335]]},
  {name: "403D", type: "rect", cords: [[128,306],[180,315]]},
  {name: "405", type: "rect", cords: [[186,262],[197,281]]},
  {name: "402", type: "poly", cords: [[90,294],[100,293],[100,278],[104,273],[103,262],[90,262]]}
];

var library = [
// lower
  {name: "L07", type: "rect", cords: [[179,19],[325,101]]},
  {name: "L09", type: "rect", cords: [[419,19],[487,75]]},
  {name: "L12", type: "rect", cords: [[580,18],[735,76]]},
  {name: "L15", type: "rect", cords: [[738,40],[818,463]]},
  {name: "L03A", type: "rect", cords: [[120,465],[174,522]]},
  {name: "L02", type: "rect", cords: [[178,464],[258,540]]},
  {name: "L01", type: "rect", cords: [[261,464],[399,541]]},
  {name: "L03", type: "poly", cords: [[20,185],[177,185],[176,462],[69,461],[67,295],[19,296]]},
  {name: "L03B", type: "poly", cords: [[67,127],[144,128],[144,165],[177,165],[176,186],[68,183]]},
// floor 1
  {name: "106", type: "rect", cords: [[69,345],[183,460]]},
  {name: "107", type: "rect", cords: [[119,463],[175,518]]},
  {name: "115", type: "rect", cords: [[182,17],[231,88]]},
  {name: "116", type: "rect", cords: [[235,17],[285,68]]},
  {name: "117", type: "rect", cords: [[290,19],[341,67]]},
  {name: "118", type: "rect", cords: [[345,17],[400,67]]},
  {name: "123", type: "rect", cords: [[571,18],[622,68]]},
  {name: "111", type: "poly", cords: [[69,125],[141,126],[141,182],[175,181],[175,292],[139,293],[138,343],[70,342],[69,290],[21,293],[20,183],[68,184]]},
  {name: "122", type: "poly", cords: [[236,70],[241,123],[762,122],[762,31],[730,31],[732,17],[625,17],[626,71],[573,68],[569,20],[403,18],[403,69]]},
  {name: "133", type: "poly", cords: [[508,462],[509,576],[569,575],[569,621],[677,618],[679,577],[735,574],[733,487],[703,487],[703,462]]},
// floor 2

// floor 3

// floor 4
];