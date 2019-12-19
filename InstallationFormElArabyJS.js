/////////////////////////////Variables///////////////////////////////////// installation / / merna
var MaintenanceFormId = "5b4526d8-dfad-41fa-a4f5-fd52337e65db";
var ComplainFormId = "c44adeef-8c87-45a5-abec-3f094590012a";
var InquiryFormId = "9d3ff23f-2296-4bab-be3b-14f15c86f620";
var InstallationFormId = "57517289-ab6a-4619-a960-7637d4d0afdf";
var IspectionFormId = "aad9017a-9236-4aef-a7af-e86bf5192125";
var DistrictFieldSales = "ldv_districtsales";
var AccountField = "ldv_customername";
var GovernmentCodeField = "ldv_governmentcode";
var MaintenanceFormName = "Alaraby Maintenance Form";
var InquiryFormName = "Alaraby Inquiry Form";
var ResourceField = "ldv_resource";
// added by mervat
var BackOfficeRoleName = "Back Office User";
var TechnicalApproveLSC = "ldv_technicalsupportlscapproval";
var CentralProductGroup = "ldv_centralproductgroup";
var RangFromField = "ldv_RangeFrom";
var CentralTelephoneNameField = "ldv_CentralTelephoneName";
var CentralTelephoneIDField = "ldv_centraltelephoneId";
var CentralTelephoneCodeField = "ldv_CentralTelephoneCode";
var AvailabilityDateField = "ldv_availabilitydate";
var uniqueId = "1234";
//var Problem2Field = "ldv_problem2";
//var Problem3Field = "ldv_problem3";
var BuildingNumberField = "ldv_buildingnumber";
var message = "Write only numbers - من فضلك ادخل ارقام فقط ولا يقل عن 11 رقم";
var message1 = "Write only numbers - من فضلك ادخل ارقام فقط ";
var CentralTelephoneEntityName = "ldv_centraltelephone";
var MSCorASCField = "ldv_mscorasc"
var Problemid = "ldv_problemid";
var WorkOrdertype = "ldv_workordertype";
var CollectionVisitField = "ldv_collectionvisitdate";
var WorkOrderStatusField = "statuscode";
var ProductProblemEntityName = "ldv_productproblem";
var CustomerEntityName = "Account";
var CentralTelEntityName = "ldv_centraltelephone";
var EquipmentEntityName = "ldv_equipment";
var CustomerNameField = "customerid";
var LandLineField = "ldv_landline";
var centraltelephoneField = "ldv_centraltelephone";
var MobileNumberField = "ldv_mobilenumber";
var GovernmentField = "ldv_government";
var AddressField = "ldv_address";
var DistrictField = "ldv_district";
var ReferenceContactField = "ldv_referencecontact";
var CentralRangesEntity = "ldv_centralrange";
var SegmentationField = "ldv_segmentation";
var MethodofCommunicationField = "ldv_methodofcommunication";

var ProductGroupField = "ldv_productgroup";
var BrandField = "ldv_brand";
var ProductTypeField = "ldv_producttype";
var anytext = "{EAF163B8-0000-0000-0000-3863BB35CFC0}";
var ModelNumberField = "ldv_modelnumber";
var ProblemField = "ldv_problem";
var SiteField = "ldv_site";
var EquipmentField = "ldv_equipment";
var CustomerTypeValue = new Array();
var MSCorASCos = new Array();
var CustomerTypeField = "ldv_customertype";
var StatusValues = new Object();
var ProblemFlag = true;
var CaseSparePartEntity = "ldv_casespareparts";
var ModelNumberFlag = true;
var BrandFlag = true;
var ProductTypeFlag = true;
var EquipmentFlag = true;
var AdminRoleName = "System Administrator";
var FrontOfficeRoleNAme = "Front Office User"
var TotalSparePartCostField = "ldv_totalusedsparepartscost";
var VisitCostField = "ldv_visitcost";
var TotalVisitCostField = "ldv_totalvisitcost";
var CreatedFromField = "ldv_createdfrom";
var LSCBranchField = "ldv_lscbranch";
var AdminFlag = false;
var ZeroCounter = 0;
var followUpStausOptions = new Array();
var ProdProb = new Array();
CustomerTypeValue["753240000"] = "Individual Customer";
CustomerTypeValue["753240001"] = "Corporate Customer";
MSCorASCos["0"] = "MSC";
MSCorASCos["1"] = "ASC";
MSCorASCos["2"] = "Both";

var IsGovInCreate = true;

var UserRole;


var Technical_Review_Tab = "Technical_Review_tab";
var Technical_Review_Details_Section = "Details_section";
var Technical_Review_Technician_Section = "Technical_Review_Technician";
var Technical_Review_General_Manager_Section = "Technical_Review_General_Manager";
var Technical_Review_Decision = "ldv_technicalreviewdecision";
var Technical_Review_Action = "ldv_technicalreviewaction";
var Technical_Model = "ldv_model";
var Technical_Model_weight = "ldv_modelweight";
var Technical_Serial_Number_Weight = "ldv_serialweight";
var Technical_Warranty_Date_Weight = "ldv_warrantydateweight";
var Technical_Warranty_status_weight = "ldv_warrantystatusweight";
var Technical_report_weight = "ldv_techreportweight";
var Total_Amount_weight = "ldv_totalamountweight";
var Technical_Serial_Number = "ldv_technicalserialnumber";
var Technical_Warranty_Date = "ldv_trwarrantydate";
var Technical_Warranty_Statues = "ldv_trwarrantystatus";
var Technical_Comment = "ldv_techniciancommment";
var Technical_Report = "ldv_technicalreport";
var Technical_Review_Comment = "ldv_technicalreviewcomment";
var Correct_Defect_Code = "ldv_correct";
var Correct_Spare_Parts = "ldv_correctsparepart";
var Send_For_Correction = "ldv_sendforcorrection";
var Send_For_GM_Approval = "ldv_requestgmapproval";
var Correct_Model = "ldv_correctmodel";
var Correct_Warranty_Date = "ldv_correctwarrantydate";
var Correct_Serial_Number = "ldv_correctserial";
var Correct_Warranty_Statues = "ldv_correctwarantystatus";
var Correct_Report = "ldv_correctreport";
var Deffect_Code_Weight = "ldv_defectcodeweight";
var Spare_Parts_Weight = "ldv_sparepartweight";
var Technician_Model = "ldv_techmodel";
var Technician_Serial_Number = "ldv_techserial";
var Technician_Warranty_Date = "ldv_techwarrantydate";
var Technician_Warranty_Status = "ldv_techwarrantystatus";
var Technician_Technician_Comment = "ldv_techcommment";
var Technician_Technical_Report = "ldv_techreport";
var Technician_Technical_Review_Comment = "ldv_trcomment";
var Technician_Is_Corrected = "ldv_iscorrected";
var GM_Decision = "ldv_gmdecision";

var ZeroCounter = 0;
var followUpStausOptions = new Array();
var IsGovInCreate = true;
var UserRole;

var CurrentId = Xrm.Page.data.entity.getId();
CurrentId = CurrentId.replace(/[{}]/g, "");
/////////////////////OnLoad Form/////////////////////////////////////////////////
function Installation_ClearFields() {
    //Product Group Clearing
    Xrm.Page.getAttribute(ProductGroupField).setValue(null);
    //Brand Clearing
    Xrm.Page.getAttribute(BrandField).setValue(null);
    //Producttype Clearing 
    Xrm.Page.getAttribute(ProductTypeField).setValue(null);
    //Equipment Clearing
    Xrm.Page.getAttribute(EquipmentField).setValue(null);
    //ModelNumber Clearing
    Xrm.Page.getAttribute(ModelNumberField).setValue(null);
    //Problem Clearing
    //Xrm.Page.getAttribute(ProblemField).setValue(null);
    //Xrm.Page.getAttribute(Problem2Field).setValue(null);
    //Xrm.Page.getAttribute(Problem3Field).setValue(null);
    //clearing Customer data 
    //Xrm.Page.getAttribute(CustomerNameField).setValue(null);
    // Xrm.Page.getAttribute(AccountField).setValue(null);
    Xrm.Page.getAttribute(GovernmentField).setValue(null);
    Xrm.Page.getAttribute("ldv_area").setValue(null);
    Xrm.Page.getAttribute(centraltelephoneField).setValue(null);
    Xrm.Page.getAttribute(MobileNumberField).setValue(null);
    Xrm.Page.getAttribute(ReferenceContactField).setValue(null);
    Xrm.Page.getAttribute(BuildingNumberField).setValue(null);
    Xrm.Page.getAttribute(AddressField).setValue(null);
    Xrm.Page.getAttribute(GovernmentCodeField).setValue(null);
    Xrm.Page.getAttribute(LandLineField).setValue(null);
    Xrm.Page.getAttribute("ldv_districtsales").setValue(null);
    Xrm.Page.ui.tabs.get("Co-Technician_tab").setDisplayState('collapsed');

}
function Installation_LoadStatusValues() {
    InstallationStatusValues = new Object();
    InstallationStatusValues["Service Scheduled"] = 753240000;
    InstallationStatusValues["Rescheduled"] = 753240001;
    InstallationStatusValues["Canceled By Customer"] = 753240002;
    InstallationStatusValues["No Answer"] = 753240003;
    InstallationStatusValues["Postpone"] = 753240004;
    InstallationStatusValues["Canceled By Technician"] = 753240005;
    InstallationStatusValues["Waiting For Spare Parts"] = 753240006;
    InstallationStatusValues["Product to be taken to EL-Araby LSC"] = 753240007;
    InstallationStatusValues["Fixed at LSC"] = 753240008;
    InstallationStatusValues["Replacement"] = 753240009;
    InstallationStatusValues["Approved to take product to Lsc"] = 753240010;
    InstallationStatusValues["Rejected to take product to Lsc"] = 753240011;
    InstallationStatusValues["Replacement Approved"] = 753240012;
    InstallationStatusValues["Replacement Rejected"] = 753240013;
    InstallationStatusValues["Product Delivered to LSC"] = 753240014;
    InstallationStatusValues["LSC shortage spare parts"] = 753240015;
    InstallationStatusValues["Spare parts Available"] = 753240016;
    InstallationStatusValues["Spare parts are Not available"] = 753240017;
    InstallationStatusValues["Delivered to customer"] = 753240018;
    InstallationStatusValues["Replacement Done"] = 753240019;
    InstallationStatusValues["Maintained"] = 753240024;
    InstallationStatusValues["Installed"] = 753240045;
    InstallationStatusValues["CS-does not want to pay"] = 753240023;
    InstallationStatusValues["MSC-Canceled"] = 6;
    InstallationStatusValues["ASC-Canceled"] = 2000;
    //
    InstallationStatusValues["Customer Reject Withdraw Product"] = 753240020;
    InstallationStatusValues["Open"] = 753240022;
}

function Installation_OnLoadForm() {

    try {

        Installation_LoadStatusValues();
        ProblemFlag = true;


        //parent.document.getElementById("formselectorcontainer").style.display = "none"
        //FormLoadCSS();
        NavigateToForm();
        UserRole = Installation_GetAllUserRole();
        //set the MSCorASC field and make it readonly if this service is just served by either ASC or MSC not both
        var frmType = Xrm.Page.ui.getFormType();
        var status = Xrm.Page.getAttribute(WorkOrderStatusField).getValue();


        //Added by nermine 31/1/2018
        //Remove blank values 
        Xrm.Page.getControl("ldv_totalamountweight").removeOption("");
        Xrm.Page.getControl("ldv_modelweight").removeOption("");
        Xrm.Page.getControl("ldv_serialweight").removeOption("");
        Xrm.Page.getControl("ldv_warrantydateweight").removeOption("");
        Xrm.Page.getControl("ldv_warrantystatusweight").removeOption("");
        Xrm.Page.getControl("ldv_sparepartweight").removeOption("");
        Xrm.Page.getControl("ldv_defectcodeweight").removeOption("");
        Xrm.Page.getControl("ldv_techreportweight").removeOption("");



        //Installation_ShowHideFollowUpTab();
        //if (Xrm.Page.getAttribute(ProblemField).getValue() != null)
        //{
        //    Xrm.Page.getAttribute(ProblemField).setSubmitMode("always");
        //}
        Xrm.Page.ui.tabs.get("Co-Technician_tab").setDisplayState('collapsed');



        if (frmType != 0 && frmType != 1) {
            Xrm.Page.ui.controls.get("ldv_warrantystatus").setDisabled(true);
            if (Installation_NewCheckUserRole(UserRole, "Technical Review User") || Installation_NewCheckUserRole(UserRole, AdminRoleName)) {
                Xrm.Page.ui.controls.get("ldv_warrantystatus").setDisabled(false);

            }


        }



        if (Installation_NewCheckUserRole(UserRole, "Follow-up User")) {

            Xrm.Page.ui.controls.get("ldv_callcenternotes").setDisabled(true);
            Xrm.Page.ui.controls.get("ldv_backofficenotes").setDisabled(true);
            Xrm.Page.ui.controls.get("ldv_planningteamnotes").setDisabled(true);
            Xrm.Page.ui.controls.get("ldv_notes").setDisabled(true);

            //check queue
            var queue = Xrm.Page.data.entity.attributes.get('new_queue').getValue()[0].name;
            if (queue.toLowerCase() == "follow up queue") {
                Installation_GEt_spare_Parts_Defect_code_count();

            }



        }

        if (frmType != 3 /*Read Only*/) {
            if (frmType == 2) {
                //Installation_OnChangeWorkOrdertype();
                Xrm.Page.getAttribute(CentralProductGroup).setSubmitMode("never");
                Xrm.Page.getAttribute(MSCorASCField).setSubmitMode("always");
                //Xrm.Page.getAttribute(ProblemField).setSubmitMode("always");
                //Xrm.Page.getAttribute("ldv_site").setSubmitMode("never");
                Installation_CustomerTypeCond();
            }
            if (frmType == 1) {
                Installation_CustomerTypeCond();
                if (Installation_NewCheckUserRole(UserRole, FrontOfficeRoleNAme)) {
                    Xrm.Page.getAttribute(CreatedFromField).setValue(3)/*3 mean LSC*/;
                    Xrm.Page.getControl(MSCorASCField).setVisible(false);
                    Xrm.Page.getControl(SiteField).setVisible(false);
                    Xrm.Page.getAttribute(LSCBranchField).setRequiredLevel("required");
                    Xrm.Page.ui.tabs.get("Work_Order_Information_tab").sections.get("MSC_sec").setVisible(false);

                    Xrm.Page.ui.tabs.get("Work_Order_Information_tab").sections.get("ASC_sec").setVisible(false);
                    Xrm.Page.ui.tabs.get("Work_Order_Information_tab").setDisplayState('collapsed');
                    Xrm.Page.ui.tabs.get("Co-Technician_tab").setDisplayState('collapsed');

                }

            }
            if (frmType == 2) {
                var Createdfrom = Xrm.Page.getAttribute(CreatedFromField).getValue();
                if (Createdfrom === 3/*LSC*/) {
                    Xrm.Page.getControl(MSCorASCField).setVisible(false);
                    Xrm.Page.getControl(SiteField).setVisible(false);
                    Xrm.Page.getAttribute(LSCBranchField).setRequiredLevel("required");
                    Xrm.Page.ui.tabs.get("Work_Order_Information_tab").sections.get("MSC_sec").setVisible(false);
                    Xrm.Page.ui.tabs.get("Work_Order_Information_tab").sections.get("ASC_sec").setVisible(false);
                    Xrm.Page.ui.tabs.get("Work_Order_Information_tab").setDisplayState('collapsed');
                    Xrm.Page.ui.tabs.get("Co-Technician_tab").setDisplayState('collapsed');

                }


                //if (Xrm.Page.getAttribute(ProblemField).getValue() == null && Xrm.Page.getAttribute(ModelNumberField).getValue() != null) {
                //    Xrm.Page.getControl(ProblemField).setVisible(false);
                //    Xrm.Page.getAttribute(ProblemField).setRequiredLevel("none");
                //}

            }


            if (frmType == 2 && status == InstallationStatusValues["Open"] && Xrm.Page.getAttribute(CreatedFromField).getValue() != 3) {

                Installation_MSCorASC();
                Xrm.Page.ui.tabs.get("Co-Technician_tab").setDisplayState('collapsed');

                //if (Xrm.Page.getAttribute(ProblemField).getValue() == null && Xrm.Page.getAttribute(ModelNumberField).getValue() != null) {
                //    Xrm.Page.getControl(ProblemField).setVisible(false);
                //    Xrm.Page.getAttribute(ProblemField).setRequiredLevel("none");
                //}
            }
            //var status = Xrm.Page.getAttribute(WorkOrderStatusField).getValue();
            //if (status != InstallationStatusValues["Open"])
            //    window.setTimeout(SetResource, 1000);
            //show the appropriate service activity grid according to MSCorASC
            if (Xrm.Page.getAttribute(CreatedFromField).getValue() != 3)
                Installation_OnChangeMSCorASC();
            //Xrm.Page.ui.controls.get("Waiting_Spare_Parts_grd").setVisible(false);
            var stateObject = Xrm.Page.getAttribute(CustomerNameField).getValue();
            //Hide All Fields need filteration 
            if (stateObject === null) {
                Xrm.Page.getControl(ProductGroupField).setVisible(false);
                Xrm.Page.getControl(BrandField).setVisible(false);
                Xrm.Page.getControl(ProductTypeField).setVisible(false);
                Xrm.Page.getControl(ModelNumberField).setVisible(false);
                //Xrm.Page.getControl(ProblemField).setVisible(false);
                //Xrm.Page.getControl(Problem2Field).setVisible(false);
                //Xrm.Page.getControl(Problem3Field).setVisible(false);
                Xrm.Page.getControl(EquipmentField).setVisible(false);
            }
            //else {
            //    // Installation_CustomerPreparation();
            //}
            //check if the status is maintained then calculate the total sparepart price 

            //if (status == InstallationStatusValues["Maintained"]) {
            //    //CalculateTotalSparePartCost();

            //}
            Installation_OnChangeStatus();
            // $( document ).ready(function() {



            //});


            if (Xrm.Page.context.getUserId() != Xrm.Page.getAttribute("ownerid").getValue()[0].id) {
                //HideScheduling();
            }
        }
        if (Xrm.Page.getAttribute("ldv_customername").getValue() != null && Xrm.Page.getAttribute("ldv_customertype").getValue() == 753240001) {
            Installation_FilterEquipment();
        }
        // HideActualDataSection();

        //Xrm.Page.getControl("ldv_problem").addPreSearch(function () {

        //    GetInstallationProblemsOnChangeProductType();

        //});
        Xrm.Page.ui.tabs.get("Co-Technician_tab").setDisplayState('collapsed');



        //created by amr 6/12/2017 CR
        Installation_Show_Aditional_Section();
        Follow_Up_Decision_Created_From_Portal();
        Installation_Fill_Technician_fields();
        if (Installation_NewCheckUserRole(UserRole, "Follow-up User") || Installation_NewCheckUserRole(UserRole, AdminRoleName)) {
            Xrm.Page.ui.tabs.get("tab_FollowUp_2").setVisible(true);
        }
        else {
            Xrm.Page.ui.tabs.get("tab_FollowUp_2").setVisible(false);
        }





        if (Installation_NewCheckUserRole(UserRole, BackOfficeRoleName)) {
            Xrm.Page.getControl("ldv_backofficenotes").setDisabled(false);

            if (status == 753240136 || status == 753240137) {
                Xrm.Page.getControl("ldv_transportationdone").setVisible(true);
                // amr 5/6/2018
                Xrm.Page.getControl("ldv_transportationdone").setDisabled(false);
                Xrm.Page.getAttribute("ldv_transportationdone").setValue(null);
                Xrm.Page.getAttribute("ldv_transportationdone").setRequiredLevel("required");

            }
            else {
                Xrm.Page.getControl("ldv_transportationdone").setDisabled(true);
            }
        }
        else {
            Xrm.Page.getControl("ldv_transportationdone").setDisabled(true);
        }


        if (Xrm.Page.getAttribute(CreatedFromField).getValue() == 0) //CRM,added by nermine
        {
            Xrm.Page.ui.controls.get("ldv_serialnumber").setDisabled(true);
            Xrm.Page.ui.controls.get("ldv_warrantydate").setDisabled(true);


        }



        if (Installation_NewCheckUserRole(UserRole, "Technical Review User")) {
            Xrm.Page.ui.tabs.get("Technical_Review_tab").setVisible(true);

            Xrm.Page.getControl("ldv_site").setDisabled(true);
            Xrm.Page.getControl("ldv_resourcelastcomment").setDisabled(true);
            Xrm.Page.getControl("ldv_callcenternotes").setDisabled(true);
            Xrm.Page.getControl("ldv_notes").setDisabled(true);
            Xrm.Page.getControl("ldv_serialnumber1").setDisabled(true);



            // newly added
            var Decision = Xrm.Page.getAttribute(Technical_Review_Decision).getValue();
            if (Decision == 753240002) {
                Installation_Show_Correct_Fields();
                Installation_Hide_Weight_Fields();


            }
            else if (Decision == 753240003) {
                Installation_Hide_Weight_Fields();
                Installation_Show_Correct_Fields();

            }



            $.ajax({
                type: "GET",
                contentType: "application/json; charset=utf-8",
                datatype: "json",
                url: Xrm.Page.context.getClientUrl() + "/api/data/v9.1/incidents(" + CurrentId + ")?$select=_ldv_productgroup_value",
                beforeSend: function (XMLHttpRequest) {
                    XMLHttpRequest.setRequestHeader("OData-MaxVersion", "4.0");
                    XMLHttpRequest.setRequestHeader("OData-Version", "4.0");
                    XMLHttpRequest.setRequestHeader("Accept", "application/json");
                    XMLHttpRequest.setRequestHeader("Prefer", "odata.include-annotations=\"*\"");
                },
                async: true,
                success: function (data, textStatus, xhr) {
                    var result = data;
                    var _ldv_productgroup_value = result["_ldv_productgroup_value"];
                    if (_ldv_productgroup_value.toLowerCase() == "33C018BF-1ED0-E511-80F3-3863BB363030".toLowerCase()) {
                        Xrm.Page.getAttribute("ldv_secondtechnicalserial").setRequiredLevel("required");
                    }
                },
                error: function (xhr, textStatus, errorThrown) {
                    Xrm.Utility.alertDialog(textStatus + " " + errorThrown);
                }
            });




            //added by nermine 28/1/2018==>if the queue is not technical review ,disable the technical review tab

            if (Xrm.Page.data.entity.attributes.get('new_queue').getValue() != null &&
                Xrm.Page.data.entity.attributes.get('new_queue').getValue() != undefined) {
                var queue = Xrm.Page.data.entity.attributes.get('new_queue').getValue()[0].name;
                if (queue.toLowerCase() != "technical review queue") {
                    TabSetDisabled("Technical_Review_tab", "Details_section", true);
                    TabSetDisabled("Technical_Review_tab", "Technical_Review_General_Manager", true);

                }
                else {
                    TabSetDisabled("Technical_Review_tab", "Details_section", false);
                    TabSetDisabled("Technical_Review_tab", "Technical_Review_General_Manager", true);

                    Xrm.Page.getAttribute(Technical_Review_Decision).setRequiredLevel("required");
                    Xrm.Page.getAttribute("ldv_technicalreviewcomment").setRequiredLevel("required");
                    Installation_GEt_spare_Parts_Defect_code_count();

                    Xrm.Page.getAttribute("ldv_technicalserialnumber").setRequiredLevel("required");
                    Xrm.Page.getAttribute("ldv_secondtechnicalserial").setRequiredLevel("none");
                    Xrm.Page.getAttribute("ldv_trwarrantydate").setRequiredLevel("required");
                    Xrm.Page.getAttribute("ldv_trwarrantystatus").setRequiredLevel("required");


                    //added by nermine
                    Xrm.Page.getControl("ldv_model").setDisabled(true);
                    Xrm.Page.getControl("ldv_secondtechmodel").setDisabled(true);
                    Xrm.Page.getControl("ldv_defectcodecount").setDisabled(true);
                    Xrm.Page.getControl("ldv_techniciancommment").setDisabled(true);
                    Xrm.Page.getControl("ldv_lsctechniciancomment").setDisabled(true);
                    Xrm.Page.getControl("ldv_serialnumbercounts").setDisabled(true);
                    Xrm.Page.getControl("ldv_technicalreviewaction").setDisabled(true);
                    Xrm.Page.getControl("ldv_totalamount").setDisabled(true);
                    Xrm.Page.getControl("ldv_sparepartcount").setDisabled(true);
                    Xrm.Page.getControl("ldv_dateentryfortechnicalreview").setDisabled(true);
                    Xrm.Page.getControl("ldv_iscorrected").setDisabled(true);

                }
            }
            else {
                TabSetDisabled("Technical_Review_tab", "Details_section", true);
                TabSetDisabled("Technical_Review_tab", "Technical_Review_General_Manager", true);
            }
        }
        else {
            Xrm.Page.ui.tabs.get("Technical_Review_tab").setVisible(false);
        }

        Installation_Show_Hide_Portal_Replacement_section(Createdfrom, Installation_NewCheckUserRole(UserRole, "Follow-up User") || Installation_NewCheckUserRole(UserRole, AdminRoleName), status);

        Is_General_Manager((Installation_NewCheckUserRole(UserRole, "General Manager")) || (Installation_NewCheckUserRole(UserRole, AdminRoleName)) && status == 753240104);




        ////////////////////////////////////////


    } catch (e) {

    }
    //HideLSCSectionOnChangeOfCreatedFrom();
    //Deployment Release 4
    if (status != 753240022) {
        Xrm.Page.getControl("ldv_problem").setDisabled(true);
    }

}

function Installation_GetAllUserRole() {

    var userRoleName = new Array();
    var currentUserRoles = Xrm.Page.context.getUserRoles();
    for (var i = 0; i < currentUserRoles.length; i++) {
        var userRoleId = currentUserRoles[i];
        userRoleName[i] = Installation_GetRoleName(userRoleId);
    }
    return userRoleName;
}

function Installation_NewCheckUserRole(AllRoles, SingleRole) {

    for (var i = 0; i < AllRoles.length; i++) {
        if (SingleRole == AllRoles[i])
            return true;
    }
    return false;
}
////////////////////OnSave Form//////////////////////////////////////////////////
function Intallation_OnSaveForm(ExContext) {

    Xrm.Page.ui.tabs.get("Co-Technician_tab").setDisplayState('collapsed');

    var EventArg = ExContext.getEventArgs();

    Installation_OnChangeStatus();
    Installation_MSCorASC();
    Installation_SetMSCorASC();

    onChangeCustomerType();
    Xrm.Page.getAttribute(MSCorASCField).setSubmitMode("always");
    Xrm.Page.getAttribute(GovernmentField).setSubmitMode("always");
    IsGovInCreate = false;


    if (Installation_NewCheckUserRole(UserRole, "Technical Review User")) {
        if (Xrm.Page.data.entity.getIsDirty() == 1) {
            //added by nermine 28/1/2018==>if the queue is not technical review ,disable the technical review tab
            if (Xrm.Page.data.entity.attributes.get('new_queue').getValue() != null && Xrm.Page.data.entity.attributes.get('new_queue').getValue() != undefined) {
                var queue = Xrm.Page.data.entity.attributes.get('new_queue').getValue()[0].name;
                if (queue.toLowerCase() == "technical review queue") {
                    var Decision = Xrm.Page.getAttribute(Technical_Review_Decision).getValue();
                    if ((Decision == 753240000 && Xrm.Page.getAttribute("ldv_sparepartcount").getValue() > 0) || Decision == 753240001) //Done and spcount>0 or pending teco ==> disbale tr section
                    {

                        TabSetDisabled("Technical_Review_tab", "Details_section", true);
                    }
                    else if (Decision == 753240002 && Xrm.Page.getAttribute(Send_For_Correction).getValue() == 1) //Correct Data and send for correction==yes
                    {
                        TabSetDisabled("Technical_Review_tab", "Details_section", true);
                    }
                    else if (Decision == 753240003 && Xrm.Page.getAttribute(Send_For_GM_Approval).getValue() == 1) //correct data sp and send for gm=yes
                    {
                        TabSetDisabled("Technical_Review_tab", "Details_section", true);
                    }

                }

            }

        }
    }
}
/////////////////////OnChange//////////////////////////////////
function Installation_OnChangeAccount() {

    try {

        Installation_ClearFields();
        Xrm.Page.getAttribute("ldv_site").setSubmitMode("dirty");
        var Account = Xrm.Page.getAttribute(AccountField).getValue();
        if (Account != null) {
            Xrm.Page.getAttribute(CustomerNameField).setValue(Account);
            Installation_OnChangeCustomerName();
        }
    } catch (e) {

    }

}

function Installation_OnChangeCustomerName() {
    // var currentForm = Xrm.Page.ui.formSelector.getCurrentItem().getLabel();
    // if (currentForm == MaintenanceFormName) {
    Xrm.Page.ui.tabs.get("Co-Technician_tab").setDisplayState('collapsed');

    Installation_CustomerPreparation();
    Installation_FilterEquipment();
    //  }
    // else if (currentForm == InquiryFormName) {
    //      Xrm.Page.getAttribute(MobileNumberField).setRequiredLevel("required");
    //     Xrm.Page.getAttribute(centraltelephoneField).setRequiredLevel("none");
    //     Installation_CustomerPreparation();
    // }



}

function Installation_CustomerPreparation() {
    //get the name of the customer name and ther get the records its self
    var Name = Installation_GetTheCurrentCustomerName();
    if (Name != null) {
        Installation_GetCustomerRecord(Name[0].id);
    }

}

function Installation_FilterEquipment() {
    //Xrm.Page.getAttribute(EquipmentField).setValue(null);
    if (EquipmentFlag) {
        Xrm.Page.getControl(EquipmentField).addPreSearch(function () {

            var stateObject = Xrm.Page.getAttribute(CustomerNameField).getValue();
            EquipmentFlag = false;
            // Get the lookup Object, and extract the Value (ID and Text)
            if (stateObject != null) {
                var stateTextValue = stateObject[0].name;
                var stateID = stateObject[0].id;

                fetchXml = "<filter type='and'><condition attribute='" + "ldv_customer" + "' operator='eq' uiname='" + stateTextValue + "' uitype='" + CustomerEntityName + "' value='" + stateID + "' /></filter>";

                // Apply the filter to the field
                Xrm.Page.getControl(EquipmentField).addCustomFilter(fetchXml);

            }
            else {
                fetchXml = "<filter type='and'><condition attribute=" + "'" + CustomerNameField + "' operator='eq' uiname='" + anytext + "' uitype='" + CustomerNameField + "' value='" + anytext + "' /></filter>";

                // Apply the filter to the field
                Xrm.Page.getControl(EquipmentField).addCustomFilter(fetchXml);
                Xrm.Page.getAttribute(EquipmentField).setValue(null);
            }

        });
    }
}

function Installation_OnChangeProductGroup() {
    var CentralTelephone = Xrm.Page.getAttribute(CentralTelephoneEntityName).getValue();
    var ProductGroup = Xrm.Page.getAttribute(ProductGroupField).getValue();
    if (CentralTelephone != null && ProductGroup != null) {
        Installation_GetSpecificCentral();
    }

    Installation_FilterProducttype();
    // FilterModelNumber();
}


function installation_OnChangeArea() {
    var Area = Xrm.Page.getAttribute("ldv_area").getValue();
    if (Area != null) {
        var str = Area[0].id.toString();
        str = str.toLowerCase();
        str = str.replace(/[{}]/g, "");

        var Query = "/api/data/v9.1/ldv_centralareas(" + str + ")?$expand=ldv_centraltelephone";

        var roleName;
        //fawzy20191217 change from oData_Request to oData_Request2  reason solve issue
        oData_Request2(Query, function (result) {
            roleName = result["ldv_centraltelephone"];

            if (roleName != undefined && roleName != null) {
                var lookupData = new Array();
                var lookupItem = new Object();
                //Set the GUID
                lookupItem.id = roleName["ldv_centraltelephoneid"];
                //Set the name
                lookupItem.name = roleName["ldv_centraltelephonename"];
                lookupItem.entityType = "ldv_centraltelephone";
                lookupData[0] = lookupItem;
                Xrm.Page.getAttribute(centraltelephoneField).setValue(lookupData);
                //commented by amr 28092017
                //Xrm.Page.getAttribute(centraltelephoneField).setValue(Installation_GetLookupObj(roleName));
                Xrm.Page.getControl(centraltelephoneField).setVisible(true);
                Xrm.Page.getControl(centraltelephoneField).setDisabled(true);
                Xrm.Page.getAttribute("ldv_area").setRequiredLevel("none");
                Xrm.Page.getControl("ldv_area").setVisible(false);

                var PG = Xrm.Page.getAttribute(ProductGroupField).getValue();
                if (PG != null)
                    Installation_GetSpecificCentral();

            }
        });


    }

}

function OnChangeBrand() {
    Xrm.Page.getAttribute(ProductTypeField).setValue(null);
    if (ProductTypeFlag) {


        Xrm.Page.getControl(ProductTypeField).addPreSearch(function () {

            var stateObject = Xrm.Page.getAttribute(BrandField).getValue();
            ProductTypeFlag = false;
            // Get the lookup Object, and extract the Value (ID and Text)
            if (stateObject != null) {
                var stateTextValue = stateObject[0].name;
                var stateID = stateObject[0].id;

                // Filter the District by Governments
                fetchXml = "<filter type='and'><condition attribute='" + BrandField + "' operator='eq' uiname='" + stateTextValue + "' uitype='" + BrandField + "' value='" + stateID + "' /></filter>";

                // Apply the filter to the field
                Xrm.Page.getControl(ProductTypeField).addCustomFilter(fetchXml);

            }
            else {
                fetchXml = "<filter type='and'><condition attribute=" + "'" + BrandField + "' operator='eq' uiname='" + anytext + "' uitype='" + BrandField + "' value='" + anytext + "' /></filter>";

                // Apply the filter to the field
                Xrm.Page.getControl(ProductTypeField).addCustomFilter(fetchXml);
                Xrm.Page.getAttribute(ProductTypeField).setValue(null);
            }

        });
    }
}

function Installation_OnChangeEquipment() {

    Installation_GetSpecificCentral();
    Installation_GetProductType();
}

function OnChangeSite() {
    Xrm.Page.getAttribute("ldv_site").setSubmitMode("dirty");
}

//this function called too OnChangeProductType beside OnChangeProductGroup
function Installation_FilterModelNumber() {
    //Xrm.Page.getAttribute(ProblemField).setValue(null);
    //Xrm.Page.getAttribute(Problem2Field).setValue(null);
    //Xrm.Page.getAttribute(Problem3Field).setValue(null);
    Xrm.Page.getAttribute(ModelNumberField).setValue(null);
    //Xrm.Page.getControl(ProblemField).setVisible(false);
    //Xrm.Page.getControl(Problem2Field).setVisible(false);
    //Xrm.Page.getControl(Problem3Field).setVisible(false);
    Xrm.Page.getControl(ModelNumberField).setVisible(false);


    Xrm.Page.getAttribute(ModelNumberField).setValue(null);
    if (ModelNumberFlag) {
        Xrm.Page.getControl(ModelNumberField).addPreSearch(function () {

            var ProdTypObject = Xrm.Page.getAttribute(ProductTypeField).getValue();
            var PrdGrpObject = Xrm.Page.getAttribute(ProductGroupField).getValue();
            var BrandObject = Xrm.Page.getAttribute(BrandField).getValue();
            ModelNumberFlag = false;
            // Get the lookup Object, and extract the Value (ID and Text)
            if (ProdTypObject != null) {
                var ProdTypText = ProdTypObject[0].name;
                var ProdTypID = ProdTypObject[0].id;
                var PrdGrpText = PrdGrpObject[0].name;
                var PrdGrpID = PrdGrpObject[0].id;
                var brndText = BrandObject[0].name;
                var brndID = BrandObject[0].id;

                // Filter the District by Governments
                fetchXml = "<filter type='and'>" +
                    // "<condition attribute='ldv_brand' operator='eq' uiname='" + brndText + "' uitype='" + BrandField + " value='" + brndID + "' />" +
                    "<condition attribute='" + "ldv_brand" + "' operator='eq' uiname='" + brndText + "' uitype='" + "ldv_brandname" + "' value='" + brndID + "' />" +
                    "<condition attribute='" + ProductTypeField + "' operator='eq' uiname='" + ProdTypText + "' uitype='" + ProductTypeField + "' value='" + ProdTypID + "' />" +
                    "<condition attribute='" + ProductGroupField + "' operator='eq' uiname='" + PrdGrpText + "' uitype='" + ProductGroupField + "' value='" + PrdGrpID + "' />" +
                    "</filter>";


                //  '<condition attribute="ldv_brand" operator="eq" value="073deb40-19e1-4ee8-ada8-870f073be756" />'
                //  '<condition attribute="ldv_productgroup" operator="eq" value="76d602ee-30db-4365-bb70-0888d24c75ac" />'
                //  '<condition attribute="ldv_producttype" operator="eq" value="111e18af-13aa-4495-bc67-62197ca25623" />'


                // Apply the filter to the field
                Xrm.Page.getControl(ModelNumberField).addCustomFilter(fetchXml);

            }
            else {
                fetchXml = "<filter type='and'><condition attribute=" + "'" + ProductTypeField + "' operator='eq' uiname='" + anytext + "' uitype='" + ProductTypeField + "' value='" + anytext + "' /></filter>";

                // Apply the filter to the field
                Xrm.Page.getControl(ModelNumberField).addCustomFilter(fetchXml);
                Xrm.Page.getAttribute(ModelNumberField).setValue(null);
            }

        });
        // var PrdId = Xrm.Page.getAttribute(ModelNumberField).getValue()[0].id;
        // SDK.REST.retrieveMultipleRecords(ProductProblemEntityName, "$select=ldv_Product,ldv_Problem&$filter=ldv_Product/Id eq guid'" + PrdId + "'", FilterProblem, function (error) { alert(error.message); }, function myfunction(error) { });

        // FilterProblem();
        //if (Xrm.Page.getAttribute(ProductTypeField).getValue() != null) {
        //    var PrdTypeId = Xrm.Page.getAttribute(ProductTypeField).getValue()[0].id;
        //    SDK.REST.retrieveMultipleRecords(ProductProblemEntityName, "$select=ldv_Product,ldv_Problem,new_ProductType&$filter=new_ProductType/Id eq guid'" + PrdTypeId + "'", FilterProblem, function (error) { alert(error.message); }, function myfunction(error) { alert(error.message); });
        //}
    }
}

function Installation_OnChangeLandLine() {
    debugger;//fawzyk20190819
    var landlineNum = Xrm.Page.getAttribute(LandLineField).getValue();
    var landline = Xrm.Page.getAttribute(LandLineField).getValue();


    var code = Installation_GetGovCode();


    if (landlineNum != null) {
        Xrm.Page.getControl("ldv_area").setVisible(false);
        landlineNum = code + landlineNum;
        landlineNum = landlineNum.substring(0, 4);
        var query = "/api/data/v9.1/ldv_centralranges?$select=_ldv_centralname_value,ldv_rangefrom,ldv_rangeto&$filter=startswith(ldv_rangefrom,'" + landlineNum + "')";
        //fawzy20191217 change from oData_Request to oData_Request2  reason solve issue
        oData_Request2(query, function (result) {
            if (result.value.length > 0) {
                Installation_Result(result.value);
            }
            else if (landline != "00000000") {
                Xrm.Page.getAttribute(centraltelephoneField).setValue(null);
                Xrm.Page.getAttribute("ldv_area").setValue(null);
                Xrm.Page.getAttribute(LandLineField).setValue(null);
            }
            else if (landline == "00000000" || (result.value.length == 0)) {
                Xrm.Page.getAttribute(centraltelephoneField).setValue(null);
                Xrm.Page.getAttribute("ldv_area").setValue(null);
                Xrm.Page.getControl("ldv_area").setVisible(true);
                Xrm.Page.getAttribute("ldv_area").setRequiredLevel("required");//hamada20191217 add area setRequired

            }
        });


        if (Xrm.Page.getAttribute("ldv_landline").getValue() != null) {

            if (Installation_formatPhoneLandLine(Xrm.Page.getAttribute("ldv_landline").getValue())) {

                Xrm.Page.getControl("ldv_landline").clearNotification(uniqueId);
            }
            else {
                Xrm.Page.getControl("ldv_landline").setNotification(message1, uniqueId);
                var newMail = Xrm.Page.getAttribute("ldv_landline").setValue("");

            }

        }
    }
}

function ReferenceContact_OnChange() {

    if (Xrm.Page.getAttribute("ldv_referencecontact").getValue() != null) {

        if (Installation_formatPhone(Xrm.Page.getAttribute("ldv_referencecontact").getValue())) {

            Xrm.Page.getControl("ldv_referencecontact").clearNotification(uniqueId);
        }
        else {
            Xrm.Page.getControl("ldv_referencecontact").setNotification(message, uniqueId);
            var newMail = Xrm.Page.getAttribute("ldv_referencecontact").setValue("");

        }

    }

}

function MobileNumber_OnChange() {

    if (Xrm.Page.getAttribute("ldv_mobilenumber").getValue() != null) {

        if (Installation_formatPhone(Xrm.Page.getAttribute("ldv_mobilenumber").getValue())) {

            Xrm.Page.getControl("ldv_mobilenumber").clearNotification(uniqueId);
        }
        else {
            Xrm.Page.getControl("ldv_mobilenumber").setNotification(message, uniqueId);
            var newMail = Xrm.Page.getAttribute("ldv_mobilenumber").setValue("");

        }

    }

}

function RefrenceContact_OnChange() {

    if (Xrm.Page.getAttribute("ldv_referencecontact").getValue() != null) {

        if (Installation_formatPhone(Xrm.Page.getAttribute("ldv_referencecontact").getValue())) {

            Xrm.Page.getControl("ldv_referencecontact").clearNotification(uniqueId);
        }
        else {
            Xrm.Page.getControl("ldv_referencecontact").setNotification(message, uniqueId);
            var newMail = Xrm.Page.getAttribute("ldv_referencecontact").setValue("");

        }

    }

}

function Installation_OnChangeWorkOrdertype() {

    var CurrentRecored = Xrm.Page.data.entity.getId();
    var Type = Xrm.Page.getAttribute(WorkOrdertype).getValue();
    var FormId = null;
    if (Type == 4) {
        FormId = InquiryFormId;
    }
    else if (Type == 1) {
        FormId = MaintenanceFormId;
    }
    else if (Type == 3)
        FormId = ComplainFormId;
    else if (Type == 0)
        FormId = InstallationFormId;
    else if (Type == 5)
        FormId = IspectionFormId;
    var parameters = {};
    if (Xrm.Page.getAttribute(AccountField).getValue() != null)
        parameters = Installation_GetCustomerInfo();
    parameters["formid"] = FormId;

    if (Xrm.Page.ui.formSelector.getCurrentItem().getId() != FormId && FormId != null) {
        Xrm.Utility.openEntityForm("incident", CurrentRecored, parameters);
        //    var items = Xrm.Page.ui.formSelector.items.get();

        //    for (var i in items) {

        //        var item = items[i];

        //        var itemId = item.getId();

        //        var itemLabel = item.getLabel()

        //        if (itemId == FormId) {

        //            //navigate to the form

        //            item.navigate();

        //        } //endif
        //    }
    }
}

function Installation_OnChangeModelNumber() {

    var PrdId = Xrm.Page.getAttribute("ldv_producttype").getValue();
    if (PrdId != null) {
        PrdId = Xrm.Page.getAttribute("ldv_producttype").getValue()[0].id;
        SDK.REST.retrieveMultipleRecords(ProductProblemEntityName, "$select=ldv_Product,ldv_Problem&$filter=new_ProductType/Id eq guid'" + PrdId + "'", Installation_FilterProblem, function (error) { alert(error.message); }, function myfunction(error) { });
    }

    //Xrm.Page.getControl(ProblemField).setVisible(true);
    //Xrm.Page.getAttribute(ProblemField).setRequiredLevel("required");

}

function Installation_OnChangeStatus() {

    var status = Xrm.Page.getAttribute(WorkOrderStatusField).getValue();
    //if (status == InstallationStatusValues["Waiting For Spare Parts"] || status == InstallationStatusValues["Maintained"])
    //Xrm.Page.ui.controls.get("Waiting_Spare_Parts_grd").setVisible(true);
    //else
    //Xrm.Page.ui.controls.get("Waiting_Spare_Parts_grd").setVisible(false);
    //if (status != InstallationStatusValues["Open"])
    //Xrm.Page.getControl(MSCorASCField).setDisabled(true);
    //if (status == InstallationStatusValues["Approved to take product to Lsc"] || status == InstallationStatusValues["Rejected to take product to Lsc"])
    //Xrm.Page.getControl(TechnicalApproveLSC).setDisabled(true);
    if (status == InstallationStatusValues["Service Scheduled"] || status == InstallationStatusValues["Installed"])
        Xrm.Page.ui.tabs.get("Work_Order_Information_tab").sections.get("Costing_sec").setVisible(true);
    if (status == InstallationStatusValues["Replacement"])
        Xrm.Page.ui.tabs.get("Replacement_tab").setVisible(true);



}

function Installation_OnChangeMSCorASC() {

    var frmType = Xrm.Page.ui.getFormType();

    var Servicetype = Xrm.Page.getAttribute(MSCorASCField).getValue();
    if (!Servicetype) { /*MSC*/

        if (frmType != 1)
            Installation_UpdateWorkOrder(Servicetype);

        try {
            Xrm.Page.ui.tabs.get("Work_Order_Information_tab").sections.get("MSC_sec").setVisible(true);
            Xrm.Page.ui.tabs.get("Co-Technician_tab").sections.get("MSCTech_sec").setVisible(true);

            Xrm.Page.ui.tabs.get("Work_Order_Information_tab").sections.get("ASC_sec").setVisible(false);
            Xrm.Page.ui.tabs.get("Co-Technician_tab").sections.get("ASCTec_sec").setVisible(false);

        } catch (e) {
            Xrm.Page.data.refresh();

        }


    }
    else { /*ASC*/

        if (frmType != 1)
            Installation_UpdateWorkOrder(Servicetype);
        //Xrm.Page.data.entity.save();
        try {
            Xrm.Page.ui.tabs.get("Work_Order_Information_tab").sections.get("MSC_sec").setVisible(false);
            Xrm.Page.ui.tabs.get("Co-Technician_tab").sections.get("MSCTech_sec").setVisible(false);
            // Xrm.Page.ui.controls.get("ServiceActivity_grd1").setVisible(false);
            Xrm.Page.ui.tabs.get("Work_Order_Information_tab").sections.get("ASC_sec").setVisible(true);
            Xrm.Page.ui.tabs.get("Co-Technician_tab").sections.get("ASCTec_sec").setVisible(true);
            // Xrm.Page.ui.controls.get("ASC_Service_Activity_Grd").setVisible(true);
        } catch (e) {

        }


    }
}

function Installation_OnChangeGovernment(LandlineFlag) {

    if (IsGovInCreate == true) {
        Xrm.Page.getAttribute(centraltelephoneField).setValue(null);
        Xrm.Page.getAttribute("ldv_area").setValue(null);
        Xrm.Page.getAttribute(LandLineField).setValue(null);

    }
    IsGovInCreate = true;

    if (Xrm.Page.getAttribute(GovernmentField).getValue() != null) {
        var Code = Installation_GetGovCode();
        if (Code != null)
            Xrm.Page.getAttribute(GovernmentCodeField).setValue(Code);
        //Xrm.Page.getAttribute(GovernmentCodeField).setSubmitMode("always");
        //if (LandlineFlag == null)
        //    Installation_OnChangeLandLine();
    }
}

function Installation_OnChangeProductType() {
    //ldv_equipmentSet?$select=ldv_product_ldv_equipment_Product/ldv_ProductType&$expand=ldv_product_ldv_equipment_Product&$filter=ldv_equipmentId%20eq%20guid%27C4D7046F-E04F-E511-80E1-3863BB35CFC0%27
    Installation_SetService();
}
///////////////////General Functions////////////////////
function Installation_FilterProblem(PrdProb) {
    debugger;
    //ProdProb = PrdProb;
    ProdProb = Installation_TestOnChangeProblem();
    var productTypeName = "_new_producttype_value@OData.Community.Display.V1.FormattedValue";
    var productTypeID = "_new_producttype_value";
    var problemName = "_ldv_problem_value@OData.Community.Display.V1.FormattedValue";
    var productName = "_ldv_product_value@OData.Community.Display.V1.FormattedValue";
    var problemLogicalName = "_ldv_problem_value@Microsoft.Dynamics.CRM.lookuplogicalname";
    var productTypeLogicalName = "_new_producttype_value@Microsoft.Dynamics.CRM.lookuplogicalname";
    var problemID = "_ldv_problem_value";


    Xrm.Page.getAttribute(ProblemField).setValue(null);
    //if (ProblemFlag) {

    Xrm.Page.getControl(ProblemField).addPreSearch(function (e) {

        var stateObject = Xrm.Page.getAttribute(ProductTypeField).getValue();
        //ProblemFlag = false;
        var Fetchxml = "<filter type='and'><condition attribute='" + Problemid + "' operator='in'>";

        if (stateObject != null) {
            var stateTextValue = stateObject[0].id;
            stateTextValue = stateTextValue.replace(/[{}]/g, "").toLowerCase();


            for (var i = 0; i < ProdProb.length; i++) {

                if (ProdProb[i][productTypeID].toLowerCase() === stateTextValue) {
                    Fetchxml = Fetchxml + CreateCond("ldv_problemid", ProdProb[i][problemName], ProdProb[i][problemID], ProblemField);
                }
            }
            Fetchxml = Fetchxml + " </condition></filter>";
            if (Fetchxml.indexOf("<value") > -1) {
                // Apply the filter to the field
                Xrm.Page.getControl(ProblemField).addCustomFilter(Fetchxml);
            }
            else {
                Xrm.Utility.alertDialog("No Problems for this product", null);
                //Xrm.Page.getControl(ProblemField).setVisible(false);
                Xrm.Page.getAttribute(ProblemField).setRequiredLevel("none");

                //Create dummy fetch xml to clear the lookup
                var fetchXml = "<filter type='or'><condition attribute=" + "'" + "ldv_problemname" + "' operator='eq' uiname='" + anytext + "' uitype='" + ProblemField + "' value='" + anytext + "' /></filter>";
                // Apply the filter to the field
                Xrm.Page.getControl(ProblemField).addCustomFilter(fetchXml);
                Xrm.Page.getAttribute(ProblemField).setValue(null);
                Xrm.Page.getControl(ModelNumberField).setFocus();
            }



        }
        else {


            // Apply the filter to the field
            var fetchXml = "<filter type='or'><condition attribute=" + "'" + "ldv_problemname" + "' operator='eq' uiname='" + anytext + "' uitype='" + ProblemField + "' value='" + anytext + "' /></filter>";
            // Apply the filter to the field
            Xrm.Page.getControl(ProblemField).addCustomFilter(fetchXml);
            Xrm.Page.getAttribute(ProblemField).setValue(null);

        }
    });

}

function CreateCond(Attribute, name, id, type) {
    var Cond = "<value uiname='" + name + "' uitype='" + type + "'>{" + id + "}</value>";
    return Cond;

}

function Installation_CustomerTypeCond(customer) {

    if (CustomerTypeValue[Xrm.Page.getAttribute(CustomerTypeField).getValue()] === "Individual Customer") {
        Xrm.Page.getControl(ProductGroupField).setVisible(true);
        Xrm.Page.getAttribute(ProductGroupField).setRequiredLevel("required");
        Xrm.Page.getAttribute(BrandField).setRequiredLevel("required");
        Xrm.Page.getAttribute(ProductTypeField).setRequiredLevel("required");
        Xrm.Page.getAttribute(ModelNumberField).setRequiredLevel("required");
        Xrm.Page.getAttribute(ProblemField).setRequiredLevel("required");
        Xrm.Page.getControl(EquipmentField).setVisible(false);
        Xrm.Page.getAttribute(EquipmentField).setRequiredLevel("none");
        Xrm.Page.ui.tabs.get("Product_tab").sections.get("IntialProblem_sec").setVisible(true);

    }
    else if (CustomerTypeValue[Xrm.Page.getAttribute(CustomerTypeField).getValue()] === "Corporate Customer") {
        Xrm.Page.getControl(ProductGroupField).setVisible(false);
        Xrm.Page.getAttribute(ProductGroupField).setRequiredLevel("none");
        Xrm.Page.getControl(BrandField).setVisible(false);
        Xrm.Page.getAttribute(BrandField).setRequiredLevel("none");
        Xrm.Page.getControl(ProductTypeField).setVisible(false);
        Xrm.Page.getAttribute(ProductTypeField).setRequiredLevel("none");
        Xrm.Page.getControl(ModelNumberField).setVisible(false);
        Xrm.Page.getAttribute(ModelNumberField).setRequiredLevel("none");
        Xrm.Page.getControl(ProblemField).setVisible(false);
        //Xrm.Page.getControl(Problem2Field).setVisible(false);
        //Xrm.Page.getControl(Problem3Field).setVisible(false);
        Xrm.Page.getAttribute(ProblemField).setRequiredLevel("none");
        Xrm.Page.getControl(EquipmentField).setVisible(true);
        Xrm.Page.getAttribute(EquipmentField).setRequiredLevel("required");
        Xrm.Page.ui.tabs.get("Product_tab").sections.get("IntialProblem_sec").setVisible(false);

    }
}

function Installation_AutoFillRec(customer) {
    if (customer != null) {
        if (customer[0].ldv_LandLine != null) {
            Xrm.Page.getAttribute(LandLineField).setValue(customer[0].ldv_LandLine);
            //if (customer[0].ldv_CentralTelephone === null && customer[0].ldv_CentralTelephone.Id === null)
            // Installation_OnChangeLandLine();
        }
        if (customer[0].ldv_districtsales != null)
            Xrm.Page.getAttribute(DistrictFieldSales).setValue(customer[0].ldv_districtsales);
        if (customer[0].ldv_BuildingNumber != null)
            Xrm.Page.getAttribute(BuildingNumberField).setValue(customer[0].ldv_BuildingNumber);
        if (customer[0].ldv_CentralTelephone != null && customer[0].ldv_CentralTelephone.Id != null) {
            Xrm.Page.getAttribute(centraltelephoneField).setValue(Installation_GetLookupObj(customer[0].ldv_CentralTelephone));
        }
        if (customer[0].ldv_MobileNumber != null)
            Xrm.Page.getAttribute(MobileNumberField).setValue(customer[0].ldv_MobileNumber);
        if (customer[0].ldv_Government != null && customer[0].ldv_Government.Id != null) {
            IsGovInCreate = false;
            Xrm.Page.getAttribute(GovernmentField).setValue(Installation_GetLookupObj(customer[0].ldv_Government));

            Installation_OnChangeGovernment("flag");
        }
        if (customer[0].Address1_Composite != null)
            Xrm.Page.getAttribute(AddressField).setValue(customer[0].Address1_Composite);
        //if (customer[0].ldv_District != null && customer[0].ldv_District.Id != null)
        //    Xrm.Page.getAttribute(DistrictField).setValue(Installation_GetLookupObj(customer[0].ldv_District));
        if (customer[0].ldv_ReferenceContact != null)
            Xrm.Page.getAttribute(ReferenceContactField).setValue(customer[0].ldv_ReferenceContact);
        if (customer[0].ldv_Segmentation != null)
            Xrm.Page.getAttribute(SegmentationField).setValue(customer[0].ldv_Segmentation.Value);
        if (customer[0].ldv_Gender1 != null)
            Xrm.Page.getAttribute("ldv_gender1").setValue(customer[0].ldv_Gender1.Value);
        if (customer[0].ldv_MethodofCommunication != null)
            Xrm.Page.getAttribute(MethodofCommunicationField).setValue(customer[0].ldv_MethodofCommunication.Value);
        if (customer[0].ldv_CustomerType != null)
            //  if (currentForm == MaintenanceFormName) {
            Xrm.Page.getAttribute(CustomerTypeField).setValue(customer[0].ldv_CustomerType.Value);
        if (customer[0].ldv_CentralTelephone != null && customer[0].ldv_CentralTelephone.Id != null) {
            Xrm.Page.getControl(centraltelephoneField).setVisible(true);
            Xrm.Page.getControl(centraltelephoneField).setDisabled(true);
            Xrm.Page.getAttribute("ldv_area").setRequiredLevel("none");
            Xrm.Page.getControl("ldv_area").setVisible(false);
            Installation_GetSpecificCentral(customer[0].ldv_CentralTelephone.Id);
        }
        else {
            Xrm.Page.getControl(centraltelephoneField).setVisible(false);
            Xrm.Page.getControl(centraltelephoneField).setDisabled(false);
            Xrm.Page.getAttribute("ldv_area").setRequiredLevel("required");
            Xrm.Page.getControl("ldv_area").setVisible(true);
            Installation_OnChangeLandLine();
        }
        Installation_CustomerTypeCond(customer);
        // }

    }
}

function Installation_GetCustomerRecord(id) {
    SDK.REST.retrieveMultipleRecords(CustomerEntityName, "$filter=AccountId eq guid'" + id + "'", Installation_AutoFillRec, Installation_AutoFillRec, Installation_AutoFillRec);
}

function Installation_GetSpecificCentral(id) {

    if (id == null) {
        //id = Xrm.Page.getAttribute(centraltelephoneField).getValue()[0].id;
        //  SDK.REST.retrieveMultipleRecords(CentralTelEntityName, "$filter=ldv_centraltelephoneId eq guid'" + id + "'",Installation_AutoFillSite, function (error) { }, function (error) { });

        var WOT = Xrm.Page.getAttribute(WorkOrdertype).getValue();
        var status = Xrm.Page.getAttribute(WorkOrderStatusField).getValue();
        var Query = "";
        var CT = null;
        if (Xrm.Page.getAttribute(EquipmentField).getValue() != null) {
            var equip = Installation_GetProductGroup(Xrm.Page.getAttribute(EquipmentField).getValue()[0].id);
        }
        var PG = Xrm.Page.getAttribute(ProductGroupField).getValue();
        if (PG == null && equip != null) {

            var equipProduct = equip["_ldv_product_value"];
            oData_Request("/api/data/v9.1/products(" + equipProduct + ")", function (result) {
                PG = result["_ldv_productgroup_value"];
            });
            CT = Xrm.Page.getAttribute(CentralTelephoneEntityName).getValue();
            if (PG != null)
                Query = " $filter=ldv_ProductGroup/Id eq guid'" + PG + "' and ldv_CentralTelephone/Id eq guid'" + CT[0].id + "' and ldv_workordertype/Value eq " + WOT + ""
        }
        else {
            CT = Xrm.Page.getAttribute(CentralTelephoneEntityName).getValue();
            if (CT != null && PG != null)
                Query = " $filter=ldv_ProductGroup/Id eq guid'" + PG[0].id + "' and ldv_CentralTelephone/Id eq guid'" + CT[0].id + "' and ldv_workordertype/Value eq " + WOT + ""
            else
                return;
        }
        SDK.REST.retrieveMultipleRecords(CentralProductGroup, Query, Installation_AutoFillSite, function (error) { }, function (error) { });

    }
    //else
    //    SDK.REST.retrieveMultipleRecords(CentralTelEntityName, "$filter=ldv_centraltelephoneId eq guid' {" + id + "}'", Installation_AutoFillSite, function (error) { }, function (error) { });

}

function Installation_AutoFillSite(Result) {

    //var frmType = Xrm.Page.ui.getFormType();
    if (Result != null && Result.length != 0) {
        if (Result[0].ldv_site.Id != null)
            Xrm.Page.getAttribute(SiteField).setValue(Installation_GetLookupObj(Result[0].ldv_site));
        Xrm.Page.getAttribute(SiteField).setSubmitMode("always");
    }

    //if (Result != null) {
    //    Xrm.Page.getAttribute(SiteField).setValue(Installation_GetLookupObj(Result[0].ldv_Site));
    //    // if (frmType == 2)
    //    //  UpdateSiteWorkOrder(Installation_GetLookupObj(Result[0].ldv_Site));
    //}
}

function Installation_GetTheCurrentCustomerName() {
    var obj = Xrm.Page.getAttribute(CustomerNameField).getValue();
    return obj;

}

function Installation_GetLookupObj(obj) {
    var lookupData = new Array();
    var lookupItem = new Object();
    //Set the GUID
    lookupItem.id = obj.Id;
    //Set the name
    lookupItem.name = obj.Name;
    lookupItem.entityType = obj.LogicalName;
    lookupData[0] = lookupItem;
    return lookupData;
}

function Installation_FilterProducttype() {

    var ProductGroupId = Xrm.Page.getAttribute(ProductGroupField).getValue();
    if (ProductGroupId != null) {
        ProductGroupId = Xrm.Page.getAttribute(ProductGroupField).getValue()[0].id
        ProductGroupId = ProductGroupId.replace(/[{}]/g, "");
        if (ProductGroupId != null) {
            var fetchXml = "<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='true'>";
            fetchXml += '<entity name="ldv_producttype" >'
            fetchXml += ' <link-entity name="ldv_productgroupproducttype" from="ldv_producttype" to="ldv_producttypeid" link-type="inner" >'
            fetchXml += ' <filter type="and" >'
            fetchXml += '<condition attribute="ldv_productgroup" operator="eq" value="' + ProductGroupId + '" />'
            fetchXml += '  </filter>'
            fetchXml += ' </link-entity>'
            fetchXml += '  </entity>'
            fetchXml += "</fetch>";


            var viewId = "{95942726-A633-E511-810F-000D3A20772A}";
            var entityName = "ldv_producttype";
            var viewDisplayName = "Product Types";
            var viewIsDefault = true;
            if (fetchXml != '') {

                var layoutXml = "<grid name='resultset' object='10018' jump='ldv_producttypename' select='1' icon='1' preview='1'>" +
                    "<row name='result' id='ldv_producttypeid'>" +
                    "<cell name='ldv_producttypename' width='200' />" +
                    "<cell name='ldv_producttypecode' width='200' />" +
                    // "<cell name='createdon' width='150' />" +
                    "</row>" +
                    "</grid>";

                Xrm.Page.getControl(ProductTypeField).addCustomView(viewId, entityName, viewDisplayName, fetchXml, layoutXml, viewIsDefault);

            }


        }
        //if (BrandFlag) {
        //    Xrm.Page.getControl(BrandField).addPreSearch(function () {

        //        var stateObject = Xrm.Page.getAttribute(ProductGroupField).getValue();
        //        BrandFlag = false;
        //        // Get the lookup Object, and extract the Value (ID and Text)
        //        if (stateObject != null) {
        //            var stateTextValue = stateObject[0].name;
        //            var stateID = stateObject[0].id;

        //            // Filter the District by Governments
        //            fetchXml = "<filter type='and'><condition attribute='" + ProductGroupField + "' operator='eq' uiname='" + stateTextValue + "' uitype='" + ProductGroupField + "' value='" + stateID + "' /></filter>";

        //            // Apply the filter to the field
        //            Xrm.Page.getControl(BrandField).addCustomFilter(fetchXml);

        //        }
        //        else {
        //            fetchXml = "<filter type='and'><condition attribute=" + "'" + BrandField + "' operator='eq' uiname='" + anytext + "' uitype='" + BrandField + "' value='" + anytext + "' /></filter>";

        //            // Apply the filter to the field
        //            Xrm.Page.getControl(BrandField).addCustomFilter(fetchXml);
        //            Xrm.Page.getAttribute(BrandField).setValue(null);
        //        }

        //    });
        //}
    }
}

function Installation_Result(result) {

    var landlineNum = Xrm.Page.getAttribute(LandLineField).getValue();
    var ProductGroup = Xrm.Page.getAttribute(ProductGroupField).getValue();
    var code = Installation_GetGovCode();
    landlineNum = code + landlineNum
    var centralTelephoneResult = Installation_SearchForTelephonCode(landlineNum, result);
    Installation_FillTheCentTelField(centralTelephoneResult);
    if (ProductGroup != null)
        Installation_GetSpecificCentral();
}

function Installation_SearchForTelephonCode(landline, telephons) {
    var temp;
    var IndexOfFirstZero;
    var From;
    var to;
    var IndexOfFirstZero = landline.indexOf("0");
    if (IndexOfFirstZero === 0) {
        landline = landline.substring(1, landline.length)
    }
    landline = parseInt(landline);
    for (var i = 0; i < telephons.length; i++) {
        //temp = telephons[i].ldv_RangeFrom.toString().substring(0, 3);

        temp = telephons[i].ldv_rangefrom.toString();
        IndexOfFirstZero = temp.indexOf("0");
        if (IndexOfFirstZero === 0) {
            temp = temp.substring(1, temp.length)
        }
        From = parseInt(temp);

        temp = telephons[i].ldv_rangeto.toString();
        IndexOfFirstZero = temp.indexOf("0");
        if (IndexOfFirstZero === 0) {
            temp = temp.substring(1, temp.length)
        }
        to = parseInt(temp);

        if (landline > From && landline < to) {
            return telephons[i];
        }

    }
}

function Installation_FillTheCentTelField(obj) {

    var Gov = Xrm.Page.getAttribute(GovernmentField).getIsDirty();
    var landline = Xrm.Page.getAttribute(LandLineField).getIsDirty();
    var landlineValue = Xrm.Page.getAttribute(LandLineField).getValue();
    var lookupItem = new Object();
    var lookupData = new Array();
    Xrm.Page.getAttribute("ldv_area").setRequiredLevel("required");
    Xrm.Page.getControl("ldv_area").setVisible(true);
    Xrm.Page.getControl(centraltelephoneField).setVisible(false);
    Xrm.Page.getControl(centraltelephoneField).setDisabled(false);

    if (obj == null && landline == true && landlineValue == "00000000") {
        Xrm.Page.getAttribute(centraltelephoneField).setValue(null);
        Xrm.Page.getAttribute("ldv_area").setValue(null);
        //xrm.Page.getAttribute(LandLineField).setValue(null);
    }

    else if (obj != null && (landline == true || Gov == true) && landlineValue != null) {
        if (obj["_ldv_centralname_value"] != null) {
            var rangeQuery = "/api/data/v9.1/ldv_centraltelephones(" + obj["_ldv_centralname_value"].replace(/[{}]/g, "") + ")?$select=ldv_centraltelephonename";
            //fawzy20191217 change from oData_Request to oData_Request2  reason solve issue
            oData_Request2(rangeQuery, function (data) {

                lookupItem.name = data["ldv_centraltelephonename"];
                lookupItem.entityType = "ldv_centraltelephone";
                lookupItem.id = obj["_ldv_centralname_value"];
                lookupData[0] = lookupItem;
                Xrm.Page.getAttribute(centraltelephoneField).setValue(lookupData);
            });

        }
        Xrm.Page.getAttribute("ldv_area").setRequiredLevel("none");
        Xrm.Page.getControl("ldv_area").setVisible(false);
        Xrm.Page.getControl(centraltelephoneField).setVisible(true);
        Xrm.Page.getControl(centraltelephoneField).setDisabled(true);
    }
    else if (obj == null && landline == true && landlineValue != "00000000") {
        Xrm.Page.getAttribute("ldv_area").setRequiredLevel("required");
        Xrm.Page.getControl("ldv_area").setVisible(true);
        Xrm.Page.getControl(centraltelephoneField).setVisible(false);
        Xrm.Page.getControl(centraltelephoneField).setDisabled(false);
    }
    else {
        Xrm.Page.getAttribute("ldv_area").setRequiredLevel("none");
        Xrm.Page.getControl("ldv_area").setVisible(false);
        Xrm.Page.getControl(centraltelephoneField).setVisible(true);
        Xrm.Page.getControl(centraltelephoneField).setDisabled(true);
    }

}

function Installation_NewCheckUserRole(UserRole, RoleToCheck) {


    var currentUserRoles = Xrm.Page.context.getUserRoles();
    for (var i = 0; i < currentUserRoles.length; i++) {
        var userRoleId = currentUserRoles[i];
        var userRoleName = Installation_GetRoleName(userRoleId);
        if (userRoleName == RoleToCheck) {
            return true;
        }
    }
    return false;
}

function Installation_GetRoleName(roleId) {
    var roleName = "";

    var query = "/api/data/v9.1/roles(" + roleId + ")";
    $.ajax({
        type: "GET",
        contentType: "application/json; charset=utf-8",
        datatype: "json",
        url: Xrm.Page.context.getClientUrl() + query,
        beforeSend: function (XMLHttpRequest) {
            XMLHttpRequest.setRequestHeader("OData-MaxVersion", "4.0");
            XMLHttpRequest.setRequestHeader("OData-Version", "4.0");
            XMLHttpRequest.setRequestHeader("Accept", "application/json");
            XMLHttpRequest.setRequestHeader("Prefer", "odata.include-annotations=\"*\"");
        },
        async: false,
        success: function (data, textStatus, xhr) {
            roleName = data["name"];

        },
        error: function (xhr, textStatus, errorThrown) {
            //Xrm.Utility.alertDialog('Installation_GetRoleName Failed: ' + textStatus + " " + errorThrown);
        }
    });
    return roleName;
}


function Installation_MSCorASC() {

    try {

        var frmType = Xrm.Page.ui.getFormType();
        var status = Xrm.Page.getAttribute(WorkOrderStatusField).getValue();
        var WOT = Xrm.Page.getAttribute(WorkOrdertype).getValue();

        if (frmType != 1 && status != InstallationStatusValues["Open"])
            return;
        var Query = "";
        var CT = null;
        if (Xrm.Page.getAttribute(EquipmentField).getValue() != null) {
            var equip = Installation_GetProductGroup(Xrm.Page.getAttribute(EquipmentField).getValue()[0].id);
        }
        var PG = Xrm.Page.getAttribute(ProductGroupField).getValue();
        if (PG == null && equip != null) {

            var equipProduct = equip["_ldv_product_value"];
            oData_Request("/api/data/v9.1/products(" + equipProduct + ")", function (result) {
                PG = result["_ldv_productgroup_value"];
            });

            CT = Xrm.Page.getAttribute(CentralTelephoneEntityName).getValue();
            if (PG != null) {
                var query = "/api/data/v9.1/ldv_centralproductgroups?$filter=_ldv_productgroup_value eq " + PG + " and _ldv_centraltelephone_value eq " + CT[0].id.replace(/[{}]/g, "") + " and ldv_workordertype eq " + WOT + "";

                oData_Request(query, function (result) {

                    if (result.value.length > 0) {
                        Installation_SetMSCorASC(result.value[0]);
                    }
                });

            }
        }
        else {
            CT = Xrm.Page.getAttribute(CentralTelephoneEntityName).getValue();

            var query = "/api/data/v9.1/ldv_centralproductgroups?$filter=_ldv_productgroup_value eq " + PG[0].id.replace(/[{}]/g, "") + " and _ldv_centraltelephone_value eq " + CT[0].id.replace(/[{}]/g, "") + " and ldv_workordertype eq " + WOT + "";

            oData_Request(query, function (result) {

                if (result.value.length > 0) {
                    Installation_SetMSCorASC(result.value[0]);

                }
            });
        }


    } catch (e) {

    }
}



function Installation_SetMSCorASC(CPg) {


    var frmType = Xrm.Page.ui.getFormType();
    var status = Xrm.Page.getAttribute(WorkOrderStatusField).getValue();

    if (frmType != 1 && status != InstallationStatusValues["Open"])
        return;
    if (CPg != null) {
        var obj = new Object();
        obj.Id = CPg["ldv_centralproductgroupid"];
        obj.Name = CPg["ldv_name"];
        obj.LogicalName = CentralProductGroup;


        Xrm.Page.getAttribute(CentralProductGroup).setValue(Installation_GetLookupObj(obj));
        if (MSCorASCos[CPg["ldv_servedby"]] == "MSC") {
            if (Xrm.Page.getAttribute(MSCorASCField).getValue() != CPg["ldv_servedby"]) {
                Xrm.Page.getAttribute(MSCorASCField).setValue(CPg["ldv_servedby"]);
                Xrm.Page.data.entity.save();
            }
            Xrm.Page.getControl(MSCorASCField).setDisabled(true);
            //Xrm.Page.ui.controls.get("ServiceActivity_grd").setVisible(true);
            //Xrm.Page.ui.controls.get("ASC_Service_Activity_Grd").setVisible(false);
            Xrm.Page.ui.controls.get("ASCCoTech_Grd").setVisible(false);
            Xrm.Page.ui.controls.get("CoTechnician_grd").setVisible(true);
            Xrm.Page.ui.tabs.get("Work_Order_Information_tab").sections.get("MSC_sec").setVisible(true);
            Xrm.Page.ui.tabs.get("Co-Technician_tab").sections.get("MSCTech_sec").setVisible(true);
            // Xrm.Page.ui.controls.get("ServiceActivity_grd1").setVisible(false);
            Xrm.Page.ui.tabs.get("Work_Order_Information_tab").sections.get("ASC_sec").setVisible(false);
            Xrm.Page.ui.tabs.get("Co-Technician_tab").sections.get("ASCTec_sec").setVisible(false);
        }
        else
            if (MSCorASCos[CPg["ldv_servedby"]] == "ASC") {
                if (Xrm.Page.getAttribute(MSCorASCField).getValue() != CPg["ldv_servedby"]) {

                    Xrm.Page.getAttribute(MSCorASCField).setValue(CPg["ldv_servedby"]);
                    Xrm.Page.data.entity.save();
                }
                Xrm.Page.getControl(MSCorASCField).setDisabled(true);
                //Xrm.Page.ui.controls.get("ServiceActivity_grd").setVisible(false);
                //Xrm.Page.ui.controls.get("ASC_Service_Activity_Grd").setVisible(true);
                Xrm.Page.ui.controls.get("CoTechnician_grd").setVisible(false);
                Xrm.Page.ui.controls.get("ASCCoTech_Grd").setVisible(true);

                Xrm.Page.ui.tabs.get("Work_Order_Information_tab").sections.get("MSC_sec").setVisible(false);
                Xrm.Page.ui.tabs.get("Co-Technician_tab").sections.get("MSCTech_sec").setVisible(false);
                // Xrm.Page.ui.controls.get("ServiceActivity_grd1").setVisible(false);
                Xrm.Page.ui.tabs.get("Work_Order_Information_tab").sections.get("ASC_sec").setVisible(true);
                Xrm.Page.ui.tabs.get("Co-Technician_tab").sections.get("ASCTec_sec").setVisible(true);
            }
            else {
                if (Xrm.Page.getControl(MSCorASCField).getDisabled()) {
                    Xrm.Page.getControl(MSCorASCField).setDisabled(false);
                    Xrm.Page.data.entity.save();
                }
            }
    }


}

function GetRelatedServices() {

    var CurrentCaseID = Xrm.Page.data.entity.getId();
    CurrentCaseID = CurrentCaseID.replace(/[{}]/g, "");

    var Servicetype = Xrm.Page.getAttribute(MSCorASCField).getValue();
    var RelatedServiceActivities = null;

    var query;

    if (!Servicetype) //MSC
    {
        query = "/api/data/v9.1/serviceappointments?$filter=_regardingobjectid_value eq " + CurrentCaseID;

    }
    else /*ASC Case*/ {

        query = "/api/data/v9.1/ldv_ascserviceactivities?$filter=_ldv_workorder_value eq " + CurrentCaseID;

    }
    oData_Request(query, function (data) {

        RelatedServiceActivities = data.value;
    });

    return RelatedServiceActivities;
}

function CheckPendingActivites() {
    try {
        var frmType = Xrm.Page.ui.getFormType();
        if (frmType == 1)
            return true;

        var FlagNoPendingAct = true;
        var RelSerAct = GetRelatedServices();
        var Servicetype = Xrm.Page.getAttribute(MSCorASCField).getValue();
        if (RelSerAct != null || RelSerAct != undefined) {


            if (!Servicetype) {
                for (var i = 0; i < RelSerAct.length; i++) {
                    if (RelSerAct[i].StateCode.Value == 3)
                        FlagNoPendingAct = false;
                }
            }
            else {
                for (var i = 0; i < RelSerAct.length; i++) {
                    if (RelSerAct[i].statecode.Value == 0)
                        FlagNoPendingAct = false;
                }
            }
        }

        // alert(FlagNoPendingAct);
        return FlagNoPendingAct;
    }
    catch (e) {
        return true;
    }

}

function CalculateTotalSparePartCost() {
    //var WorkOrderId = Xrm.Page.data.entity.getId();
    //SDK.REST.retrieveMultipleRecords(CaseSparePartEntity, "$filter=ldv_WorkOrder/Id eq guid'" + WorkOrderId + "'", CalculateTotalSparePartCostCallBack, function (error) { }, function (error) { });
}

function CalculateTotalSparePartCostCallBack(SpareParts) {
    //var totalSparePartsCost = 0;
    //if (SpareParts != null || SpareParts != undefined) {


    //    for (var i = 0; i < SpareParts.length; i++) {
    //        if (SpareParts[i].ldv_TotalPrice.Value != null && SpareParts[i].ldv_IsUsed)
    //            totalSparePartsCost += parseFloat(SpareParts[i].ldv_TotalPrice.Value);
    //    }
    //}
    //Xrm.Page.getAttribute(TotalSparePartCostField).setValue(totalSparePartsCost);
    //CalcTotalVisitCost();
}

function EnableDisableAdd() {
    return CheckPendingActivites();
}

function Installation_GetProductGroup(EquipId) {
    EquipId = EquipId.replace(/[{}]/g, "");
    var equipment;
    var query = "/api/data/v9.1/ldv_equipments(" + EquipId + ")";
    oData_Request(query, function (result) {
        equipment = result;
    });

    return equipment;
} //D

function Installation_formatPhone(phonenum) {

    var regexObj1 = /^\d+$/;
    //var regexObj2 = /^\d{11}?$/;
    var regexObj2 = /^\d{11}$/;
    return (regexObj1.test(phonenum) && regexObj2.test(phonenum));

}

function Installation_formatPhoneLandLine(phonenum) {

    var regexObj1 = /^\d+$/;


    return regexObj1.test(phonenum);

}


function Installation_UpdateWorkOrder(Value) {

    var frmType = Xrm.Page.ui.getFormType();
    var status = Xrm.Page.getAttribute(WorkOrderStatusField).getValue();
    if (frmType == 2 && status == InstallationStatusValues["Open"]) {
        var WorkOrderId = Xrm.Page.data.entity.getId();

        var objWorOrder = {};
        // set the name of Account
        objWorOrder.ldv_MSCorASC = Value.toString();

        SDK.REST.updateRecord(
            WorkOrderId,
            objWorOrder,
            "Incident",
            function () {

            },
            function (error) {
                // alert(error.message);
            }
        );
    }
}

function FutureDateCollection() {

    var ScheduledDate = Xrm.Page.getAttribute(CollectionVisitField).getValue();
    if (ScheduledDate != null) {
        var currentDateTime = new Date();
        var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
        var diffDays = (ScheduledDate.getTime() - currentDateTime.getTime()) / (oneDay);

        if (diffDays < 0) {
            Xrm.Page.getAttribute(CollectionVisitField).setValue(null);
            Xrm.Page.getControl(CollectionVisitField).setNotification("من فضلك اختار تاريخ حديث -Please Choose new Date", "Collection");
        }
        else {
            Xrm.Page.getControl(CollectionVisitField).clearNotification("Collection");
        }
    }

}

function FutureDateDelivery() {

    var ScheduledDate = Xrm.Page.getAttribute("ldv_deliveryvisitdate").getValue();
    if (ScheduledDate != null) {
        var currentDateTime = new Date();
        var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
        var diffDays = (ScheduledDate.getTime() - currentDateTime.getTime()) / (oneDay);

        if (diffDays < 0) {
            Xrm.Page.getAttribute("ldv_deliveryvisitdate").setValue(null);
            Xrm.Page.getControl("ldv_deliveryvisitdate").setNotification("من فضلك اختار تاريخ حديث -Please Choose new Date", "Collection");
        }
        else {
            Xrm.Page.getControl("ldv_deliveryvisitdate").clearNotification("Collection");
        }
    }
}

function FutureAvailabilityDate() {

    var ScheduledDate = Xrm.Page.getAttribute(AvailabilityDateField).getValue();
    if (ScheduledDate != null) {
        var currentDateTime = new Date();
        var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
        var diffDays = (ScheduledDate.getTime() - currentDateTime.getTime()) / (oneDay);

        if (diffDays < 0) {
            Xrm.Page.getAttribute(AvailabilityDateField).setValue(null);
            Xrm.Page.getControl(AvailabilityDateField).setNotification("من فضلك اختار تاريخ حديث -Please Choose new Date", "Collection");
        }
        else {
            Xrm.Page.getControl(AvailabilityDateField).clearNotification("Collection");
        }
    }
}

function Installation_TestOnChangeProblem() {
    debugger;
    //get the central related to thi area
    var Area = Xrm.Page.getAttribute(ProductTypeField).getValue();
    var roleName = [];
    if (Area != null) {
        var str = Area[0].id.toString();
        str = str.toLowerCase();
        str = str.replace(/[{}]/g, "");

        var query = "/api/data/v9.1/ldv_productproblems?$filter=_new_producttype_value eq " + str;


        oData_Request2(query, function (results) {
            if (results.value.length > 0) {
                for (var x in results.value) {

                    roleName.push(results.value[x]);
                }

            }

        });

        return roleName;

    }

}

function Installation_Filterbrand() {
    debugger;
    Xrm.Page.getAttribute(BrandField).setValue(null);
    //Xrm.Page.getAttribute(ProblemField).setValue(null);
    //Xrm.Page.getAttribute(Problem2Field).setValue(null);
    //Xrm.Page.getAttribute(Problem3Field).setValue(null);
    Xrm.Page.getAttribute(ModelNumberField).setValue(null);
    Xrm.Page.getControl(BrandField).setVisible(false);
    //Xrm.Page.getControl(ProblemField).setVisible(false);
    //Xrm.Page.getControl(Problem2Field).setVisible(false);
    //Xrm.Page.getControl(Problem3Field).setVisible(false);
    Xrm.Page.getControl(ModelNumberField).setVisible(false);

    var ProductTypeId = Xrm.Page.getAttribute(ProductTypeField).getValue();
    if (ProductTypeId != null) {
        ProductTypeId = ProductTypeId[0].id;
        ProductTypeId = ProductTypeId.replace(/[{}]/g, "");
        if (ProductTypeId != null) {
            var fetchXml = "<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='true'>";
            fetchXml += ' <entity name="ldv_brandname" >'
            fetchXml += '<link-entity name="ldv_producttypebrand" from="ldv_brand" to="ldv_brandnameid" link-type="inner" >'
            fetchXml += ' <filter type="and" >'
            fetchXml += '<condition attribute="ldv_producttype" operator="eq" value="' + ProductTypeId + '" />'
            fetchXml += '  </filter>'
            fetchXml += ' </link-entity>'
            fetchXml += '  </entity>'
            fetchXml += "</fetch>";

            var viewId = "{95942526-A633-E511-810F-000D3A20772A}";
            var entityName = "ldv_brandname";
            var viewDisplayName = "Brands";
            var viewIsDefault = true;
            if (fetchXml != '') {

                var layoutXml = "<grid name='resultset' object='1' jump='ldv_brandname' select='1' icon='1' preview='1'>" +
                    "<row name='result' id='ldv_brandnameid'>" +
                    "<cell name='ldv_brandname' width='200' />" +
                    "<cell name='ldv_brandcode' width='200' />" +
                    // "<cell name='createdon' width='150' />" +
                    "</row>" +
                    "</grid>";

                Xrm.Page.getControl(BrandField).addCustomView(viewId, entityName, viewDisplayName, fetchXml, layoutXml, viewIsDefault);

            }


        }
    }
}

function Installation_GetGovCode() {
    debugger;
    var govCode = null;
    if (Xrm.Page.getAttribute("ldv_government").getValue() != null) {
        var GovId = Xrm.Page.getAttribute("ldv_government").getValue()[0].id;
        GovId = GovId.toLowerCase();
        GovId = GovId.replace(/[{}]/g, "");

        var query = "/api/data/v9.1/ldv_governments?$filter=ldv_governmentid eq(" + GovId + ")";

        oData_Request2(query, function (result) {

            if (result.value.length > 0) {

                govCode = result.value[0]["ldv_realgovernmentcode"];

            }

        });



        return govCode;
    }
}

function Installation_GetCustomerInfo() {

    var parameters = {};
    var Customer = Xrm.Page.getAttribute(AccountField).getValue();
    var Government = Xrm.Page.getAttribute(GovernmentField).getValue();
    var District = Xrm.Page.getAttribute("ldv_districtsales").getValue();
    var LandLine = Xrm.Page.getAttribute(LandLineField).getValue();
    var BuildingNumber = Xrm.Page.getAttribute(BuildingNumberField).getValue();
    var Address = Xrm.Page.getAttribute(AddressField).getValue();
    var Area = Xrm.Page.getAttribute("ldv_area").getValue();
    var CentralTelephone = Xrm.Page.getAttribute(centraltelephoneField).getValue();
    var MobileNumber = Xrm.Page.getAttribute(MobileNumberField).getValue();
    var RefrenceContact = Xrm.Page.getAttribute(ReferenceContactField).getValue();
    var Segmentation = Xrm.Page.getAttribute(SegmentationField).getValue();
    var CustomerType = Xrm.Page.getAttribute(CustomerTypeField).getValue();
    var GovCode = Xrm.Page.getAttribute(GovernmentCodeField).getValue();
    parameters[LandLineField] = LandLine == null ? "" : LandLine;
    parameters[MobileNumberField] = MobileNumber == null ? "" : MobileNumber;
    parameters[ReferenceContactField] = RefrenceContact == null ? "" : RefrenceContact;
    parameters[SegmentationField] = Segmentation == null ? "" : Segmentation;
    parameters[CustomerTypeField] = CustomerType == null ? "" : CustomerType;
    parameters[BuildingNumberField] = BuildingNumber == null ? "" : BuildingNumber;
    parameters[AddressField] = Address == null ? "" : Address;
    parameters[GovernmentCodeField] = GovCode == null ? "" : GovCode;
    parameters["ldv_districtsales"] = District == null ? "" : District;
    if (Customer != null) {
        // parameters["ldv_customernamename"] = Customer[0].name;
        // parameters["ldv_customername"] = Customer[0].id;
        //  parameters["new_testcustomername"] = Customer[0].name;
        //  parameters["new_testcustomer"] = Customer[0].id;
        parameters["customeridname"] = Customer[0].name;
        parameters["customerid"] = Customer[0].id;
        parameters["customeridtype"] = "account";

    }
    if (Government != null) {
        parameters["ldv_governmentname"] = Government[0].name;
        parameters[GovernmentField] = Government[0].id;
    }
    //if (District != null) {
    //    parameters["ldv_districtname"] = District[0].name;
    //    parameters[DistrictField] = District[0].id;
    //}
    if (Area != null) {
        parameters["ldv_areaname"] = Area[0].name;
        parameters["ldv_area"] = Area[0].id;
    }
    if (CentralTelephone != null) {
        parameters["ldv_centraltelephonename"] = CentralTelephone[0].name;
        parameters[centraltelephoneField] = CentralTelephone[0].id;
    }
    return parameters;
}


function Installation_SetService(id) {

    var str = null;
    if (id != null)
        str = id;
    else {
        var ProductType = Xrm.Page.getAttribute(ProductTypeField).getValue();
        if (ProductType != null) {
            str = ProductType[0].id.toString();
            str = str.toLowerCase();

        }
    }
    if (str != null) {

        var FetchXml = "<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>\
        <entity name='ldv_producttype'>\
            <attribute name='ldv_installationservice'/>\
            <filter type='and'>\
                <condition attribute='ldv_producttypeid' operator='eq' uitype='ldv_producttype' value='"+ str + "' />\
            </filter>\
        </entity>\
    </fetch>";
        var lookupData = new Array();
        var lookupItem = new Object();
        var services = XrmServiceToolkit.Soap.Fetch(FetchXml);
        if (services != null) {
            if (services.length > 0) {
                if (services[0].attributes["ldv_installationservice"] != null || services[0].attributes["ldv_installationservice"] != undefined) {
                    var service = services[0].attributes["ldv_installationservice"];


                    lookupItem.id = service.id;
                    lookupItem.name = service.formattedValue;
                    lookupItem.entityType = "service";
                    lookupData[0] = lookupItem;
                    Xrm.Page.getAttribute("ldv_service").setValue(lookupData);
                }

            }

        }
    }
}
function Installation_GetProductType() {

    var str;

    var Equipment = Xrm.Page.getAttribute(EquipmentField).getValue();
    if (Equipment != null) {
        str = Equipment[0].id.toString();
        str = str.toLowerCase();

        str = str.replace(/[{}]/g, "");


        var FetchXml = "<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>\
         <entity name='ldv_equipment'>\
            <attribute name='ldv_equipmentid'/>\
            <filter type='and'>\
                <condition attribute='ldv_equipmentid' operator='eq' uitype='ldv_equipment' value='"+ str + "' />\
            </filter>\
<link-entity name='product' from='productid' to='ldv_product' visible='false' link-type='outer' alias='ep'>\
      <attribute name='ldv_producttype' />\
    </link-entity>\
      </entity>\
    </fetch>";

        var products = XrmServiceToolkit.Soap.Fetch(FetchXml);
        if (products != null) {
            if (products.length > 0) {
                if (products[0].attributes["ep.ldv_producttype"] != null && products[0].attributes["ep.ldv_producttype"] != undefined) {

                    var pTypeID = products[0].attributes["ep.ldv_producttype"].id;
                    SetService(pTypeID);
                }
            }

        }

    }
}

function HideScheduling() {
    //Xrm.Page.ui.tabs.get("Work_Order_Information_tab").sections.get("ASC_sec").setVisible(false);
    //Xrm.Page.ui.tabs.get("Work_Order_Information_tab").sections.get("MSC_sec").setVisible(false);
}

function CheckLSCPendingServiceActivity() {
    // alert("test");


    try {

        var frmType = Xrm.Page.ui.getFormType();

        if (frmType != 1 /*Read Only*/) {
            var CurrentCaseID = Xrm.Page.data.entity.getId();
            CurrentCaseID = CurrentCaseID.replace(/[{}]/g, "");
            var Servicetype = Xrm.Page.getAttribute(MSCorASCField).getValue();
            var RelatedServiceActivities = null;

            var query = "/api/data/v9.1/ldv_lscserviceactivities?$filter=statecode eq 0 and _ldv_workorder_value eq " + CurrentCaseID;

            oData_Request(query, function (data) {
                RelatedServiceActivities = data.value;
                if (RelatedServiceActivities.length > 0) {

                    return false;
                }

                else
                    return true;
            });

        }
        else
            return true;
    } catch (e) {
        return true;
    }
}

function Installation_ShowHideFollowUpTab() {
    if (Xrm.Page.getAttribute("ldv_followupstarttime").getValue() != null) {
        Xrm.Page.ui.tabs.get("tab_FollowUp_2").setVisible(true);
        Xrm.Page.getAttribute("ldv_customeravailability").setRequiredLevel("required");
        Xrm.Page.getAttribute("ldv_followupnotes").setRequiredLevel("required");
        Xrm.Page.getAttribute("ldv_whatisyourevalutaionaboutquickresponse").setRequiredLevel("required");
        Xrm.Page.getAttribute("ldv_towhichlevelyougetyourinfosimplyclear").setRequiredLevel("required");
        Xrm.Page.getAttribute("ldv_whatisyourevalaboutservicelevelstability").setRequiredLevel("required");
        Xrm.Page.getAttribute("ldv_towhichdegreedidourcs").setRequiredLevel("required");
        Xrm.Page.getAttribute("ldv_howdoyouevaluatethemaintenanceserviceove").setRequiredLevel("required");
        Xrm.Page.getAttribute("ldv_whatyourevalaboutdevicestatusaftermain").setRequiredLevel("required");
        Xrm.Page.getAttribute("ldv_realvisitdate").setRequiredLevel("required");
    }
    else {
        Xrm.Page.ui.tabs.get("tab_FollowUp_2").setVisible(false);
        Xrm.Page.getAttribute("ldv_customeravailability").setRequiredLevel("none");
        Xrm.Page.getAttribute("ldv_followupnotes").setRequiredLevel("none");
        Xrm.Page.getAttribute("ldv_whatisyourevalutaionaboutquickresponse").setRequiredLevel("none");
        Xrm.Page.getAttribute("ldv_towhichlevelyougetyourinfosimplyclear").setRequiredLevel("none");
        Xrm.Page.getAttribute("ldv_whatisyourevalaboutservicelevelstability").setRequiredLevel("none");
        Xrm.Page.getAttribute("ldv_towhichdegreedidourcs").setRequiredLevel("none");
        Xrm.Page.getAttribute("ldv_howdoyouevaluatethemaintenanceserviceove").setRequiredLevel("none");
        Xrm.Page.getAttribute("ldv_towhatdegreetechshaveabilitydiagn").setRequiredLevel("none");
        Xrm.Page.getAttribute("ldv_whatyourevalaboutdevicestatusaftermain").setRequiredLevel("none");
        Xrm.Page.getAttribute("ldv_realvisitdate").setRequiredLevel("none");
    }
}

function onChangeCustomerType() {

    if (Xrm.Page.getAttribute("ldv_customertype").getValue() == "753240000") {
        Xrm.Page.getAttribute("ldv_serialnumber").setRequiredLevel("none");

    }
    else if (Xrm.Page.getAttribute("ldv_customertype").getValue() == "753240001") {
        Xrm.Page.getAttribute("ldv_serialnumber").setRequiredLevel("required");
        Xrm.Page.ui.controls.get("ldv_serialnumber").setDisabled(false);
    }
}

function Installation_OnChangeCustomerAvailability() {
    var pickListField = Xrm.Page.getAttribute("ldv_followupstatus").controls.getAll();

    for (var i = 0; i < pickListField.length; i++) {

        if (ZeroCounter == 0) //to populate the options only once during page load
        {
            followUpStausOptions = pickListField[i].getOptions();
            ZeroCounter++;
        }

        pickListField[i].clearOptions();

        if (Xrm.Page.getAttribute("ldv_customeravailability").getValue() == "1") {
            ///// amr 7-6-2018 followUpStausOptions[0] is empty 
            pickListField[i].addOption(followUpStausOptions[1]);
        }
        if (Xrm.Page.getAttribute("ldv_customeravailability").getValue() == "2") {
            for (var j = 0; j < followUpStausOptions.length; j++) {
                pickListField[i].addOption(followUpStausOptions[j]);
            }

        }
    }
    var Createdfrom = Xrm.Page.getAttribute(CreatedFromField).getValue();

    if (Xrm.Page.getAttribute("ldv_customeravailability").getValue() == "1" && Createdfrom === 0) {

        //Xrm.Page.getAttribute("ldv_followupstatus").setRequiredLevel("required");
        //Xrm.Page.getAttribute("ldv_followupstatus").setValue("0");
        //Xrm.Page.getAttribute("ldv_followupstatus").setDisabled = true;

        Xrm.Page.getAttribute("ldv_followupnotes").setRequiredLevel("required");

        Xrm.Page.getAttribute("ldv_whatisyourevalutaionaboutquickresponse").setRequiredLevel("required");
        Xrm.Page.getAttribute("ldv_howdoyouevaluatethemaintenanceserviceove").setRequiredLevel("required");
        Xrm.Page.getAttribute("ldv_towhichlevelyougetyourinfosimplyclear").setRequiredLevel("required");
        Xrm.Page.getAttribute("ldv_whatisyourevalaboutservicelevelstability").setRequiredLevel("required");
        //Xrm.Page.getAttribute("ldv_whatisyourevalaboutsysusedinsched").setRequiredLevel("required");
        //Xrm.Page.getAttribute("ldv_whatisyourevalabouttechappearance").setRequiredLevel("required");
        //Xrm.Page.getAttribute("ldv_customercommentontechnician").setRequiredLevel("required");
        //Xrm.Page.getAttribute("ldv_customercommentoncustomerserviceagent").setRequiredLevel("required");
        //Xrm.Page.getAttribute("ldv_whatisyourevalaboutsmsservice").setRequiredLevel("required");

        //Xrm.Page.getAttribute("ldv_towhatdegreetechshaveabilitydiagn").setRequiredLevel("required");

        Xrm.Page.getAttribute("ldv_whatyourevalaboutdevicestatusaftermain").setRequiredLevel("required");
        Xrm.Page.getAttribute("ldv_towhichdegreedidourcs").setRequiredLevel("required");
        Xrm.Page.getAttribute("ldv_realvisitdate").setRequiredLevel("required");
    }

    else if (Xrm.Page.getAttribute("ldv_customeravailability").getValue() == "2") {
        //Xrm.Page.getAttribute("ldv_followupstatus").setRequiredLevel("none");
        //Xrm.Page.getAttribute("ldv_followupstatus").setValue(null);
        //Xrm.Page.getAttribute("ldv_followupstatus").setDisabled = false;

        Xrm.Page.getAttribute("ldv_followupnotes").setRequiredLevel("none");

        Xrm.Page.getAttribute("ldv_whatisyourevalutaionaboutquickresponse").setRequiredLevel("none");
        Xrm.Page.getAttribute("ldv_howdoyouevaluatethemaintenanceserviceove").setRequiredLevel("none");
        Xrm.Page.getAttribute("ldv_towhichlevelyougetyourinfosimplyclear").setRequiredLevel("none");
        Xrm.Page.getAttribute("ldv_whatisyourevalaboutservicelevelstability").setRequiredLevel("none");
        //Xrm.Page.getAttribute("ldv_whatisyourevalaboutsysusedinsched").setRequiredLevel("none");
        //Xrm.Page.getAttribute("ldv_whatisyourevalabouttechappearance").setRequiredLevel("none");
        //Xrm.Page.getAttribute("ldv_customercommentontechnician").setRequiredLevel("none");
        //Xrm.Page.getAttribute("ldv_customercommentoncustomerserviceagent").setRequiredLevel("none");
        //Xrm.Page.getAttribute("ldv_whatisyourevalaboutsmsservice").setRequiredLevel("none");

        Xrm.Page.getAttribute("ldv_towhatdegreetechshaveabilitydiagn").setRequiredLevel("none");

        Xrm.Page.getAttribute("ldv_whatyourevalaboutdevicestatusaftermain").setRequiredLevel("none");
        Xrm.Page.getAttribute("ldv_towhichdegreedidourcs").setRequiredLevel("none");
        Xrm.Page.getAttribute("ldv_realvisitdate").setRequiredLevel("none");
    }
    else {
        Xrm.Page.getAttribute("ldv_realvisitdate").setRequiredLevel("none");
    }
    if (Xrm.Page.getAttribute("ldv_customeravailability").getValue() == 753240004) {
        Xrm.Page.getControl("ldv_callbackdate").setVisible(true);
        Xrm.Page.getAttribute("ldv_callbackdate").setRequiredLevel("required");
    }
    else {
        Xrm.Page.getControl("ldv_callbackdate").setVisible(false);
        Xrm.Page.getAttribute("ldv_callbackdate").setRequiredLevel("none");
    }

    Xrm.Page.getAttribute("ldv_customeravailability").setRequiredLevel("none");
    Xrm.Page.getAttribute("ldv_whatisyourevalutaionaboutquickresponse").setRequiredLevel("none");
    Xrm.Page.getAttribute("ldv_istheresparepartsnotes").setRequiredLevel("none");
    Xrm.Page.getAttribute("ldv_whatisyourevalaboutservicelevelstability").setRequiredLevel("none");
    Xrm.Page.getAttribute("ldv_isthereachargeofmaintenencenotes").setRequiredLevel("none");
    Xrm.Page.getAttribute("ldv_didyoureceivedareceiptnotes").setRequiredLevel("none");
    Xrm.Page.getAttribute("ldv_firsttimecontactelarabynotes").setRequiredLevel("none");
    Xrm.Page.getAttribute("ldv_technicianreportrightsnotes").setRequiredLevel("none");
    Xrm.Page.getAttribute("ldv_towhichlevelyougetyourinfosimplyclear").setRequiredLevel("none");
    Xrm.Page.getAttribute("ldv_towhichdegreedidourcs").setRequiredLevel("none");
    Xrm.Page.getAttribute("ldv_whatyourevalaboutdevicestatusaftermain").setRequiredLevel("none");
    Xrm.Page.getAttribute("ldv_notessuggestion").setRequiredLevel("none");
    Xrm.Page.getAttribute("ldv_howdoyouevaluatethemaintenanceserviceove").setRequiredLevel("none");
    Xrm.Page.getAttribute("ldv_reasonforthevisitdonebutnotrepaired").setRequiredLevel("none");
    Xrm.Page.getAttribute("ldv_reasonforcustomercanceled").setRequiredLevel("none");
    Xrm.Page.getAttribute("ldv_reasonforwrongorder").setRequiredLevel("none");
    Xrm.Page.getAttribute("ldv_reasonforrefusedoranotherperson").setRequiredLevel("none");
    Xrm.Page.getAttribute("ldv_reasonfornoanswer").setRequiredLevel("none");
    Xrm.Page.getAttribute("ldv_statusreasonbeforefollowup").setRequiredLevel("none");


}




function Installation_ValidateDateOfBirthFollowUp() {

    var replacementVisitDate = Xrm.Page.getAttribute("ldv_whatisyourdateofbirth").getValue();

    var today = new Date();
    var dateNow = new Date(today);
    dateNow.setHours(0, 0, 0, 0);
    var lcid = Xrm.Page.context.getUserLcid();
    if (replacementVisitDate >= today) {
        if (lcid == 1033)
        { Xrm.Page.ui.setFormNotification("You should choose date less than today", "ERROR", '1'); }
        else { Xrm.Page.ui.setFormNotification("يجب أختيار تاريخ أقل من اليوم", "ERROR", '1'); }
        Xrm.Page.getAttribute("ldv_whatisyourdateofbirth").setValue(null);
    }
    else {
        Xrm.Page.ui.clearFormNotification('1');
    }

}

function oData_Request2(query, successFunc) {
    debugger;


    $.ajax({
        type: "GET",
        contentType: "application/json; charset=utf-8",
        datatype: "json",
        url: Xrm.Page.context.getClientUrl() + query,
        beforeSend: function (XMLHttpRequest) {
            XMLHttpRequest.setRequestHeader("OData-MaxVersion", "4.0");
            XMLHttpRequest.setRequestHeader("OData-Version", "4.0");
            XMLHttpRequest.setRequestHeader("Accept", "application/json");
            XMLHttpRequest.setRequestHeader("Prefer", "odata.include-annotations=\"*\"");
        },
        async: false,
        success: function (data, textStatus, xhr) {
            var results = data;
            successFunc(results);
        },
        error: function (xhr, textStatus, errorThrown) {
            Xrm.Utility.alertDialog(textStatus + " " + errorThrown);
        }
    });
}
function oData_Request(query, successFunc) {
    $.ajax({
        type: "GET",
        contentType: "application/json; charset=utf-8",
        datatype: "json",
        url: Xrm.Page.context.getClientUrl() + query,
        beforeSend: function (XMLHttpRequest) {
            XMLHttpRequest.setRequestHeader("OData-MaxVersion", "4.0");
            XMLHttpRequest.setRequestHeader("OData-Version", "4.0");
            XMLHttpRequest.setRequestHeader("Accept", "application/json");
            XMLHttpRequest.setRequestHeader("Prefer", "odata.include-annotations=\"*\"");
        },
        async: false,
        success: function (data, textStatus, xhr) {

            var results = data;
            successFunc(results);


        },
        error: function (xhr, textStatus, errorThrown) {
            //           Xrm.Utility.alertDialog(textStatus + " " + errorThrown);
        }
    });

}



///////////////////////////////////CR Functions////////////////////////////////////

function Follow_Up_Decision_Created_From_Portal() {
    try {

        var CreatedFrom = Xrm.Page.getAttribute(CreatedFromField).getValue();
        if (CreatedFrom == 1)/* Created From Portal */ {
            Xrm.Page.getControl('ldv_customeravailability1').removeOption(753240004);
            Xrm.Page.getControl('ldv_customeravailability1').removeOption(100000003);
            Xrm.Page.getControl('ldv_customeravailability1').removeOption(753240016);
            Xrm.Page.getControl('ldv_customeravailability1').removeOption(753240006);
            Xrm.Page.getControl('ldv_customeravailability1').removeOption(753240012);
            Xrm.Page.getControl('ldv_customeravailability1').removeOption(753240011);
            Xrm.Page.getControl('ldv_customeravailability1').removeOption(753240014);
            Xrm.Page.getControl('ldv_customeravailability1').removeOption(753240002);
            Xrm.Page.getControl('ldv_customeravailability1').removeOption(753240010);
            Xrm.Page.getControl('ldv_customeravailability1').removeOption(753240009);
            Xrm.Page.getControl('ldv_customeravailability1').removeOption(753240013);
            Xrm.Page.getControl('ldv_customeravailability1').removeOption(100000000);
            Xrm.Page.getControl('ldv_customeravailability1').removeOption(100000002);
            Xrm.Page.getControl('ldv_customeravailability1').removeOption(753240008);
            Xrm.Page.getControl('ldv_customeravailability1').removeOption(753240000);
            Xrm.Page.getControl('ldv_customeravailability1').removeOption(753240015);
            Xrm.Page.getControl('ldv_customeravailability1').removeOption(753240001);
        }
    } catch (e) {

    }
}
function CheckLSC_Visibelities() {

    var frmType = Xrm.Page.ui.getFormType();
    if (frmType == 1 || frmType == 0 || frmType == 5 || frmType == 2) {
        if (Installation_NewCheckUserRole(UserRole, "LSC User") || Installation_NewCheckUserRole(UserRole, "LSC Front Office User")) {
            Xrm.Page.getControl(SiteField).setVisible(false);
            Xrm.Page.getControl(LSCBranchField).setVisible(true);
            Xrm.Page.ui.controls.get(LSCBranchField).setDisabled(true)
            Xrm.Page.getAttribute(LSCBranchField).setRequiredLevel("required");
            Xrm.Page.ui.tabs.get("Work_Order_Information_tab").sections.get("MSC_sec").setVisible(false);
            Xrm.Page.ui.tabs.get("Work_Order_Information_tab").sections.get("ASC_sec").setVisible(false);
            Xrm.Page.ui.tabs.get("Work_Order_Information_tab").setDisplayState('collapsed');
            Xrm.Page.ui.tabs.get("Co-Technician_tab").sections.get("MSCTech_sec").setVisible(false);
            Xrm.Page.ui.tabs.get("Co-Technician_tab").sections.get("ASCTec_sec").setVisible(false);
            Xrm.Page.ui.tabs.get("Co-Technician_tab").setDisplayState('collapsed');
            Xrm.Page.ui.controls.get("ldv_problem").setDisabled(true);
            Xrm.Page.ui.controls.get("ldv_problem2").setDisabled(true);
            Xrm.Page.ui.controls.get("ldv_problem3").setDisabled(true);
        }
    }
}

function Installation_onchange_Technical_Review_Decision() {
    var Decision = Xrm.Page.getAttribute(Technical_Review_Decision).getValue();
    debugger;
    if (Decision == 753240002) {
        Installation_Show_Correct_Fields();
        Installation_Hide_Weight_Fields();
        Xrm.Page.getControl(Send_For_Correction).setVisible(true);
        Xrm.Page.getAttribute(Send_For_Correction).setRequiredLevel("required");
        Xrm.Page.getControl(Send_For_GM_Approval).setVisible(false);

    }
    else if (Decision == 753240003) {
        Installation_Hide_Weight_Fields();
        Installation_Show_Correct_Fields();
        Xrm.Page.getControl(Send_For_Correction).setVisible(false);
        Xrm.Page.getAttribute(Send_For_Correction).setRequiredLevel("none");
        Xrm.Page.getControl(Send_For_GM_Approval).setVisible(true);
        Xrm.Page.getAttribute(Send_For_GM_Approval).setRequiredLevel("required");
        Xrm.Page.getAttribute(Send_For_GM_Approval).setValue(true);
        Xrm.Page.getAttribute("ldv_sladuration").setValue(null);
    }
    else {
        Installation_Show_Weight_Fields();
        Installation_Hide_Correct_Fields();
        Xrm.Page.getControl(Send_For_GM_Approval).setVisible(false);
        Xrm.Page.getAttribute(Send_For_GM_Approval).setRequiredLevel("none");
        Xrm.Page.getControl(Send_For_Correction).setVisible(false);
        Xrm.Page.getAttribute(Send_For_Correction).setRequiredLevel("none");
        Xrm.Page.getAttribute("ldv_sladuration").setValue(null);
    }

    /// Case Number 420		
    if (Decision == 753240000 || Decision == 753240001) {
        Xrm.Page.getAttribute(Technical_Review_Comment).setRequiredLevel("none");
    }
    else if (Decision == 753240002 || Decision == 753240003) {
        Xrm.Page.getAttribute(Technical_Review_Comment).setRequiredLevel("required");
    }
    else {
        Xrm.Page.getAttribute(Technical_Review_Comment).setRequiredLevel("none");
    }
    if (Decision == 753240002) {
        Xrm.Page.getAttribute(Send_For_Correction).setValue(1);
    }
    else {
        Xrm.Page.getAttribute(Send_For_Correction).setValue("");
    }




}



function Installation_Show_Correct_Fields() {
    debugger;
    Xrm.Page.getControl(Send_For_Correction).setVisible(true);
    Xrm.Page.getControl("ldv_correcttotalamount").setVisible(true);
    Xrm.Page.getControl(Correct_Defect_Code).setVisible(true);
    Xrm.Page.getControl(Correct_Model).setVisible(true);
    Xrm.Page.getControl(Correct_Report).setVisible(true);
    Xrm.Page.getControl(Correct_Serial_Number).setVisible(true);
    Xrm.Page.getControl(Correct_Warranty_Date).setVisible(true);
    Xrm.Page.getControl(Correct_Warranty_Statues).setVisible(true);
    Xrm.Page.getControl("ldv_correctsecondmodel").setVisible(true);
    Xrm.Page.getControl("ldv_correctsecondserial").setVisible(true);
    Xrm.Page.getControl("ldv_correctseconddefects").setVisible(true);
    //Xrm.Page.getControl("ldv_correctsecondspareparts").setVisible(true);

}
function Installation_Hide_Correct_Fields() {

    Xrm.Page.getControl(Send_For_Correction).setVisible(false);
    Xrm.Page.getControl("ldv_correcttotalamount").setVisible(false);
    Xrm.Page.getControl(Correct_Defect_Code).setVisible(false);
    Xrm.Page.getControl(Correct_Model).setVisible(false);
    Xrm.Page.getControl(Correct_Report).setVisible(false);
    Xrm.Page.getControl(Correct_Serial_Number).setVisible(false);
    Xrm.Page.getControl(Correct_Warranty_Date).setVisible(false);
    Xrm.Page.getControl(Correct_Warranty_Statues).setVisible(false);
    Xrm.Page.getControl("ldv_correctsecondmodel").setVisible(false);
    Xrm.Page.getControl("ldv_correctsecondserial").setVisible(false);
    Xrm.Page.getControl("ldv_correctseconddefects").setVisible(false);
    //Xrm.Page.getControl("ldv_correctsecondspareparts").setVisible(false);
}
function Installation_Show_Weight_Fields() {
    Xrm.Page.getControl(Technical_Model_weight).setVisible(true);
    Xrm.Page.getControl(Technical_Serial_Number_Weight).setVisible(true);
    Xrm.Page.getControl(Technical_Warranty_Date_Weight).setVisible(true);
    Xrm.Page.getControl(Technical_Warranty_status_weight).setVisible(true);
    Xrm.Page.getControl(Technical_report_weight).setVisible(true);
    Xrm.Page.getControl(Deffect_Code_Weight).setVisible(true);
    Xrm.Page.getControl(Spare_Parts_Weight).setVisible(true);
    Xrm.Page.getControl(Total_Amount_weight).setVisible(true);
    Xrm.Page.getControl("ldv_secondserialnumberweight").setVisible(true);
    Xrm.Page.getControl("ldv_secondmodelweight").setVisible(true);
    Xrm.Page.getControl("ldv_seconddefectcodeweight").setVisible(true);

}
function Installation_Hide_Weight_Fields() {
    Xrm.Page.getControl(Technical_Model_weight).setVisible(false);
    Xrm.Page.getControl(Technical_Serial_Number_Weight).setVisible(false);
    Xrm.Page.getControl(Technical_Warranty_Date_Weight).setVisible(false);
    Xrm.Page.getControl(Technical_Warranty_status_weight).setVisible(false);
    Xrm.Page.getControl(Technical_report_weight).setVisible(false);
    Xrm.Page.getControl(Deffect_Code_Weight).setVisible(false);
    Xrm.Page.getControl(Spare_Parts_Weight).setVisible(false);
    Xrm.Page.getControl(Total_Amount_weight).setVisible(false);
    Xrm.Page.getControl("ldv_secondserialnumberweight").setVisible(false);
    Xrm.Page.getControl("ldv_secondmodelweight").setVisible(false);
    Xrm.Page.getControl("ldv_seconddefectcodeweight").setVisible(false);


}

function Installation_GEt_spare_Parts_Defect_code_count() {
    debugger;

    var entity = {};

    var CurrentRecored = Xrm.Page.data.entity.getId();
    CurrentRecored = CurrentRecored.replace(/[{}]/g, "");
    // var query = "/api/data/v9.1/ldv_casesparepartses?$select=ldv_quantity&$filter=_ldv_workorder_value eq " + CurrentRecored;
    var query = "/api/data/v9.1/ldv_casesparepartses?$select=ldv_quantity&$filter=_ldv_workorder_value eq " + CurrentRecored + " and  ldv_isused eq true";
    oData_Request(query, function (results) {
        try {
            var count = 0;
            for (var i = 0; i < results.value.length; i++) {
                count += results.value[i]["ldv_quantity"];
            }
            if (Xrm.Page.getAttribute("ldv_sparepartcount").getValue() != count) {
                Xrm.Page.getAttribute("ldv_sparepartcount").setValue(count.toString());
                entity["ldv_sparepartcount"] = count.toString();
            }
        } catch (e) {

        }
    });

    var query = "/api/data/v9.1/ldv_workorder_defects?$select=_ldv_defect_value&$filter=_ldv_workorder_value eq " + CurrentRecored;
    oData_Request(query, function (results) {
        try {
            if (Xrm.Page.getAttribute("ldv_defectcodecount").getValue() != results.value.length) {
                var defects = "";
                for (var i = 0; i < results.value.length; i++) {

                    var query1 = "/api/data/v9.1/ldv_defectcodes(" + results.value[i]["_ldv_defect_value"] + ")?$select=ldv_defectdescription";
                    // defects += results.value[i]["_ldv_defect_value@OData.Community.Display.V1.FormattedValue"];
                    oData_Request(query1, function myfunction(result) {
                        defects += results.value[i]["_ldv_defect_value@OData.Community.Display.V1.FormattedValue"] + " " + result["ldv_defectdescription"];

                    });

                    //  defects += results.value[i]["_ldv_defect_value@OData.Community.Display.V1.FormattedValue"];
                    if (i != results.value.length - 1) {
                        defects += " , ";
                    }
                }
                Xrm.Page.getAttribute("ldv_defectcodecount").setValue(defects);
                entity["ldv_defectcodecount"] = defects;
            }
            //    Xrm.Page.data.entity.save();

        } catch (e) {

        }
    });
    if (Xrm.Page.getAttribute("ldv_technicalserialnumber").getValue() != null) {
        if (Xrm.Page.getAttribute("ldv_serialnumbercounts").getValue() != Xrm.Page.getAttribute("ldv_technicalserialnumber").getValue().toString().length) {
            Xrm.Page.getAttribute("ldv_serialnumbercounts").setValue(Xrm.Page.getAttribute("ldv_technicalserialnumber").getValue().toString().length.toString());
            entity["ldv_serialnumbercounts"] = Xrm.Page.getAttribute("ldv_technicalserialnumber").getValue().toString().length.toString();
        }
    }
    if (Object.keys(entity).length != 0) {
        $.ajax({
            type: "PATCH",
            contentType: "application/json; charset=utf-8",
            datatype: "json",
            url: Xrm.Page.context.getClientUrl() + "/api/data/v9.1/incidents(" + CurrentRecored + ")",
            data: JSON.stringify(entity),
            beforeSend: function (XMLHttpRequest) {
                XMLHttpRequest.setRequestHeader("OData-MaxVersion", "4.0");
                XMLHttpRequest.setRequestHeader("OData-Version", "4.0");
                XMLHttpRequest.setRequestHeader("Accept", "application/json");
            },
            async: true,
            success: function (data, textStatus, xhr) {
                //Success - No Return Data - Do Something
                //  Xrm.Page.data.entity.save();
            },
            error: function (xhr, textStatus, errorThrown) {
                //Xrm.Utility.alertDialog(textStatus + " " + errorThrown);
            }
        });
    }
}

//function Installation_GEt_spare_Parts_Defect_code_count() {
//    try {

//        debugger;
//        //AMr Code Review 21/12/2017 :why u r checking on customer name ?

//        var CurrentRecored = Xrm.Page.data.entity.getId();
//        CurrentRecored = CurrentRecored.replace(/[{}]/g, "");
//        // var query = "/api/data/v9.1/ldv_casesparepartses?$select=ldv_quantity&$filter=_ldv_workorder_value eq " + CurrentRecored;
//        var query = "/api/data/v9.1/ldv_casesparepartses?$select=ldv_quantity&$filter=_ldv_workorder_value eq " + CurrentRecored + " and  ldv_isused eq true";
//        oData_Request(query, function (results) {
//            try {
//                var count = 0;
//                for (var i = 0; i < results.value.length; i++) {
//                    count += results.value[i]["ldv_quantity"];
//                }
//                if (Xrm.Page.getAttribute("ldv_sparepartcount").getValue() != count) {
//                    Xrm.Page.getAttribute("ldv_sparepartcount").setValue(count.toString());
//                }
//            } catch (e) {

//            }
//        });

//        //Amr Code Review 21/12/2017 ->>> Use try/catch in any OData execution

//        var query = "/api/data/v9.1/ldv_workorder_defects?$select=_ldv_defect_value&$filter=_ldv_workorder_value eq " + CurrentRecored;
//        oData_Request(query, function (results) {
//            try {
//                if (Xrm.Page.getAttribute("ldv_defectcodecount").getValue() != results.value.length) {
//                    var defects = "";
//                    for (var i = 0; i < results.value.length; i++) {

//                        var query1 = "/api/data/v9.1/ldv_defectcodes(" + results.value[i]["_ldv_defect_value"] + ")?$select=ldv_defectdescription";
//                        // defects += results.value[i]["_ldv_defect_value@OData.Community.Display.V1.FormattedValue"];
//                        oData_Request(query1, function myfunction(result) {
//                            defects += results.value[i]["_ldv_defect_value@OData.Community.Display.V1.FormattedValue"] + " " + result["ldv_defectdescription"];

//                        });

//                        //  defects += results.value[i]["_ldv_defect_value@OData.Community.Display.V1.FormattedValue"];
//                        if (i != results.value.length - 1) {
//                            defects += " , ";
//                        }
//                    }
//                    Xrm.Page.getAttribute("ldv_defectcodecount").setValue(defects);
//                }
//            } catch (e) {

//            }
//        });
//        if (Xrm.Page.getAttribute("ldv_technicalserialnumber").getValue() != null) {
//            if (Xrm.Page.getAttribute("ldv_serialnumbercounts").getValue() != Xrm.Page.getAttribute("ldv_technicalserialnumber").getValue().toString().length) {
//                Xrm.Page.getAttribute("ldv_serialnumbercounts").setValue(Xrm.Page.getAttribute("ldv_technicalserialnumber").getValue().toString().length.toString());
//            }
//        }

//    } catch (e) {

//    }
//}

// created by amr 14/12/2017 CR
function Installation_Show_Hide_Portal_Replacement_section(createdfrom, isFollowup, status) {
    try {

        //Amr Code Review 21/12/2017 >>> if el queue field is null will throw error in _queueName[0].name, use "null" and "undefined" check

        var _queueName = Xrm.Page.getAttribute("new_queue").getValue();
        if (_queueName != null && _queueName != "" && _queueName != undefined) {
            if (createdfrom === 1 && isFollowup && (
                status == 753240009 || /*Replacement*/
                status == 753240061 || /*Replacement - LSC*/
                status == 753240071 || /*Replacement - Store Keeper Done*/
                status == 753240012 || /*Replacement Approved*/
                status == 753240068 || /*Replacement Approved - RTL*/
                status == 753240066 || /*Replacement Approved - TS*/
                status == 753240019 || /*Replacement Done*/
                status == 753240074 || /*Replacement Done - Fleet User*/
                status == 753240072 || /*Replacement Done - test*/
                status == 753240075 || /*Replacement Need Delivery*/
                status == 753240013 || /*Replacement Rejected*/
                status == 753240069 || /*Replacement Rejected - RTL*/
                status == 753240067 /*Replacement Rejected - TS*/)
                & _queueName[0].name == "Follow Up Queue") {
                Xrm.Page.ui.tabs.get("tab_FollowUp_2").sections.get("tab_FollowUp_2_section_3").setVisible(false);
                Xrm.Page.ui.tabs.get("tab_FollowUp_2").sections.get("Replacement_Follow_Up").setVisible(true);
                Xrm.Page.ui.tabs.get("tab_FollowUp_2").sections.get("tab_11_section_1").setVisible(false);
            }
            else {
                Xrm.Page.ui.tabs.get("tab_FollowUp_2").sections.get("Replacement_Follow_Up").setVisible(false);
            }
        }
    } catch (e) {

    }
}

// created by amr 13/12/2017 CR
function Installation_Fill_Technician_fields() {
    var change = 0;
    try {

        if (Xrm.Page.getAttribute("ldv_actualmodel").getValue() != null
            && Xrm.Page.getAttribute("ldv_actualmodel").getValue() != ""
            && Xrm.Page.getAttribute("ldv_model").getValue() == null) {
            Xrm.Page.getAttribute("ldv_model").setValue(Xrm.Page.getAttribute("ldv_actualmodel").getValue());
            change = 1;
        }
        //second model

        if (Xrm.Page.getAttribute("ldv_actualmodel2").getValue() != null
            && Xrm.Page.getAttribute("ldv_actualmodel2").getValue() != ""
            && Xrm.Page.getAttribute("ldv_secondtechmodel").getValue() == null) {
            Xrm.Page.getAttribute("ldv_secondtechmodel").setValue(Xrm.Page.getAttribute("ldv_actualmodel2").getValue());
            change = 1;
        }

        if (Xrm.Page.getAttribute("ldv_productbarcode").getValue() != null
            && Xrm.Page.getAttribute("ldv_productbarcode").getValue() != ""
            && Xrm.Page.getAttribute("ldv_technicalserialnumber").getValue() == null) {

            Xrm.Page.getAttribute("ldv_technicalserialnumber").setValue(Xrm.Page.getAttribute("ldv_productbarcode").getValue());
            change = 1;
        }

        //second serial
        if (Xrm.Page.getAttribute("new_secondproductbarcode").getValue() != null
            && Xrm.Page.getAttribute("new_secondproductbarcode").getValue() != ""
            && Xrm.Page.getAttribute("ldv_secondtechnicalserial").getValue() == null) {

            Xrm.Page.getAttribute("ldv_secondtechnicalserial").setValue(Xrm.Page.getAttribute("new_secondproductbarcode").getValue());
            change = 1;
        }

        if (Xrm.Page.getAttribute("new_secondproductbarcode").getValue() == "" && Xrm.Page.getAttribute("ldv_secondtechnicalserial").getValue() == null && Xrm.Page.getAttribute("ldv_serialnumber1").getValue() != null) {
            Xrm.Page.getAttribute("ldv_secondtechnicalserial").setValue(Xrm.Page.getAttribute("ldv_serialnumber1").getValue());
            change = 1;
        }


        if (Xrm.Page.getAttribute("ldv_actualcollectedamount") != null
            && Xrm.Page.getAttribute("ldv_totalamount").getValue() == null) {

            Xrm.Page.getAttribute("ldv_totalamount").setValue(Xrm.Page.getAttribute("ldv_actualcollectedamount").getValue());
            change = 1;
        }

        if (Xrm.Page.getAttribute("ldv_warrantydate").getValue() != null
            && Xrm.Page.getAttribute("ldv_warrantydate").getValue() != ""
            && Xrm.Page.getAttribute("ldv_trwarrantydate").getValue() == null) {

            Xrm.Page.getAttribute("ldv_trwarrantydate").setValue(Xrm.Page.getAttribute("ldv_warrantydate").getValue());
            change = 1;
        }

        if (Xrm.Page.getAttribute("ldv_warrantystatus").getValue() != null
            && Xrm.Page.getAttribute("ldv_warrantystatus").getValue() != "" &&
            Xrm.Page.getAttribute("ldv_trwarrantystatus").getValue() == null) {
            if (Xrm.Page.getAttribute("ldv_warrantystatus").getValue() == 753240000) {
                Xrm.Page.getAttribute("ldv_trwarrantystatus").setValue(753240000);
                change = 1;
            }
            else if (Xrm.Page.getAttribute("ldv_warrantystatus").getValue() == 753240001) {
                Xrm.Page.getAttribute("ldv_trwarrantystatus").setValue(753240001);
                change = 1;
            }
        }
        //Amr Code review 21/12/2017 >> u don't have to call getId function each time , define it as global variable once at the file and use it below


        var mscField = Xrm.Page.getAttribute(MSCorASCField).getValue();
        var x = Xrm.Page.getAttribute("ldv_resourcelastcomment").getValue();
        //Mervat Code Review 21/12/2017: use try/catch before ajax call
        //Mervat Code Review 21/12/2017 :u should check first if the comments are null , update them from the activity, don't execute all  these ajax if already comments updated 
        debugger;
        if (mscField == 1)//ASC
        {
            try {
                $.ajax({
                    type: "GET",
                    contentType: "application/json; charset=utf-8",
                    datatype: "json",
                    url: Xrm.Page.context.getClientUrl() + "/api/data/v9.1/ldv_ascserviceactivities?$filter=_ldv_workorder_value eq " + CurrentId,
                    beforeSend: function (XMLHttpRequest) {
                        XMLHttpRequest.setRequestHeader("OData-MaxVersion", "4.0");
                        XMLHttpRequest.setRequestHeader("OData-Version", "4.0");
                        XMLHttpRequest.setRequestHeader("Accept", "application/json");

                    },
                    async: true,
                    success: function (data, textStatus, xhr) {

                        var results = data;
                        if (results.value != null && results.value != undefined) {
                            if (results.value[results.value.length - 1] != null && results.value[results.value.length - 1] != undefined) {

                                if (results.value[results.value.length - 1].ldv_asctechniciancomment != null) {
                                    Xrm.Page.getAttribute("ldv_resourcelastcomment").setValue(results.value[results.value.length - 1].ldv_asctechniciancomment);
                                    if (Xrm.Page.getAttribute("ldv_techniciancommment").getValue() == null) {
                                        Xrm.Page.getAttribute("ldv_techniciancommment").setValue(results.value[results.value.length - 1].ldv_asctechniciancomment);

                                    }
                                }
                                else if (results.value[results.value.length - 1].ldv_comment != null) {
                                    Xrm.Page.getAttribute("ldv_resourcelastcomment").setValue(results.value[results.value.length - 1].ldv_comment);
                                    if (Xrm.Page.getAttribute("ldv_techniciancommment").getValue() == null) {
                                        Xrm.Page.getAttribute("ldv_techniciancommment").setValue(results.value[results.value.length - 1].ldv_comment);

                                    }
                                }

                                Xrm.Page.data.entity.save();
                            }
                        }

                    },
                    error: function (xhr, textStatus, errorThrown) {

                    }
                });
            } catch (error) {
                console.log(error);
            }

        }
        else if (mscField == 0) //MSC
        {

            $.ajax({
                type: "GET",
                contentType: "application/json; charset=utf-8",
                datatype: "json",
                url: Xrm.Page.context.getClientUrl() + "/api/data/v9.1/serviceappointments?$filter=_regardingobjectid_value eq " + CurrentId,
                beforeSend: function (XMLHttpRequest) {
                    XMLHttpRequest.setRequestHeader("OData-MaxVersion", "4.0");
                    XMLHttpRequest.setRequestHeader("OData-Version", "4.0");
                    XMLHttpRequest.setRequestHeader("Accept", "application/json");
                    XMLHttpRequest.setRequestHeader("Prefer", "odata.include-annotations=\"*\"");
                },
                async: true,
                success: function (data, textStatus, xhr) {

                    var results = data;
                    if (results.value != null && results.value != undefined) {
                        if (results.value[results.value.length - 1] != null && results.value[results.value.length - 1] != undefined) {
                            //  Xrm.Page.getAttribute("ldv_technicalreviewcomment").setValue(results.value[0].ldv_techniciancomment);

                            Xrm.Page.getAttribute("ldv_resourcelastcomment").setValue(results.value[results.value.length - 1].ldv_techniciancomment);
                            Xrm.Page.data.entity.save();
                        }
                    }
                },
                error: function (xhr, textStatus, errorThrown) {

                }
            });

        }


        //to update lsc technical comment
        try {
            $.ajax({
                type: "GET",
                contentType: "application/json; charset=utf-8",
                datatype: "json",
                url: Xrm.Page.context.getClientUrl() + "/api/data/v9.1/ldv_lscserviceactivities?$filter=_ldv_workorder_value eq " + CurrentId,
                beforeSend: function (XMLHttpRequest) {
                    XMLHttpRequest.setRequestHeader("OData-MaxVersion", "4.0");
                    XMLHttpRequest.setRequestHeader("OData-Version", "4.0");
                    XMLHttpRequest.setRequestHeader("Accept", "application/json");
                    XMLHttpRequest.setRequestHeader("Prefer", "odata.include-annotations=\"*\"");
                },
                async: true,
                success: function (data, textStatus, xhr) {

                    var results = data;
                    if (results.value != null && results.value != undefined) {
                        if (results.value[results.value.length - 1] != null && results.value[results.value.length - 1] != undefined) {

                            Xrm.Page.getAttribute("ldv_lsctechniciancomment").setValue(results.value[results.value.length - 1].ldv_lsctechniciancomment);
                            Xrm.Page.getAttribute("ldv_resourcelastcomment").setValue(results.value[results.value.length - 1].ldv_lsctechniciancomment);
                            Xrm.Page.data.entity.save();
                        }
                    }
                },
                error: function (xhr, textStatus, errorThrown) {
                }
            });

        } catch (error) {
            console.log(error);
        }



        if (change == 1) {
            Xrm.Page.data.entity.save();
        }
    } catch (e) {

    }
}


//created by amr 6/12/2017 CR
function Installation_Show_Aditional_Section() {
    try {

        var CreatedFrom = Xrm.Page.getAttribute(CreatedFromField).getValue();
        if (CreatedFrom == 1)/* Created From Portal */ {
            Xrm.Page.ui.tabs.get("tab_FollowUp_2").sections.get("tab_FollowUp_2_section_3").setVisible(true);
            Xrm.Page.ui.tabs.get("tab_FollowUp_2").sections.get("Replacement_Follow_Up").setVisible(true);
            Xrm.Page.ui.tabs.get("tab_FollowUp_2").sections.get("tab_11_section_1").setVisible(false);

        }
        else {
            Xrm.Page.ui.tabs.get("tab_FollowUp_2").sections.get("tab_FollowUp_2_section_3").setVisible(false);
            Xrm.Page.ui.tabs.get("tab_FollowUp_2").sections.get("Replacement_Follow_Up").setVisible(false);
            Xrm.Page.ui.tabs.get("tab_FollowUp_2").sections.get("tab_11_section_1").setVisible(true);
        }
    } catch (e) {

    }
}

function Installation_On_Change_GM_Decision() {
    if (Xrm.Page.getAttribute("ldv_gmdecision").getValue() == 753240000) {
        //created by amr 20/12/2017 CR
        // This function call on change Technical Review Decision Field 
        // when Value become Correct Data update the SLA Duration field with the Value Of "Correction Duration" Key in Configuration
        oData_Request("/api/data/v9.1/ldv_configurations?$select=ldv_value&$filter=ldv_name eq 'Correction Duration'", function (result) {
            if (result != null) {
                Xrm.Page.getAttribute("ldv_sladuration").setValue(result.value[0]["ldv_value"]);
                var currentdate = new Date();
                Xrm.Page.getAttribute("ldv_slastartdate").setValue(currentdate.setDate(currentdate.getDate() + parseInt(result.value[0]["ldv_value"])));

            }
        });
        ///////////////////////////////////////
    } else {
        Xrm.Page.getAttribute("ldv_sladuration").setValue(null);
        Xrm.Page.getAttribute("ldv_slastartdate").setValue(null);
    }
}


function Installation_Set_SLA_Duration() {

    var Decision = Xrm.Page.getAttribute("ldv_sendforcorrection").getValue();
    if (Decision == true) {
        //created by amr 20/12/2017 CR
        // This function call on change Technical Review Decision Field 
        // when Value become Correct Data update the SLA Duration field with the Value Of "Correction Duration" Key in Configuration
        oData_Request("/api/data/v9.1/ldv_configurations?$select=ldv_value&$filter=ldv_name eq 'Correction Duration'", function (result) {
            if (result != null && result.value[0] != undefined && result.value[0] != null) {
                Xrm.Page.getAttribute("ldv_sladuration").setValue(result.value[0]["ldv_value"]);
                var currentdate = new Date();
                Xrm.Page.getAttribute("ldv_slastartdate").setValue(currentdate.setDate(currentdate.getDate() + parseInt(result.value[0]["ldv_value"])));
            }
        });
    }
    else {
        Xrm.Page.getAttribute("ldv_slastartdate").setValue(null);
    }
}


function checkCalender() {
    var _keelDate = Xrm.Page.getAttribute("ldv_realvisitdate").getValue();
    var _currentDate = new Date();

    if (_keelDate > _currentDate) {
        alert("Visit Date should be less than today");
        Xrm.Page.getAttribute("ldv_realvisitdate").setValue(null);
    }
}



function Is_General_Manager(Is_General_Manager) {
    debugger;
    if (Is_General_Manager) {
        var ctrlName = Xrm.Page.ui.controls.get();
        for (var i in ctrlName) {
            try {
                var ctrl = ctrlName[i];
                var ctrlSection = ctrl.getParent().getName();
                if (ctrlSection == Technical_Review_Details_Section) {
                    ctrl.setDisabled(true);
                }
            } catch (e) {
            }
        }
        Xrm.Page.ui.tabs.get(Technical_Review_Tab).setVisible(true);
        Xrm.Page.ui.tabs.get(Technical_Review_Tab).sections.get(Technical_Review_General_Manager_Section).setVisible(true);
        TabSetDisabled(Technical_Review_Tab, Technical_Review_General_Manager_Section, false);
        Xrm.Page.getAttribute(GM_Decision).setRequiredLevel("required");
    }
}

function TabSetDisabled(tabname, sectionName, disablestatus) {
    var section = Xrm.Page.ui.tabs.get(tabname).sections.get(sectionName);
    var controls = section.controls.get();
    var controlsLenght = controls.length;

    for (var i = 0; i < controlsLenght; i++) {
        controls[i].setDisabled(disablestatus)
    }
}

function installation_followUpSettedFields() {

    debugger;
    //change in general tab in case created from crm or lsc crm
    if (Xrm.Page.getAttribute("ldv_createdfrom").getValue() == 0 || Xrm.Page.getAttribute("ldv_createdfrom").getValue() == 3) {
        if (Xrm.Page.ui.tabs.get("tab_FollowUp_2").sections.get("tab_11_section_1").$A4_2 && Xrm.Page.getAttribute("ldv_customeravailability") != null
            && (Xrm.Page.getAttribute("ldv_customeravailability").getValue() == 753240004 ||  //callback
                Xrm.Page.getAttribute("ldv_customeravailability").getValue() == 753240005 ||  //no answer
                Xrm.Page.getAttribute("ldv_customeravailability").getValue() == 753240006 || //customer postpond
                Xrm.Page.getAttribute("ldv_customeravailability").getValue() == 753240003 ||  //customer is unreachable and no follow up
                Xrm.Page.getAttribute("ldv_customeravailability").getValue() == 100000000 ||  // support via phone
                Xrm.Page.getAttribute("ldv_customeravailability").getValue() == 100000001 || //visit not done
                Xrm.Page.getAttribute("ldv_customeravailability").getValue() == 100000002)) //tech cancellation
        {
            Xrm.Page.getControl("ldv_realvisitdate").setVisible(false);
            Xrm.Page.getControl("ldv_whatisyourevalutaionaboutquickresponse").setVisible(false);
            Xrm.Page.getControl("ldv_istheresparepartsnotes").setVisible(false);
            Xrm.Page.getControl("ldv_whatisyourevalaboutservicelevelstability").setVisible(false);
            Xrm.Page.getControl("ldv_isthereachargeofmaintenencenotes").setVisible(false);
            Xrm.Page.getControl("ldv_towhichdegreedidourcs").setVisible(false);
            Xrm.Page.getControl("ldv_firsttimecontactelarabynotes").setVisible(false);
            Xrm.Page.getControl("ldv_whatyourevalaboutdevicestatusaftermain").setVisible(false);
            Xrm.Page.getControl("ldv_technicianreportrightsnotes").setVisible(false);
            Xrm.Page.getControl("ldv_notessuggestion").setVisible(false);
            Xrm.Page.getControl("ldv_howdoyouevaluatethemaintenanceserviceove").setVisible(false);
            Xrm.Page.getControl("ldv_towhichlevelyougetyourinfosimplyclear").setVisible(false);
            Xrm.Page.getControl("ldv_didyoureceivedareceiptnotes").setVisible(false);

            Xrm.Page.getAttribute("ldv_realvisitdate").setRequiredLevel("none");
            Xrm.Page.getAttribute("ldv_whatisyourevalutaionaboutquickresponse").setRequiredLevel("none");
            Xrm.Page.getAttribute("ldv_istheresparepartsnotes").setRequiredLevel("none");
            Xrm.Page.getAttribute("ldv_whatisyourevalaboutservicelevelstability").setRequiredLevel("none");
            Xrm.Page.getAttribute("ldv_isthereachargeofmaintenencenotes").setRequiredLevel("none");
            Xrm.Page.getAttribute("ldv_towhichdegreedidourcs").setRequiredLevel("none");
            Xrm.Page.getAttribute("ldv_firsttimecontactelarabynotes").setRequiredLevel("none");
            Xrm.Page.getAttribute("ldv_whatyourevalaboutdevicestatusaftermain").setRequiredLevel("none");
            Xrm.Page.getAttribute("ldv_technicianreportrightsnotes").setRequiredLevel("none");
            Xrm.Page.getAttribute("ldv_notessuggestion").setRequiredLevel("none");
            Xrm.Page.getAttribute("ldv_howdoyouevaluatethemaintenanceserviceove").setRequiredLevel("none");
            Xrm.Page.getAttribute("ldv_towhichlevelyougetyourinfosimplyclear").setRequiredLevel("none");
            Xrm.Page.getAttribute("ldv_didyoureceivedareceiptnotes").setRequiredLevel("none");



        } else if (Xrm.Page.ui.tabs.get("tab_FollowUp_2").sections.get("tab_11_section_1").$A4_2 && Xrm.Page.getAttribute("ldv_customeravailability") != null
            && (Xrm.Page.getAttribute("ldv_customeravailability").getValue() == 1 ||  //visit done on time
                Xrm.Page.getAttribute("ldv_customeravailability").getValue() == 2)) //visit done after booking time
        {
            Xrm.Page.getControl("ldv_realvisitdate").setVisible(true);
            Xrm.Page.getControl("ldv_whatisyourevalutaionaboutquickresponse").setVisible(true);
            Xrm.Page.getControl("ldv_istheresparepartsnotes").setVisible(true);
            Xrm.Page.getControl("ldv_whatisyourevalaboutservicelevelstability").setVisible(true);
            Xrm.Page.getControl("ldv_isthereachargeofmaintenencenotes").setVisible(true);
            Xrm.Page.getControl("ldv_towhichdegreedidourcs").setVisible(true);
            Xrm.Page.getControl("ldv_firsttimecontactelarabynotes").setVisible(true);
            Xrm.Page.getControl("ldv_whatyourevalaboutdevicestatusaftermain").setVisible(true);
            Xrm.Page.getControl("ldv_technicianreportrightsnotes").setVisible(true);
            Xrm.Page.getControl("ldv_notessuggestion").setVisible(true);
            Xrm.Page.getControl("ldv_howdoyouevaluatethemaintenanceserviceove").setVisible(true);
            Xrm.Page.getControl("ldv_towhichlevelyougetyourinfosimplyclear").setVisible(true);
            Xrm.Page.getControl("ldv_didyoureceivedareceiptnotes").setVisible(true);

            Xrm.Page.getAttribute("ldv_realvisitdate").setRequiredLevel("required");
            Xrm.Page.getAttribute("ldv_whatisyourevalutaionaboutquickresponse").setRequiredLevel("required");
            Xrm.Page.getAttribute("ldv_istheresparepartsnotes").setRequiredLevel("required");
            Xrm.Page.getAttribute("ldv_whatisyourevalaboutservicelevelstability").setRequiredLevel("required");
            Xrm.Page.getAttribute("ldv_isthereachargeofmaintenencenotes").setRequiredLevel("required");
            Xrm.Page.getAttribute("ldv_towhichdegreedidourcs").setRequiredLevel("required");
            Xrm.Page.getAttribute("ldv_firsttimecontactelarabynotes").setRequiredLevel("required");
            Xrm.Page.getAttribute("ldv_whatyourevalaboutdevicestatusaftermain").setRequiredLevel("required");
            Xrm.Page.getAttribute("ldv_technicianreportrightsnotes").setRequiredLevel("required");
            Xrm.Page.getAttribute("ldv_notessuggestion").setRequiredLevel("required");
            Xrm.Page.getAttribute("ldv_howdoyouevaluatethemaintenanceserviceove").setRequiredLevel("required");
            Xrm.Page.getAttribute("ldv_towhichlevelyougetyourinfosimplyclear").setRequiredLevel("required");
            Xrm.Page.getAttribute("ldv_didyoureceivedareceiptnotes").setRequiredLevel("required");

        } else if (Xrm.Page.ui.tabs.get("tab_FollowUp_2").sections.get("tab_11_section_1").$A4_2 && Xrm.Page.getAttribute("ldv_customeravailability") != null
            && (Xrm.Page.getAttribute("ldv_customeravailability").getValue() == 100000000 && //support via phone
                Xrm.Page.getAttribute("statuscode").getValue() == 753240115)) //
        {

            Xrm.Page.getControl("ldv_realvisitdate").setVisible(true);
            Xrm.Page.getControl("ldv_whatisyourevalutaionaboutquickresponse").setVisible(true);
            Xrm.Page.getControl("ldv_istheresparepartsnotes").setVisible(true);
            Xrm.Page.getControl("ldv_whatisyourevalaboutservicelevelstability").setVisible(true);
            Xrm.Page.getControl("ldv_isthereachargeofmaintenencenotes").setVisible(true);
            Xrm.Page.getControl("ldv_towhichdegreedidourcs").setVisible(true);
            Xrm.Page.getControl("ldv_firsttimecontactelarabynotes").setVisible(true);
            Xrm.Page.getControl("ldv_whatyourevalaboutdevicestatusaftermain").setVisible(true);
            Xrm.Page.getControl("ldv_technicianreportrightsnotes").setVisible(true);
            Xrm.Page.getControl("ldv_notessuggestion").setVisible(true);
            Xrm.Page.getControl("ldv_howdoyouevaluatethemaintenanceserviceove").setVisible(true);
            Xrm.Page.getControl("ldv_towhichlevelyougetyourinfosimplyclear").setVisible(true);
            Xrm.Page.getControl("ldv_didyoureceivedareceiptnotes").setVisible(true);

            Xrm.Page.getAttribute("ldv_realvisitdate").setRequiredLevel("required");
            Xrm.Page.getAttribute("ldv_whatisyourevalutaionaboutquickresponse").setRequiredLevel("required");
            Xrm.Page.getAttribute("ldv_istheresparepartsnotes").setRequiredLevel("required");
            Xrm.Page.getAttribute("ldv_whatisyourevalaboutservicelevelstability").setRequiredLevel("required");
            Xrm.Page.getAttribute("ldv_isthereachargeofmaintenencenotes").setRequiredLevel("required");
            Xrm.Page.getAttribute("ldv_towhichdegreedidourcs").setRequiredLevel("required");
            Xrm.Page.getAttribute("ldv_firsttimecontactelarabynotes").setRequiredLevel("required");
            Xrm.Page.getAttribute("ldv_whatyourevalaboutdevicestatusaftermain").setRequiredLevel("required");
            Xrm.Page.getAttribute("ldv_technicianreportrightsnotes").setRequiredLevel("required");
            Xrm.Page.getAttribute("ldv_notessuggestion").setRequiredLevel("required");
            Xrm.Page.getAttribute("ldv_howdoyouevaluatethemaintenanceserviceove").setRequiredLevel("required");
            Xrm.Page.getAttribute("ldv_towhichlevelyougetyourinfosimplyclear").setRequiredLevel("required");
            Xrm.Page.getAttribute("ldv_didyoureceivedareceiptnotes").setRequiredLevel("required");
        }

        if (Xrm.Page.ui.tabs.get("tab_FollowUp_2").sections.get("tab_11_section_1").$A4_2 && Xrm.Page.getAttribute("ldv_customeravailability") != null
            && (Xrm.Page.getAttribute("ldv_customeravailability").getValue() == 753240000 ||   //The Visit Done But Not Repaired
                Xrm.Page.getAttribute("ldv_customeravailability").getValue() == 100000003 ||//Customer Canceled 
                Xrm.Page.getAttribute("ldv_customeravailability").getValue() == 753240001 ||//Wrong Order
                Xrm.Page.getAttribute("ldv_customeravailability").getValue() == 753240002)) //Refused or Another Person
        {
            Xrm.Page.getControl("ldv_realvisitdate").setVisible(false);
            Xrm.Page.getControl("ldv_whatisyourevalutaionaboutquickresponse").setVisible(false);
            Xrm.Page.getControl("ldv_istheresparepartsnotes").setVisible(false);
            Xrm.Page.getControl("ldv_whatisyourevalaboutservicelevelstability").setVisible(false);
            Xrm.Page.getControl("ldv_isthereachargeofmaintenencenotes").setVisible(false);
            Xrm.Page.getControl("ldv_towhichdegreedidourcs").setVisible(false);
            Xrm.Page.getControl("ldv_firsttimecontactelarabynotes").setVisible(false);
            Xrm.Page.getControl("ldv_whatyourevalaboutdevicestatusaftermain").setVisible(false);
            Xrm.Page.getControl("ldv_technicianreportrightsnotes").setVisible(false);
            Xrm.Page.getControl("ldv_notessuggestion").setVisible(false);
            Xrm.Page.getControl("ldv_howdoyouevaluatethemaintenanceserviceove").setVisible(false);
            Xrm.Page.getControl("ldv_towhichlevelyougetyourinfosimplyclear").setVisible(false);
            Xrm.Page.getControl("ldv_didyoureceivedareceiptnotes").setVisible(false);
            // Xrm.Page.getControl("ldv_reasonforthevisitdonebutnotrepaired").setVisible(false);


            Xrm.Page.getAttribute("ldv_realvisitdate").setRequiredLevel("none");
            Xrm.Page.getAttribute("ldv_whatisyourevalutaionaboutquickresponse").setRequiredLevel("none");
            Xrm.Page.getAttribute("ldv_istheresparepartsnotes").setRequiredLevel("none");
            Xrm.Page.getAttribute("ldv_whatisyourevalaboutservicelevelstability").setRequiredLevel("none");
            Xrm.Page.getAttribute("ldv_isthereachargeofmaintenencenotes").setRequiredLevel("none");
            Xrm.Page.getAttribute("ldv_towhichdegreedidourcs").setRequiredLevel("none");
            Xrm.Page.getAttribute("ldv_firsttimecontactelarabynotes").setRequiredLevel("none");
            Xrm.Page.getAttribute("ldv_whatyourevalaboutdevicestatusaftermain").setRequiredLevel("none");
            Xrm.Page.getAttribute("ldv_technicianreportrightsnotes").setRequiredLevel("none");
            Xrm.Page.getAttribute("ldv_notessuggestion").setRequiredLevel("none");
            Xrm.Page.getAttribute("ldv_howdoyouevaluatethemaintenanceserviceove").setRequiredLevel("none");
            Xrm.Page.getAttribute("ldv_towhichlevelyougetyourinfosimplyclear").setRequiredLevel("none");
            Xrm.Page.getAttribute("ldv_didyoureceivedareceiptnotes").setRequiredLevel("none");
            // Xrm.Page.getAttribute("ldv_reasonforthevisitdonebutnotrepaired").setRequiredLevel("none");


            // control special fields in each case
            if (Xrm.Page.getAttribute("ldv_customeravailability").getValue() == 753240000)//The Visit Done But Not Repaired
            {
                Xrm.Page.getControl("ldv_reasonforthevisitdonebutnotrepaired").setVisible(true);
                Xrm.Page.getAttribute("ldv_reasonforthevisitdonebutnotrepaired").setRequiredLevel("required");

            } else if (Xrm.Page.getAttribute("ldv_customeravailability").getValue() == 100000003)//Customer Canceled 
            {
                Xrm.Page.getControl("ldv_reasonforcustomercanceled").setVisible(true);
                Xrm.Page.getAttribute("ldv_reasonforcustomercanceled").setRequiredLevel("required");

            } else if (Xrm.Page.getAttribute("ldv_customeravailability").getValue() == 753240001)//Wrong Order
            {
                Xrm.Page.getControl("ldv_reasonforwrongorder").setVisible(true);
                Xrm.Page.getAttribute("ldv_reasonforwrongorder").setRequiredLevel("required");

            } else if (Xrm.Page.getAttribute("ldv_customeravailability").getValue() == 753240002) //Refused or Another Person
            {
                Xrm.Page.getControl("ldv_reasonforrefusedoranotherperson").setVisible(true);
                Xrm.Page.getAttribute("ldv_reasonforrefusedoranotherperson").setRequiredLevel("required");

            }

        }
    }


    // change in portal tab
    if (Xrm.Page.getAttribute("ldv_createdfrom").getValue() == 1) {
        debugger;
        // amr 5/6/2018
        if (Xrm.Page.getAttribute("ldv_customeravailability") != null
            && (Xrm.Page.getAttribute("ldv_customeravailability").getValue() == 753240005 ||  //no answer
                Xrm.Page.getAttribute("ldv_customeravailability").getValue() == 753240003 ||  //customer is unreachable and no follow up
                Xrm.Page.getAttribute("ldv_customeravailability").getValue() == 100000001))//visit not done
        {
            Xrm.Page.getAttribute("ldv_realvisitdate").setRequiredLevel("none");
            Xrm.Page.getAttribute("ldv_isvisitdonenotes").setRequiredLevel("none");
            Xrm.Page.getAttribute("ldv_towhatdegreetechshaveabilitydiagn").setRequiredLevel("none");
            Xrm.Page.getAttribute("ldv_dealwiththeservicecenternotes").setRequiredLevel("none");
            Xrm.Page.getAttribute("ldv_reasons").setRequiredLevel("none");
            Xrm.Page.getAttribute("ldv_whatyourevalaboutdevicestatusaftermain").setRequiredLevel("none");
            Xrm.Page.getAttribute("ldv_isthereachargeofmaintenencenotes").setRequiredLevel("none");
            Xrm.Page.getAttribute("ldv_followupstatus").setRequiredLevel("none");
            Xrm.Page.getAttribute("ldv_towhichlevelyougetyourinfosimplyclear").setRequiredLevel("none");
            Xrm.Page.getAttribute("ldv_amountvalue").setRequiredLevel("none");
            Xrm.Page.getAttribute("ldv_amountvaluenotes").setRequiredLevel("none");

            Xrm.Page.getControl("ldv_realvisitdate1").setVisible(false);
            Xrm.Page.getControl("ldv_isvisitdonenotes").setVisible(false);
            Xrm.Page.getControl("ldv_towhatdegreetechshaveabilitydiagn").setVisible(false);
            Xrm.Page.getControl("ldv_dealwiththeservicecenternotes").setVisible(false);
            Xrm.Page.getControl("ldv_reasons").setVisible(false);
            Xrm.Page.getControl("ldv_whatyourevalaboutdevicestatusaftermain1").setVisible(false);
            Xrm.Page.getControl("ldv_isthereachargeofmaintenencenotes").setVisible(false);
            Xrm.Page.getControl("ldv_followupstatus1").setVisible(false);
            Xrm.Page.getControl("ldv_towhichlevelyougetyourinfosimplyclear1").setVisible(false);
            Xrm.Page.getControl("ldv_amountvalue").setVisible(false);
            Xrm.Page.getControl("ldv_amountvaluenotes").setVisible(false);


            Xrm.Page.getControl("ldv_followupstarttime2").setDisabled(true);
            Xrm.Page.getControl("ldv_followupendtime2").setDisabled(true);

        } else if (Xrm.Page.getAttribute("ldv_customeravailability") != null
            && (Xrm.Page.getAttribute("ldv_customeravailability").getValue() == 1 ||  //visit done on time
                Xrm.Page.getAttribute("ldv_customeravailability").getValue() == 2))//visit done after booking time 
        {
            Xrm.Page.getControl("ldv_realvisitdate1").setVisible(true);
            Xrm.Page.getControl("ldv_isvisitdonenotes").setVisible(true);
            Xrm.Page.getControl("ldv_towhatdegreetechshaveabilitydiagn").setVisible(true);
            Xrm.Page.getControl("ldv_dealwiththeservicecenternotes").setVisible(true);
            Xrm.Page.getControl("ldv_reasons").setVisible(true);
            Xrm.Page.getControl("ldv_whatyourevalaboutdevicestatusaftermain1").setVisible(true);
            Xrm.Page.getControl("ldv_isthereachargeofmaintenencenotes1").setVisible(true);
            Xrm.Page.getControl("ldv_followupstatus1").setVisible(true);
            Xrm.Page.getControl("ldv_towhichlevelyougetyourinfosimplyclear1").setVisible(true);
            Xrm.Page.getControl("ldv_amountvalue").setVisible(true);
            Xrm.Page.getControl("ldv_amountvaluenotes").setVisible(true);

            Xrm.Page.getAttribute("ldv_realvisitdate").setRequiredLevel("required");
            Xrm.Page.getAttribute("ldv_isvisitdonenotes").setRequiredLevel("required");
            Xrm.Page.getAttribute("ldv_towhatdegreetechshaveabilitydiagn").setRequiredLevel("required");
            Xrm.Page.getAttribute("ldv_dealwiththeservicecenternotes").setRequiredLevel("required");
            Xrm.Page.getAttribute("ldv_reasons").setRequiredLevel("required");
            Xrm.Page.getAttribute("ldv_whatyourevalaboutdevicestatusaftermain").setRequiredLevel("required");
            Xrm.Page.getAttribute("ldv_isthereachargeofmaintenencenotes").setRequiredLevel("required");
            Xrm.Page.getAttribute("ldv_followupstatus").setRequiredLevel("required");
            Xrm.Page.getAttribute("ldv_towhichlevelyougetyourinfosimplyclear").setRequiredLevel("required");
            Xrm.Page.getAttribute("ldv_amountvalue").setRequiredLevel("required");
            Xrm.Page.getAttribute("ldv_amountvaluenotes").setRequiredLevel("required");

            Xrm.Page.getControl("ldv_followupstarttime2").setDisabled(true);
            Xrm.Page.getControl("ldv_followupendtime2").setDisabled(true);
        }

        //hide general tab
        Xrm.Page.ui.tabs.get("tab_FollowUp_2").sections.get("tab_11_section_1").setVisible(false);
    }
}


