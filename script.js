var arrayOfOracleInstances = {"oracle1":  0.058, 
                             "oracle2": 0.047,
                             "oracle3": 0.021};

var arrayOfAzureInstances = {"azure1":  0.058, 
                            "azure2": 0.0447,
                            "azure3": 0.0241};
                        
var arrayOfGoogleInstances = {"google1":  0.018, 
                            "google2": 0.057,
                            "google3": 0.071};

    var selectedCloudProvider = document.getElementById("cloudProvider");
    var chosenCloudProvider = selectedCloudProvider.options[selectedCloudProvider.selectedIndex].value;

    
    $(document).ready(function(){
        var selectElem = $("#instance");

        if(chosenCloudProvider == "oracle"){
        $.each(arrayOfOracleInstances, function(index, value){

            $("<option/>", {
                    text: index,
                    value: value
            }).appendTo(selectElem);
        });
        }

        else if(chosenCloudProvider == "azure"){
            
           
        $.each(arrayOfAzureInstances, function(index, value){

            $("<option/>", {
                    text: index,
                    value: value
            }).appendTo(selectElem);
        });

        }
        else if(chosenCloudProvider == "google"){
            
           
        $.each(arrayOfGoogleInstances, function(index, value){

            $("<option/>", {
                    text: index,
                    value: value
            }).appendTo(selectElem);
        });
        }
        else {
            alert("You didn't chose anything!");
        }

        
    });


var arrayOfWorkloads = {"Java":  1.25, 
                        "Ruby": 1.35,
                        "R": 1.4};
                                 
            $(document).ready(function(){
        
                var selectElem = $("#workload");

                    $.each(arrayOfWorkloads, function(index, value){

                        $("<option/>", {
                                text: index,
                                value: value
                        }).appendTo(selectElem);
                    });
            });                     
                              
function myFunction() {
          var numberOfHours = document.getElementById("myForm").elements[3].value;
          
          var selectedInstance = document.getElementById("instance");
          var priceOfInstance = selectedInstance.options[selectedInstance.selectedIndex].value;
          
          
          var selectedWorkload = document.getElementById("workload");
          var typeOfWorkload = selectedWorkload.options[selectedWorkload.selectedIndex].value;

          var selectedEvaluationPeriod = document.getElementById("evaluationPeriod");
          var evaluationPeriod = selectedEvaluationPeriod.options[selectedEvaluationPeriod.selectedIndex].value;

         if(numberOfHours == 730.08){
            alert("You don't have any savigns since you are using just one instance.");
        }
        else if(numberOfHours > 730.08){
            var totalCost = numberOfHours * priceOfInstance * evaluationPeriod; 
                document.getElementById("demo1").innerHTML= totalCost.toFixed(2) + "$";
            var totalCostWithGraalVM = totalCost - ((totalCost - (730.08 * priceOfInstance * evaluationPeriod)) / typeOfWorkload);
        }
        else{
            alert("Error! You cannot use instances less than 730.08 hours per month");
        } 
        document.getElementById("demo").innerHTML= totalCostWithGraalVM.toFixed(2) + "$";
        
        var budgetDecrease = ((totalCost - totalCostWithGraalVM) / totalCost) * 100; 
         document.getElementById("demo2").innerHTML= budgetDecrease.toFixed(2) + "%";

        
        }

        