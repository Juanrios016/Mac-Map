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
    { name: "104E", type: "rect", cords: [[103, 37],[17, 88]]}, /** 103, 37, 17, 88 */
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
    {name: "200C", type: "rect", coords: [[243,20],[294,50]]},
    {name: "200B", type: "rect", coords: [[205,20],[234,66]]},
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
    {name: "306" , type: "poly", cords: [[501,244],[501,257],[475,260],[472,273],[542,272],[545,167],[521,171],[521,238]]}
  ];

