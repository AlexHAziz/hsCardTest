(function() {
  var app = angular.module('hero-directive',[]);

  app.controller('hearthstoneHeroController', function(){
    var druid   = {Name: "druid",   heroImage: "http://hydra-media.cursecdn.com/hearthstone.gamepedia.com/f/fa/Malfurion_Stormrage%28621%29.png?version=426bb26d6bfe7618615e95f5bd292599"};
    var hunter  = {Name: "hunter",  heroImage: "http://hydra-media.cursecdn.com/hearthstone.gamepedia.com/a/a0/Rexxar%28484%29.png?version=ae30ab97f86c5409fa1eecffb04f4a8f"};
    var mage    = {Name: "mage",    heroImage: "http://hydra-media.cursecdn.com/hearthstone.gamepedia.com/3/3c/Jaina_Proudmoore%28320%29.png?version=3d698baef906901270b06372b084b9bc"};
    var paladin = {Name: "paladin", heroImage: "http://hydra-media.cursecdn.com/hearthstone.gamepedia.com/4/4d/Uther_Lightbringer%28257%29.png?version=d7001502156ddc3cc52c057b9c28e394"};
    var priest  = {Name: "priest",  heroImage: "http://hydra-media.cursecdn.com/hearthstone.gamepedia.com/8/80/Anduin_Wrynn%28110%29.png?version=4004220d673e4594c0057c0b49c1cb78"};
    var rogue   = {Name: "rogue",   heroImage: "http://hydra-media.cursecdn.com/hearthstone.gamepedia.com/a/a4/Valeera_Sanguinar%282%29.png?version=fa994c446cbe2416f9f6cfdfbd438e41"};
    var shaman  = {Name: "shaman",  heroImage: "http://hydra-media.cursecdn.com/hearthstone.gamepedia.com/4/4b/Thrall%28319%29.png?version=07efe3dd3971e4dbac9e776e9239d777"};
    var warlock = {Name: "warlock", heroImage: "http://hydra-media.cursecdn.com/hearthstone.gamepedia.com/0/0a/Gul%27dan%28618%29.png?version=3031f44ee7371392f3527f756d066c74"};
    var warior  = {Name: "warrior", heroImage: "http://hydra-media.cursecdn.com/hearthstone.gamepedia.com/c/c5/Garrosh_Hellscream%28635%29.png?version=e7b34b5f145691ccda1bee0572e5ac0d"};

    this.heroes = [
      druid, hunter, mage,
      paladin, priest, rogue,
      shaman, warlock, warior
    ];

    this.tab = 0;
    this.setTab = function(activeTab) {
      this.tab = activeTab;
    };
  });

  app.directive("heroButtons", function() {
    return {
      restrict: "E",
      templateUrl: "hero-table.html"
    };
  });
})();
