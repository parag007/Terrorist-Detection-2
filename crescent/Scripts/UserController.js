var app = angular.module("UserReg", ['angularUtils.directives.dirPagination']);
app.controller("UserController", function ($scope, $http) {
    $scope.User;
    localStorage.CheckLogin = 0;
    
    $scope.GetAllData = function () {
        $http({
            method: "GET",
            url: "/User/GetAllData"
        }).then(function (response) {
            $scope.employees = response.data;
            if (localStorage.CheckLogin == 0) {
                $("#btnLogin").show();
                $("#btnLogout").hide();
                $scope.BoolVal = false;
            }
            else if (localStorage.CheckLogin == 1) {
                $("#btnLogin").hide();
                $("#btnLogout").show();
                $scope.BoolVal = true;
            }
        }
            )
    };
    $scope.InsertData = function () {

        var Action = document.getElementById("btnSave").getAttribute("value");



       //validation is done here
        
        if ($("#DocID").val() == "") {
            alert("Enter DocID ");
            
            return;

        }
        
        if ($("#Content").val() == "") {
            alert("Enter Content  ");
            return;
        }

        //Modification is done here
        if (Action === "Submit") {
            $scope.Document.Content = $("#Content").val();
            $http({
                method: "POST",
                url: "/User/InsertData",
                data: $scope.Document
            }).then(function (response) {
                $scope.employees = response.data;
                $scope.Document = null;
                $('#myModal').modal('hide');
                $('.modal-backdrop').hide();
                if (localStorage.CheckLogin == 0) {
                    alert('There');
                    $("#btnLogin").show();
                    $("#btnLogout").hide();
                    $scope.BoolVal = false;
                }
                else if (localStorage.CheckLogin == 1) {
                    $("#btnLogin").hide();
                    $("#btnLogout").show();
                    $scope.BoolVal = true;
                }
                alert("Data Saved");
            },
                function () {
                    alert("Data Not Saved");
                }
                )
        }
        else {
            $scope.Document.Content = $("#Content").val();
            $http({
                method: "POST",
                url: "/User/UpdateData",
                data: $scope.Document
            }).then(function (response) {
                $scope.employees = response.data;
                $scope.Document = null;
                $('#myModal').modal('hide');
                $('.modal-backdrop').hide();
                if (localStorage.CheckLogin == 0) {
                    alert('herer');
                    $("#btnLogin").show();
                    $("#btnLogout").hide();
                    $scope.BoolVal = false;
                }
                else if (localStorage.CheckLogin == 1) {
                    $("#btnLogin").hide();
                    $("#btnLogout").show();
                    $scope.BoolVal = true;
                }
                alert("Data Modified");
                document.getElementById("btnSave").setAttribute("value", "Submit");
                $("#btnSave").text("Submit");
            },
                function () {
                    alert("Data Not Updatd");
                }
                )
        }
    };
    $scope.EditData = function (dcom) {
        $("#btnSave").val("Update");
        $("#btnSave").text("Update");
        $scope.Document = dcom;

    };

    $scope.askForDelete = function (dcom) {
        if (confirm('Are you sure ?')) {
            $scope.DeleteData(dcom);
        }
    }


    $scope.DeleteData = function (dcom) {           
        $http({
            method: "POST",
            url: "/User/DeleteData",
            data: dcom
        }).then(function (response) {
            $scope.employees = response.data;
            if (localStorage.CheckLogin == 0) {
                $("#btnLogin").show();
                $("#btnLogout").hide();
                
                $scope.BoolVal = false;
            }
            else if (localStorage.CheckLogin == 1) {
                $("#btnLogin").hide();
                $("#btnLogout").show();
               
                $scope.BoolVal = true;
            }    
            
            alert("Data Deleted");

            },
            (function () {
                alert("Error - Data Not Deleted");
            })
        )
    }; 

    //Login
    $scope.Login = function (LoginData) {
            $http({
                method: "POST",
                url: "/User/LoginResult",
                data: LoginData
            }).then(function (response) {                
                if (response.data == 1) {                                                            
                    $("#IsActive").val(1);
                    localStorage.CheckLogin = 1;
                    $("#btnLogin").hide();
                    $("#btnLogout").show();
                    $scope.BoolVal = true;                    
                    $('#myModalLogin').modal('hide');
                    $('.modal-backdrop').hide();   
                    $scope.LoginData = null;
                }
                else if (response.data == 2) {                                        
                    $("#IsActive").val(0);
                    localStorage.CheckLogin = 0;
                    $("#btnLogin").show();
                    $("#btnLogout").hide();
                    
                    $scope.BoolVal = false;
                    alert("Invalid UserName or Password");
                }
                else if (response.data == 0) {                                        
                    $("#IsActive").val(0);
                    localStorage.CheckLogin = 0;
                    $("#btnLogin").show();
                    $("#btnLogout").hide();                    
                    $scope.BoolVal = false;                    
                }
                else
                {
                    $("#IsActive").val(0);
                    localStorage.CheckLogin = 0;
                    $("#btnLogin").show();
                    $("#btnLogout").hide();                    
                    $scope.BoolVal = false;                    
                }
            },
                (function () {
                    alert("Error - Data Not Deleted");
                })
                )        
    };
    $scope.Logout = function () {
        $("#IsActive").val(0);
        localStorage.CheckLogin = 0;
        $("#btnLogin").show();
        $("#btnLogout").hide();
        $scope.BoolVal = false;
    } 
    $scope.Close = function () {        
        document.getElementById("btnSave").setAttribute("value", "Submit");
        $("#btnSave").text("Submit");
        $scope.Document = null;
    }
    $scope.sort = function (keyname) {

        //set the sortKey to the param passed
        $scope.sortKey = keyname;   

        //if true make it false and vice versa
        $scope.reverse = !$scope.reverse; 
    }
});

