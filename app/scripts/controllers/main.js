'use strict';

/**
 * @ngdoc function
 * @name chfSitesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the chfSitesApp
 */
angular.module('chfSitesApp')
  .controller('MainCtrl', function($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.meals = '000,' + '467,016';

    $scope.incredibleList =
[{"Donation Amount":1075,"Meals":4.300,"name":"Santa Fe Christian","City":"Santa Fe","State":"TX","Category":"Incredible Investor","Description":"Santa Fe kids knocked it out of the park with their incredible fundraising skills. They gathered enough quarters for 4,300 nutritious meals for malnourished kids around the world."},
{"Donation Amount":1764.65,"Meals":7.059,"name":"West Missionary Church with Berne Evangelical Church","City":"Berne","State":"IN","Category":"Incredible Investor","Description":"Kids from two churches in Berne teamed up to raise an incredible 7,058 meals for suffering kids all over the world. They accepted the mission to deliver hope!"},
{"Donation Amount":1056.15,"Meals":4.225,"name":"West Jackson Street Baptist Church","City":"Tupelo","State":"MS","Category":"Incredible Investor","Description":"The kids at West Jackson Street Baptist Church pushed themselves to the limit raising quarters for hungry kids. Altogether, they provided 4,224 meals!"},
{"Donation Amount":1507.78,"Meals":6.031,"name":"Bloomingdale Alliance Church","City":"Bloomingdale","State":"GA","Category":"Incredible Investor","Description":"Don't count out Georgia! When Bloomingdale Alliance Church asked their VBS kids to help, they delivered! Together they raised 6,031 meals for the hungry."},
{"Donation Amount":1500,"Meals":6.000,"name":"Berean Baptist Church","City":"Pickerington","State":"OH","Category":"Incredible Investor","Description":"What a great group of kids! The VBS at Berean Baptist Church took their missions moment up to a whole new level by providing 6,000 meals for the poor!"},
{"Donation Amount":1000,"Meals":4.000,"name":"Hanover EPC","City":"Clinton","State":"PA","Category":"Incredible Investor","Description":"The kids of Clinton got to work and brought in 4,000 quarters to buy meals for children in need. Thank you Hanover EPC. You accomplished your mission to deliver hope!"},
{"Donation Amount":1125.24,"Meals":4.501,"name":"River Hills Baptist Church","City":"Moore","State":"SC","Category":"Incredible Investor","Description":"River Hills Baptist Church checked in with our first Incredible Investors from South Carolina. Their VBS kids raised an amazing 5,692 meals for hungry children."},
{"Donation Amount":1422.88,"Meals":5.692,"name":"Monclova Road Baptist Church","City":"Monclova","State":"OH","Category":"Incredible Investor","Description":"Way to go Ohio! The kids at Monclova Road Baptist Church took the mission to heart raising 5,692 meals through their VBS missions moment. Thank you!"},
{"Donation Amount":1649.51,"Meals":6.598,"name":"College Acres Baptist","City":"Wilmington","State":"NC","Category":"Incredible Investor","Description":"They came, they saw, they conquered! The VBS kids at College Acres Baptist went to their families, neighbors, and friends for help and they got it. 6,598 meals in all!"},
{"Donation Amount":1123.77,"Meals":4.495,"name":"Salem Lutheran Church","City":"Salem","State":"IL","Category":"Incredible Investor","Description":"It didn't take long for the kids of Salem Lutheran to kick into high gear. When they asked their friends and families to help kids in need, they raised 4,495 meals in a snap!"},
{"Donation Amount":1404.37,"Meals":5.617,"name":"Liberty Christian Fellowship","City":"Liberty ","State":"MO","Category":"Incredible Investor","Description":"The town of Liberty didn't know what hit them when the Liberty Christian Fellowship kids started fundraising for Mission:Deliver Hope. They provided 5,617 meals!"},
{"Donation Amount":2544.56,"Meals":10.178,"name":"Harbour Shores Church","City":"Cicero","State":"IN","Category":"Incredible Investor","Description":"The VBS kids at Harbour Shores weren't messing around. They showed their passion for the hurting by raising 10,178 meals for hungry kids. We think that's awesome!"},
{"Donation Amount":1120.72,"Meals":4.483,"name":"Shady Grove Baptist Church","City":"Belton","State":"SC","Category":"Incredible Investor","Description":"Nothing shady here! The kids at Shady Grove made a serious dent in the hunger problem by providing 4,483 meals in one week of VBS. Can you say 'deliver hope?'"},
{"Donation Amount":1880.44,"Meals":7.522,"name":"Bethel Missionary Baptist","City":"Bethel","State":"OK","Category":"Incredible Investor","Description":"We knew they could do it… and do it well! The kids at Bethel Missionary Baptist accepted the mission with gusto! Altogether, they raised 7,522 meals for hungry kids."},
{"Donation Amount":1000,"Meals":4.000,"name":"Christ's Wesleyan Church","City":"Egg Harbor City","State":"NJ","Category":"Incredible Investor","Description":"New Jersey may be a small, but their hearts are big! The kids at Christ's Wesleyan Church showed their love for helping the hungry by raising enough money for 4,000 meals! Way to go! "},
{"Donation Amount":1015,"Meals":4.060,"name":"Woodland Community Church","City":"Westboro","State":"WI","Category":"Incredible Investor","Description":"The VBS kids at Woodland Community Church knocked Mission:Deliver Hope out of the park! Together they raised enough money for 4,060 meals! Good job!"},
{"Donation Amount":1216,"Meals":4.864,"name":"Carson Springs Baptist Church","City":"Sandy Hook","State":"MS","Category":"Incredible Investor","Description":"Mississippi is not just home to a river, but also to Carson Springs Baptist Church who helped crush Mission: Deliver Hope by raising 4,864 meals for hungery children! Way to show the love!"},
{"Donation Amount":1513.75,"Meals":6.055,"name":"Campbellsport Alliance Church","City":"Campbellsport","State":"WI","Category":"Incredible Investor","Description":"Campbellsport Alliance seriously delivered hope as they raised over 6,000 meals for other children in need! Way to go above and beyond!"},
{"Donation Amount":1206.47,"Meals":4.826,"name":"Coronado Baptist Church","City":"El Paso","State":"TX","Category":"Incredible Investor","Description":"The kids at Coronado Baptist Church didn't pass up the opportunity to deliver hope as they brought in all their quarters to raise 4,826 meals for the hungry. Thank you!"},
{"Donation Amount":1135.43,"Meals":4.542,"name":"New Beginnings Youth Group","City":"Bridgewater","State":"VA","Category":"Incredible Investor","Description":"Don't look down on this group of kids from Bridgewater, Virgina! They put their minds to helping the hungry and they delivered by raising 4,542 meals! Way to help bring a new beginning for others! "},
{"Donation Amount":1400,"Meals":5.600,"name":"Calvary Bible Church","City":"Burbank","State":"CA","Category":"Incredible Investor","Description":"What a blessing! The kids at Calvary Bible Church brought in their pocket change to raise 5,600 meals to help in Mission: Deliver Hope. Thank you!"},
{"Donation Amount":1265.69,"Meals":5.063,"name":"Founders Baptist Church","City":"Spring","State":"TX","Category":"Incredible Investor","Description":"The VBS kids at Founder's Baptist Church didn't dissapoint when given Mission: Deliver Hope! They helped bring in enough quarters for 5,063 meals. Way to go! "}]
;
// end incredibleList

    $scope.fantasticList =
    [{"Donation Amount":900,"Meals":3.600,"Date":"6/16/14","RE":"x","name":"Old Saline Baptist Church","City":"Castor","State":"LA","Category":"Fantastic Fundraiser"},
{"Donation Amount":782.15,"Meals":3.129,"Date":"6/18/14","RE":"x","name":"Temple Baptist Church","City":"Blue Ridge","State":"GA","Category":"Fantastic Fundraiser"},
{"Donation Amount":775.03,"Meals":3.100,"Date":"6/20/14","RE":"x","name":"Philippi Baptist Church","City":"Union","State":"SC","Category":"Fantastic Fundraiser"},
{"Donation Amount":531.24,"Meals":2.125,"Date":"6/23/14","RE":"x","name":"Crosspointe Baptist Church","City":"Millington","State":"TN","Category":"Fantastic Fundraiser"},
{"Donation Amount":638.4,"Meals":2.554,"Date":"6/24/14","RE":"x","name":"Cedar Valley Community Church","City":"Watherloo","State":"IA","Category":"Fantastic Fundraiser"},
{"Donation Amount":503.98,"Meals":2.016,"Date":"6/27/14","RE":"x","name":"Utopia Baptist Church","City":"Big Cabin","State":"OK","Category":"Fantastic Fundraiser"},
{"Donation Amount":579.65,"Meals":2.319,"Date":"6/27/14","RE":"x","name":"New Market Baptist Church","City":"Greenwood","State":"SC","Category":"Fantastic Fundraiser"},
{"Donation Amount":691,"Meals":2.764,"Date":"6/27/14","RE":"x","name":"Post Oak Baptist Church","City":"Russellville","State":"KY","Category":"Fantastic Fundraiser"},
{"Donation Amount":546.33,"Meals":2.185,"Date":"6/30/14","RE":"x","name":"Full Gospel Assembly","City":"Canby","State":"MN","Category":"Fantastic Fundraiser"},
{"Donation Amount":554.92,"Meals":2.220,"Date":"6/30/14","RE":"x","name":"Lake Sarah Baptist Church","City":"Slayton ","State":"MN","Category":"Fantastic Fundraiser"},
{"Donation Amount":600,"Meals":2.400,"Date":"6/30/14","RE":"x","name":"Salem United Methodist Church","City":"Selbyville","State":"DE","Category":"Fantastic Fundraiser"},
{"Donation Amount":630.86,"Meals":2.523,"Date":"6/30/14","RE":"x","name":"Plevna Community Bible Church","City":"Plevna","State":"KS","Category":"Fantastic Fundraiser"},
{"Donation Amount":713.74,"Meals":2.855,"Date":"6/30/14","RE":"x","name":"Morningside Baptist Church","City":"Valdosta","State":"GA","Category":"Fantastic Fundraiser"},
{"Donation Amount":783.13,"Meals":3.133,"Date":"7/2/14","RE":"x","name":"First Baptist Church","City":"Duncan","State":"AZ","Category":"Fantastic Fundraiser"},
{"Donation Amount":534.25,"Meals":2.137,"Date":"7/3/14","RE":"x","name":"Faith Baptist Church","City":"Elida","State":"OH","Category":"Fantastic Fundraiser"},
{"Donation Amount":648.64,"Meals":2.595,"Date":"7/3/14","RE":"x","name":"Fishhook UB Church","City":"Bayliss","State":"IL","Category":"Fantastic Fundraiser"},
{"Donation Amount":507.81,"Meals":2.031,"Date":"7/7/14","RE":"x","name":"First Baptist Church","City":"Spartansburg","State":"PA","Category":"Fantastic Fundraiser"},
{"Donation Amount":600,"Meals":2.400,"Date":"7/7/14","RE":"x","name":"Lake Houston Church of the Nazarene","City":"Humble","State":"TX","Category":"Fantastic Fundraiser"},
{"Donation Amount":611.66,"Meals":2.447,"Date":"7/7/14","RE":"x","name":"Kings Mills Baptist Church","City":"Kings Mills","State":"OH","Category":"Fantastic Fundraiser"},
{"Donation Amount":639.4,"Meals":2.558,"Date":"7/7/14","RE":"x","name":"Knox Presbyterian Church","City":"Harrison Township","State":"MI","Category":"Fantastic Fundraiser"},
{"Donation Amount":866.6,"Meals":3.466,"Date":"7/7/14","RE":"x","name":"Family Life Bible Church","City":"Conway","State":"AR","Category":"Fantastic Fundraiser"},
{"Donation Amount":792.52,"Meals":3.170,"Date":"7/10/14","RE":"x","name":"Bethany Evangelical Congregation Church","City":"Conestoga","State":"PA","Category":"Fantastic Fundraiser"},
{"Donation Amount":525,"Meals":2.100,"Date":"7/11/14","RE":"x","name":"Bethel EFCA","City":"Washington Island","State":"WI","Category":"Fantastic Fundraiser"},
{"Donation Amount":532.56,"Meals":2.130,"Date":"7/11/14","RE":"x","name":"Potters Hand Bible Church","City":"Apex","State":"NC","Category":"Fantastic Fundraiser"},
{"Donation Amount":658.08,"Meals":2.632,"Date":"7/11/14","RE":"x","name":"Calvary Baptist Church","City":"Covington","State":"KY","Category":"Fantastic Fundraiser"},
{"Donation Amount":616.85,"Meals":2.467,"Date":"7/14/14","RE":"x","name":"Snyder Bible Church","City":"Snyder","State":"CO","Category":"Fantastic Fundraiser"},
{"Donation Amount":650,"Meals":2.600,"Date":"7/14/14","RE":"x","name":"Wawasee Heights Baptist","City":"Syracuse","State":"IN","Category":"Fantastic Fundraiser"},
{"Donation Amount":500,"Meals":2.000,"Date":"7/17/14","RE":"","name":"Quaker Baptist Church","City":"Bedford","State":"VA","Category":"Fantastic Fundraiser"},
{"Donation Amount":501,"Meals":2.004,"Date":"7/21/14","RE":"","name":"Grace EV Free Church","City":"Davenport","State":"IA","Category":"Fantastic Fundraiser"},
{"Donation Amount":500,"Meals":2.000,"Date":"7/21/14","RE":"","name":"Bethlehem Baptist Church","City":"Old Fort","State":"NC","Category":"Fantastic Fundraiser"},
{"Donation Amount":535,"Meals":2.140,"Date":"7/21/14","RE":"","name":"Evangelica Church Bermuda","City":"Paget","State":"","Category":"Fantastic Fundraiser"},
{"Donation Amount":568.55,"Meals":2.274,"Date":"7/21/14","RE":"","name":"Calvary Baptist Church","City":"Stafford","State":"KS","Category":"Fantastic Fundraiser"},
{"Donation Amount":579.39,"Meals":2.318,"Date":"7/21/14","RE":"","name":"Bark River Bible Church","City":"Bark River","State":"MI","Category":"Fantastic Fundraiser"},
{"Donation Amount":637.89,"Meals":2.552,"Date":"7/23/14","RE":"","name":"Landmark Baptist Church","City":"Greenville","State":"NC","Category":"Fantastic Fundraiser"},
{"Donation Amount":500,"Meals":2.000,"Date":"7/25/14","RE":"","name":"Hickman Community Church","City":"Hickman","State":"CA","Category":"Fantastic Fundraiser"},
{"Donation Amount":656.74,"Meals":2.627,"Date":"7/30/14","RE":"","name":"Bangor Baptist Church","City":"Bangor","State":"ME","Category":"Fantastic Fundraiser"},
{"Donation Amount":514.85,"Meals":2.059,"Date":"7/30/14","RE":"","name":"Logan Elm Baptist Church","City":"Circleville","State":"OH","Category":"Fantastic Fundraiser"},
{"Donation Amount":576.32,"Meals":2.305,"Date":"7/30/14","RE":"","name":"North Ridge Church ","City":"Falls City","State":"NE","Category":"Fantastic Fundraiser"},
{"Donation Amount":677.34,"Meals":2.709,"Date":"8/1/14","RE":"","name":"Christ Independent Methodist Church","City":"Palatka","State":"FL","Category":"Fantastic Fundraiser"},
{"Donation Amount":645.41,"Meals":2.582,"Date":"8/1/14","RE":"","name":"Memorial Bible Church","City":"Yakima","State":"WA","Category":"Fantastic Fundraiser"},
{"Donation Amount":500,"Meals":2.000,"Date":"8/4/14","RE":"","name":"House Mountain Baptist","City":"Corryton","State":"TN","Category":"Fantastic Fundraiser"},
{"Donation Amount":649.41,"Meals":2.598,"Date":"8/4/14","RE":"","name":"Parkland Reformed Church","City":"Alberta","State":"Canada","Category":"Fantastic Fundraiser"},
{"Donation Amount":721.67,"Meals":2.887,"Date":"8/4/14","RE":"","name":"Cherry Creek Community Church","City":"Portage","State":"MI","Category":"Fantastic Fundraiser"},
{"Donation Amount":730.42,"Meals":2.922,"Date":"8/4/14","RE":"","name":"First Christian Church","City":"Carmi","State":"IL","Category":"Fantastic Fundraiser"},
{"Donation Amount":597.25,"Meals":2.389,"Date":"8/11/14","RE":"","name":"Elston Family Church","City":"Lafayette","State":"IN","Category":"Fantastic Fundraiser"},
{"Donation Amount":536.89,"Meals":2.148,"Date":"8/11/14","RE":"","name":"Victory Baptist Church","City":"Buena Vista","State":"VA","Category":"Fantastic Fundraiser"},
{"Donation Amount":693,"Meals":2.772,"Date":"8/11/14","RE":"","name":"Bible Center Church","City":"Luling","State":"LA","Category":"Fantastic Fundraiser"},
{"Donation Amount":861.17,"Meals":3.445,"Date":"8/11/14","RE":"","name":"Berean Bible Church","City":"Greeneville","State":"NY","Category":"Fantastic Fundraiser"},
{"Donation Amount":892.85,"Meals":3.571,"Date":"8/11/14","RE":"","name":"New Life Church","City":"Woodland Hills","State":"CA","Category":"Fantastic Fundraiser"},
{"Donation Amount":725.47,"Meals":2.902,"Date":"8/13/14","RE":"","name":"Calvary Chapel Brighton","City":"Brighton","State":"CO","Category":"Fantastic Fundraiser"},
{"Donation Amount":500,"Meals":2.000,"Date":"8/15/14","RE":"","name":"Fayetteville Christian","City":"","State":"NC","Category":"Fantastic Fundraiser"},
{"Donation Amount":587.4,"Meals":2.350,"Date":"8/18/14","RE":"","name":"Grandview Community Bible Church","City":"Grandview","State":"IA","Category":"Fantastic Fundraiser"},
{"Donation Amount":740,"Meals":2.960,"Date":"8/18/14","RE":"","name":"St. John's Lutheran Church","City":"Midland","State":"MI","Category":"Fantastic Fundraiser"},
{"Donation Amount":937,"Meals":3.748,"Date":"8/21/14","RE":"","name":"Community Christian Church","City":"Scott City","State":"KS","Category":"Fantastic Fundraiser"},
{"Donation Amount":508,"Meals":2.032,"Date":"8/21/14","RE":"","name":"Faith Bible Baptist Church","City":"Unionville","State":"VA","Category":"Fantastic Fundraiser"},
{"Donation Amount":558,"Meals":2.232,"Date":"8/22/14","RE":"","name":"Bethany Baptist Church","City":"Louisville","State":"KY","Category":"Fantastic Fundraiser"},
{"Donation Amount":773.6,"Meals":3.094,"Date":"8/22/14","RE":"","name":"Trinity Bible Church","City":"Richardson","State":"TX","Category":"Fantastic Fundraiser"},
{"Donation Amount":512.23,"Meals":2.049,"Date":"8/25/14","RE":"","name":"Christ Community Church","City":"Sheldon","State":"WI","Category":"Fantastic Fundraiser"},
{"Donation Amount":537.17,"Meals":2.149,"Date":"8/25/14","RE":"","name":"Hillcrest","City":"Jamestown","State":"NY","Category":"Fantastic Fundraiser"},
{"Donation Amount":554.15,"Meals":2.217,"Date":"8/25/14","RE":"","name":"Kost Free Church","City":"North Branch","State":"MN","Category":"Fantastic Fundraiser"},
{"Donation Amount":650.99,"Meals":2.604,"Date":"8/25/14","RE":"","name":"Leonardtown Baptist Church","City":"Leonardtown","State":"MD","Category":"Fantastic Fundraiser"},
{"Donation Amount":651.42,"Meals":2.606,"Date":"8/25/14","RE":"","name":"Shelby Christian Church","City":"Shelbyville","State":"IL","Category":"Fantastic Fundraiser"},
{"Donation Amount":711,"Meals":2.844,"Date":"8/25/14","RE":"","name":"Eagle Valley Evangelical Free Church","City":"Christine","State":"ND","Category":"Fantastic Fundraiser"},
{"Donation Amount":964.88,"Meals":3.860,"Date":"8/25/14","RE":"","name":"First Baptist Church","City":"Fiona","State":"TX","Category":"Fantastic Fundraiser"}]
    ;
// end fantasticList

    $scope.amazingList =
[{"Donation Amount":112.5,"Meals":450,"Date":"6/10/14","RE":"x","name":"Fayetteville Assoc. Reformed Presbyterian","City":"Fayetteville","State":"TN","Category":"Amazing Ambassador"},
{"Donation Amount":400.78,"Meals":1.603,"Date":"6/16/14","RE":"x","name":"Fair River Baptist Church","City":"Brook Haven","State":"MS","Category":"Amazing Ambassador"},
{"Donation Amount":408.3,"Meals":1.633,"Date":"6/16/14","RE":"x","name":"First Baptist Church","City":"San Saba","State":"TX","Category":"Amazing Ambassador"},
{"Donation Amount":75,"Meals":300,"Date":"6/18/14","RE":"x","name":"Bethlehem Baptist Church","City":"Oneida","State":"TN","Category":"Amazing Ambassador"},
{"Donation Amount":126.7,"Meals":507,"Date":"6/18/14","RE":"x","name":"Summit Baptist Church","City":"Mount Vernon","State":"MO","Category":"Amazing Ambassador"},
{"Donation Amount":140.64,"Meals":563,"Date":"6/18/14","RE":"x","name":"First Baptist Church Grenada","City":"Grenada","State":"MS","Category":"Amazing Ambassador"},
{"Donation Amount":119.49,"Meals":478,"Date":"6/20/14","RE":"x","name":"St. Paul Free Will Baptist Church","City":"Newton Grove","State":"NC","Category":"Amazing Ambassador"},
{"Donation Amount":143,"Meals":572,"Date":"6/23/14","RE":"x","name":"Wellspring Lutheran Church","City":"Papillian","State":"NE","Category":"Amazing Ambassador"},
{"Donation Amount":318.59,"Meals":1.274,"Date":"6/23/14","RE":"x","name":"Mt. Harmony Free Will Baptist","City":"Vernon","State":"AL","Category":"Amazing Ambassador"},
{"Donation Amount":365.3,"Meals":1.461,"Date":"6/23/14","RE":"x","name":"Philadelphia Bapist Church","City":"Oneota","State":"AL","Category":"Amazing Ambassador"},
{"Donation Amount":400,"Meals":1.600,"Date":"6/23/14","RE":"x","name":"Deerfoot Baptist Church","City":"Trussville","State":"AL","Category":"Amazing Ambassador"},
{"Donation Amount":37.75,"Meals":151,"Date":"6/27/14","RE":"x","name":"Haig Baptist Church","City":"Morris","State":"AL","Category":"Amazing Ambassador"},
{"Donation Amount":150.81,"Meals":603,"Date":"6/27/14","RE":"x","name":"Ingalls Community Bible Church","City":"Ingalls","State":"KS","Category":"Amazing Ambassador"},
{"Donation Amount":160,"Meals":640,"Date":"6/27/14","RE":"x","name":"Lower High Tower Baptist Church","City":"Hiawassee","State":"GA","Category":"Amazing Ambassador"},
{"Donation Amount":183.76,"Meals":735,"Date":"6/27/14","RE":"x","name":"Gamaliel Baptist Church","City":"Gamaliel","State":"KY","Category":"Amazing Ambassador"},
{"Donation Amount":256,"Meals":1.024,"Date":"6/27/14","RE":"x","name":"Bethel Mennonite Church","City":"Hydro","State":"OK","Category":"Amazing Ambassador"},
{"Donation Amount":279.78,"Meals":1.119,"Date":"6/27/14","RE":"x","name":"Gateway Christian Church","City":"Rohnert Park","State":"CA","Category":"Amazing Ambassador"},
{"Donation Amount":320.34,"Meals":1.281,"Date":"6/27/14","RE":"x","name":"Hollandale Baptist Church","City":"Hollandale","State":"MS","Category":"Amazing Ambassador"},
{"Donation Amount":391.19,"Meals":1.565,"Date":"6/27/14","RE":"x","name":"Faith Baptist Church","City":"Winter Haven","State":"FL","Category":"Amazing Ambassador"},
{"Donation Amount":400,"Meals":1.600,"Date":"6/27/14","RE":"x","name":"First Baptist Church","City":"Distant","State":"PA","Category":"Amazing Ambassador"},
{"Donation Amount":442.98,"Meals":1.772,"Date":"6/27/14","RE":"x","name":"Commmunity Fellowship Church","City":"Lawrenceburg","State":"IN","Category":"Amazing Ambassador"},
{"Donation Amount":75.15,"Meals":301,"Date":"6/30/14","RE":"x","name":"Mt. Zion Assembly of God","City":"Mt. Zion","State":"IL","Category":"Amazing Ambassador"},
{"Donation Amount":100,"Meals":400,"Date":"6/30/14","RE":"x","name":"Liberty Baptist Church","City":"Tifton","State":"GA","Category":"Amazing Ambassador"},
{"Donation Amount":152.75,"Meals":611,"Date":"6/30/14","RE":"x","name":"Tower Hill Christian Church","City":"Tower Hill","State":"IL","Category":"Amazing Ambassador"},
{"Donation Amount":177.2,"Meals":709,"Date":"6/30/14","RE":"x","name":"Calvary Chapel East","City":"Albuquerque","State":"NM","Category":"Amazing Ambassador"},
{"Donation Amount":209.52,"Meals":838,"Date":"6/30/14","RE":"x","name":"Cassville Baptist","City":"Cartersville","State":"GA","Category":"Amazing Ambassador"},
{"Donation Amount":224,"Meals":896,"Date":"6/30/14","RE":"x","name":"Lexie Baptist Church","City":"Tylertown","State":"MS","Category":"Amazing Ambassador"},
{"Donation Amount":255.6,"Meals":1.022,"Date":"6/30/14","RE":"x","name":"Lassen Missionary Baptist Church","City":"Susanville","State":"CA","Category":"Amazing Ambassador"},
{"Donation Amount":384,"Meals":1.536,"Date":"6/30/14","RE":"x","name":"Shiloh Baptist Church","City":"Somervill","State":"AL","Category":"Amazing Ambassador"},
{"Donation Amount":445.77,"Meals":1.783,"Date":"6/30/14","RE":"x","name":"First Baptist Church Carnegie","City":"Carnegie","State":"Ok","Category":"Amazing Ambassador"},
{"Donation Amount":275,"Meals":1.100,"Date":"7/2/14","RE":"x","name":"Highland Baptist Church","City":"West Monroe","State":"LA","Category":"Amazing Ambassador"},
{"Donation Amount":305,"Meals":1.220,"Date":"7/2/14","RE":"x","name":"Riveroaks Reformed Presbyterian","City":"Germantown","State":"TN","Category":"Amazing Ambassador"},
{"Donation Amount":350.47,"Meals":1.402,"Date":"7/2/14","RE":"x","name":"First Christian Church","City":"Iola","State":"KS","Category":"Amazing Ambassador"},
{"Donation Amount":81,"Meals":324,"Date":"7/3/14","RE":"x","name":"First Baptist Church","City":"Three Mile Bay","State":"NY","Category":"Amazing Ambassador"},
{"Donation Amount":123.72,"Meals":495,"Date":"7/3/14","RE":"x","name":"New Life Fellowship","City":"Belen","State":"NM","Category":"Amazing Ambassador"},
{"Donation Amount":200,"Meals":800,"Date":"7/3/14","RE":"x","name":"First Free Will Baptist","City":"Dickson","State":"TN","Category":"Amazing Ambassador"},
{"Donation Amount":255,"Meals":1.020,"Date":"7/3/14","RE":"x","name":"Calvary Evangelical Free Church","City":"Spring Grove","State":"MN","Category":"Amazing Ambassador"},
{"Donation Amount":125.5,"Meals":502,"Date":"7/7/14","RE":"x","name":"Kittanning Free Methodist Church","City":"Kittanning","State":"PA","Category":"Amazing Ambassador"},
{"Donation Amount":154,"Meals":616,"Date":"7/7/14","RE":"x","name":"Greater Dothan Baptist Church","City":"Dothan","State":"AL","Category":"Amazing Ambassador"},
{"Donation Amount":167.75,"Meals":671,"Date":"7/7/14","RE":"x","name":"Hawk Point Baptist cHurch","City":"Hawk Point","State":"MO","Category":"Amazing Ambassador"},
{"Donation Amount":194.82,"Meals":779,"Date":"7/7/14","RE":"x","name":"Barbour Ave United Methodist","City":"Terre Haute","State":"IN","Category":"Amazing Ambassador"},
{"Donation Amount":203,"Meals":812,"Date":"7/7/14","RE":"x","name":"Oak Park Baptist ","City":"Jeffersonville","State":"IN","Category":"Amazing Ambassador"},
{"Donation Amount":215.57,"Meals":862,"Date":"7/7/14","RE":"x","name":"New Hope Presbyterian Church","City":"Green Bay ","State":"WI","Category":"Amazing Ambassador"},
{"Donation Amount":299.67,"Meals":1.199,"Date":"7/7/14","RE":"x","name":"Lakeshore Road Baptist Church","City":"Talbott","State":"TN","Category":"Amazing Ambassador"},
{"Donation Amount":300.35,"Meals":1.201,"Date":"7/7/14","RE":"x","name":"Watson Chapel Baptist","City":"Pine Bluff","State":"AR","Category":"Amazing Ambassador"},
{"Donation Amount":323.54,"Meals":1.294,"Date":"7/7/14","RE":"x","name":"Village Bible Church","City":"Hot Springs Village","State":"AR","Category":"Amazing Ambassador"},
{"Donation Amount":328.18,"Meals":1.313,"Date":"7/7/14","RE":"x","name":"First Baptist Church of Fenton","City":"Fenton","State":"MO","Category":"Amazing Ambassador"},
{"Donation Amount":328.47,"Meals":1.314,"Date":"7/7/14","RE":"x","name":"First United Methodist Church","City":"Somerset","State":"PA","Category":"Amazing Ambassador"},
{"Donation Amount":370.57,"Meals":1.482,"Date":"7/7/14","RE":"x","name":"Union Baptist Church","City":"Union","State":"OR","Category":"Amazing Ambassador"},
{"Donation Amount":400,"Meals":1.600,"Date":"7/7/14","RE":"x","name":"Berean Bible Church","City":"Fort Morgan","State":"CO","Category":"Amazing Ambassador"},
{"Donation Amount":400,"Meals":1.600,"Date":"7/7/14","RE":"x","name":"Glencoe Baptist Church","City":"New Smyrna Beach","State":"FL","Category":"Amazing Ambassador"},
{"Donation Amount":406.6,"Meals":1.626,"Date":"7/7/14","RE":"x","name":"Strassburg Baptist Church","City":"Marion","State":"KS","Category":"Amazing Ambassador"},
{"Donation Amount":407.59,"Meals":1.630,"Date":"7/7/14","RE":"x","name":"First Baptist Church","City":"Junction City","State":"AR","Category":"Amazing Ambassador"},
{"Donation Amount":415,"Meals":1.660,"Date":"7/7/14","RE":"x","name":"East Valley Church","City":"San Jose","State":"CA","Category":"Amazing Ambassador"},
{"Donation Amount":420,"Meals":1.680,"Date":"7/7/14","RE":"x","name":"First Baptist Church","City":"Newberry","State":"MI","Category":"Amazing Ambassador"},
{"Donation Amount":432.82,"Meals":1.731,"Date":"7/7/14","RE":"x","name":"Cobb's Creek Missionary Baptist Chruch","City":"Sod","State":"WV","Category":"Amazing Ambassador"},
{"Donation Amount":435,"Meals":1.740,"Date":"7/7/14","RE":"x","name":"Parkview Christian Church","City":"Wooster","State":"OH","Category":"Amazing Ambassador"},
{"Donation Amount":443,"Meals":1.772,"Date":"7/7/14","RE":"x","name":"Parrans Chapel Baptist Church","City":"Bolivar","State":"TN","Category":"Amazing Ambassador"},
{"Donation Amount":40.19,"Meals":161,"Date":"7/8/14","RE":"x","name":"St. Bernice Nazarene & Baptist Churches","City":"St. Bernice","State":"IN","Category":"Amazing Ambassador"},
{"Donation Amount":110.65,"Meals":443,"Date":"7/8/14","RE":"x","name":"Fellowship Bible Church","City":"Eden","State":"UT","Category":"Amazing Ambassador"},
{"Donation Amount":356.75,"Meals":1.427,"Date":"7/8/14","RE":"x","name":"Timberland Ringebu Free Lutheran","City":"Barronett","State":"WI","Category":"Amazing Ambassador"},
{"Donation Amount":350,"Meals":1.400,"Date":"7/10/14","RE":"x","name":"Hopewell Associate Reformed Presbyterian Church","City":"Covington","State":"GA","Category":"Amazing Ambassador"},
{"Donation Amount":25,"Meals":100,"Date":"7/11/14","RE":"x","name":"Calvary Christian Fellowship","City":"Midland","State":"TX","Category":"Amazing Ambassador"},
{"Donation Amount":103.5,"Meals":414,"Date":"7/11/14","RE":"x","name":"Refuge Christian Fellowship","City":"Crescent City","State":"CA","Category":"Amazing Ambassador"},
{"Donation Amount":113.5,"Meals":454,"Date":"7/11/14","RE":"x","name":"Colmar Manor Bible Church","City":"Colmar Manor","State":"MD","Category":"Amazing Ambassador"},
{"Donation Amount":208.56,"Meals":834,"Date":"7/11/14","RE":"x","name":"Fedonia Holiness Church","City":"Marshall","State":"MI","Category":"Amazing Ambassador"},
{"Donation Amount":234.03,"Meals":936,"Date":"7/11/14","RE":"x","name":"Walnut Grove Christian Church","City":"Arcola","State":"IL","Category":"Amazing Ambassador"},
{"Donation Amount":235.3,"Meals":941,"Date":"7/11/14","RE":"x","name":"Hewitt Community Church","City":"Hewitt","State":"TX","Category":"Amazing Ambassador"},
{"Donation Amount":169.51,"Meals":678,"Date":"7/14/14","RE":"x","name":"Taos First Baptist","City":"Taos","State":"NM","Category":"Amazing Ambassador"},
{"Donation Amount":195.78,"Meals":783,"Date":"7/14/14","RE":"x","name":"Grace Baptist Church","City":"Saginaw","State":"MI","Category":"Amazing Ambassador"},
{"Donation Amount":215,"Meals":860,"Date":"7/14/14","RE":"x","name":"Grace Bible Fellowship","City":"Bayonne","State":"NJ","Category":"Amazing Ambassador"},
{"Donation Amount":243.3,"Meals":973,"Date":"7/14/14","RE":"x","name":"First Christian Church","City":"Lawrence","State":"KS","Category":"Amazing Ambassador"},
{"Donation Amount":286.93,"Meals":1.148,"Date":"7/14/14","RE":"x","name":"Calvary Baptist Church","City":"Burley","State":"ID","Category":"Amazing Ambassador"},
{"Donation Amount":335,"Meals":1.340,"Date":"7/14/14","RE":"x","name":"Christ Church Anglican","City":"Midland","State":"TX","Category":"Amazing Ambassador"},
{"Donation Amount":459.57,"Meals":1.838,"Date":"7/14/14","RE":"x","name":"Grace Reformed Church","City":"Lansing","State":"IL","Category":"Amazing Ambassador"},
{"Donation Amount":495.83,"Meals":1.983,"Date":"7/14/14","RE":"x","name":"New Bethel Baptist Church","City":"Harrison ","State":"TN","Category":"Amazing Ambassador"},
{"Donation Amount":128.61,"Meals":514,"Date":"7/16/14","RE":"","name":"Fellowship Baptist Church","City":"La Barge","State":"WY","Category":"Amazing Ambassador"},
{"Donation Amount":252.81,"Meals":1.011,"Date":"7/16/14","RE":"","name":"Weed Berean Church","City":"Weed","State":"CA","Category":"Amazing Ambassador"},
{"Donation Amount":125,"Meals":500,"Date":"7/18/14","RE":"","name":"Faith Evangelical Church","City":"Corry","State":"PA","Category":"Amazing Ambassador"},
{"Donation Amount":135.36,"Meals":541,"Date":"7/18/14","RE":"","name":"First Southern Baptist Church of Yucca Valley","City":"Yucca Valley","State":"CA","Category":"Amazing Ambassador"},
{"Donation Amount":150,"Meals":600,"Date":"7/18/14","RE":"","name":"Winfield Church of God Mission","City":"Winfield","State":"WV","Category":"Amazing Ambassador"},
{"Donation Amount":191.5,"Meals":766,"Date":"7/18/14","RE":"","name":"Bible Baptist Church","City":"Port Orchard","State":"WA","Category":"Amazing Ambassador"},
{"Donation Amount":228.29,"Meals":913,"Date":"7/18/14","RE":"","name":"Christ Church of the Heartland","City":"Cape Girardeau","State":"MO","Category":"Amazing Ambassador"},
{"Donation Amount":318,"Meals":1.272,"Date":"7/18/14","RE":"","name":"20 Whitman Community Church","City":"Whitman","State":"WV","Category":"Amazing Ambassador"},
{"Donation Amount":377.31,"Meals":1.509,"Date":"7/18/14","RE":"","name":"Bible Baptist Church","City":"Traverse City","State":"MI","Category":"Amazing Ambassador"},
{"Donation Amount":447.3,"Meals":1.789,"Date":"7/18/14","RE":"","name":"Judson Baptist Church","City":"Fayetteville","State":"NC","Category":"Amazing Ambassador"},
{"Donation Amount":90.66,"Meals":363,"Date":"7/21/14","RE":"","name":"Mill Creek Baptist","City":"Fort McCoy","State":"FL","Category":"Amazing Ambassador"},
{"Donation Amount":183.56,"Meals":734,"Date":"7/21/14","RE":"","name":"Central the Church on the Hill","City":"University Place","State":"WA","Category":"Amazing Ambassador"},
{"Donation Amount":401.58,"Meals":1.606,"Date":"7/21/14","RE":"","name":"Faith Bible Church","City":"Lawton","State":"OK","Category":"Amazing Ambassador"},
{"Donation Amount":455.1,"Meals":1.820,"Date":"7/21/14","RE":"","name":"Bethel Baptist Church","City":"Marquette","State":"MI","Category":"Amazing Ambassador"},
{"Donation Amount":130,"Meals":520,"Date":"7/23/14","RE":"","name":"Grace Bible Church of Cedar Ridge","City":"Cedar Ridge","State":"CA","Category":"Amazing Ambassador"},
{"Donation Amount":226,"Meals":904,"Date":"7/23/14","RE":"","name":"High View Baptist Church","City":"Roxboro","State":"NC","Category":"Amazing Ambassador"},
{"Donation Amount":249,"Meals":996,"Date":"7/23/14","RE":"","name":"Holiday Island Community Church","City":"Holiday Island","State":"AR","Category":"Amazing Ambassador"},
{"Donation Amount":420.44,"Meals":1.682,"Date":"7/23/14","RE":"","name":"Westview Baptist Church","City":"Hawkinsville","State":"GA","Category":"Amazing Ambassador"},
{"Donation Amount":68.5,"Meals":274,"Date":"7/25/14","RE":"","name":"The Refuge","City":"Bradenton","State":"FL","Category":"Amazing Ambassador"},
{"Donation Amount":90.28,"Meals":361,"Date":"7/25/14","RE":"","name":"Edgewood Community Church","City":"Waupun","State":"WI","Category":"Amazing Ambassador"},
{"Donation Amount":100,"Meals":400,"Date":"7/25/14","RE":"","name":"Charity Missionary Baptist","City":"Indianapolis","State":"IN","Category":"Amazing Ambassador"},
{"Donation Amount":112.76,"Meals":451,"Date":"7/25/14","RE":"","name":"Grace Lutheran","City":"Omro","State":"WI","Category":"Amazing Ambassador"},
{"Donation Amount":147.62,"Meals":590,"Date":"7/25/14","RE":"","name":"First Baptist Church Amery","City":"Amery","State":"WI","Category":"Amazing Ambassador"},
{"Donation Amount":155.76,"Meals":623,"Date":"7/25/14","RE":"","name":"Landmark Baptist Church","City":"Anderson","State":"IN","Category":"Amazing Ambassador"},
{"Donation Amount":174,"Meals":696,"Date":"7/25/14","RE":"","name":"Sovereign Grace Fellowship","City":"Nampa","State":"ID","Category":"Amazing Ambassador"},
{"Donation Amount":193,"Meals":772,"Date":"7/25/14","RE":"","name":"Calvary Baptist Church","City":"Cleveland","State":"MS","Category":"Amazing Ambassador"},
{"Donation Amount":270,"Meals":1.080,"Date":"7/25/14","RE":"","name":"Grace Community Church","City":"Marion","State":"IN","Category":"Amazing Ambassador"},
{"Donation Amount":286.6,"Meals":1.146,"Date":"7/25/14","RE":"","name":"Grace Evangelical Free Church","City":"Cincinnati","State":"OH","Category":"Amazing Ambassador"},
{"Donation Amount":311,"Meals":1.244,"Date":"7/25/14","RE":"","name":"Calvary Baptist Church","City":"Fayetteville","State":"AL","Category":"Amazing Ambassador"},
{"Donation Amount":455.75,"Meals":1.823,"Date":"7/25/14","RE":"","name":"Friedens Reformed Church","City":"Tripp","State":"SD","Category":"Amazing Ambassador"},
{"Donation Amount":487.66,"Meals":1.951,"Date":"7/25/14","RE":"","name":"New Hopedale Mennonite Church","City":"Meno","State":"OK","Category":"Amazing Ambassador"},
{"Donation Amount":407.15,"Meals":1.629,"Date":"7/25/14","RE":"","name":"Sharon Baptist Church","City":"McDonough","State":"GA","Category":"Amazing Ambassador"},
{"Donation Amount":373,"Meals":1.492,"Date":"7/30/14","RE":"","name":"Hillsboro Free Methodist","City":"Hillsboro","State":"IL","Category":"Amazing Ambassador"},
{"Donation Amount":170,"Meals":680,"Date":"7/30/14","RE":"","name":"Cranmore Cove Baptist","City":"Dayton","State":"TN","Category":"Amazing Ambassador"},
{"Donation Amount":120.82,"Meals":483,"Date":"7/30/14","RE":"","name":"Tusculum Baptist Church","City":"Greeneville","State":"TN","Category":"Amazing Ambassador"},
{"Donation Amount":143,"Meals":572,"Date":"7/30/14","RE":"","name":"Grace Reformed Presbyterian","City":"Relay","State":"MD","Category":"Amazing Ambassador"},
{"Donation Amount":184.64,"Meals":739,"Date":"7/30/14","RE":"","name":"West Broad Street Baptist","City":"Tampa","State":"FL","Category":"Amazing Ambassador"},
{"Donation Amount":200.24,"Meals":801,"Date":"7/30/14","RE":"","name":"Calvary Chapel Greece","City":"Rochester ","State":"NY","Category":"Amazing Ambassador"},
{"Donation Amount":205.25,"Meals":821,"Date":"7/30/14","RE":"","name":"New River Assembly of God","City":"Red Wing","State":"MN","Category":"Amazing Ambassador"},
{"Donation Amount":262.64,"Meals":1.051,"Date":"7/30/14","RE":"","name":"Combie Bible Church","City":"Grass Valley","State":"CA","Category":"Amazing Ambassador"},
{"Donation Amount":301.8,"Meals":1.207,"Date":"7/30/14","RE":"","name":"Lake East Christian Church","City":"Kirkland","State":"WA","Category":"Amazing Ambassador"},
{"Donation Amount":370,"Meals":1.480,"Date":"7/30/14","RE":"","name":"Christ the King","City":"Bellevue","State":"WA","Category":"Amazing Ambassador"},
{"Donation Amount":370,"Meals":1.480,"Date":"7/30/14","RE":"","name":"Eastview Baptist Church","City":"Belleville","State":"IL","Category":"Amazing Ambassador"},
{"Donation Amount":226.31,"Meals":905,"Date":"8/1/14","RE":"","name":"Mission Boulevard Baptist Church","City":"Fayetteville","State":"AR","Category":"Amazing Ambassador"},
{"Donation Amount":100.9,"Meals":404,"Date":"8/1/14","RE":"","name":"Restoration Fellowship Church","City":"Strasburg","State":"VA","Category":"Amazing Ambassador"},
{"Donation Amount":110,"Meals":440,"Date":"8/1/14","RE":"","name":"Bucksport Bible Church","City":"Bucksport","State":"ME","Category":"Amazing Ambassador"},
{"Donation Amount":117,"Meals":468,"Date":"8/1/14","RE":"","name":"Calvary Chapel Desert Hills","City":"Phoenix","State":"AZ","Category":"Amazing Ambassador"},
{"Donation Amount":120,"Meals":480,"Date":"8/1/14","RE":"","name":"Christ Church United Methodist","City":"Beacon","State":"NY","Category":"Amazing Ambassador"},
{"Donation Amount":232.42,"Meals":930,"Date":"8/1/14","RE":"","name":"Demossville Baptist Church","City":"Demossville","State":"KY","Category":"Amazing Ambassador"},
{"Donation Amount":298.25,"Meals":1.193,"Date":"8/1/14","RE":"","name":"Neighborhood Church of God","City":"Nineveh","State":"IN","Category":"Amazing Ambassador"},
{"Donation Amount":365.76,"Meals":1.463,"Date":"8/1/14","RE":"","name":"Calvary Missionary Baptist","City":"Rising Sun","State":"MD","Category":"Amazing Ambassador"},
{"Donation Amount":407.68,"Meals":1.631,"Date":"8/1/14","RE":"","name":"Mottville Bible Church","City":"White Pigeon","State":"MI","Category":"Amazing Ambassador"},
{"Donation Amount":55.25,"Meals":221,"Date":"8/4/14","RE":"","name":"New Life Baptist Church","City":"Nicholson","State":"MS","Category":"Amazing Ambassador"},
{"Donation Amount":120.85,"Meals":483,"Date":"8/4/14","RE":"","name":"West Madison Bible Church","City":"Verona","State":"WI","Category":"Amazing Ambassador"},
{"Donation Amount":146.5,"Meals":586,"Date":"8/4/14","RE":"","name":"Rome Community Sunday School","City":"Shiloh","State":"OH","Category":"Amazing Ambassador"},
{"Donation Amount":156.56,"Meals":626,"Date":"8/4/14","RE":"","name":"Bethany Baptist Church","City":"Bethany","State":"LA","Category":"Amazing Ambassador"},
{"Donation Amount":170,"Meals":680,"Date":"8/4/14","RE":"","name":"The Journey","City":"Tiffin","State":"OH ","Category":"Amazing Ambassador"},
{"Donation Amount":175.54,"Meals":702,"Date":"8/4/14","RE":"","name":"Sweetwater Church of the Nazarene","City":"Sweetwater","State":"TN","Category":"Amazing Ambassador"},
{"Donation Amount":313.77,"Meals":1.255,"Date":"8/4/14","RE":"","name":"Gracelife Baptist Church","City":"Christiansburg","State":"VA","Category":"Amazing Ambassador"},
{"Donation Amount":355.71,"Meals":1.423,"Date":"8/4/14","RE":"","name":"Grace Fellowship Church","City":"Spearfish","State":"SD","Category":"Amazing Ambassador"},
{"Donation Amount":492.04,"Meals":1.968,"Date":"8/4/14","RE":"","name":"Brightside Community Church","City":"Caledonia","State":"MI","Category":"Amazing Ambassador"},
{"Donation Amount":50,"Meals":200,"Date":"8/11/14","RE":"","name":"The Potter's House Baptist Church","City":"Bucyrus","State":"OH","Category":"Amazing Ambassador"},
{"Donation Amount":60,"Meals":240,"Date":"8/7/14","RE":"","name":"Grace Bible Fellowship","City":"Bayonne","State":"NJ","Category":"Amazing Ambassador"},
{"Donation Amount":175,"Meals":700,"Date":"8/11/14","RE":"","name":"Zion Bethel Church","City":"Monticello","State":"IN","Category":"Amazing Ambassador"},
{"Donation Amount":181,"Meals":724,"Date":"8/11/14","RE":"","name":"Immanuel Lutheran Church","City":"Fairmont","State":"MN","Category":"Amazing Ambassador"},
{"Donation Amount":248.41,"Meals":994,"Date":"8/11/14","RE":"","name":"First Baptist Upper Burrell","City":"Upper Burrell","State":"PA","Category":"Amazing Ambassador"},
{"Donation Amount":330,"Meals":1.320,"Date":"8/11/14","RE":"","name":"St. Paul Evangelical Lutheran Church","City":"Wartburg","State":"TN","Category":"Amazing Ambassador"},
{"Donation Amount":171.57,"Meals":686,"Date":"8/11/14","RE":"","name":"Fowler Community Church","City":"Fowler","State":"OH","Category":"Amazing Ambassador"},
{"Donation Amount":60,"Meals":240,"Date":"8/11/14","RE":"","name":"Scotts Grove Baptist Church","City":"Murray","State":"KY","Category":"Amazing Ambassador"},
{"Donation Amount":106.82,"Meals":427,"Date":"8/11/14","RE":"","name":"Molalla Christian Church","City":"Molalla","State":"OR","Category":"Amazing Ambassador"},
{"Donation Amount":128.5,"Meals":514,"Date":"8/11/14","RE":"","name":"Antiquity Baptist Church","City":"Racine","State":"OH","Category":"Amazing Ambassador"},
{"Donation Amount":237.5,"Meals":950,"Date":"8/11/14","RE":"","name":"Henrietta United Methodist Church and Birmingham United Methodist Church","City":"Wakman","State":"OH","Category":"Amazing Ambassador"},
{"Donation Amount":232.42,"Meals":930,"Date":"8/11/14","RE":"","name":"Pinehurst Baptist Church","City":"Ball","State":"LA","Category":"Amazing Ambassador"},
{"Donation Amount":251.05,"Meals":1.004,"Date":"8/11/14","RE":"","name":"Cedar Hill Baptist Church","City":"Aztec","State":"NM","Category":"Amazing Ambassador"},
{"Donation Amount":270.69,"Meals":1.083,"Date":"8/11/14","RE":"","name":"Crossroads Baptist Church","City":"Imalay City","State":"MI","Category":"Amazing Ambassador"},
{"Donation Amount":338,"Meals":1.352,"Date":"8/11/14","RE":"","name":"Grace United Methodist","City":"Brooklyn","State":"IA","Category":"Amazing Ambassador"},
{"Donation Amount":351.09,"Meals":1.404,"Date":"8/11/14","RE":"","name":"Meridian Church of God","City":"Sanford","State":"MI","Category":"Amazing Ambassador"},
{"Donation Amount":490.23,"Meals":1.961,"Date":"8/11/14","RE":"","name":"Waterville Baptist Church","City":"Cleveland","State":"TN","Category":"Amazing Ambassador"},
{"Donation Amount":7.32,"Meals":29,"Date":"8/13/14","RE":"","name":"Boulevard Baptist Church","City":"Coolidge","State":"AZ","Category":"Amazing Ambassador"},
{"Donation Amount":432,"Meals":1.728,"Date":"8/13/14","RE":"","name":"Evergreen Baptist Church","City":"Shoreline","State":"WA","Category":"Amazing Ambassador"},
{"Donation Amount":104,"Meals":416,"Date":"8/13/14","RE":"","name":"Gladwin Free Methodist Church","City":"Gladwin","State":"MI","Category":"Amazing Ambassador"},
{"Donation Amount":184,"Meals":736,"Date":"8/13/14","RE":"","name":"Indian Hill Baptist","City":"Bluffton","State":"SC","Category":"Amazing Ambassador"},
{"Donation Amount":438.6,"Meals":1.754,"Date":"8/15/14","RE":"","name":"Bethlehem Lutheran Church","City":"Granada Hills","State":"CA","Category":"Amazing Ambassador"},
{"Donation Amount":475,"Meals":1.900,"Date":"8/15/14","RE":"","name":"Calvary Bible Chapel","City":"Hunlock Creek","State":"PA","Category":"Amazing Ambassador"},
{"Donation Amount":229.83,"Meals":919,"Date":"8/15/14","RE":"","name":"Community Evangelical Free Church","City":"Niles","State":"MI","Category":"Amazing Ambassador"},
{"Donation Amount":358,"Meals":1.432,"Date":"8/15/14","RE":"","name":"Hopewell Freewill Baptist Church","City":"Mountain Grove","State":"MO","Category":"Amazing Ambassador"},
{"Donation Amount":103,"Meals":412,"Date":"8/15/14","RE":"","name":"Living Love Church","City":"East Peoria","State":"IL","Category":"Amazing Ambassador"},
{"Donation Amount":378.75,"Meals":1.515,"Date":"8/15/14","RE":"","name":"Trinity United Methodist","City":"West Frankfort","State":"IL","Category":"Amazing Ambassador"},
{"Donation Amount":100,"Meals":400,"Date":"8/18/14","RE":"","name":"Antioch Baptist","City":"Hannibal","State":"MO","Category":"Amazing Ambassador"},
{"Donation Amount":364.47,"Meals":1.458,"Date":"8/18/14","RE":"","name":"Berean Baptist Church","City":"Guilderland Center","State":"NY","Category":"Amazing Ambassador"},
{"Donation Amount":191.84,"Meals":767,"Date":"8/18/14","RE":"","name":"Congregational Christian Church","City":"Winchester","State":"IN","Category":"Amazing Ambassador"},
{"Donation Amount":240,"Meals":960,"Date":"8/18/14","RE":"","name":"Derby United Methodist Church and Five Points United Methodist Church ","City":"Orient","State":"OH","Category":"Amazing Ambassador"},
{"Donation Amount":364.33,"Meals":1.457,"Date":"8/18/14","RE":"","name":"Lacomb First Baptist Church","City":"Lebanon","State":"OR","Category":"Amazing Ambassador"},
{"Donation Amount":294.95,"Meals":1.180,"Date":"8/18/14","RE":"","name":"New Hope Evangelical Free Church","City":"Mount Horeb","State":"WI","Category":"Amazing Ambassador"},
{"Donation Amount":70.39,"Meals":282,"Date":"8/18/14","RE":"","name":"Woodland Wesleyan Church","City":"Danbury","State":"WI","Category":"Amazing Ambassador"},
{"Donation Amount":292.41,"Meals":1.170,"Date":"8/19/14","RE":"","name":"Calvary Chapel Yelm","City":"Yelm","State":"WA","Category":"Amazing Ambassador"},
{"Donation Amount":44.86,"Meals":179,"Date":"8/19/14","RE":"","name":"Christian Community Church","City":"Gibsonia","State":"PA","Category":"Amazing Ambassador"},
{"Donation Amount":139.59,"Meals":558,"Date":"8/19/14","RE":"","name":"Dorseyville Alliance Church","City":"Pittsburgh","State":"PA","Category":"Amazing Ambassador"},
{"Donation Amount":200,"Meals":800,"Date":"8/21/14","RE":"","name":"Crossroad Assembly of God","City":"Elmhurst","State":"PA","Category":"Amazing Ambassador"},
{"Donation Amount":273.09,"Meals":1.092,"Date":"8/21/14","RE":"","name":"Emmanuel Baptist Church","City":"Sterling","State":"CO","Category":"Amazing Ambassador"},
{"Donation Amount":274,"Meals":1.096,"Date":"8/21/14","RE":"","name":"Faith Baptist Church","City":"Moulton","State":"AL","Category":"Amazing Ambassador"},
{"Donation Amount":178.13,"Meals":713,"Date":"8/21/14","RE":"","name":"First Baptist Church","City":"Forest Hills","State":"KY","Category":"Amazing Ambassador"},
{"Donation Amount":101,"Meals":404,"Date":"8/21/14","RE":"","name":"Grace Baptist Church","City":"Somerset Center","State":"MI","Category":"Amazing Ambassador"},
{"Donation Amount":210,"Meals":840,"Date":"8/21/14","RE":"","name":"Life in Christ Fellowship","City":"W. Jefferson","State":"OH","Category":"Amazing Ambassador"},
{"Donation Amount":125,"Meals":500,"Date":"8/21/14","RE":"","name":"Medway Baptist Church","City":"Medway","State":"OH","Category":"Amazing Ambassador"},
{"Donation Amount":294,"Meals":1.176,"Date":"8/22/14","RE":"","name":"Berean Baptist Church","City":"Brunswick","State":"ME","Category":"Amazing Ambassador"},
{"Donation Amount":1.05,"Meals":4,"Date":"8/22/14","RE":"","name":"Cedar Hill Baptist Church","City":"Aztec","State":"NM","Category":"Amazing Ambassador"},
{"Donation Amount":350,"Meals":1.400,"Date":"8/25/14","RE":"","name":"Berean Dunkard Brethren Church","City":"Peru","State":"IN","Category":"Amazing Ambassador"},
{"Donation Amount":396.9,"Meals":1.588,"Date":"8/25/14","RE":"","name":"First Baptist Church of Lacombe","City":"Lacombe","State":"LA","Category":"Amazing Ambassador"},
{"Donation Amount":456.09,"Meals":1.824,"Date":"8/25/14","RE":"","name":"New Harmony PCA","City":"Alcolu","State":"SC","Category":"Amazing Ambassador"},
{"Donation Amount":338,"Meals":1.352,"Date":"8/25/14","RE":"","name":"Prairieview Covenant","City":"New Richmond","State":"WI","Category":"Amazing Ambassador"}]
    ;

    // defaults

    $scope.incredible = false;
    $scope.fantastic = false;
    $scope.amazing = false;


    $scope.showSection = function(sectionToShow) {
      if (sectionToShow === 'incredible') {

        $scope.incredible = true;
        $scope.fantastic = false;
        $scope.amazing = false;
        $('#incredible').toggleClass('animated pulse');
        $('#downArrow').removeClass('hidden').addClass('animated bounce');





      } else if (sectionToShow === 'fantastic') {


        $scope.incredible = false;
        $scope.fantastic = true;
        $scope.amazing = false;
        $('#downArrow').removeClass('hidden').addClass('animated bounce');

        $('#fantastic').toggleClass('animated pulse');

      } else {

        $scope.incredible = false;
        $scope.fantastic = false;
        $scope.amazing = true;
        $('#amazing').toggleClass('animated pulse');

        $('#downArrow').removeClass('hidden').addClass('animated bounce');

      }

    };


    // (function($) {
    //   $.fn.countTo = function(options) {
    //     // merge the default plugin settings with the custom options
    //     options = $.extend({}, $.fn.countTo.defaults, options || {});
    //
    //     // how many times to update the value, and how much to increment the value on each update
    //     var loops = Math.ceil(options.speed / options.refreshInterval),
    //       increment = (options.to - options.from) / loops;
    //
    //     return $(this).each(function() {
    //       var _this = this,
    //         loopCount = 0,
    //         value = options.from,
    //         interval = setInterval(updateTimer, options.refreshInterval);
    //
    //       function updateTimer() {
    //         value += increment;
    //         loopCount++;
    //         $(_this).html(value.toFixed(options.decimals));
    //
    //         if (typeof(options.onUpdate) == 'function') {
    //           options.onUpdate.call(_this, value);
    //         }
    //
    //         if (loopCount >= loops) {
    //           clearInterval(interval);
    //           value = options.to;
    //
    //           if (typeof(options.onComplete) == 'function') {
    //             options.onComplete.call(_this, value);
    //           }
    //         }
    //       }
    //     });
    //   };
    //
    //   $.fn.countTo.defaults = {
    //     from: 0, // the number the element should start at
    //     to: 100, // the number the element should end at
    //     speed: 1000, // how long it should take to count between the target numbers
    //     refreshInterval: 100, // how often the element should be updated
    //     decimals: 0, // the number of decimal places to show
    //     onUpdate: null, // callback method for every time the element is updated,
    //     onComplete: null, // callback method for when the element finishes updating
    //   };
    // })(jQuery);
    //
    // jQuery(function($) {
    //   $('.timer').countTo({
    //     from: 0,
    //     to: 84353,
    //     speed: 300,
    //     refreshInterval: 1,
    //     onComplete: function(value) {
    //       console.debug(this);
    //     }
    //   });
    // });



    // end controller
  });
