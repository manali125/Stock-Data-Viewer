var app = angular.module("app",[]);

app.controller('FinanceCtrl',function($scope,$http){
  $scope.symbol="";
  $scope.result = {} ;

  $scope.getData = function(){
  	var url = 'https://query.yahooapis.com/v1/public/yql';
	var symbol = $scope.symbol;
	var data = encodeURIComponent("select * from yahoo.finance.quotes where symbol in ('" +symbol+ "')");
	var str1 = url.concat("?q=",data);
	str1=str1.concat("&format=json&diagnostics=true&env=store://datatables.org/alltableswithkeys&callback=");
	
	$http.get(str1).then(function(response){
       $scope.response = response.data;
       $scope.status = response.status; 
       $scope.response.Name = "Name: "+ $scope.response.query.results.quote.Name;
       $scope.response.Bid = "Bid: "+ $scope.response.query.results.quote.Bid;
       $scope.response.Currency = "Currency: "+ $scope.response.query.results.quote.Currency;
       $scope.response.StockExchange = "StockExchange: "+ $scope.response.query.results.quote.StockExchange;
       $scope.response.MarketCapitalization = "MarketCapitalization: "+ $scope.response.query.results.quote.MarketCapitalization;
       $scope.response.YearRange = "YearRange: "+ $scope.response.query.results.quote.YearRange;
       $scope.response.Ask = "Ask: "+ $scope.response.query.results.quote.Ask;
       $scope.response.BookValue = "BookValue: "+ $scope.response.query.results.quote.BookValue;
       $scope.response.Change = "Change: "+ $scope.response.query.results.quote.Change;
       $scope.response.DaysHigh = "DaysHigh: "+ $scope.response.query.results.quote.DaysHigh;
       $scope.response.DaysLow = "DaysLow: "+ $scope.response.query.results.quote.DaysLow;
       $scope.response.EarningsShare = "EarningsShare: "+ $scope.response.query.results.quote.EarningsShare;

    }).catch(function(response){
    $scope.reponse = response;
    $scope.status = status; 
});
  }
  
//    var url = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22AAPL%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=';

});