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

[{"name":"Santa Fe Christian","city":"Santa Fe","State":"TX","Category":"Incredible Investor","description":"Santa Fe kids knocked it out of the park with their incredible fundraising skills. They gathered enough quarters for 4,300 nutritious meals for malnourished kids around the world."},
{"name":"West Missionary Church with Berne Evangelical Church","city":"Berne","State":"IN","Category":"Incredible Investor","description":"Kids from two churches in Berne teamed up to raise an incredible 7,058 meals for suffering kids all over the world. They accepted the mission to deliver hope!"},
{"name":"West Jackson Street Baptist Church","city":"Tupelo","State":"MS","Category":"Incredible Investor","description":"The kids at West Jackson Street Baptist Church pushed themselves to the limit raising quarters for hungry kids. Altogether, they provided 4,224 meals!"},
{"name":"Bloomingdale Alliance Church","city":"Bloomingdale","State":"GA","Category":"Incredible Investor","description":"Don't count out Georgia! When Bloomingdale Alliance Church asked their VBS kids to help, they delivered! Together they raised 6,031 meals for the hungry."},
{"name":"Berean Baptist Church","city":"Pickerington","State":"OH","Category":"Incredible Investor","description":"What a great group of kids! The VBS at Berean Baptist Church took their missions moment up to a whole new level by providing 6,000 meals for the poor!"},
{"name":"Hanover EPC","city":"Clinton","State":"PA","Category":"Incredible Investor","description":"The kids of Clinton got to work and brought in 4,000 quarters to buy meals for children in need. Thank you Hanover EPC. You accomplished your mission to deliver hope!"},
{"name":"River Hills Baptist Church","city":"Moore","State":"SC","Category":"Incredible Investor","description":"River Hills Baptist Church checked in with our first Incredible Investors from South Carolina. Their VBS kids raised an amazing 5,692 meals for hungry children."},
{"name":"Monclova Road Baptist Church","city":"Monclova","State":"OH","Category":"Incredible Investor","description":"Way to go Ohio! The kids at Monclova Road Baptist Church took the mission to heart raising 5,692 meals through their VBS missions moment. Thank you!"},
{"name":"College Acres Baptist","city":"Wilmington","State":"NC","Category":"Incredible Investor","description":"They came, they saw, they conquered! The VBS kids at College Acres Baptist went to their families, neighbors, and friends for help and they got it. 6,598 meals in all!"},
{"name":"Salem Lutheran Church","city":"Salem","State":"IL","Category":"Incredible Investor","description":"It didn't take long for the kids of Salem Lutheran to kick into high gear. When they asked their friends and families to help kids in need, they raised 4,495 meals in a snap!"},
{"name":"Liberty Christian Fellowship","city":"Liberty ","State":"MO","Category":"Incredible Investor","description":"The town of Liberty didn't know what hit them when the Liberty Christian Fellowship kids started fundraising for Mission:Deliver Hope. They provided 5,617 meals!"},
{"name":"Harbour Shores Church","city":"Cicero","State":"IN","Category":"Incredible Investor","description":"The VBS kids at Harbour Shores weren't messing around. They showed their passion for the hurting by raising 10,178 meals for hungry kids. We think that's awesome!"},
{"name":"Shady Grove Baptist Church","city":"Belton","State":"SC","Category":"Incredible Investor","description":"Nothing shady here! The kids at Shady Grove made a serious dent in the hunger problem by providing 4,483 meals in one week of VBS. Can you say 'deliver hope?'"},
{"name":"Bethel Missionary Baptist","city":"Bethel","State":"OK","Category":"Incredible Investor","description":"We knew they could do it… and do it well! The kids at Bethel Missionary Baptist accepted the mission with gusto! Altogether, they raised 7,522 meals for hungry kids."},
{"name":"Christ's Wesleyan Church","city":"Egg Harbor City","State":"NJ","Category":"Incredible Investor","description":"New Jersey may be a small, but their hearts are big! The kids at Christ's Wesleyan Church showed their love for helping the hungry by raising enough money for 4,000 meals! Way to go! "},
{"name":"Woodland Community Church","city":"Westboro","State":"WI","Category":"Incredible Investor","description":"The VBS kids at Woodland Community Church knocked Mission:Deliver Hope out of the park! Together they raised enough money for 4,060 meals! Good job!"},
{"name":"Carson Springs Baptist Church","city":"Sandy Hook","State":"MS","Category":"Incredible Investor","description":"Mississippi is not just home to a river, but also to Carson Springs Baptist Church who helped crush Mission: Deliver Hope by raising 4,864 meals for hungery children! Way to show the love!"},
{"name":"Campbellsport Alliance Church","city":"Campbellsport","State":"WI","Category":"Incredible Investor","description":"Campbellsport Alliance seriously delivered hope as they raised over 6,000 meals for other children in need! Way to go above and beyond!"},
{"name":"Coronado Baptist Church","city":"El Paso","State":"TX","Category":"Incredible Investor","description":"The kids at Coronado Baptist Church didn't pass up the opportunity to deliver hope as they brought in all their quarters to raise 4,826 meals for the hungry. Thank you!"},
{"name":"New Beginnings Youth Group","city":"Bridgewater","State":"VA","Category":"Incredible Investor","description":"Don't look down on this group of kids from Bridgewater, Virgina! They put their minds to helping the hungry and they delivered by raising 4,542 meals! Way to help bring a new beginning for others! "},
{"name":"Calvary Bible Church","city":"Burbank","State":"CA","Category":"Incredible Investor","description":"What a blessing! The kids at Calvary Bible Church brought in their pocket change to raise 5,600 meals to help in Mission: Deliver Hope. Thank you!"},
{"name":"Founders Baptist Church","city":"Spring","State":"TX","Category":"Incredible Investor","description":"The VBS kids at Founder's Baptist Church didn't disappoint when given Mission: Deliver Hope! They helped bring in enough quarters for 5,063 meals. Way to go! "},
{"name":"Harvest Bible Church","city":"Cypress","State":"TX","Category":"Incredible Investor","description":"At Harvest Bible Church the kids know what they're doing. They raised 4,088 meals at their VBS. And each meal will be delivered by a local church. Awesome!"}]
;
// end incredibleList

    $scope.fantasticList =

  [{"name":"Old Saline Baptist Church","city":"Castor","State":"LA"},
{"name":"Temple Baptist Church","city":"Blue Ridge","State":"GA"},
{"name":"Philippi Baptist Church","city":"Union","State":"SC"},
{"name":"Crosspointe Baptist Church","city":"Millington","State":"TN"},
{"name":"Cedar Valley Community Church","city":"Watherloo","State":"IA"},
{"name":"Utopia Baptist Church","city":"Big Cabin","State":"OK"},
{"name":"New Market Baptist Church","city":"Greenwood","State":"SC"},
{"name":"Post Oak Baptist Church","city":"Russellville","State":"KY"},
{"name":"Full Gospel Assembly","city":"Canby","State":"MN"},
{"name":"Lake Sarah Baptist Church","city":"Slayton ","State":"MN"},
{"name":"Salem United Methodist Church","city":"Selbyville","State":"DE"},
{"name":"Plevna Community Bible Church","city":"Plevna","State":"KS"},
{"name":"Morningside Baptist Church","city":"Valdosta","State":"GA"},
{"name":"First Baptist Church","city":"Duncan","State":"AZ"},
{"name":"Faith Baptist Church","city":"Elida","State":"OH"},
{"name":"Fishhook UB Church","city":"Bayliss","State":"IL"},
{"name":"First Baptist Church","city":"Spartansburg","State":"PA"},
{"name":"Lake Houston Church of the Nazarene","city":"Humble","State":"TX"},
{"name":"Kings Mills Baptist Church","city":"Kings Mills","State":"OH"},
{"name":"Knox Presbyterian Church","city":"Harrison Township","State":"MI"},
{"name":"Family Life Bible Church","city":"Conway","State":"AR"},
{"name":"Bethany Evangelical Congregation Church","city":"Conestoga","State":"PA"},
{"name":"Bethel EFCA","city":"Washington Island","State":"WI"},
{"name":"Potters Hand Bible Church","city":"Apex","State":"NC"},
{"name":"Calvary Baptist Church","city":"Covington","State":"KY"},
{"name":"Snyder Bible Church","city":"Snyder","State":"CO"},
{"name":"Wawasee Heights Baptist","city":"Syracuse","State":"IN"},
{"name":"Quaker Baptist Church","city":"Bedford","State":"VA"},
{"name":"Grace EV Free Church","city":"Davenport","State":"IA"},
{"name":"Bethlehem Baptist Church","city":"Old Fort","State":"NC"},
{"name":"Evangelica Church Bermuda","city":"Paget","State":""},
{"name":"Calvary Baptist Church","city":"Stafford","State":"KS"},
{"name":"Bark River Bible Church","city":"Bark River","State":"MI"},
{"name":"Landmark Baptist Church","city":"Greenville","State":"NC"},
{"name":"Hickman Community Church","city":"Hickman","State":"CA"},
{"name":"Bangor Baptist Church","city":"Bangor","State":"ME"},
{"name":"Logan Elm Baptist Church","city":"Circleville","State":"OH"},
{"name":"North Ridge Church ","city":"Falls City","State":"NE"},
{"name":"Christ Independent Methodist Church","city":"Palatka","State":"FL"},
{"name":"Memorial Bible Church","city":"Yakima","State":"WA"},
{"name":"House Mountain Baptist","city":"Corryton","State":"TN"},
{"name":"Parkland Reformed Church","city":"Alberta","State":"Canada"},
{"name":"Cherry Creek Community Church","city":"Portage","State":"MI"},
{"name":"First Christian Church","city":"Carmi","State":"IL"},
{"name":"Elston Family Church","city":"Lafayette","State":"IN"},
{"name":"Victory Baptist Church","city":"Buena Vista","State":"VA"},
{"name":"Bible Center Church","city":"Luling","State":"LA"},
{"name":"Berean Bible Church","city":"Greeneville","State":"NY"},
{"name":"New Life Church","city":"Woodland Hills","State":"CA"},
{"name":"Calvary Chapel Brighton","city":"Brighton","State":"CO"},
{"name":"Fayetteville Christian","city":"","State":"NC"},
{"name":"Grandview Community Bible Church","city":"Grandview","State":"IA"},
{"name":"St. John's Lutheran Church","city":"Midland","State":"MI"},
{"name":"Community Christian Church","city":"Scott City","State":"KS"},
{"name":"Faith Bible Baptist Church","city":"Unionville","State":"VA"},
{"name":"Bethany Baptist Church","city":"Louisville","State":"KY"},
{"name":"Trinity Bible Church","city":"Richardson","State":"TX"},
{"name":"Christ Community Church","city":"Sheldon","State":"WI"},
{"name":"Hillcrest","city":"Jamestown","State":"NY"},
{"name":"Kost Free Church","city":"North Branch","State":"MN"},
{"name":"Leonardtown Baptist Church","city":"Leonardtown","State":"MD"},
{"name":"Shelby Christian Church","city":"Shelbyville","State":"IL"},
{"name":"Eagle Valley Evangelical Free Church","city":"Christine","State":"ND"},
{"name":"First Baptist Church","city":"Fiona","State":"TX"},
{"name":"Our Savior Lutheran Church","city":"Eagle River","State":"WI"},
{"name":"Shore Life Church","city":"Huntington Beach","State":"CA"},
{"name":"Trinity Baptist Church","city":"Jonesborough","State":"TN"}]
    ;
// end fantasticList

    $scope.amazingList =
[{"name":"Fayetteville Assoc. Reformed Presbyterian","city":"Fayetteville","State":"TN"},
{"name":"Fair River Baptist Church","city":"Brook Haven","State":"MS"},
{"name":"First Baptist Church","city":"San Saba","State":"TX"},
{"name":"Bethlehem Baptist Church","city":"Oneida","State":"TN"},
{"name":"Summit Baptist Church","city":"Mount Vernon","State":"MO"},
{"name":"First Baptist Church Grenada","city":"Grenada","State":"MS"},
{"name":"St. Paul Free Will Baptist Church","city":"Newton Grove","State":"NC"},
{"name":"Wellspring Lutheran Church","city":"Papillian","State":"NE"},
{"name":"Mt. Harmony Free Will Baptist","city":"Vernon","State":"AL"},
{"name":"Philadelphia Bapist Church","city":"Oneota","State":"AL"},
{"name":"Deerfoot Baptist Church","city":"Trussville","State":"AL"},
{"name":"Haig Baptist Church","city":"Morris","State":"AL"},
{"name":"Ingalls Community Bible Church","city":"Ingalls","State":"KS"},
{"name":"Lower High Tower Baptist Church","city":"Hiawassee","State":"GA"},
{"name":"Gamaliel Baptist Church","city":"Gamaliel","State":"KY"},
{"name":"Bethel Mennonite Church","city":"Hydro","State":"OK"},
{"name":"Gateway Christian Church","city":"Rohnert Park","State":"CA"},
{"name":"Hollandale Baptist Church","city":"Hollandale","State":"MS"},
{"name":"Faith Baptist Church","city":"Winter Haven","State":"FL"},
{"name":"First Baptist Church","city":"Distant","State":"PA"},
{"name":"Commmunity Fellowship Church","city":"Lawrenceburg","State":"IN"},
{"name":"Mt. Zion Assembly of God","city":"Mt. Zion","State":"IL"},
{"name":"Liberty Baptist Church","city":"Tifton","State":"GA"},
{"name":"Tower Hill Christian Church","city":"Tower Hill","State":"IL"},
{"name":"Calvary Chapel East","city":"Albuquerque","State":"NM"},
{"name":"Cassville Baptist","city":"Cartersville","State":"GA"},
{"name":"Lexie Baptist Church","city":"Tylertown","State":"MS"},
{"name":"Lassen Missionary Baptist Church","city":"Susanville","State":"CA"},
{"name":"Shiloh Baptist Church","city":"Somervill","State":"AL"},
{"name":"First Baptist Church Carnegie","city":"Carnegie","State":"Ok"},
{"name":"Highland Baptist Church","city":"West Monroe","State":"LA"},
{"name":"Riveroaks Reformed Presbyterian","city":"Germantown","State":"TN"},
{"name":"First Christian Church","city":"Iola","State":"KS"},
{"name":"First Baptist Church","city":"Three Mile Bay","State":"NY"},
{"name":"New Life Fellowship","city":"Belen","State":"NM"},
{"name":"First Free Will Baptist","city":"Dickson","State":"TN"},
{"name":"Calvary Evangelical Free Church","city":"Spring Grove","State":"MN"},
{"name":"Kittanning Free Methodist Church","city":"Kittanning","State":"PA"},
{"name":"Greater Dothan Baptist Church","city":"Dothan","State":"AL"},
{"name":"Hawk Point Baptist cHurch","city":"Hawk Point","State":"MO"},
{"name":"Barbour Ave United Methodist","city":"Terre Haute","State":"IN"},
{"name":"Oak Park Baptist ","city":"Jeffersonville","State":"IN"},
{"name":"New Hope Presbyterian Church","city":"Green Bay ","State":"WI"},
{"name":"Lakeshore Road Baptist Church","city":"Talbott","State":"TN"},
{"name":"Watson Chapel Baptist","city":"Pine Bluff","State":"AR"},
{"name":"Village Bible Church","city":"Hot Springs Village","State":"AR"},
{"name":"First Baptist Church of Fenton","city":"Fenton","State":"MO"},
{"name":"First United Methodist Church","city":"Somerset","State":"PA"},
{"name":"Union Baptist Church","city":"Union","State":"OR"},
{"name":"Berean Bible Church","city":"Fort Morgan","State":"CO"},
{"name":"Glencoe Baptist Church","city":"New Smyrna Beach","State":"FL"},
{"name":"Strassburg Baptist Church","city":"Marion","State":"KS"},
{"name":"First Baptist Church","city":"Junction City","State":"AR"},
{"name":"East Valley Church","city":"San Jose","State":"CA"},
{"name":"First Baptist Church","city":"Newberry","State":"MI"},
{"name":"Cobb's Creek Missionary Baptist Chruch","city":"Sod","State":"WV"},
{"name":"Parkview Christian Church","city":"Wooster","State":"OH"},
{"name":"Parrans Chapel Baptist Church","city":"Bolivar","State":"TN"},
{"name":"St. Bernice Nazarene & Baptist Churches","city":"St. Bernice","State":"IN"},
{"name":"Fellowship Bible Church","city":"Eden","State":"UT"},
{"name":"Timberland Ringebu Free Lutheran","city":"Barronett","State":"WI"},
{"name":"Hopewell Associate Reformed Presbyterian Church","city":"Covington","State":"GA"},
{"name":"Calvary Christian Fellowship","city":"Midland","State":"TX"},
{"name":"Refuge Christian Fellowship","city":"Crescent City","State":"CA"},
{"name":"Colmar Manor Bible Church","city":"Colmar Manor","State":"MD"},
{"name":"Fedonia Holiness Church","city":"Marshall","State":"MI"},
{"name":"Walnut Grove Christian Church","city":"Arcola","State":"IL"},
{"name":"Hewitt Community Church","city":"Hewitt","State":"TX"},
{"name":"Taos First Baptist","city":"Taos","State":"NM"},
{"name":"Grace Baptist Church","city":"Saginaw","State":"MI"},
{"name":"Grace Bible Fellowship","city":"Bayonne","State":"NJ"},
{"name":"First Christian Church","city":"Lawrence","State":"KS"},
{"name":"Calvary Baptist Church","city":"Burley","State":"ID"},
{"name":"Christ Church Anglican","city":"Midland","State":"TX"},
{"name":"Grace Reformed Church","city":"Lansing","State":"IL"},
{"name":"New Bethel Baptist Church","city":"Harrison ","State":"TN"},
{"name":"Fellowship Baptist Church","city":"La Barge","State":"WY"},
{"name":"Weed Berean Church","city":"Weed","State":"CA"},
{"name":"Faith Evangelical Church","city":"Corry","State":"PA"},
{"name":"First Southern Baptist Church of Yucca Valley","city":"Yucca Valley","State":"CA"},
{"name":"Winfield Church of God Mission","city":"Winfield","State":"WV"},
{"name":"Bible Baptist Church","city":"Port Orchard","State":"WA"},
{"name":"Christ Church of the Heartland","city":"Cape Girardeau","State":"MO"},
{"name":"20 Whitman Community Church","city":"Whitman","State":"WV"},
{"name":"Bible Baptist Church","city":"Traverse City","State":"MI"},
{"name":"Judson Baptist Church","city":"Fayetteville","State":"NC"},
{"name":"Mill Creek Baptist","city":"Fort McCoy","State":"FL"},
{"name":"Central the Church on the Hill","city":"University Place","State":"WA"},
{"name":"Faith Bible Church","city":"Lawton","State":"OK"},
{"name":"Bethel Baptist Church","city":"Marquette","State":"MI"},
{"name":"Grace Bible Church of Cedar Ridge","city":"Cedar Ridge","State":"CA"},
{"name":"High View Baptist Church","city":"Roxboro","State":"NC"},
{"name":"Holiday Island Community Church","city":"Holiday Island","State":"AR"},
{"name":"Westview Baptist Church","city":"Hawkinsville","State":"GA"},
{"name":"The Refuge","city":"Bradenton","State":"FL"},
{"name":"Edgewood Community Church","city":"Waupun","State":"WI"},
{"name":"Charity Missionary Baptist","city":"Indianapolis","State":"IN"},
{"name":"Grace Lutheran","city":"Omro","State":"WI"},
{"name":"First Baptist Church Amery","city":"Amery","State":"WI"},
{"name":"Landmark Baptist Church","city":"Anderson","State":"IN"},
{"name":"Sovereign Grace Fellowship","city":"Nampa","State":"ID"},
{"name":"Calvary Baptist Church","city":"Cleveland","State":"MS"},
{"name":"Grace Community Church","city":"Marion","State":"IN"},
{"name":"Grace Evangelical Free Church","city":"Cincinnati","State":"OH"},
{"name":"Calvary Baptist Church","city":"Fayetteville","State":"AL"},
{"name":"Friedens Reformed Church","city":"Tripp","State":"SD"},
{"name":"New Hopedale Mennonite Church","city":"Meno","State":"OK"},
{"name":"Sharon Baptist Church","city":"McDonough","State":"GA"},
{"name":"Hillsboro Free Methodist","city":"Hillsboro","State":"IL"},
{"name":"Cranmore Cove Baptist","city":"Dayton","State":"TN"},
{"name":"Tusculum Baptist Church","city":"Greeneville","State":"TN"},
{"name":"Grace Reformed Presbyterian","city":"Relay","State":"MD"},
{"name":"West Broad Street Baptist","city":"Tampa","State":"FL"},
{"name":"Calvary Chapel Greece","city":"Rochester ","State":"NY"},
{"name":"New River Assembly of God","city":"Red Wing","State":"MN"},
{"name":"Combie Bible Church","city":"Grass Valley","State":"CA"},
{"name":"Lake East Christian Church","city":"Kirkland","State":"WA"},
{"name":"Christ the King","city":"Bellevue","State":"WA"},
{"name":"Eastview Baptist Church","city":"Belleville","State":"IL"},
{"name":"Mission Boulevard Baptist Church","city":"Fayetteville","State":"AR"},
{"name":"Restoration Fellowship Church","city":"Strasburg","State":"VA"},
{"name":"Bucksport Bible Church","city":"Bucksport","State":"ME"},
{"name":"Calvary Chapel Desert Hills","city":"Phoenix","State":"AZ"},
{"name":"Christ Church United Methodist","city":"Beacon","State":"NY"},
{"name":"Demossville Baptist Church","city":"Demossville","State":"KY"},
{"name":"Neighborhood Church of God","city":"Nineveh","State":"IN"},
{"name":"Calvary Missionary Baptist","city":"Rising Sun","State":"MD"},
{"name":"Mottville Bible Church","city":"White Pigeon","State":"MI"},
{"name":"New Life Baptist Church","city":"Nicholson","State":"MS"},
{"name":"West Madison Bible Church","city":"Verona","State":"WI"},
{"name":"Rome Community Sunday School","city":"Shiloh","State":"OH"},
{"name":"Bethany Baptist Church","city":"Bethany","State":"LA"},
{"name":"The Journey","city":"Tiffin","State":"OH "},
{"name":"Sweetwater Church of the Nazarene","city":"Sweetwater","State":"TN"},
{"name":"Gracelife Baptist Church","city":"Christiansburg","State":"VA"},
{"name":"Grace Fellowship Church","city":"Spearfish","State":"SD"},
{"name":"Brightside Community Church","city":"Caledonia","State":"MI"},
{"name":"The Potter's House Baptist Church","city":"Bucyrus","State":"OH"},
{"name":"Grace Bible Fellowship","city":"Bayonne","State":"NJ"},
{"name":"Zion Bethel Church","city":"Monticello","State":"IN"},
{"name":"Immanuel Lutheran Church","city":"Fairmont","State":"MN"},
{"name":"First Baptist Upper Burrell","city":"Upper Burrell","State":"PA"},
{"name":"St. Paul Evangelical Lutheran Church","city":"Wartburg","State":"TN"},
{"name":"Fowler Community Church","city":"Fowler","State":"OH"},
{"name":"Scotts Grove Baptist Church","city":"Murray","State":"KY"},
{"name":"Molalla Christian Church","city":"Molalla","State":"OR"},
{"name":"Antiquity Baptist Church","city":"Racine","State":"OH"},
{"name":"Henrietta United Methodist Church and Birmingham United Methodist Church","city":"Wakman","State":"OH"},
{"name":"Pinehurst Baptist Church","city":"Ball","State":"LA"},
{"name":"Cedar Hill Baptist Church","city":"Aztec","State":"NM"},
{"name":"Crossroads Baptist Church","city":"Imalay City","State":"MI"},
{"name":"Grace United Methodist","city":"Brooklyn","State":"IA"},
{"name":"Meridian Church of God","city":"Sanford","State":"MI"},
{"name":"Waterville Baptist Church","city":"Cleveland","State":"TN"},
{"name":"Boulevard Baptist Church","city":"Coolidge","State":"AZ"},
{"name":"Evergreen Baptist Church","city":"Shoreline","State":"WA"},
{"name":"Gladwin Free Methodist Church","city":"Gladwin","State":"MI"},
{"name":"Indian Hill Baptist","city":"Bluffton","State":"SC"},
{"name":"Bethlehem Lutheran Church","city":"Granada Hills","State":"CA"},
{"name":"Calvary Bible Chapel","city":"Hunlock Creek","State":"PA"},
{"name":"Community Evangelical Free Church","city":"Niles","State":"MI"},
{"name":"Hopewell Freewill Baptist Church","city":"Mountain Grove","State":"MO"},
{"name":"Living Love Church","city":"East Peoria","State":"IL"},
{"name":"Trinity United Methodist","city":"West Frankfort","State":"IL"},
{"name":"Antioch Baptist","city":"Hannibal","State":"MO"},
{"name":"Berean Baptist Church","city":"Guilderland Center","State":"NY"},
{"name":"Congregational Christian Church","city":"Winchester","State":"IN"},
{"name":"Derby United Methodist Church and Five Points United Methodist Church ","city":"Orient","State":"OH"},
{"name":"Lacomb First Baptist Church","city":"Lebanon","State":"OR"},
{"name":"New Hope Evangelical Free Church","city":"Mount Horeb","State":"WI"},
{"name":"Woodland Wesleyan Church","city":"Danbury","State":"WI"},
{"name":"Calvary Chapel Yelm","city":"Yelm","State":"WA"},
{"name":"Christian Community Church","city":"Gibsonia","State":"PA"},
{"name":"Dorseyville Alliance Church","city":"Pittsburgh","State":"PA"},
{"name":"Crossroad Assembly of God","city":"Elmhurst","State":"PA"},
{"name":"Emmanuel Baptist Church","city":"Sterling","State":"CO"},
{"name":"Faith Baptist Church","city":"Moulton","State":"AL"},
{"name":"First Baptist Church","city":"Forest Hills","State":"KY"},
{"name":"Grace Baptist Church","city":"Somerset Center","State":"MI"},
{"name":"Life in Christ Fellowship","city":"W. Jefferson","State":"OH"},
{"name":"Medway Baptist Church","city":"Medway","State":"OH"},
{"name":"Berean Baptist Church","city":"Brunswick","State":"ME"},
{"name":"Cedar Hill Baptist Church","city":"Aztec","State":"NM"},
{"name":"Berean Dunkard Brethren Church","city":"Peru","State":"IN"},
{"name":"First Baptist Church of Lacombe","city":"Lacombe","State":"LA"},
{"name":"New Harmony PCA","city":"Alcolu","State":"SC"},
{"name":"Prairieview Covenant","city":"New Richmond","State":"WI"},
{"name":"Kings River Christian Church","city":"Bradenton","State":"FL"},
{"name":"Cuba Free Will Baptist Church","city":"Cuba","State":"MO"},
{"name":"Bethlehem Baptist Church","city":"Pine Mt. Valley","State":"GA"},
{"name":"Calvary Baptist Church","city":"Roxboro","State":"NC"},
{"name":"Sandy Valley Community Church","city":"Sandy Valley","State":"MI"},
{"name":"Silverton First Baptist Church","city":"Silverton","State":"OR"},
{"name":"Camp Creek Church","city":"Springfield","State":"OR"}]    ;

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
