var link = "http://api.geonames.org/citiesJSON?north=44.1&south=-9.9&east=-22.4&west=55.2&lang=de&username=demo"; 

var ListController;

sap.ui.define([
		'jquery.sap.global',
		'sap/ui/core/mvc/Controller',
		'sap/ui/model/json/JSONModel'
	], function(jQuery, Controller, JSONModel) {
	"use strict";

	ListController = Controller.extend("sap.m.sample.ListCounter.List", {

		onInit : function (evt) {loadData();}
	});

	return ListController;
    });

 function loadData(){
    $.ajax({    

              url: link,
              context: document.body

            }).done(function(data) {
  	         
             ListController.getView().setModel(data);
                alert("done");

            });	 
 }






