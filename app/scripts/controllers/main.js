'use strict';

angular.module('cxshowcaseApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('showcase.json').success(function(data) {
      $scope.showcase = data;
    }).error(function(data) {
      // log error
    });
    $scope.otherworks = [
      {
        title: 'I/O Out of Touch',
        workUrl: 'http://crissxross.net/oot/indexoot.html',
        description: 'for live digital text performance',
        imageUrl: '',
        pubdate: '2012',
        tech: 'Flash',
        moreinfo: ''
      },
      {
        title: 'Heights',
        workUrl: 'http://crissxross.net/MovingPix/Heights.html',
        description: 'animated e-poem',
        imageUrl: '',
        pubdate: '2006',
        tech: 'Flash',
        moreinfo: ''
      },
      {
        title: 'IntraVenus',
        workUrl: 'http://crissxross.net/MovingPix/IntraVenus.html',
        description: 'musing on the artist\'s muse',
        imageUrl: '',
        pubdate: '2005',
        tech: 'Flash',
        moreinfo: ''
      },
      {
        title: 'We Drank',
        workUrl: 'http://crissxross.net/MovingPix/We_Drank.html',
        description: 'animated e-poem',
        imageUrl: '',
        pubdate: '2005',
        tech: 'Flash',
        moreinfo: ''
      },
      {
        title: 'Social Dis-Ease',
        workUrl: 'http://crissxross.net/MovingPix/SocialDis-Ease.html',
        description: 'animated e-poem',
        imageUrl: '',
        pubdate: '2004',
        tech: 'Flash',
        moreinfo: ''
      },
      {
        title: 'Sitting Pretty',
        workUrl: 'http://crissxross.net/MovingPix/BeforeWeBegin/index.html',
        description: 'hypertext with multimedia',
        imageUrl: '',
        pubdate: '2004',
        tech: 'HTML',
        moreinfo: ''
      }
    ];
  });