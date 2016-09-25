
 var app = angular.module('mainApp', ['ngRoute']);

/*app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'login.html'
    })
    .when('/dashboard', {
        resolve: {
            "check": function($location, $rootScope) {
                if(!$rootScope.loggedIn){
                    $location.path('/');   
                }
            }
        },
        templateUrl: 'dashboard.html'
    })
    .otherwise({
        redirectTo:'/'
    });
});

app.controller('loginCtrl',function($scope, $location, $rootScope){
    $scope.submit = function(){
        
        if($scope.username == 'admin' && $scope.password == 'admin') {
            $rootScope.loggedIn = true;
            $location.path('/dashboard');
            
        }
        else{
            alert('Incorrect Credentials.');   
        }
    };
});*/

app.controller('MatchupController',function(){
       this.teams = matchUps;

});


    var matchUps = [
    {
        home:{ 
            name:'Cincinnati Bengals',
            homeImage:{'background-image': 'url(http://prod.static.bengals.clubs.nfl.com/assets/img/gbl-hd-bg.jpg)'},
        },
        away:{ 
            name:'Miami Dolphins',
        awayImage:{'background-image': 'url(http://blog-imgs-70.fc2.com/o/f/f/offseason2012/Dolphins.jpg)'},
    },
        location: 'Paul Brown Stadium, Cincinnati',
        time: '8:25pm',
        date: "2016-09-29",
        tnf: false,
       
        
},
    {
        home:{
            name:'Jaxonville Jaguars',
            homeImage:{'background-image': 'url(http://nfasl.spruz.com/gfile/75r4!-!JEHJEG!-!zrzor45!-!LJPKNQQG-JJSJ-HHMR-NNJR-EPLFJOMGLIMD/jacksonville_jaguars_banner.jpg)'},
        },
        away:{
            name:'Indianapolis Colts',
            awayImage: {'background-image': 'url(http://www.851facebook.com/images/sports-nfl-afc-south-indianapolis_colts-night-football-rugby-facebook-timeline-cover-banner-for-fb-profile.jpg)'},
        },
        location: 'Wembley Stadium, London',
        time: '9:30am',
        date: "2016-10-02",
        
        snf:false,
        
               },
    {
        home:{ 
            name:'Houston Texans',
            homeImage: {'background-image': 'url(http://flagdom.com/images/medium/houston_texans_banner_MED.gif)'},
        },
        away:{ 
            name:'Tennessee Titans',
            awayImage: {'background-image': 'url(http://www.addcovers.com/covers/35cwbiqpkdmth9o.jpg)'},
        },
        location: 'NRG Stadium, Houston',
        time: '1:00pm',
        date: "2016-10-02",
        
        snf:false,
        
               },
    {
        home: {
            name:'Washington Redskins',
            homeImage: {'background-image': 'url(http://new.thingsremembered.com/assets/cms/images/general_banners_large/Redskins.jpg)'},
        },
        away: {
            name:'Cleveland Browns',
            awayImage: {'background-image': 'url(https://assets2.roadtrippers.com/uploads/guide/banner_image/48/cleveland-browns-banner-229a7268-271e-44b9-8b5e-a1f46184a412.jpg)'},
        },
        location: 'FexEx Field, Landover',
        time: '1:00pm',
        date: "2016-10-02",
        
        snf:false,
        
               },
    {
        home: { 
            name:'New York Jets',
            homeImage: {'background-image': 'url(http://nflrt.com/wp-content/uploads/2014/04/New-York-Jets-Banner.jpg)'},
        },
        away: {
            name:'Seattle Seahawks',
            awayImage: {'background-image': 'url(http://new.thingsremembered.com/assets/cms/images/general_banners_large/Seahawks.jpg)'},
        },
        location: 'MetLife Stadium, East Rutherford',
        time: '1:00pm',
        date: "2016-10-02",
        
        snf:false,
        
               },
    {
        home: {
            name:'New England Patriots',
            homeImage: {'background-image': 'url(http://www.851facebook.com/images/sports-nfl-afc-east-new-england-patriots-monday-night-football-rugby-facebook-timeline-cover-banner-for-fb-profile.jpg)'},
        },
        away: {
            name:'Buffalo Bills',
            awayImage: {'background-image': 'url(http://www.addcovers.com/covers/3ktmoxg93lckawe.jpg)'},
        },
        location: 'Gillette Stadium, Foxboro',
        time: '1:00pm',
        date: "2016-10-02",
        
        snf:false,
        
               },
    {
        home: {
            name:'Atlanta Falcons',
            homeImage: {'background-image': 'url(http://www.timelinecoverbanner.com/facebook-covers/2012/01/atlanta-falcons.jpg)'},  
        },
        away: {
            name:'Carolina Panthers',
            awayImage: {'background-image': 'url(http://www.crazywebsite.com/Website-Clipart-Pictures-Videos/Sports/NFL_Football_Team_Banner_Clipart_Carolina_Panthers_New_2012_Logo_Wordmark-2-640Wht.jpg)'},  
        },
        location: 'Georgia Dome, Atlanta',
        time: '1:00pm',
        date: "2016-10-02",
        
        snf:false,
        
               },
    {
        home: {
            name:'Baltimore Ravens',
            homeImage: {'background-image': 'url(http://flagdom.com/images/medium/baltimore_ravens_banner_MED.gif)'},  
        },
        away: {
            name:'Oakland Raiders',
            awayImage: {'background-image': 'url(http://flagdom.com/images/medium/oakland_raiders_banner_MED.gif)'},  
        },
        location: 'M&T Bank Stadium, Baltimore',
        time: '1:00pm',
        date: "2016-10-02",
        
        snf:false,
        
               },
    {
        home: {
            name:'Chicago Bears',
            homeImage: {'background-image': 'url(http://www.timelinecoverbanner.com/facebook-covers/2012/01/chicago-bears.jpg)'},
        },
        away: {
            name:'Detroid Lions',
            awayImage: {'background-image': 'url(http://new.thingsremembered.com/assets/cms/images/general_banners_large/Lions.jpg)'},
        },
        location: 'Soldier Field, Chicago',
        time: '1:00pm',
        date: "2016-10-02",
        
        snf:false,
        
               },
    {
        home: {
            name:'Tampa Bay Buccaneers',
            homeImage: {'background-image': 'url(http://www.timelinecoverbanner.com/facebook-covers/2012/01/tampa-bay-buccaneers.jpg)'},
        },
        away: {
            name:'Denver Broncos',
            awayImage: {'background-image': 'url(http://new.thingsremembered.com/assets/cms/images/general_banners_large/Broncos.jpg)'},
        },
        location: 'Raymond Jones Stadium, Tampa',
        time: '4:05pm',
        date: "2016-10-02",
        
        snf:false,
        
               },
    {
        home: {
            name:'Arizona Cardinals',
            homeImage: {'background-image': 'url(http://www.addcovers.com/covers/vsq75n9448vzet.jpg)'},  
        },
        away: {
            name: 'Los Angeles Rams',
            awayImage: {'background-image': 'url(http://www.insidesocal.com/rams/files/2016/04/Rams-Banner.jpg)'},  
        },
        location: 'U of Pheonix Stadium, Glendale',
        time: '4:25pm',
        date: "2016-10-02",
        
        snf:false,
        
               },
    {
        home: {
            name:'San Diego Chargers',
            homeImage: {'background-image': 'url(http://new.thingsremembered.com/assets/cms/images/general_banners_large/Chargers.jpg)'},  
        },
        away: {
            name:'New Orleans Saints',
            awayImage: {'background-image': 'url(http://images.firstcovers.com/covers/flash/n/new_orleans_saints-715014.jpg)'},  
        },
        location: 'Qualcomm Stadium, Sand Diego',
        time: '4:45pm',
        date: "2016-10-02",
        
        snf:false,
        
               },
    {
        home: {
            name: 'San Fransisco 49ers',
            homeImage: {'background-image': 'url(https://ae01.alicdn.com/kf/HTB16C3HKVXXXXb9aFXXq6xXFXXXO/NFL-San-Francisco-font-b-49ers-b-font-font-b-Banner-b-font-with-Brass-Grommets.jpg)'},  
        },
        away: {
            name:'Dallas Cowboys',
            awayImage: {'background-image': 'url(http://www.addcovers.com/covers/hmhvvl7bic3dm.jpg)'},  
        },
        location: 'Levis Stadium, Santa Clara',
        time: '4:45pm',
        date: "2016-10-02",
        
        snf:false,
        
               },
    {
        home: {
            name:'Pittsburg Steelers',
            homeImage: {'background-image': 'url(http://images.firstcovers.com/covers/p/pittsburgh_steelers-744.jpg)'},  
        },
        away: {
            name:'Kansas City Cheifs',
            awayImage: {'background-image': 'url(http://joplinchallenge.mo.gov/files/chiefs_banner2.jpg)'},  
        },
        location: 'Heinz Field, Pittsburg',
        time: '8:30pm',
        date: "2016-10-02",
        
        snf:false,
        
               },
    {
        home: {
            name:'Minnesota Vikings',
            homeImage: {'background-image': 'url(http://611enterprises.com/wp-content/uploads/2014/11/Minnesota_Vikings_banner.jpg)'},  
        },
        away: {
            name: 'New York Giants',
            awayImage: {'background-image': 'url(http://www.covermyfb.com/media/covers/thumb/3895-new-york-giants.jpg)'},
        },
        location: 'U.S. Bank Stadium, Minneapolis',
        time: '8:30pm',
        date: "2016-10-03",
        
       
        mnf: false,
               }
    ]
    
    
app.controller('DayController',function() {
        this.tnf = function() {
            matchUps.tnf = !matchUps.tnf;
            return matchUps.tnf;
            
        }
        this.snf = function() {
            matchUps.snf = !matchUps.snf;
            return matchUps.snf;
            
        }
        this.mnf = function() {
            matchUps.mnf = !matchUps.mnf;
            return matchUps.mnf;
            
        }
});