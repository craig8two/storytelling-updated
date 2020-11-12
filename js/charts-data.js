<script>
    var ctx = document.getElementById('diet-chart').getContext('2d');
    var inView = false;

    function isScrolledIntoView(elem) {
      var docViewTop = $(window).scrollTop();
      var docViewBottom = docViewTop + $(window).height();
      var elemTop = $(elem).offset().top;
      var elemBottom = elemTop + $(elem).height();
      return ((elemTop <= docViewBottom) && (elemBottom >= docViewTop));
    }

    $(window).scroll(function () {
      if (isScrolledIntoView('#diet-chart')) {
        if (inView) { return; }
        inView = true;
        var dietChart = new Chart(ctx, {
          type: 'horizontalBar',
          data: {
            labels: ['Burkina Faso', 'Cameroon', 'Chad', 'The Gambia', 'Mali', 'Mauritania', 'Niger', 'Nigeria', 'Senegal'],
            datasets: [{
              label: 'Exclusive Breastfeeding',
              data: [55.8, 39.4, 0.1, 53.3, 40.2, 40.3, 23.3, 28.7, 42.1],
              backgroundColor: [
                '#009fe3',
                '#009fe3',
                '#009fe3',
                '#009fe3',
                '#009fe3',
                '#009fe3',
                '#009fe3',
                '#009fe3',
                '#009fe3',
              ],
              borderWidth: 0
            },
            {
              label: 'Minimum acceptable diet',
              data: [3.1, 10.6, 5.7, 13.7, 8.9, 14.3, 5.6, 10.2, 8],
              backgroundColor: [
                '#dc0d15',
                '#dc0d15',
                '#dc0d15',
                '#dc0d15',
                '#dc0d15',
                '#dc0d15',
                '#dc0d15',
                '#dc0d15',
                '#dc0d15',
              ],
              borderWidth: 0
            }]
          },
          options: {
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            }
          }
        });
      } 
      // else {
      //   inView = false;
      // }
    });
    var ctx = document.getElementById('funding-chart').getContext('2d');
    var inView = false;

    function isScrolledIntoView(elem) {
      var docViewTop = $(window).scrollTop();
      var docViewBottom = docViewTop + $(window).height();
      var elemTop = $(elem).offset().top;
      var elemBottom = elemTop + $(elem).height();
      return ((elemTop <= docViewBottom) && (elemBottom >= docViewTop));
    }

    $(window).scroll(function () {
      if (isScrolledIntoView('#funding-chart')) {
        if (inView) { return; }
        inView = true;
        var dietChart = new Chart(ctx, {
          type: 'horizontalBar',
          data: {
            labels: ['Burkina Faso', 'Cameroon', 'Chad', 'The Gambia', 'Mali', 'Mauritania', 'Niger', 'Nigeria', 'Senegal'],
            datasets: [{
              label: 'Exclusive Breastfeeding',
              data: [55.8, 39.4, 0.1, 53.3, 40.2, 40.3, 23.3, 28.7, 42.1],
              backgroundColor: [
                '#009fe3',
                '#009fe3',
                '#009fe3',
                '#009fe3',
                '#009fe3',
                '#009fe3',
                '#009fe3',
                '#009fe3',
                '#009fe3',
              ],
              borderWidth: 0
            },
            {
              label: 'Minimum acceptable diet',
              data: [3.1, 10.6, 5.7, 13.7, 8.9, 14.3, 5.6, 10.2, 8],
              backgroundColor: [
                '#dc0d15',
                '#dc0d15',
                '#dc0d15',
                '#dc0d15',
                '#dc0d15',
                '#dc0d15',
                '#dc0d15',
                '#dc0d15',
                '#dc0d15',
              ],
              borderWidth: 0
            }]
          },
          options: {
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            }
          }
        });
      } 
      // else {
      //   inView = false;
      // }
    });
  </script>