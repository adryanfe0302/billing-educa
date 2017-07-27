//my first angular


$(document).ready(function(){
	$('#print').click(function(){
		$('input').addClass('hidden');
		$('.delrows').addClass('hidden');
	})
})


var app=angular.module('myApp',[]);
app.controller('attCtrl', function($scope){
	console.log("test");
// 	$scope.rows = localstorage.rows
	$scope.rows =[];
	$scope.rows.push({
		'id':1,
		'desbill':'Jasa Penggunaan Software, Bulan Pemakaian : ',
		'amountbill':0,
		'sembunyi':false,
		'amountsemunyi':false,
	});

	console.log("ROWS" , $scope.rows);


	

	
			 
	$scope.infobill=[];
	$scope.infobill.push({
		'invoiceno':'001/XX/0025',
		'compname':'PT ANAK CEMERLANG',
		'schoolname':'Apple Tree Muara Karang',
		'attname':'Ms Oneng Widjaja',
		'datename':'DD/MM/2016',
		'duedatename':'DD/MM/2016',
		'virtualbca':'01379 1230001',
		'sembunyi':false,
		'amountsemunyi':false,

	});
			 
	$scope.Add = function()
		{
		console.log("add");
		$scope.rows.push({
			'id': $scope.rows.length + 1,
			'desbill':'Jasa Penggunaan Software, Bulan Pemakaian : ',
			'amountbill' : 0,
			'sembunyi':false,
			'amountsemunyi' : false
		})
	}


	 $scope.Enter = function(){
		 angular.forEach($scope.rows,function(v,i){
			 v.sembunyi = false;
			 v.amountsembunyi = false;
		 })

		 angular.forEach($scope.infobill,function(v,i){
			 v.sembunyi = false;
			 v.amountsembunyi = false;
		 })

	
		 console.log("ROWS BARU "  , $scope.rows);
	 }

	 $scope.Hapusrows=function(item){ 
	      var index=$scope.rows.indexOf(item)
	      $scope.rows.splice(index,1);     
   	 }


	 $scope.Tambah = function()
	 {
		 $scope.total = 0;
		  angular.forEach($scope.rows,function(v,i){
			 $scope.total += v.amountbill;
		 })
		 alert("TOTAL " + $scope.total);
	 }

	$scope.total = 0;

	$scope.$watch('rows', function(a,b) {
       console.log('hey, myVar has changed!');
       console.log("A" ,a);
       console.log("B" , b);
        $scope.total = 0;
         angular.forEach($scope.rows,function(v,i){
			 $scope.total += parseInt(v.amountbill);
		 })
   },true);
   
  
/*

	$scope.totals=[
		{name:'Total'},
		{name:'PPh23(2%)'},
		{name:'Total Amount'}
	];
*/
		
});



