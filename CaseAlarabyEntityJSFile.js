/////////////////////////////Variables///////////////////////////////////// Merna - fawzy - hamada - mahmoud 00 000
var MaintenanceFormId = "5b4526d8-dfad-41fa-a4f5-fd52337e65db";
var ComplainFormId = "c44adeef-8c87-45a5-abec-3f094590012a";
var InquiryFormId = "9d3ff23f-2296-4bab-be3b-14f15c86f620";
var InstallationFormId = "57517289-ab6a-4619-a960-7637d4d0afdf";
var IspectionFormId = "aad9017a-9236-4aef-a7af-e86bf5192125";
var AccountField = "ldv_customername";
var GovernmentCodeField = "ldv_governmentcode";
var MaintenanceFormName = "Alaraby Maintenance Form";
var DistrictFieldSales = "ldv_districtsales";
var InquiryFormName = "Alaraby Inquiry Form";
var ResourceField = "ldv_resource";
var TechnicalApproveLSC = "ldv_technicalsupportlscapproval";
var CentralProductGroup = "ldv_centralproductgroup";
var RangFromField = "ldv_RangeFrom";
var ComplaintCancelStatusValue = 753240030;
var CentralTelephoneNameField = "ldv_CentralTelephoneName";
var CentralTelephoneIDField = "ldv_centraltelephoneId";
var CentralTelephoneCodeField = "ldv_CentralTelephoneCode";
var AvailabilityDateField = "ldv_availabilitydate";
var uniqueId = "1234";
var Problem2Field = "ldv_problem2";
var Problem3Field = "ldv_problem3";
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
var ProductGroupField = "ldv_productgroup";
var BrandField = "ldv_brand";
var genderField = "ldv_gender";
var MethodofCommunicationField = "ldv_methodofcommunication";
var ProductTypeField = "ldv_producttype";
var anytext = "{EAF163B8-0000-0000-0000-3863BB35CFC0}";
var ModelNumberField = "ldv_modelnumber";
var ModelNumberField2 = "ldv_modelnumber2";
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
var FrontOfficeRoleNAme = "LSC Front Office User";
var BackOfficeRoleName = "Back Office User";
var TotalSparePartCostField = "ldv_totalusedsparepartscost";
var VisitCostField = "ldv_visitcost";
var TotalVisitCostField = "ldv_totalvisitcost";
var CreatedFromField = "ldv_createdfrom";
var LSCBranchField = "ldv_lscbranch";
var ISLSC = "ldv_islsc";
var AdminFlag = false;
var ProdProb = new Array();
CustomerTypeValue["753240000"] = "Individual Customer";
CustomerTypeValue["753240001"] = "Corporate Customer";
MSCorASCos["0"] = "MSC";
MSCorASCos["1"] = "ASC";
MSCorASCos["2"] = "Both";
StatusValues["Service Scheduled"] = 753240000;
StatusValues["Rescheduled"] = 753240001;
StatusValues["Canceled By Customer"] = 753240002;
StatusValues["No Answer"] = 753240003;
StatusValues["Postpone"] = 753240004;
StatusValues["Canceled By Technician"] = 753240005;
StatusValues["Waiting For Spare Parts"] = 753240006;
StatusValues["Product to be taken to EL-Araby LSC"] = 753240007;
StatusValues["Fixed at LSC"] = 753240008;
StatusValues["Replacement"] = 753240009;
StatusValues["Approved to take product to Lsc"] = 753240010;
StatusValues["Rejected to take product to Lsc"] = 753240011;
StatusValues["Replacement Approved"] = 753240012;
StatusValues["Replacement Rejected"] = 753240013;
StatusValues["Product Delivered to LSC"] = 753240014;
StatusValues["LSC shortage spare parts"] = 753240015;
StatusValues["Spare parts Available"] = 753240016;
StatusValues["Spare parts are Not available"] = 753240017;
StatusValues["Delivered to customer"] = 753240018;
StatusValues["Replacement Done"] = 753240019;
StatusValues["Maintained"] = 753240024;
StatusValues["CS-does not want to pay"] = 753240023;
StatusValues["MSC-Canceled"] = 6;
StatusValues["ASC-Canceled"] = 2000;
StatusValues["Customer Reject Withdraw Product"] = 753240020;
StatusValues["Draft"] = 753240022;

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
var Correct_Total_Amount = "ldv_correcttotalamount";
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

function ClearFields() {
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
    Xrm.Page.getAttribute(ProblemField).setValue(null);
    Xrm.Page.getAttribute(Problem2Field).setValue(null);
    Xrm.Page.getAttribute(Problem3Field).setValue(null);
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

function Maintenance_OnLoadForm(executionContext) {

    var execution = executionContext;
    _executionForm = executionContext.getFormContext();
    try {

        NavigateToForm();
        UserRole = GetAllUserRole();
        LockASCMSC();



        //July 2019
        var statusReasonn = _executionForm.getAttribute("statuscode").getValue();

        if (statusReasonn == 753240054) {
            if (NewCheckUserRole(UserRole, "LSC Supervisor User")) {
                _executionForm.getControl("ldv_lscsupervisordecision").setVisible(false);
                _executionForm.getAttribute("ldv_lscsupervisordecision").setRequiredLevel("none");

                _executionForm.getControl("ldv_lscsupervisordecicionforcustomernotavaila").setVisible(true);
                _executionForm.getAttribute("ldv_lscsupervisordecicionforcustomernotavaila").setRequiredLevel("required");
                _executionForm.getControl("ldv_deliveryvisitdate").setVisible(false);
                _executionForm.getAttribute("ldv_deliveryvisitdate").setRequiredLevel("none");

                _executionForm.getControl("ldv_visitdeliveryfleetuser").setVisible(false);
                _executionForm.getAttribute("ldv_visitdeliveryfleetuser").setRequiredLevel("none");
            }
            else {
                CustomerRejectToRecive(NewCheckUserRole(UserRole, "Fleet Spoke User"));
            }

        }


        //Aug 2019
        try {

            if (NewCheckUserRole(UserRole, "Call Center User")) {

                CallCenter_GetStatusDescription(statusReasonn, _executionForm.data.entity.getId());

            }
        }
        catch (e) {

        }

        /////////ended here






        //Hide the activities ASC/MSC section  if LSC 
        if (Xrm.Page.getAttribute(CreatedFromField).getValue() === 3/*LSC*/) {

            Xrm.Page.ui.tabs.get("Work_Order_Information_tab").sections.get("MSC_sec").setVisible(false);
            Xrm.Page.ui.tabs.get("Work_Order_Information_tab").sections.get("ASC_sec").setVisible(false);
        }


        if (NewCheckUserRole(UserRole, "Call Center User") && Xrm.Page.context.getUserId() != Xrm.Page.getAttribute("ownerid").getValue()[0].id) {

            return;
        }


        //Remove blank values 
        Xrm.Page.getControl("ldv_totalamountweight").removeOption("");
        Xrm.Page.getControl("ldv_modelweight").removeOption("");
        Xrm.Page.getControl("ldv_serialweight").removeOption("");
        Xrm.Page.getControl("ldv_warrantydateweight").removeOption("");
        Xrm.Page.getControl("ldv_warrantystatusweight").removeOption("");
        Xrm.Page.getControl("ldv_sparepartweight").removeOption("");
        Xrm.Page.getControl("ldv_defectcodeweight").removeOption("");
        Xrm.Page.getControl("ldv_techreportweight").removeOption("");


        var frmType = Xrm.Page.ui.getFormType();

        var status = Xrm.Page.getAttribute(WorkOrderStatusField).getValue();

        CheckLSC_Visibelities();

        if (frmType != 0 && frmType != 1) {


            Xrm.Page.ui.controls.get("ldv_warrantystatus").setDisabled(true);
            if (NewCheckUserRole(UserRole, "Technical Review User")) {
                Xrm.Page.ui.controls.get("ldv_warrantystatus").setDisabled(false);
            }


        }

        if (Xrm.Page.getAttribute(CreatedFromField).getValue() == 0) //CRM,added by nermine
        {
            Xrm.Page.ui.controls.get("ldv_serialnumber").setDisabled(true);
            Xrm.Page.ui.controls.get("ldv_warrantydate").setDisabled(true);


        }



        if (NewCheckUserRole(UserRole, FrontOfficeRoleNAme) || NewCheckUserRole(UserRole, AdminRoleName) || NewCheckUserRole(UserRole, "LSC Supervisor User")) {
            Xrm.Page.getControl("ldv_frontofficecomment").setVisible(true);
            Xrm.Page.getControl("ldv_actualcollectedamount").setDisabled(false);
            if (status == 753240038) {
                Xrm.Page.ui.tabs.get("lsc_tab").sections.get("lsc_tab_section_2").setVisible(false);

                //Deployment Release 3
                Xrm.Page.getAttribute("ldv_stockplace").setRequiredLevel("none");
                Xrm.Page.getControl("ldv_stockplace").setVisible(false);
                Xrm.Page.getControl("ldv_stockplace").setDisabled(true);
                ///////////

            }
            else {
                //Deployment Release 3
                Xrm.Page.ui.tabs.get("lsc_tab").sections.get("lsc_tab_section_2").setVisible(true);

                if (status == 753240041 || status == 753240044 || status == 753240038 || status == 753240123) {

                    Xrm.Page.getControl("ldv_stockplace").setVisible(true);
                    Xrm.Page.getControl("ldv_stockplace").setDisabled(false);
                    //Xrm.Page.getAttribute("ldv_stockplace").setRequiredLevel("required");
                    FilterStockPlaceLookup();

                }
                else {

                    Xrm.Page.getControl("ldv_stockplace").setVisible(false);
                    Xrm.Page.getControl("ldv_stockplace").setDisabled(true);
                    Xrm.Page.getAttribute("ldv_stockplace").setRequiredLevel("none");
                }
                //////////////

            }
        }
        else {
            Xrm.Page.getControl("ldv_frontofficecomment").setVisible(true);
            Xrm.Page.getControl("ldv_frontofficecomment").setDisabled(true);
        }
        if (NewCheckUserRole(UserRole, "Planning User") || NewCheckUserRole(UserRole, AdminRoleName)) {
            Xrm.Page.ui.controls.get("ldv_planningteamnotes1").setDisabled(false);
        }
        else { Xrm.Page.ui.controls.get("ldv_planningteamnotes1").setDisabled(true); }

        if (NewCheckUserRole(UserRole, "Fleet Spoke User")) {
            Xrm.Page.ui.tabs.get("lsc_tab").sections.get("lsc_tab_section_2").setVisible(false);
        }

        if (NewCheckUserRole(UserRole, "Follow-up User")) {
            Xrm.Page.ui.controls.get("ldv_callcenternotes").setDisabled(true);
            Xrm.Page.ui.controls.get("ldv_backofficenotes").setDisabled(true);
            Xrm.Page.ui.controls.get("ldv_planningteamnotes").setDisabled(true);
            Xrm.Page.ui.controls.get("ldv_notes").setDisabled(true);
        }

        if (NewCheckUserRole(UserRole, "Technical Support") || NewCheckUserRole(UserRole, "LSC Supervisor User")) {
            Xrm.Page.ui.tabs.get("Co-Technician_tab").sections.get("Co-Technician_tab_section_5").setVisible(false);
            Xrm.Page.ui.tabs.get("Co-Technician_tab").setDisplayState('collapsed');

        }

        else {
            Xrm.Page.ui.tabs.get("Co-Technician_tab").sections.get("Co-Technician_tab_section_5").setVisible(true);
            Xrm.Page.ui.tabs.get("Co-Technician_tab").setDisplayState('collapsed');

        }


        if (frmType != 3 /*Read Only*/) {
            if (frmType == 0 || frmType == 1) {
                Xrm.Page.ui.tabs.get("Co-Technician_tab").setDisplayState('collapsed');
            }
            if (frmType == 2) {
                OnChangeWorkOrdertype();
                Xrm.Page.getAttribute(CentralProductGroup).setSubmitMode("always");
                Xrm.Page.getAttribute("ldv_site").setSubmitMode("always");
                Xrm.Page.ui.tabs.get("Co-Technician_tab").setDisplayState('collapsed');
                CustomerTypeCond();
            }
            if (frmType == 1) {
                CustomerTypeCond();

                var CentralTel = Xrm.Page.getAttribute(centraltelephoneField).getValue();
                var landline = Xrm.Page.getAttribute(LandLineField).getValue();
                if (CentralTel != null) {
                    if (CentralTel[0] != null && CentralTel[0].id != null && landline === null) {
                        Xrm.Page.getAttribute(LandLineField).setValue("00000000");
                    }
                }


                if (NewCheckUserRole(UserRole, FrontOfficeRoleNAme)) {

                    Xrm.Page.getAttribute(CreatedFromField).setValue(3)/*3 mean LSC*/;
                    RetrieveLSCBranch();

                    //Deployment Release 2
                    if (Xrm.Page.getAttribute("statuscode").getValue() == 753240022 && Xrm.Page.getAttribute("ldv_createdfrom").getValue() == 3) {
                        Xrm.Page.ui.controls.get("ldv_serialnumber").setDisabled(false);
                        Xrm.Page.ui.controls.get("ldv_warrantydate").setDisabled(false);
                    }

                    ////////////////////
                    Xrm.Page.getControl(SiteField).setVisible(false);
                    Xrm.Page.getControl("ldv_frontofficecomment").setVisible(true);
                    Xrm.Page.getAttribute("ldv_serialnumber").setRequiredLevel("required");
                    Xrm.Page.getControl("ldv_serialnumber1").setVisible(true);
                    Xrm.Page.ui.tabs.get("Work_Order_Information_tab").sections.get("MSC_sec").setVisible(false);
                    Xrm.Page.ui.tabs.get("Work_Order_Information_tab").sections.get("ASC_sec").setVisible(false);
                    Xrm.Page.ui.tabs.get("Work_Order_Information_tab").setDisplayState('collapsed');
                    Xrm.Page.ui.tabs.get("Co-Technician_tab").setDisplayState('collapsed');

                }
            }
            if (frmType == 2) {
                var Createdfrom = Xrm.Page.getAttribute(CreatedFromField).getValue();


                if (Createdfrom === 3/*LSC*/) {

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
                }
                Xrm.Page.ui.controls.get("ldv_problem").setDisabled(true);
                Xrm.Page.ui.controls.get("ldv_problem2").setDisabled(true);
                Xrm.Page.ui.controls.get("ldv_problem3").setDisabled(true);

            }
            if (frmType == 2 && status == StatusValues["Draft"] && Xrm.Page.getAttribute(CreatedFromField).getValue() != 3) {

                MSCorASC();
            }

            if (Xrm.Page.getAttribute(CreatedFromField).getValue() != 3)
                OnChangeMSCorASC();

            try {

                Xrm.Page.ui.controls.get("Waiting_Spare_Parts_grd").setVisible(false);

            } catch (e) {

            }


            var stateObject = Xrm.Page.getAttribute(CustomerNameField).getValue();
            //Hide All Fields need filteration 
            if (stateObject === null) {
                Xrm.Page.getControl(ProductGroupField).setVisible(false);
                Xrm.Page.getControl(BrandField).setVisible(false);
                Xrm.Page.getControl(ProductTypeField).setVisible(false);
                Xrm.Page.getControl(ModelNumberField).setVisible(false);
                Xrm.Page.getControl(ProblemField).setVisible(false);
                Xrm.Page.getControl(Problem2Field).setVisible(false);
                Xrm.Page.getControl(Problem3Field).setVisible(false);
                Xrm.Page.getControl(EquipmentField).setVisible(false);
            }
            else {
            }
            //check if the status is maintained then calculate the total sparepart price 

            if (status == StatusValues["Maintained"]) {
                CalculateTotalSparePartCost();

            }
            OnChangeStatus();

            if (Xrm.Page.context.getUserId() != Xrm.Page.getAttribute("ownerid").getValue()[0].id) {
                HideScheduling();
            }
            HideLSCSectionOnChangeOfCreatedFrom();
            ClearFieldsForSparePartsAvailable();
            //ShowHideFollowUpTab();
            ShowPlanningUserFields();


            ReplacementTabOneFieldsManager();
            ReplacementSpecialistTabFieldsManager();
            ReplacementTeamLeadTabFieldsManager();
            ReplacementAdminTabFieldsManager();
            //ReplacementDecisionOnChange();

            Xrm.Page.ui.controls.get("SecondDefects").setVisible(false);
            Xrm.Page.ui.controls.get("secondspareparts").setVisible(false);
            Xrm.Page.ui.controls.get("SecondWaitingSpareParts").setVisible(false);

            //SecondDefects
            OnChangeReturnOrganization();
            OnChangeSalesOrganization();

            if (NewCheckUserRole(UserRole, "Replacement Specialist User") && status == 753240066) {
                ValidateSalesOrderSubgrid();
            }
        }
        if (NewCheckUserRole(UserRole, "Technical Support")) {
            Xrm.Page.getControl("ldv_technicalsupportnotes").setDisabled(false);
        }
        else {
            Xrm.Page.getControl("ldv_technicalsupportnotes").setDisabled(true);
        }

        if (Xrm.Page.getAttribute("ldv_customername").getValue() != null && Xrm.Page.getAttribute("ldv_customertype").getValue() == 753240001) {
            FilterEquipment();
        }

        /// Replacement Tab Filters


        Xrm.Page.getControl("new_planttl").addPreSearch(function () {

            FilterReturnOrderTeamLeaderPlant();

        });

        Xrm.Page.getControl("new_salesorderplanttl").addPreSearch(function () {

            FilterSalesOrderTeamLeaderPlant();

        });

        Xrm.Page.getControl("new_returnplant").addPreSearch(function () {

            FilterReturnOrderSpecialistPlant();

        });

        Xrm.Page.getControl("new_salesorderplant").addPreSearch(function () {

            FilterSalesOrderSpecialistPlant();

        });
        /////////////////////////////////////

        Xrm.Page.getControl("new_storagelocationtl").addPreSearch(function () {

            FilterReturnOrderTeamLeaderStorLoc();

        });

        Xrm.Page.getControl("new_returnstoragelocation").addPreSearch(function () {

            FilterReturnOrderSpecialistStorLoc();

        });


        GetGridRecord();

        //Deployment Release 3==> adding LSC Supervisor Parameter
        showallfields_fleetspoke_MaintainanceLSC(status, NewCheckUserRole(UserRole, "Fleet Spoke User"), NewCheckUserRole(UserRole, AdminRoleName), NewCheckUserRole(UserRole, "LSC Supervisor User"));

        //  showallfields_fleetspoke_MaintainanceLSC(status, NewCheckUserRole(UserRole, "Fleet Spoke User"), NewCheckUserRole(UserRole, AdminRoleName));

        if (NewCheckUserRole(UserRole, FrontOfficeRoleNAme) || NewCheckUserRole(UserRole, "LSC User") || NewCheckUserRole(UserRole, "LSC Supervisor User")) {
            Xrm.Page.ui.tabs.get("Work_Order_Information_tab").sections.get("MSC_sec").setVisible(false);
            Xrm.Page.ui.tabs.get("Work_Order_Information_tab").sections.get("ASC_sec").setVisible(false);
        }



        //Deployment Release 2
        if (NewCheckUserRole(UserRole, FrontOfficeRoleNAme) || NewCheckUserRole(UserRole, "LSC User")) {
            Xrm.Page.ui.tabs.get("Work_Order_Information_tab").sections.get("MSC_sec").setVisible(false);
            Xrm.Page.ui.tabs.get("Work_Order_Information_tab").sections.get("ASC_sec").setVisible(false);
        }
        ////////////////////



        Show_Aditional_Section();
        Follow_Up_Decision_Created_From_Portal();
        Fill_Technician_fields();

        if (NewCheckUserRole(UserRole, "Follow-up User") || NewCheckUserRole(UserRole, AdminRoleName)) {
            Xrm.Page.ui.tabs.get("tab_FollowUp_2").setVisible(true);
        }
        else {
            Xrm.Page.ui.tabs.get("tab_FollowUp_2").setVisible(false);
        }


        if (Xrm.Page.getAttribute(CreatedFromField).getValue() == 0) //CRM,added by nermine
        {
            Xrm.Page.ui.controls.get("ldv_serialnumber").setDisabled(true);
            Xrm.Page.ui.controls.get("ldv_warrantydate").setDisabled(true);


        }

        if (NewCheckUserRole(UserRole, BackOfficeRoleName)) {
            Xrm.Page.getControl("ldv_backofficenotes").setVisible(true);
            Xrm.Page.getControl("ldv_backofficenotes").setDisabled(false);

            //Deployment Release 3
            Xrm.Page.getControl("ldv_mscdelivery").setVisible(true);
            ////////// Deployment Release 4

            Xrm.Page.ui.tabs.get("tab_FollowUp_2").setVisible(true);
            Xrm.Page.ui.tabs.get("tab_FollowUp_2").sections.get("tab_11_section_1").setVisible(true);
            //////////////////////////////////

            var ctrlName = Xrm.Page.ui.controls.get();
            for (var i in ctrlName) {
                try {
                    var ctrl = ctrlName[i];
                    var ctrlSection = ctrl.getParent().getName();
                    if (ctrlSection == "tab_11_section_1" || ctrlSection == "tab_FollowUp_2_section_3") {
                        ctrl.setDisabled(true);
                    }
                } catch (e) {

                }
            }
        }


        if (NewCheckUserRole(UserRole, "Follow-up User")) //Added by nermine 14/2/2018 
        {
            //check queue
            var queue = Xrm.Page.data.entity.attributes.get('new_queue').getValue()[0].name;
            if (queue.toLowerCase() == "follow up queue") {
                GEt_spare_Parts_Defect_code_count();

            }

        }


        if (NewCheckUserRole(UserRole, "Technical Review User")) {
            Xrm.Page.ui.tabs.get("Technical_Review_tab").setVisible(true);
            Xrm.Page.getControl("ldv_technicalsupportnotes").setDisabled(true);
            Xrm.Page.getControl("ldv_mscorasc").setDisabled(true);
            Xrm.Page.getControl("ldv_serialnumber").setDisabled(true);
            Xrm.Page.getControl("ldv_customerwithdrawrejectionreasonfleetspoke").setDisabled(true);
            Xrm.Page.getControl("ldv_warrantydate").setDisabled(true);


            //newly added
            var Decision = Xrm.Page.getAttribute(Technical_Review_Decision).getValue();

            if (Decision == 753240002) {
                Show_Correct_Fields();
                Hide_Weight_Fields();


            }
            else if (Decision == 753240003) {
                Hide_Weight_Fields();
                Show_Correct_Fields();

            }


            //added by nermine 28/1/2018==>if the queue is not technical review ,disable the technical review tab
            if (Xrm.Page.data.entity.attributes.get('new_queue').getValue() != null && Xrm.Page.data.entity.attributes.get('new_queue').getValue() != undefined) {
                var queue = Xrm.Page.data.entity.attributes.get('new_queue').getValue()[0].name;
                if (queue.toLowerCase() != "technical review queue") {
                    TabSetDisabled("Technical_Review_tab", "Details_section", true);
                    TabSetDisabled("Technical_Review_tab", "Technical_Review_General_Manager", true);

                }
                else {

                    TabSetDisabled("Technical_Review_tab", "Details_section", false);
                    TabSetDisabled("Technical_Review_tab", "Technical_Review_General_Manager", true);

                    //Deployment Phase 2
                    GEt_spare_Parts_Defect_code_count();
                    //////////////


                    Xrm.Page.getAttribute(Technical_Review_Decision).setRequiredLevel("required");
                    Xrm.Page.getAttribute("ldv_technicalreviewcomment").setRequiredLevel("required");

                    //set mandotry TR model,serial number,warranty date,warranty status 

                    // Xrm.Page.getAttribute("ldv_model").setRequiredLevel("required");
                    Xrm.Page.getAttribute("ldv_technicalserialnumber").setRequiredLevel("required");
                    //Xrm.Page.getAttribute("ldv_secondtechnicalserial").setRequiredLevel("required");
                    Xrm.Page.getAttribute("ldv_trwarrantydate").setRequiredLevel("required");
                    Xrm.Page.getAttribute("ldv_trwarrantystatus").setRequiredLevel("required");

                    Xrm.Page.getControl("ldv_model").setDisabled(true);
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

        Show_Hide_Portal_Replacement_section(Createdfrom, NewCheckUserRole(UserRole, "Follow-up User") || NewCheckUserRole(UserRole, AdminRoleName), status);




        Is_General_Manager((NewCheckUserRole(UserRole, "General Manager")) || (NewCheckUserRole(UserRole, AdminRoleName)) && status == 753240104);




        //Deployment Release 2
        var queue = Xrm.Page.data.entity.attributes.get('new_queue').getValue()[0].name;
        if (status == 753240063 && (NewCheckUserRole(UserRole, "Technical Support") || NewCheckUserRole(UserRole, "Technical Support User")) && queue.toLowerCase() == "Technical Support Queue".toLowerCase()) {
            Xrm.Page.ui.tabs.get("Replacement_tab").setVisible(true);
            SetSectionVisibilty("Replacement_tab", "Replacement_tab_section_1_TS", true);
        }


        ////////////////////////////////////////

    } catch (e) {

    }


    //Deployment Release 2
    try {
        var statusReasone = Xrm.Page.getAttribute("statuscode").getValue();
        var TechnicalSupportApproval = Xrm.Page.getAttribute("ldv_technicalsupportlscapproval").getValue();
        if (Createdfrom == 3 && statusReasone == "753240059") {
            Xrm.Page.getControl("new_sparepartsavailabilitylsc").setVisible(true);
            Xrm.Page.getAttribute("new_sparepartsavailabilitylsc").setRequiredLevel("required");
        }
        else if (Createdfrom == 0 && statusReasone == "753240038" && TechnicalSupportApproval == "753240000") {
            Xrm.Page.getControl("new_sparepartsavailabilitylsc").setVisible(true);
            Xrm.Page.getControl("ldv_technicalsupportlscapproval").setVisible(true);
        }
    }
    catch (e) {

    }
    ////////////////////////////////////////



    if (NewCheckUserRole(UserRole, "Fleet Spoke User")) {

        var statusReasone = Xrm.Page.getAttribute("statuscode").getValue();
        if (statusReasone == "753240007") {
            Xrm.Page.getControl("ldv_rejectionreasontowithdrawtheproducttolsc").setVisible(false);
        }
        else {
            Xrm.Page.getControl("ldv_rejectionreasontowithdrawtheproducttolsc").setVisible(true);
            // add by MAhmoud Based on jira EA-610 point 3
            Xrm.Page.getControl("ldv_rejectionreasontowithdrawtheproducttolsc").setDisabled(true)

        }
        //July 2019
        if (statusReasone == "753240050") {
            _executionForm.getAttribute("ldv_productnottakenfleetdecision").setRequiredLevel("required");
            _executionForm.getControl("ldv_productnottakenfleetdecision").setVisible(true);


        }//Ended here
    }
    else {
        Xrm.Page.getControl("ldv_rejectionreasontowithdrawtheproducttolsc").setVisible(false);
    }



    OnchangeStatusCode();


    //Deployment Release 2
    if (Xrm.Page.getAttribute("ldv_technicalserialnumber").getValue() != null) {
        if (Xrm.Page.getAttribute("ldv_serialnumbercounts").getValue() != Xrm.Page.getAttribute("ldv_technicalserialnumber").getValue().toString().length) {
            Xrm.Page.getAttribute("ldv_serialnumbercounts").setValue(Xrm.Page.getAttribute("ldv_technicalserialnumber").getValue().toString().length.toString());
        }
    }

    ////////////////////

    //Added by Nermine Regarding EA-488
    if (frmType == 3) {

        ReplacementSpecialistTabFieldsManager();
        ReplacementTeamLeadTabFieldsManager();
    }
    //ReplacementDecisionOnChange();
    //Deployment Release 3
    if (status == 753240124) {
        CustomerRejectToMaintanaceLSC(NewCheckUserRole(UserRole, "Fleet Spoke User"));
    }
    else if (status == 753240123) {
        ShowLSCSupervisiorFields();
    }
    else if (status == 753240125) {
        CustomerRejectToRecive(NewCheckUserRole(UserRole, "Fleet Spoke User"));
    }

        //July 2019
    else if (status == 753240139) {
        CustomerRejectToReplace(NewCheckUserRole(UserRole, "Fleet Spoke User"));
    }

    else if (status == 753240010) {
        EnableLSCBranchForFleet(NewCheckUserRole(UserRole, "Fleet Spoke User"));
    }
    ////////////////////

    /// Jira Issue 504
    if (NewCheckUserRole(UserRole, "Technical Support")) {
        Xrm.Page.getControl("new_sparepartsavailabilitylsc").setVisible(true);
        Xrm.Page.ui.controls.get("new_sparepartsavailabilitylsc").setDisabled(true)
        Xrm.Page.getControl("ldv_unavailabiltyreason").setVisible(true);
        Xrm.Page.ui.controls.get("ldv_unavailabiltyreason").setDisabled(true);
        if (status == 753240009) {
            Xrm.Page.getAttribute("ldv_technicalsupportreplacementapproval").setRequiredLevel("required");
        }
    }

    //Deployment-Release 3 Amr 6-5-2018
    Show_Hide_Second_Defect_code_Second_SparePart();

    try {
        var queue = Xrm.Page.data.entity.attributes.get('new_queue').getValue()[0].name;
        if (NewCheckUserRole(UserRole, "Replacement Specialist User") && queue == "Replacement Spacialist Queue") {
            Xrm.Page.getControl("ldv_returnfirstmodel").setVisible(true);
            Xrm.Page.getAttribute("ldv_returnfirstmodel").setRequiredLevel("required");
            Xrm.Page.getControl("ldv_returnsecondmodel").setVisible(true);
            Xrm.Page.getAttribute("ldv_returnsecondmodel").setRequiredLevel("required");
        }
    } catch (e) {

    }
    //fawzy 20190827
    if (frmType == 1) {
        Xrm.Page.ui.tabs.get("general").setDisplayState('collapsed');
        Xrm.Page.ui.tabs.get("lsc_tab").setDisplayState('collapsed');
        Xrm.Page.ui.tabs.get("Replacement_tab").setDisplayState('collapsed');
        Xrm.Page.ui.tabs.get("tab_12").setDisplayState('collapsed');
        Xrm.Page.ui.tabs.get("tab_14").setDisplayState('collapsed');
        Xrm.Page.ui.tabs.get("tab_13").setDisplayState('collapsed');
        Xrm.Page.ui.tabs.get("tab_FollowUp_Maintainance").setDisplayState('collapsed');
        Xrm.Page.ui.tabs.get("tab_FollowUp_2").setDisplayState('collapsed');
        Xrm.Page.ui.tabs.get("Technical_Review_tab").setDisplayState('collapsed');
    }
    //End Fawzy
    Checkfleet_withNeedToDeliver(_executionForm);
    MaintenanceVisibilityRules();

}

function MaintenanceVisibilityRules() {

    //Enable Serial Number in case of created from is LLC  
    var createdFrom = Xrm.Page.getAttribute("ldv_createdfrom").getValue();
    if (createdFrom == 3) { // CRM LLC
        Xrm.Page.getControl("ldv_serialnumber").setDisabled(false);
        Xrm.Page.getControl("ldv_serialnumber1").setDisabled(false);
    }
    else {
        Xrm.Page.getControl("ldv_serialnumber").setDisabled(true);
        Xrm.Page.getControl("ldv_serialnumber1").setDisabled(true);
    }

    //When security role is planning and the status is spare part are not available  

    var UserRole = GetAllUserRole();
    var statusReasone = Xrm.Page.getAttribute("statuscode").getValue();
    if (NewCheckUserRole(UserRole, "Planning User") && statusReasone == 753240017) {
        Xrm.Page.getControl("ldv_sparepartsavailability").setDisabled(false);
        Xrm.Page.getControl("new_tsreasons").setDisabled(false);
        Xrm.Page.getControl("ldv_availabilitydate").setDisabled(false);
        Xrm.Page.getControl("ldv_reasonforunavailability").setDisabled(false);
    }
}

function OnchangeStatusCode() {

    var statusReasone = Xrm.Page.getAttribute("statuscode").getValue();
    if (statusReasone == "753240064") {
        Xrm.Page.ui.tabs.get("lsc_tab").sections.get("lsc_tab_section_2").setVisible(false);
    }

}


function showallfields_fleetspoke_MaintainanceLSC(status, IsFleetUser, IsAdmin, IsLSCSuperVisor) {
    if ((IsFleetUser || IsAdmin) && status == 753240041) {
        Xrm.Page.ui.tabs.get("lsc_tab").setVisible(true);
        Xrm.Page.getControl("ldv_collectionvisitdate").setVisible(false);
        Xrm.Page.getControl("ldv_fleetspokeuser").setVisible(false);
        Xrm.Page.getControl("ldv_customerreadyfordelivery").setVisible(true);
        Xrm.Page.getControl("ldv_deliveryvisitdate").setVisible(true);
        Xrm.Page.getAttribute("ldv_deliveryvisitdate").setRequiredLevel("required");
        Xrm.Page.getControl("ldv_visitdeliveryfleetuser").setVisible(true);
        Xrm.Page.getAttribute("ldv_visitdeliveryfleetuser").setRequiredLevel("required");
        Xrm.Page.getControl("ldv_frontofficecomment").setVisible(true);
        //add hamada20191121
        debugger;
        var createdFromValue = _executionForm.getAttribute(CreatedFromField).getValue();
        if (createdFromValue == 3) {
            _executionForm.getControl("ldv_productdelivertocustomerornot").setVisible(true);
        }
        //endhamada
        //Xrm.Page.getControl("ldv_technicalsupportreplacementapproval").setVisible(true);

    }
    else if ((IsLSCSuperVisor || IsAdmin) && status == 753240129) {
        Xrm.Page.ui.tabs.get("lsc_tab").setVisible(true);
        Xrm.Page.ui.tabs.get("lsc_tab").sections.get("lsc_tab_section_2").setVisible(true);
    }

    else if (IsFleetUser && status == 753240047 && Xrm.Page.getAttribute("ldv_customerwithdrawapprovalbackoffice") != null &&
        Xrm.Page.getAttribute("ldv_customerwithdrawapprovalbackoffice").getValue() == 753240001 &&
        Xrm.Page.getAttribute("ldv_customerwithdrawapproval") != null &&
        Xrm.Page.getAttribute("ldv_customerwithdrawapproval").getValue() == 753240001) {

        Xrm.Page.getControl("ldv_customerwithdrawapproval").setDisabled(false);

    }

    else {
        Xrm.Page.getControl("ldv_deliveryvisitdate").setVisible(false);
        Xrm.Page.getAttribute("ldv_deliveryvisitdate").setRequiredLevel("none");
        Xrm.Page.getControl("ldv_visitdeliveryfleetuser").setVisible(false);
        Xrm.Page.getAttribute("ldv_visitdeliveryfleetuser").setRequiredLevel("none");
    }

}

function GetAllUserRole() {

    var userRoleName = new Array();
    var currentUserRoles = Xrm.Page.context.getUserRoles();

    for (var i = 0; i < currentUserRoles.length; i++) {
        var userRoleId = currentUserRoles[i];
        userRoleName[i] = GetRoleName2(userRoleId);//hamada20191217 change from GetRoleName to GetRoleName2
    }
    return userRoleName;
}


function NewCheckUserRole(AllRoles, SingleRole) {

    for (var i = 0; i < AllRoles.length; i++) {
        if (SingleRole == AllRoles[i])
            return true;
    }
    return false;
}


function ShowPlanningUserFields() {
    var status = Xrm.Page.getAttribute(WorkOrderStatusField).getValue();

    if (NewCheckUserRole(UserRole, "Planning User") == true) {

        Xrm.Page.getControl("new_sparepartsavailabilitylsc").setVisible(true);
        Xrm.Page.getControl("ldv_planningteamnotes").setVisible(true);
        //   Xrm.Page.getAttribute("new_sparepartsavailabilitylsc").setValue(null);
        Xrm.Page.getAttribute("ldv_availabilitytype").setValue(null);
        Xrm.Page.getAttribute("ldv_dateofavailability").setValue(null);
        // Xrm.Page.getAttribute("ldv_unavailabiltyreason").setValue(null);
        //Xrm.Page.getControl("ldv_availabilitytype").setVisible(true);
        //Xrm.Page.getControl("ldv_dateofavailability").setVisible(true);
        //Xrm.Page.getControl("ldv_unavailabiltyreason").setVisible(true);
    }
    else if ((NewCheckUserRole(UserRole, "LSC Supervisor User") == true || NewCheckUserRole(UserRole, BackOfficeRoleName) == true || NewCheckUserRole(UserRole, AdminRoleName) == true) && (status == 753240062 || status == 753240059)) {
        Xrm.Page.getControl("new_sparepartsavailabilitylsc").setVisible(true);
        Xrm.Page.getControl("ldv_availabilitytype").setVisible(true);
        Xrm.Page.getControl("ldv_dateofavailability").setVisible(true);
        Xrm.Page.getControl("new_sparepartsavailabilitylsc").setDisabled(true);
        Xrm.Page.getControl("ldv_availabilitytype").setDisabled(true);
        Xrm.Page.getControl("ldv_dateofavailability").setDisabled(true);
        Xrm.Page.getControl("ldv_planningteamnotes").setVisible(true);
        Xrm.Page.getControl("ldv_planningteamnotes").setDisabled(true);
    }
    else {
        Xrm.Page.getControl("new_sparepartsavailabilitylsc").setVisible(false);
        Xrm.Page.getAttribute("ldv_availabilitytype").setRequiredLevel("none");
        Xrm.Page.getControl("ldv_availabilitytype").setVisible(false);
        Xrm.Page.getAttribute("ldv_dateofavailability").setRequiredLevel("none");
        Xrm.Page.getControl("ldv_dateofavailability").setVisible(false);
        Xrm.Page.getAttribute("ldv_unavailabiltyreason").setRequiredLevel("none");
        Xrm.Page.getControl("ldv_unavailabiltyreason").setVisible(false);
        //  Xrm.Page.getControl("ldv_planningteamnotes").setVisible(false);
        Xrm.Page.getControl("ldv_planningteamnotes").setVisible(true);
        Xrm.Page.getControl("ldv_planningteamnotes").setDisabled(true);

    }

    if (NewCheckUserRole(UserRole, FrontOfficeRoleNAme) || NewCheckUserRole(UserRole, "LSC User") || NewCheckUserRole(UserRole, "LSC Supervisor User")) {
        Xrm.Page.getControl("new_sparepartsavailabilitylsc").setVisible(false);
    }

}



function OnSaveForm(ExContext) {

    var UserRole = GetAllUserRole();
    Xrm.Page.ui.tabs.get("Co-Technician_tab").setDisplayState('collapsed');

    var EventArg = ExContext.getEventArgs();
    OnChangeStatus();
    IsGovInCreate = false;
    GetGridRecord();
    if (NewCheckUserRole(UserRole, "Replacement Specialist User") || NewCheckUserRole(UserRole, "Replacement Team Leader User")) {
        var check = ValidateSalesOrderSubgrid();
        if (!check)
            EventArg.preventDefault();
    }
    if (NewCheckUserRole(UserRole, "Technical Review User")) {
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

    //Aug 2019 Start 

    var orderStaus = _executionForm.getAttribute(WorkOrderStatusField).getValue();

    var frmType = _executionForm.ui.getFormType();

    if (NewCheckUserRole(UserRole, "Call Center User") && orderStaus == 753240022 && frmType == 1) {

        var customerID = _executionForm.getAttribute(CustomerNameField).getValue()[0].id;
        var proudctId = _executionForm.getAttribute(ProductTypeField).getValue()[0].id;

        //Check status is open
        if (orderStaus == 753240022) {
            //Get open cases for this customer and this product type , Not technical review cases and follow up cases

            CallCenter_GetCustomerOrdersCount(proudctId, customerID);


        }

    }


}


function OnChangeAccount() {

    try {

        ClearFields();

        var Account = Xrm.Page.getAttribute(AccountField).getValue();
        if (Account != null) {
            Xrm.Page.getAttribute(CustomerNameField).setValue(Account);
            OnChangeCustomerName();
        }
    } catch (e) {

    }

}

function OnChangeCustomerName() {

    CustomerPreparation();
    FilterEquipment();

}

function CustomerPreparation() {
    //get the name of the customer name and ther get the records its self
    var Name = GetTheCurrentCustomerName();
    if (Name != null) {
        GetCustomerRecord(Name[0].id);
    }

}

function FilterEquipment() {
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

function OnChangeProductGroup() {
    Xrm.Page.getAttribute("ldv_producttype").setValue(null)
    Xrm.Page.getAttribute("ldv_brand").setValue(null)
    Xrm.Page.getAttribute("ldv_modelnumber").setValue(null)
    Xrm.Page.getAttribute("ldv_problem").setValue(null)
    Xrm.Page.getAttribute("ldv_problem2").setValue(null)
    Xrm.Page.getAttribute("ldv_problem3").setValue(null)

    var CentralTelephone = Xrm.Page.getAttribute(CentralTelephoneEntityName).getValue();
    var ProductGroup = Xrm.Page.getAttribute(ProductGroupField).getValue();
    if (CentralTelephone != null && ProductGroup != null) {
        GetSpecificCentral();
    }

    FilterProducttype();

}


function OnChangeArea() {

    var Area = Xrm.Page.getAttribute("ldv_area").getValue();
    if (Area != null) {
        var str = Area[0].id.toString();
        str = str.toLowerCase();
        str = str.replace(/[{}]/g, "");

        var Query = "/api/data/v9.1/ldv_centralareas(" + str + ")?$expand=ldv_centraltelephone";

        var roleName;
        ODataRequest(Query,
            function (result) {

                roleName = result["ldv_centraltelephone"];

                if (roleName != undefined) {
                    var lookupData = new Array();
                    var lookupItem = new Object();
                    //Set the GUID
                    lookupItem.id = roleName["ldv_centraltelephoneid"];
                    //Set the name
                    lookupItem.name = roleName["ldv_centraltelephonename"];
                    lookupItem.entityType = "ldv_centraltelephone";
                    lookupData[0] = lookupItem;
                    Xrm.Page.getAttribute(centraltelephoneField).setValue(lookupData);
                    Xrm.Page.getControl(centraltelephoneField).setVisible(true)
                    Xrm.Page.getControl(centraltelephoneField).setDisabled(true)
                    Xrm.Page.getAttribute("ldv_area").setRequiredLevel("none");
                    Xrm.Page.getControl("ldv_area").setVisible(false);

                    var PG = Xrm.Page.getAttribute(ProductGroupField).getValue();
                    if (PG != null) {

                        GetSpecificCentral();
                    }


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
                fetchXml = "<filter type='and'>" +
                    "<condition attribute='" + BrandField + "' operator='eq' uiname='" + stateTextValue + "' uitype='" + BrandField + "' value='" + stateID + "' />" +
                    "</filter>";
                // Apply the filter to the field
                Xrm.Page.getControl(ProductTypeField).addCustomFilter(fetchXml);

            }
            else {
                fetchXml = "<filter type='and'>" +
                    "<condition attribute=" + "'" + BrandField + "' operator='eq' uiname='" + anytext + "' uitype='" + BrandField + "' value='" + anytext + "' />" +
                    "</filter>";

                // Apply the filter to the field
                Xrm.Page.getControl(ProductTypeField).addCustomFilter(fetchXml);
                Xrm.Page.getAttribute(ProductTypeField).setValue(null);
            }

        });
    }
}

function OnChangeEquipment() {

    GetSpecificCentral();
    GetProductType();
}

function OnChangeSite() {
    //Xrm.Page.getAttribute("ldv_site").setSubmitMode("dirty");
}

function FilterModelNumber() {

    Xrm.Page.getAttribute(ModelNumberField).setValue(null);

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
                    "<condition attribute='statecode' operator='eq' value='" + 0 + "' />" + "</filter>";



                // Apply the filter to the field
                Xrm.Page.getControl(ModelNumberField).addCustomFilter(fetchXml);

            }
            else {
                fetchXml = "<filter type='and'>" + "<condition attribute=" + "'" + ProductTypeField + "' operator='eq' uiname='" + anytext + "' uitype='" + ProductTypeField + "' value='" + anytext + "' />" +
                    "<condition attribute='statecode' operator='eq' value='" + 0 + "' />" + "</filter>";

                // Apply the filter to the field
                Xrm.Page.getControl(ModelNumberField).addCustomFilter(fetchXml);
                Xrm.Page.getAttribute(ModelNumberField).setValue(null);
            }

        });

        Xrm.Page.getControl(ModelNumberField2).addPreSearch(function () {

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

                    "<condition attribute='" + "ldv_brand" + "' operator='eq' uiname='" + brndText + "' uitype='" + "ldv_brandname" + "' value='" + brndID + "' />" +
                    "<condition attribute='" + ProductTypeField + "' operator='eq' uiname='" + ProdTypText + "' uitype='" + ProductTypeField + "' value='" + ProdTypID + "' />" +
                    "<condition attribute='" + ProductGroupField + "' operator='eq' uiname='" + PrdGrpText + "' uitype='" + ProductGroupField + "' value='" + PrdGrpID + "' />" +
                    "<condition attribute='statecode' operator='eq' value='" + 0 + "' />" + "</filter>";



                // Apply the filter to the field
                Xrm.Page.getControl(ModelNumberField2).addCustomFilter(fetchXml);

            }
            else {
                fetchXml = "<filter type='and'>" +
                    "<condition attribute=" + "'" + ProductTypeField + "' operator='eq' uiname='" + anytext + "' uitype='" + ProductTypeField + "' value='" + anytext + "' />" +
                    "<condition attribute='statecode' operator='eq' value='" + 0 + "' />" + "</filter>";

                // Apply the filter to the field
                Xrm.Page.getControl(ModelNumberField2).addCustomFilter(fetchXml);
                Xrm.Page.getAttribute(ModelNumberField2).setValue(null);
            }

        });


    }
}

function OnChangeLandLine() {
    debugger;
    var landlineNum = Xrm.Page.getAttribute(LandLineField).getValue();
    var landline = Xrm.Page.getAttribute(LandLineField).getValue();
    var code = GetGovCode();
    if (landlineNum != null) {
        Xrm.Page.getControl("ldv_area").setVisible(false);
        landlineNum = code + landlineNum;
        landlineNum = landlineNum.substring(0, 5);

        var query = "/api/data/v9.1/ldv_centralranges?$select=ldv_centralname,_ldv_centralname_value,ldv_rangefrom,ldv_rangeto&$filter=startswith(ldv_rangefrom,'" + landlineNum + "')";

        ODataRequest(query, function (result) {
            if (result.value.length > 0) {
                Result(result.value);
            }
            else if (landline != "00000000" && landline.length == 8) {
                Xrm.Page.getAttribute(centraltelephoneField).setValue(null);
                Xrm.Page.getAttribute("ldv_area").setValue(null);
                Xrm.Page.getAttribute(LandLineField).setValue(null);
            }
            else if (landline == "00000000" && landline.length == 8) {
                Xrm.Page.getAttribute(centraltelephoneField).setValue(null);
                Xrm.Page.getAttribute("ldv_area").setValue(null);
                Xrm.Page.getControl("ldv_area").setVisible(true);
                Xrm.Page.getAttribute("ldv_area").setRequiredLevel("required");//hamada20191217 add area setRequired

            }
            else if (landline.length != 8) {
                Xrm.Page.getAttribute(LandLineField).setValue(null);
                Xrm.Page.getControl("ldv_area").setVisible(false);
            }
        });

        if (Xrm.Page.getAttribute("ldv_landline").getValue() != null) {

            if (formatPhoneLandLine(Xrm.Page.getAttribute("ldv_landline").getValue())) {

                Xrm.Page.getControl("ldv_landline").clearNotification(uniqueId);
            }
            else {
                Xrm.Page.getControl("ldv_landline").setNotification(message1, uniqueId);
                var newMail = Xrm.Page.getAttribute("ldv_landline").setValue("");

            }

        }
    }
    else {
        Xrm.Page.getAttribute(centraltelephoneField).setValue(null);
        Xrm.Page.getAttribute("ldv_area").setValue(null);
        Xrm.Page.getAttribute(LandLineField).setValue(null);
    }
}

function ReferenceContact_OnChange() {

    if (Xrm.Page.getAttribute("ldv_referencecontact").getValue() != null) {

        if (formatPhone(Xrm.Page.getAttribute("ldv_referencecontact").getValue())) {

            Xrm.Page.getControl("ldv_referencecontact").clearNotification(uniqueId);
        }
        else {
            Xrm.Page.getControl("ldv_referencecontact").setNotification(message, uniqueId);
            var newMail = Xrm.Page.getAttribute("ldv_referencecontact").setValue("");

        }

    }

}

function OnChangeWorkOrdertype() {

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
        parameters = GetCustomerInfo();
    parameters["formid"] = FormId;


    var formselector = Xrm.Page.ui.formSelector;
    if (formselector != null && formselector != undefined && formselector.getCurrentItem().getId() != FormId && FormId != null) {
        Xrm.Utility.openEntityForm("incident", CurrentRecored, parameters);

    }




}

function GetCustomerInfo() {

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

        parameters["customeridname"] = Customer[0].name;
        parameters["customerid"] = Customer[0].id;
        parameters["customeridtype"] = "account";

    }
    if (Government != null) {
        parameters["ldv_governmentname"] = Government[0].name;
        parameters[GovernmentField] = Government[0].id;
    }

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

function CustomerTypeCond(customer) {


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
        Xrm.Page.getControl(Problem2Field).setVisible(false);
        Xrm.Page.getControl(Problem3Field).setVisible(false);
        Xrm.Page.getAttribute(ProblemField).setRequiredLevel("none");
        Xrm.Page.getControl(EquipmentField).setVisible(true);
        Xrm.Page.getAttribute(EquipmentField).setRequiredLevel("required");
        Xrm.Page.ui.tabs.get("Product_tab").sections.get("IntialProblem_sec").setVisible(false);

    }
}

function GetRoleName(roleId) {
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
            //   Xrm.Utility.alertDialog(textStatus + " " + errorThrown);
        }
    });
    return roleName;
}

//hamada20191217 create new function getrolename2
function GetRoleName2(roleId) {
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
            //   Xrm.Utility.alertDialog(textStatus + " " + errorThrown);
        }
    });
    return roleName;
}

function ODataRequest(query, successFunc) {
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
            //Xrm.Utility.alertDialog("An Network Error has occured ,Please contact your system administartor: " + textStatus + " " + errorThrown);
        }
    });

}

function MSCorASC() {

    try {

        var equip;
        var frmType = Xrm.Page.ui.getFormType();
        var status = Xrm.Page.getAttribute(WorkOrderStatusField).getValue();
        var WOT = Xrm.Page.getAttribute(WorkOrdertype).getValue();

        if (frmType != 1 && status != StatusValues["Draft"])
            return;
        var Query = "";
        var CT = null;

        if (Xrm.Page.getAttribute(EquipmentField).getValue() != null) {
            equip = GetProductGroup(Xrm.Page.getAttribute(EquipmentField).getValue()[0].id);
        }
        var PG = Xrm.Page.getAttribute(ProductGroupField).getValue();

        if (PG == null && equip != null) {
            var equipProduct = equip["_ldv_product_value"];
            ODataRequest("/api/data/v9.1/products(" + equipProduct + ")", function (result) {
                PG = result["_ldv_productgroup_value"];
            });

            CT = Xrm.Page.getAttribute(CentralTelephoneEntityName).getValue();

            if (PG != null) {

                var query = "/api/data/v9.1/ldv_centralproductgroups?$filter=_ldv_productgroup_value eq " + PG + " and _ldv_centraltelephone_value eq " + CT[0].id.replace(/[{}]/g, "") + " and ldv_workordertype eq " + WOT + "";

                ODataRequest(query, function (result) {

                    if (result.value.length > 0) {
                        SetMSCorASC(result.value[0]);
                    }
                });

            }

        }
        else {

            CT = Xrm.Page.getAttribute(CentralTelephoneEntityName).getValue();

            var query = "/api/data/v9.1/ldv_centralproductgroups?$filter=_ldv_productgroup_value eq " + PG[0].id.replace(/[{}]/g, "") + " and _ldv_centraltelephone_value eq " + CT[0].id.replace(/[{}]/g, "") + " and ldv_workordertype eq " + WOT + "";

            ODataRequest(query, function (result) {

                if (result.value.length > 0) {
                    SetMSCorASC(result.value[0]);

                }
            });

        }


    }
    catch (e) {

    }


}

function GetProductGroup(EquipId) {

    EquipId = EquipId.replace(/[{}]/g, "");
    var equipment;
    var query = "/api/data/v9.1/ldv_equipments(" + EquipId + ")";
    ODataRequest(query, function (result) {

        equipment = result;
    });

    return equipment;
}

function SetMSCorASC(CPg) {


    var frmType = Xrm.Page.ui.getFormType();
    var status = Xrm.Page.getAttribute(WorkOrderStatusField).getValue();

    if (frmType != 1 && status != StatusValues["Draft"])
        return;
    if (CPg != null) {

        var obj = new Object();
        obj.Id = CPg["ldv_centralproductgroupid"];
        obj.Name = CPg["ldv_name"];
        obj.LogicalName = CentralProductGroup;

        Xrm.Page.getAttribute(CentralProductGroup).setValue(GetLookupObj(obj));
        Xrm.Page.getAttribute(CentralProductGroup).setSubmitMode("always");
        if (MSCorASCos[CPg["ldv_servedby"]] == "MSC") {

            if (Xrm.Page.getAttribute(MSCorASCField).getValue() != CPg["ldv_servedby"]) {
                Xrm.Page.getAttribute(MSCorASCField).setValue(CPg["ldv_servedby"]);
                Xrm.Page.data.entity.save();
            }
            Xrm.Page.getControl(MSCorASCField).setDisabled(true);
            if ((!NewCheckUserRole(UserRole, "Technical Support")) && (!NewCheckUserRole(UserRole, "LSC Supervisor User"))) {
                Xrm.Page.ui.tabs.get("Work_Order_Information_tab").sections.get("MSC_sec").setVisible(true);
            }
            Xrm.Page.ui.tabs.get("Co-Technician_tab").sections.get("MSCTech_sec").setVisible(true);
            Xrm.Page.ui.tabs.get("Work_Order_Information_tab").sections.get("ASC_sec").setVisible(false);
            Xrm.Page.ui.tabs.get("Co-Technician_tab").sections.get("ASCTec_sec").setVisible(false);
            ///added by sylvia///
            CheckLSC_Visibelities();

        }
        else {
            if (MSCorASCos[CPg["ldv_servedby"]] == "ASC") {

                if (Xrm.Page.getAttribute(MSCorASCField).getValue() != CPg["ldv_servedby"]) {

                    Xrm.Page.getAttribute(MSCorASCField).setValue(CPg["ldv_servedby"]);

                    Xrm.Page.data.entity.save();
                }


                Xrm.Page.getControl(MSCorASCField).setDisabled(true);
                Xrm.Page.ui.tabs.get("Work_Order_Information_tab").sections.get("MSC_sec").setVisible(false);
                Xrm.Page.ui.tabs.get("Co-Technician_tab").sections.get("MSCTech_sec").setVisible(false);
                if ((!NewCheckUserRole(UserRole, "Technical Support")) && (!NewCheckUserRole(UserRole, "LSC Supervisor User"))) {
                    Xrm.Page.ui.tabs.get("Work_Order_Information_tab").sections.get("ASC_sec").setVisible(true);
                }
                Xrm.Page.ui.tabs.get("Co-Technician_tab").sections.get("ASCTec_sec").setVisible(true);
            }
            else {
                if (Xrm.Page.getControl(MSCorASCField).getDisabled()) {
                    Xrm.Page.getControl(MSCorASCField).setDisabled(false);
                    Xrm.Page.data.entity.save();
                }
            }
            ////added by sylvia//////
            CheckLSC_Visibelities();
        }

    }



}

function GetLookupObj(obj) {

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

function RetrieveLSCBranch() {
    var retrievedBranchs;
    var loggedInUserID = Xrm.Page.context.getUserId();

    var FetchXml = "<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>\
        <entity name='systemuser'>\
            <attribute name='new_branchsfrontofficeid'/>\
            <order attribute='new_branchsfrontofficeid' descending='false' />\
            <filter type='and'>\
                <condition attribute='systemuserid' operator='eq' uitype='systemuser' value='"+ loggedInUserID + "' />\
            </filter>\
        </entity>\
    </fetch>";

    var users = XrmServiceToolkit.Soap.Fetch(FetchXml);
    if (users != null) {
        if (users.length > 0) {
            if (users[0].attributes["new_branchsfrontofficeid"] != null || users[0].attributes["new_branchsfrontofficeid"] != undefined) {
                var LSCBranch = users[0].attributes["new_branchsfrontofficeid"];

                SetLookup("ldv_lscbranch", LSCBranch.id, LSCBranch.formattedValue, LSCBranch.name);

            }
            Xrm.Page.ui.controls.get("ldv_lscbranch").setDisabled(true);
        }
    }
}

function OnChangeMSCorASC() {

    var frmType = Xrm.Page.ui.getFormType();


    var Servicetype = Xrm.Page.getAttribute(MSCorASCField).getValue();
    //alert(Servicetype);

    if (!Servicetype) { /*MSC*/

        //if (frmType != 1)
        //    UpdateWorkOrder(Servicetype);

        try {


            //Deployment Release 2

            if (!NewCheckUserRole(UserRole, "Technical Support") || NewCheckUserRole(UserRole, AdminRoleName)) {
                Xrm.Page.ui.tabs.get("Work_Order_Information_tab").sections.get("MSC_sec").setVisible(true);
            }
            //////////////

            Xrm.Page.ui.tabs.get("Co-Technician_tab").sections.get("MSCTech_sec").setVisible(true);
            Xrm.Page.ui.tabs.get("Work_Order_Information_tab").sections.get("ASC_sec").setVisible(false);
            Xrm.Page.ui.tabs.get("Co-Technician_tab").sections.get("ASCTec_sec").setVisible(false);
            Xrm.Page.ui.tabs.get("Co-Technician_tab").setDisplayState('collapsed');
        }
        catch (e) {
            Xrm.Page.data.refresh();
        }
    }
    else { /*ASC*/

        //if (frmType != 1)
        //    UpdateWorkOrder(Servicetype);

        try {
            Xrm.Page.ui.tabs.get("Work_Order_Information_tab").sections.get("MSC_sec").setVisible(false);
            Xrm.Page.ui.tabs.get("Co-Technician_tab").sections.get("MSCTech_sec").setVisible(false);


            //Deployment Release 2
            if (!NewCheckUserRole(UserRole, "Technical Support") || NewCheckUserRole(UserRole, AdminRoleName)) {
                Xrm.Page.ui.tabs.get("Work_Order_Information_tab").sections.get("ASC_sec").setVisible(true);
            }
            //////////////

            Xrm.Page.ui.tabs.get("Co-Technician_tab").sections.get("ASCTec_sec").setVisible(true);
            Xrm.Page.ui.tabs.get("Co-Technician_tab").setDisplayState('collapsed');
        } catch (e) {

        }
    }
}

function UpdateWorkOrder(Value) {

    var frmType = Xrm.Page.ui.getFormType();
    var status = Xrm.Page.getAttribute(WorkOrderStatusField).getValue();
    if (frmType == 2 && status == StatusValues["Draft"]) {
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

            }
        );
    }
}

function CalculateTotalSparePartCost() {
    var WorkOrderId = Xrm.Page.data.entity.getId();
    SDK.REST.retrieveMultipleRecords(CaseSparePartEntity, "$filter=ldv_WorkOrder/Id eq guid'" + WorkOrderId + "'", CalculateTotalSparePartCostCallBack, function (error) { }, function (error) { });
}

function CalculateTotalSparePartCostCallBack(SpareParts) {
    var totalSparePartsCost = 0;
    if (SpareParts != null || SpareParts != undefined) {


        for (var i = 0; i < SpareParts.length; i++) {
            if (SpareParts[i].ldv_TotalPrice.Value != null && SpareParts[i].ldv_IsUsed)
                totalSparePartsCost += parseFloat(SpareParts[i].ldv_TotalPrice.Value);
        }
    }
    Xrm.Page.getAttribute(TotalSparePartCostField).setValue(totalSparePartsCost);
    CalcTotalVisitCost();
}

function ClearFieldsForSparePartsAvailable() {
    var status = Xrm.Page.getAttribute("statuscode").getValue();
    var sparePartsAvailablity = Xrm.Page.getAttribute("new_sparepartsavailabilitylsc").getValue();
    if (status == 753240038 && sparePartsAvailablity != null) {
        Xrm.Page.getAttribute("ldv_waitingforsparepartaproval").setValue(null);
        Xrm.Page.getAttribute("new_sparepartsavailabilitylsc").setValue(null);
    }
}

function OnChangeStatus() {
    var status = Xrm.Page.getAttribute(WorkOrderStatusField).getValue();
    if (status == StatusValues["Waiting For Spare Parts"] || status == StatusValues["Maintained"] || status == 753240041 || status == 753240038 || NewCheckUserRole(UserRole, "Planning User")) {
        if (Xrm.Page.ui.controls.get("Waiting_Spare_Parts_grd") != null) {
            try {
                Xrm.Page.ui.controls.get("Waiting_Spare_Parts_grd").setVisible(true);

            } catch (e) {

            }

            //    Xrm.Page.ui.controls.get("Waiting_Spare_Parts_grd").setVisible(true);
        }


    }

    else {
        if (Xrm.Page.ui.controls.get("Waiting_Spare_Parts_grd") != null) {
            try {
                Xrm.Page.ui.controls.get("Waiting_Spare_Parts_grd").setVisible(false);

            } catch (e) {

            }

        }

    }

    // chang conditon adding check with role technical support related EA-610 point 1 by Mahmoud
    if (status == StatusValues["Approved to take product to Lsc"] || status == StatusValues["Rejected to take product to Lsc"] ||
        !NewCheckUserRole(UserRole, "Technical Support")) {
        Xrm.Page.getControl(TechnicalApproveLSC).setDisabled(true);
    }

}

function HideLSCSectionOnChangeOfCreatedFrom() {

    var createdFromValue = Xrm.Page.getAttribute(CreatedFromField).getValue();
    var iSLSC = Xrm.Page.getAttribute(ISLSC).getValue();
    if ((createdFromValue == 0 || createdFromValue == 1) && iSLSC == 0) {
        Xrm.Page.ui.tabs.get("lsc_tab").setVisible(true);
    }
    else if (createdFromValue == 3) {
        Xrm.Page.ui.tabs.get("lsc_tab").setVisible(true);
    }
    else { Xrm.Page.ui.tabs.get("lsc_tab").setVisible(false); }
}

function ShowHideFollowUpTab() {
    var Createdfrom = Xrm.Page.getAttribute(CreatedFromField).getValue();

    if (Xrm.Page.getAttribute("ldv_followupstarttime").getValue() != null && Createdfrom === 0) {
        Xrm.Page.ui.tabs.get("tab_FollowUp_2").setVisible(true);

        Xrm.Page.getAttribute("ldv_customeravailability").setRequiredLevel("required");

        //Xrm.Page.getAttribute("ldv_followupstatus").setRequiredLevel("required");
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

        Xrm.Page.getAttribute("ldv_towhichdegreedidourcs").setRequiredLevel("required");


    }
    else {
        //Xrm.Page.ui.tabs.get("tab_FollowUp_2").setVisible(false);

        Xrm.Page.getAttribute("ldv_customeravailability").setRequiredLevel("none");

        //Xrm.Page.getAttribute("ldv_followupstatus").setRequiredLevel("none");
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

        //Xrm.Page.getAttribute("ldv_towhatdegreetechshaveabilitydiagn").setRequiredLevel("none");

        Xrm.Page.getAttribute("ldv_towhichdegreedidourcs").setRequiredLevel("none");
    }
}

function OnChangeModelNumber() {

    var PrdId = Xrm.Page.getAttribute("ldv_producttype").getValue();
    if (PrdId != null) {
        PrdId = Xrm.Page.getAttribute("ldv_producttype").getValue()[0].id;
        SDK.REST.retrieveMultipleRecords(ProductProblemEntityName, "$select=ldv_Product,ldv_Problem&$filter=new_ProductType/Id eq guid'" + PrdId + "'", FilterProblem, function (error) { alert(error.message); }, function myfunction(error) { });
    }
}

function ReplacementTabOneFieldsManager() {

    var replacementApprovalLSC = Xrm.Page.getAttribute("ldv_technicalsupportlscapproval").getValue();
    var status = Xrm.Page.getAttribute("statuscode").getValue();

    if (status == 753240071 || status == 753240061 || status == 753240009 || status == 753240075 || status == 753240074 || status == 753240017 || status == 753240126)
        Xrm.Page.ui.tabs.get("Replacement_tab").setVisible(true);
    if (status == 753240009) {
        Xrm.Page.getAttribute("ldv_technicalsupportreplacementapproval").setValue(null);
        Xrm.Page.getAttribute("new_rootcauseofreplacement").setValue(null);
        Xrm.Page.getAttribute("ldv_oldproductcondition").setValue(null);
        Xrm.Page.getAttribute("ldv_deductionpercent").setValue(null);
        Xrm.Page.getAttribute("ldv_discount").setValue(null);
    }

    if (replacementApprovalLSC == 753240002) {
        if (NewCheckUserRole(UserRole, "Fleet Spoke User") || NewCheckUserRole(UserRole, "Technical Support")) {
            if (NewCheckUserRole(UserRole, "Technical Support")) {

                //Replacement_tab_section_1_TS --> Technical Support section
                //Replacement_tab_section_2_FS --> Fleet Spoke Section
                //Replacement_tab_section_3 --> General Section

                sectionSetDisabled("Replacement_tab", "Replacement_tab_section_1_TS", false);
                SetSectionVisibilty("Replacement_tab", "Replacement_tab_section_1_TS", true);

                sectionSetDisabled("Replacement_tab", "Replacement_tab_section_2_FS", true);
                SetSectionVisibilty("Replacement_tab", "Replacement_tab_section_2_FS", false);

                sectionSetDisabled("Replacement_tab", "Replacement_tab_section_3", true);
                SetSectionVisibilty("Replacement_tab", "Replacement_tab_section_3", false);
            }

            else if (NewCheckUserRole(UserRole, "Fleet Spoke User")) {

                sectionSetDisabled("Replacement_tab", "Replacement_tab_section_1_TS", true);
                SetSectionVisibilty("Replacement_tab", "Replacement_tab_section_1_TS", false);

                sectionSetDisabled("Replacement_tab", "Replacement_tab_section_2_FS", false);
                SetSectionVisibilty("Replacement_tab", "Replacement_tab_section_2_FS", true);

                sectionSetDisabled("Replacement_tab", "Replacement_tab_section_3", false);
                SetSectionVisibilty("Replacement_tab", "Replacement_tab_section_3", true);
            }
            else {
                sectionSetDisabled("Replacement_tab", "Replacement_tab_section_1_TS", true);
                SetSectionVisibilty("Replacement_tab", "Replacement_tab_section_1_TS", true);

                sectionSetDisabled("Replacement_tab", "Replacement_tab_section_2_FS", true);
                SetSectionVisibilty("Replacement_tab", "Replacement_tab_section_2_FS", true);

                sectionSetDisabled("Replacement_tab", "Replacement_tab_section_3", true);
                SetSectionVisibilty("Replacement_tab", "Replacement_tab_section_3", true);
            }
        }
    }
    else {
        if (NewCheckUserRole(UserRole, "Technical Support") || NewCheckUserRole(UserRole, "Fleet Spoke User")) {
            if (NewCheckUserRole(UserRole, "Technical Support")) {

                //Replacement_tab_section_1_TS --> Technical Support section
                //Replacement_tab_section_2_FS --> Fleet Spoke Section
                //Replacement_tab_section_3 --> General Section

                sectionSetDisabled("Replacement_tab", "Replacement_tab_section_1_TS", false);
                SetSectionVisibilty("Replacement_tab", "Replacement_tab_section_1_TS", true);

                sectionSetDisabled("Replacement_tab", "Replacement_tab_section_2_FS", true);
                SetSectionVisibilty("Replacement_tab", "Replacement_tab_section_2_FS", false);

                sectionSetDisabled("Replacement_tab", "Replacement_tab_section_3", true);
                SetSectionVisibilty("Replacement_tab", "Replacement_tab_section_3", false);
            }

            if (NewCheckUserRole(UserRole, "Fleet Spoke User")) {

                sectionSetDisabled("Replacement_tab", "Replacement_tab_section_1_TS", true);
                SetSectionVisibilty("Replacement_tab", "Replacement_tab_section_1_TS", false);

                sectionSetDisabled("Replacement_tab", "Replacement_tab_section_2_FS", false);
                SetSectionVisibilty("Replacement_tab", "Replacement_tab_section_2_FS", true);

                sectionSetDisabled("Replacement_tab", "Replacement_tab_section_3", false);
                SetSectionVisibilty("Replacement_tab", "Replacement_tab_section_3", true);
            }

        }
        else {
            sectionSetDisabled("Replacement_tab", "Replacement_tab_section_1_TS", true);
            SetSectionVisibilty("Replacement_tab", "Replacement_tab_section_1_TS", false);

            sectionSetDisabled("Replacement_tab", "Replacement_tab_section_2_FS", true);
            SetSectionVisibilty("Replacement_tab", "Replacement_tab_section_2_FS", false);

            sectionSetDisabled("Replacement_tab", "Replacement_tab_section_3", true);
            SetSectionVisibilty("Replacement_tab", "Replacement_tab_section_3", false);
        }
    }
}

function ReplacementSpecialistTabFieldsManager() {

    var replacementApprovalLSC = Xrm.Page.getAttribute("ldv_technicalsupportlscapproval").getValue();
    var status = Xrm.Page.getAttribute("statuscode").getValue();
    if (status == 753240066 || status == 753240068 || status == 753240013 || status == 753240069) {
        Xrm.Page.ui.tabs.get("Replacement_tab").setVisible(true);
        sectionSetDisabled("Replacement_tab", "Replacement_tab_section_1_TS", true);
        SetSectionVisibilty("Replacement_tab", "Replacement_tab_section_1_TS", true);

        sectionSetDisabled("Replacement_tab", "Replacement_tab_section_2_FS", true);
        SetSectionVisibilty("Replacement_tab", "Replacement_tab_section_2_FS", false);

        sectionSetDisabled("Replacement_tab", "Replacement_tab_section_3", true);
        SetSectionVisibilty("Replacement_tab", "Replacement_tab_section_3", false);



        Xrm.Page.ui.tabs.get("tab_12").setVisible(true);
        Xrm.Page.ui.tabs.get("tab_14").setVisible(true);
    }


    var replacementType = Xrm.Page.getAttribute("ldv_replacementtype").getValue();
    if (replacementApprovalLSC == 753240002) {
        if (NewCheckUserRole(UserRole, "Replacement Specialist User")) {

            if (status != 753240068) {
                sectionSetDisabled("tab_12", "tab_12_section_1_Specialist", false);
                SetSectionVisibilty("tab_12", "tab_12_section_1_Specialist", true);

                sectionSetDisabled("tab_12", "tab_12_section_2_Specialist", false);
                SetSectionVisibilty("tab_12", "tab_12_section_2_Specialist", true);

                sectionSetDisabled("tab_12", "tab_12_section_3_Specialist", false);
                SetSectionVisibilty("tab_12", "tab_12_section_3_Specialist", true);

                sectionSetDisabled("tab_12", "tab_12_section_4_Specialist", false);
                SetSectionVisibilty("tab_12", "tab_12_section_4_Specialist", true);

                SetNewProductPrice();

                Xrm.Page.ui.controls.get("ldv_storekeeperdone").setDisabled(true);
                Xrm.Page.ui.controls.get("ldv_newproductprice").setDisabled(true);

                Xrm.Page.ui.controls.get("ldv_valueofdeduction").setDisabled(true);
                Xrm.Page.ui.controls.get("ldv_amounttobepaidbycustomer").setDisabled(true);
                //

                if (status == 753240066) {
                    ReplacementOrderSetCustomerInfoForSpacialist();
                    if (Xrm.Page.getAttribute("ldv_actualmodel").getValue() == null) {
                        Xrm.Page.ui.setFormNotification('You must enter actual model first.', 'ERROR');
                    }
                    else { Xrm.Page.ui.clearFormNotification(); }
                }

                if (replacementType == 753240000) {
                    sectionSetDisabled("tab_12", "tab_12_section_4_Specialist", false);
                    SetSectionVisibilty("tab_12", "tab_12_section_4_Specialist", true);
                    SetSalesOrderFieldsRequired(1);
                }
                else {
                    sectionSetDisabled("tab_12", "tab_12_section_4_Specialist", true);
                    SetSectionVisibilty("tab_12", "tab_12_section_4_Specialist", false);
                    SetSalesOrderFieldsRequired(0);
                }
                SetReturnOrderFieldsRequired();
            }
            else {
                sectionSetDisabled("tab_12", "tab_12_section_1_Specialist", true);
                SetSectionVisibilty("tab_12", "tab_12_section_1_Specialist", true);

                sectionSetDisabled("tab_12", "tab_12_section_2_Specialist", true);
                SetSectionVisibilty("tab_12", "tab_12_section_2_Specialist", true);

                sectionSetDisabled("tab_12", "tab_12_section_3_Specialist", true);
                SetSectionVisibilty("tab_12", "tab_12_section_3_Specialist", true);

                sectionSetDisabled("tab_12", "tab_12_section_4_Specialist", true);
                SetSectionVisibilty("tab_12", "tab_12_section_4_Specialist", true);

                Xrm.Page.ui.controls.get("ldv_storekeeperdone").setDisabled(false);


            }

            // Show TS Section
            sectionSetDisabled("Replacement_tab", "Replacement_tab_section_1_TS", true);
            SetSectionVisibilty("Replacement_tab", "Replacement_tab_section_1_TS", true);
            //Replacement_tab_section_1_TS

        }
        else {
            sectionSetDisabled("tab_12", "tab_12_section_1_Specialist", true);
            SetSectionVisibilty("tab_12", "tab_12_section_1_Specialist", false);

            sectionSetDisabled("tab_12", "tab_12_section_2_Specialist", true);
            SetSectionVisibilty("tab_12", "tab_12_section_2_Specialist", false);

            sectionSetDisabled("tab_12", "tab_12_section_3_Specialist", true);
            SetSectionVisibilty("tab_12", "tab_12_section_3_Specialist", false);

            sectionSetDisabled("tab_12", "tab_12_section_4_Specialist", true);
            SetSectionVisibilty("tab_12", "tab_12_section_4_Specialist", false);
        }
    }
    else {
        if (NewCheckUserRole(UserRole, "Replacement Specialist User")) {

            if (status != 753240068) {
                sectionSetDisabled("tab_12", "tab_12_section_1_Specialist", false);
                SetSectionVisibilty("tab_12", "tab_12_section_1_Specialist", true);

                sectionSetDisabled("tab_12", "tab_12_section_2_Specialist", false);
                SetSectionVisibilty("tab_12", "tab_12_section_2_Specialist", true);

                sectionSetDisabled("tab_12", "tab_12_section_3_Specialist", false);
                SetSectionVisibilty("tab_12", "tab_12_section_3_Specialist", true);

                sectionSetDisabled("tab_12", "tab_12_section_4_Specialist", false);
                SetSectionVisibilty("tab_12", "tab_12_section_4_Specialist", true);

                SetNewProductPrice();

                Xrm.Page.ui.controls.get("ldv_storekeeperdone").setDisabled(true);
                Xrm.Page.ui.controls.get("ldv_newproductprice").setDisabled(true);

                Xrm.Page.ui.controls.get("ldv_valueofdeduction").setDisabled(true);
                Xrm.Page.ui.controls.get("ldv_amounttobepaidbycustomer").setDisabled(true);

                if (status == 753240066) {
                    ReplacementOrderSetCustomerInfoForSpacialist();
                    if (Xrm.Page.getAttribute("ldv_actualmodel").getValue() == null) {
                        Xrm.Page.ui.setFormNotification('You must enter actual model first.', 'ERROR');
                    }
                    else { Xrm.Page.ui.clearFormNotification(); }
                }

                if (replacementType == 753240000) {
                    sectionSetDisabled("tab_12", "tab_12_section_4_Specialist", false);
                    SetSectionVisibilty("tab_12", "tab_12_section_4_Specialist", true);
                    SetSalesOrderFieldsRequired(1);
                }
                else {
                    sectionSetDisabled("tab_12", "tab_12_section_4_Specialist", true);

                    SetSectionVisibilty("tab_12", "tab_12_section_4_Specialist", false);
                    SetSalesOrderFieldsRequired(0);
                }
                SetReturnOrderFieldsRequired();
            }
            else {
                sectionSetDisabled("tab_12", "tab_12_section_1_Specialist", true);
                SetSectionVisibilty("tab_12", "tab_12_section_1_Specialist", true);

                sectionSetDisabled("tab_12", "tab_12_section_2_Specialist", true);
                SetSectionVisibilty("tab_12", "tab_12_section_2_Specialist", true);

                sectionSetDisabled("tab_12", "tab_12_section_3_Specialist", true);
                SetSectionVisibilty("tab_12", "tab_12_section_3_Specialist", true);

                sectionSetDisabled("tab_12", "tab_12_section_4_Specialist", true);
                SetSectionVisibilty("tab_12", "tab_12_section_4_Specialist", true);

                Xrm.Page.ui.controls.get("ldv_storekeeperdone").setDisabled(false);


            }

            // Show TS Section
            sectionSetDisabled("Replacement_tab", "Replacement_tab_section_1_TS", true);
            SetSectionVisibilty("Replacement_tab", "Replacement_tab_section_1_TS", true);
            //Replacement_tab_section_1_TS
        }
        else {
            sectionSetDisabled("tab_12", "tab_12_section_1_Specialist", true);
            SetSectionVisibilty("tab_12", "tab_12_section_1_Specialist", false);

            sectionSetDisabled("tab_12", "tab_12_section_2_Specialist", true);
            SetSectionVisibilty("tab_12", "tab_12_section_2_Specialist", false);

            sectionSetDisabled("tab_12", "tab_12_section_3_Specialist", true);
            SetSectionVisibilty("tab_12", "tab_12_section_3_Specialist", false);

            sectionSetDisabled("tab_12", "tab_12_section_4_Specialist", true);
            SetSectionVisibilty("tab_12", "tab_12_section_4_Specialist", false);
        }
    }
}

function ReplacementTeamLeadTabFieldsManager() {
    debugger;
    //"Replacement Team Leader User"
    var replacementApprovalLSC = Xrm.Page.getAttribute("ldv_technicalsupportlscapproval").getValue();
    var status = Xrm.Page.getAttribute("statuscode").getValue();
    if (status == 753240070 || status == 753240071 || status == 753240076) {
        Xrm.Page.ui.tabs.get("tab_12").setVisible(true);
        Xrm.Page.ui.tabs.get("tab_13").setVisible(true);
        Xrm.Page.ui.tabs.get("tab_14").setVisible(true);

        sectionSetDisabled("tab_12", "tab_12_section_1_Specialist", true);
        SetSectionVisibilty("tab_12", "tab_12_section_1_Specialist", true);

        sectionSetDisabled("tab_12", "tab_12_section_2_Specialist", true);
        SetSectionVisibilty("tab_12", "tab_12_section_2_Specialist", true);

        sectionSetDisabled("tab_12", "tab_12_section_3_Specialist", true);
        SetSectionVisibilty("tab_12", "tab_12_section_3_Specialist", true);

        sectionSetDisabled("tab_12", "tab_12_section_4_Specialist", true);
        SetSectionVisibilty("tab_12", "tab_12_section_4_Specialist", true);

    }

    var replacementType = Xrm.Page.getAttribute("ldv_replacementtype").getValue();
    if (replacementApprovalLSC == 753240002) {
        if (CheckUserRole("Replacement Team Leader User")) {

            Xrm.Page.ui.tabs.get("tab_12").setVisible(true);
            Xrm.Page.ui.tabs.get("tab_13").setVisible(true);
            Xrm.Page.ui.tabs.get("tab_14").setVisible(true);
            if (status != 753240071 || status == 753240076) {
                MapSpecialistFieldToTeamLeadFields();
                sectionSetDisabled("tab_13", "tab_13_section_1_TeamLead", false);
                SetSectionVisibilty("tab_13", "tab_13_section_1_TeamLead", true);

                sectionSetDisabled("tab_13", "tab_13_section_2_TeamLead", false);
                SetSectionVisibilty("tab_13", "tab_13_section_2_TeamLead", true);

                sectionSetDisabled("tab_13", "tab_13_section_3_TeamLead", false);
                SetSectionVisibilty("tab_13", "tab_13_section_3_TeamLead", true);

                if (replacementType == 753240000) {
                    sectionSetDisabled("tab_13", "tab_13_section_4_TeamLead", false);
                    SetSectionVisibilty("tab_13", "tab_13_section_4_TeamLead", true);
                    Xrm.Page.ui.controls.get("new_needtodelivery").setDisabled(true);

                    Xrm.Page.ui.controls.get("new_salesdocument").setDisabled(true);
                    Xrm.Page.ui.controls.get("new_returndocument").setDisabled(true);
                    SetSalesOrderFieldsRequired(1);
                }
                else {
                    sectionSetDisabled("tab_13", "tab_13_section_4_TeamLead", true);
                    SetSectionVisibilty("tab_13", "tab_13_section_4_TeamLead", false);

                    Xrm.Page.ui.tabs.get("tab_14").setVisible(false);
                    SetSalesOrderFieldsRequired(0);
                    if (replacementType == 753240001) {
                        Xrm.Page.getAttribute("ldv_voucherno").setRequiredLevel("required");
                        Xrm.Page.ui.controls.get("new_needtodelivery").setDisabled(false);
                        Xrm.Page.getAttribute("new_needtodelivery").setRequiredLevel("required");
                    }
                    else if (replacementType == 753240002) {
                        Xrm.Page.getAttribute("ldv_refundordernumber").setRequiredLevel("required");

                        Xrm.Page.ui.tabs.get("Replacement_tab").setVisible(true);
                        sectionSetDisabled("Replacement_tab", "Replacement_tab_section_1_TS", true);
                        SetSectionVisibilty("Replacement_tab", "Replacement_tab_section_1_TS", false);

                        sectionSetDisabled("Replacement_tab", "Replacement_tab_section_2_FS", true);
                        SetSectionVisibilty("Replacement_tab", "Replacement_tab_section_2_FS", true);

                        sectionSetDisabled("Replacement_tab", "Replacement_tab_section_3", true);
                        SetSectionVisibilty("Replacement_tab", "Replacement_tab_section_3", false);
                    }
                }

                SetReturnOrderFieldsRequired();
            }
            else {
                sectionSetDisabled("tab_13", "tab_13_section_1_TeamLead", true);
                SetSectionVisibilty("tab_13", "tab_13_section_1_TeamLead", true);

                sectionSetDisabled("tab_13", "tab_13_section_2_TeamLead", true);
                SetSectionVisibilty("tab_13", "tab_13_section_2_TeamLead", true);

                sectionSetDisabled("tab_13", "tab_13_section_3_TeamLead", true);
                SetSectionVisibilty("tab_13", "tab_13_section_3_TeamLead", true);

                sectionSetDisabled("tab_13", "tab_13_section_4_TeamLead", true);
                SetSectionVisibilty("tab_13", "tab_13_section_4_TeamLead", true);

                Xrm.Page.ui.controls.get("new_needtodelivery").setDisabled(false);


            }

        }
        else {
            sectionSetDisabled("tab_13", "tab_12_section_1_Specialist", true);
            SetSectionVisibilty("tab_13", "tab_12_section_1_Specialist", false);

            sectionSetDisabled("tab_13", "tab_12_section_2_Specialist", true);
            SetSectionVisibilty("tab_13", "tab_12_section_2_Specialist", false);

            sectionSetDisabled("tab_13", "tab_12_section_3_Specialist", true);
            SetSectionVisibilty("tab_13", "tab_12_section_3_Specialist", false);

            sectionSetDisabled("tab_13", "tab_12_section_4_Specialist", true);
            SetSectionVisibilty("tab_13", "tab_12_section_4_Specialist", false);
        }
    }
    else {
        if (CheckUserRole("Replacement Team Leader User")) {

            sectionSetDisabled("tab_13", "tab_13_section_2_TeamLead", false);

            Xrm.Page.ui.tabs.get("tab_12").setVisible(true);
            Xrm.Page.ui.tabs.get("tab_13").setVisible(true);
            Xrm.Page.ui.tabs.get("tab_14").setVisible(true);
            if (status != 753240071 || status == 753240076) {
                MapSpecialistFieldToTeamLeadFields();
                sectionSetDisabled("tab_13", "tab_13_section_1_TeamLead", false);
                SetSectionVisibilty("tab_13", "tab_13_section_1_TeamLead", true);

                sectionSetDisabled("tab_13", "tab_13_section_2_TeamLead", false);
                SetSectionVisibilty("tab_13", "tab_13_section_2_TeamLead", true);

                sectionSetDisabled("tab_13", "tab_13_section_3_TeamLead", false);
                SetSectionVisibilty("tab_13", "tab_13_section_3_TeamLead", true);


                sectionSetDisabled("tab_12", "tab_12_section_1_Specialist", true);
                SetSectionVisibilty("tab_12", "tab_12_section_1_Specialist", true);

                sectionSetDisabled("tab_12", "tab_12_section_2_Specialist", true);
                SetSectionVisibilty("tab_12", "tab_12_section_2_Specialist", true);

                sectionSetDisabled("tab_12", "tab_12_section_3_Specialist", true);
                SetSectionVisibilty("tab_12", "tab_12_section_3_Specialist", true);

                sectionSetDisabled("tab_12", "tab_12_section_4_Specialist", true);
                SetSectionVisibilty("tab_12", "tab_12_section_4_Specialist", true);

                if (replacementType == 753240000) {
                    sectionSetDisabled("tab_13", "tab_13_section_4_TeamLead", false);
                    SetSectionVisibilty("tab_13", "tab_13_section_4_TeamLead", true);
                    Xrm.Page.ui.controls.get("new_needtodelivery").setDisabled(true);

                    Xrm.Page.ui.controls.get("new_salesdocument").setDisabled(true);
                    Xrm.Page.ui.controls.get("new_returndocument").setDisabled(true);
                    SetSalesOrderFieldsRequired(1);
                }
                else {
                    sectionSetDisabled("tab_13", "tab_13_section_4_TeamLead", true);
                    SetSectionVisibilty("tab_13", "tab_13_section_4_TeamLead", false);

                    //Xrm.Page.ui.tabs.get("tab_14").setVisible(false);
                    SetSalesOrderFieldsRequired(0);
                    if (replacementType == 753240001) {
                        Xrm.Page.getAttribute("ldv_voucherno").setRequiredLevel("required");
                        Xrm.Page.ui.controls.get("new_needtodelivery").setDisabled(false);
                        Xrm.Page.getAttribute("new_needtodelivery").setRequiredLevel("required");
                    }
                    else if (replacementType == 753240002) {
                        Xrm.Page.getAttribute("ldv_refundordernumber").setRequiredLevel("required");

                        Xrm.Page.ui.tabs.get("Replacement_tab").setVisible(true);
                        sectionSetDisabled("Replacement_tab", "Replacement_tab_section_1_TS", true);
                        SetSectionVisibilty("Replacement_tab", "Replacement_tab_section_1_TS", false);

                        sectionSetDisabled("Replacement_tab", "Replacement_tab_section_2_FS", true);
                        SetSectionVisibilty("Replacement_tab", "Replacement_tab_section_2_FS", false);

                        sectionSetDisabled("Replacement_tab", "Replacement_tab_section_3", true);
                        SetSectionVisibilty("Replacement_tab", "Replacement_tab_section_3", true);

                        //ldv_replacementstatus



                    }
                }



                SetReturnOrderFieldsRequired();
            }
            else {
                sectionSetDisabled("tab_13", "tab_13_section_1_TeamLead", true);
                SetSectionVisibilty("tab_13", "tab_13_section_1_TeamLead", true);

                sectionSetDisabled("tab_13", "tab_13_section_2_TeamLead", true);
                SetSectionVisibilty("tab_13", "tab_13_section_2_TeamLead", true);

                sectionSetDisabled("tab_13", "tab_13_section_3_TeamLead", true);
                SetSectionVisibilty("tab_13", "tab_13_section_3_TeamLead", true);

                sectionSetDisabled("tab_13", "tab_13_section_4_TeamLead", true);
                SetSectionVisibilty("tab_13", "tab_13_section_4_TeamLead", true);

                Xrm.Page.ui.controls.get("new_needtodelivery").setDisabled(false);
                Xrm.Page.ui.controls.get("is_needtodeliverymsc").setDisabled(false);//fawzykadd20190815
            }

        }
        else {
            sectionSetDisabled("tab_13", "tab_13_section_1_TeamLead", true);
            SetSectionVisibilty("tab_13", "tab_13_section_1_TeamLead", false);

            sectionSetDisabled("tab_13", "tab_13_section_2_TeamLead", true);
            SetSectionVisibilty("tab_13", "tab_13_section_2_TeamLead", false);

            sectionSetDisabled("tab_13", "tab_13_section_3_TeamLead", true);
            SetSectionVisibilty("tab_13", "tab_13_section_3_TeamLead", false);

            sectionSetDisabled("tab_13", "tab_13_section_4_TeamLead", true);
            SetSectionVisibilty("tab_13", "tab_13_section_4_TeamLead", false);
        }
    }
}

function ReplacementAdminTabFieldsManager() {
    //"Admin User"
    if (NewCheckUserRole(UserRole, "System Administrator")) {

        Xrm.Page.ui.tabs.get("Replacement_tab").setVisible(true);
        Xrm.Page.ui.tabs.get("tab_12").setVisible(true);
        Xrm.Page.ui.tabs.get("tab_13").setVisible(true);
        Xrm.Page.ui.tabs.get("tab_14").setVisible(true);

        sectionSetDisabled("Replacement_tab", "Replacement_tab_section_1_TS", false);
        SetSectionVisibilty("Replacement_tab", "Replacement_tab_section_1_TS", true);

        sectionSetDisabled("Replacement_tab", "Replacement_tab_section_2_FS", false);
        SetSectionVisibilty("Replacement_tab", "Replacement_tab_section_2_FS", true);

        sectionSetDisabled("Replacement_tab", "Replacement_tab_section_3", false);
        SetSectionVisibilty("Replacement_tab", "Replacement_tab_section_3", true);


        sectionSetDisabled("tab_12", "tab_12_section_1_Specialist", false);
        SetSectionVisibilty("tab_12", "tab_12_section_1_Specialist", true);

        sectionSetDisabled("tab_12", "tab_12_section_2_Specialist", false);
        SetSectionVisibilty("tab_12", "tab_12_section_2_Specialist", true);

        sectionSetDisabled("tab_12", "tab_12_section_3_Specialist", false);
        SetSectionVisibilty("tab_12", "tab_12_section_3_Specialist", true);

        sectionSetDisabled("tab_12", "tab_12_section_4_Specialist", false);
        SetSectionVisibilty("tab_12", "tab_12_section_4_Specialist", true);
        SetNewProductPrice();


        sectionSetDisabled("tab_13", "tab_13_section_1_TeamLead", false);
        SetSectionVisibilty("tab_13", "tab_13_section_1_TeamLead", true);

        sectionSetDisabled("tab_13", "tab_13_section_2_TeamLead", false);
        SetSectionVisibilty("tab_13", "tab_13_section_2_TeamLead", true);

        sectionSetDisabled("tab_13", "tab_13_section_3_TeamLead", false);
        SetSectionVisibilty("tab_13", "tab_13_section_3_TeamLead", true);

        sectionSetDisabled("tab_13", "tab_13_section_4_TeamLead", false);
        SetSectionVisibilty("tab_13", "tab_13_section_4_TeamLead", true);
    }

}

function ReplacementType_OnChange() {
    var replacementType = Xrm.Page.getAttribute("ldv_replacementtype").getValue();
    if (replacementType != null) {
        if (replacementType == 753240000) { // product replacement
            sectionSetDisabled("tab_12", "tab_12_section_4_Specialist", false);
            SetSectionVisibilty("tab_12", "tab_12_section_4_Specialist", true);
            Xrm.Page.ui.tabs.get("tab_14").setVisible(true);
            SetSalesOrderFieldsRequired(1);
        }
        else {
            sectionSetDisabled("tab_12", "tab_12_section_4_Specialist", true);
            SetSectionVisibilty("tab_12", "tab_12_section_4_Specialist", false);
            Xrm.Page.ui.tabs.get("tab_14").setVisible(false);
            SetSalesOrderFieldsRequired(0);
        }
    }
    else {
        SetSectionVisibilty("tab_12", "tab_12_section_4_Specialist", false);
        Xrm.Page.ui.tabs.get("tab_14").setVisible(false);
        SetSalesOrderFieldsRequired(0);
    }
}

function ReplacementOrderSetCustomerInfoForSpacialist() {
    if (Xrm.Page.getAttribute("ldv_customername").getValue() != null) {
        var customerName = Xrm.Page.getAttribute("ldv_customername").getValue();
        Xrm.Page.getAttribute("new_salesordercustomername").setValue(customerName[0].name);
        Xrm.Page.getAttribute("new_returncustomername").setValue(customerName[0].name);

        Xrm.Page.getAttribute("new_salesordercustomerphone").setValue(Xrm.Page.getAttribute("ldv_landline").getValue());
        Xrm.Page.getAttribute("new_returncustomerphone").setValue(Xrm.Page.getAttribute("ldv_landline").getValue());

        Xrm.Page.getAttribute("new_salesordercustomeraddress").setValue(Xrm.Page.getAttribute("ldv_address").getValue());
        Xrm.Page.getAttribute("new_returncustomeradress").setValue(Xrm.Page.getAttribute("ldv_address").getValue());


        Xrm.Page.getAttribute("new_returncustomermobile").setValue(Xrm.Page.getAttribute("ldv_mobilenumber").getValue());
        Xrm.Page.getAttribute("new_salesordercustomermobile").setValue(Xrm.Page.getAttribute("ldv_mobilenumber").getValue());

    }
}

function ReplacementOrderSetCustomerInfoForTeamLead() {
    if (Xrm.Page.getAttribute("ldv_customername").getValue() != null) {
        var customerName = Xrm.Page.getAttribute("ldv_customername").getValue();
        Xrm.Page.getAttribute("new_customernametl").setValue(customerName[0].name);
        Xrm.Page.getAttribute("new_salesordercustomernametl").setValue(customerName[0].name);

        Xrm.Page.getAttribute("new_salesordercustomerphonetl").setValue(Xrm.Page.getAttribute("ldv_landline").getValue());
        Xrm.Page.getAttribute("new_customerphonetl").setValue(Xrm.Page.getAttribute("ldv_landline").getValue());

        Xrm.Page.getAttribute("new_salesordercustomeraddresstl").setValue(Xrm.Page.getAttribute("ldv_address").getValue());
        Xrm.Page.getAttribute("new_customeraddresstl").setValue(Xrm.Page.getAttribute("ldv_address").getValue());

    }
}

function ReplacementRetrieveStockOverview() {


    var actualModel = Xrm.Page.getAttribute("ldv_modelnumber").getValue();
    if (actualModel != null) {

        var query = "/api/data/v9.1/products?$select=productnumber,ldv_productsapcode&$filter=productid eq " + actualModel[0].id.replace(/[{}]/g, "");
        ODataRequest(query, function (result) {
            if (result.value.length > 0) {
                var _sapCode = result.value[0]["ldv_productsapcode"];

                var ConfigQuery = "/api/data/v9.1/ldv_configurations?$filter=ldv_name eq 'ATPPageURL' &$select=ldv_value";
                ODataRequest(ConfigQuery, function (retrievedATPPageData) {

                    if (retrievedATPPageData.value.length > 0) {

                        var URL = retrievedATPPageData.value[0]["ldv_value"];

                        if (URL != null) {
                            var _pageURL = URL + "?ProductSAPCode=" + _sapCode + "&RandomNumber=" + Math.random();
                            window.open(_pageURL, _pageURL, 'height=400,width=1000,left=100,top=200,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no,status=yes');
                        }
                    }
                });

            }

        });

    }

}

function OnChangeReturnOrganization() {
    Xrm.Page.getControl("new_returnsalesorganization").addPreSearch(function () {
        fetchXml = "<filter type='and'><condition attribute='" + "ldv_name" + "' operator='not-like' value='%S%' /></filter>";

        // Apply the filter to the field
        Xrm.Page.getControl("new_returnsalesorganization").addCustomFilter(fetchXml);

    });
}

function OnChangeSalesOrganization() {
    Xrm.Page.getControl("new_salessalesorganization").addPreSearch(function () {
        fetchXml = "<filter type='and'><condition attribute='" + "ldv_name" + "' operator='like' value='%S%' /></filter>";

        // Apply the filter to the field
        Xrm.Page.getControl("new_salessalesorganization").addCustomFilter(fetchXml);

    });
}

function HideScheduling() {
    //Xrm.Page.ui.tabs.get("Work_Order_Information_tab").sections.get("ASC_sec").setVisible(false);
    //Xrm.Page.ui.tabs.get("Work_Order_Information_tab").sections.get("MSC_sec").setVisible(false);
}

function ValidateSalesOrderSubgrid() {
    var check = false;

    var currentWorkOrderID = Xrm.Page.data.entity.getId();
    currentWorkOrderID = currentWorkOrderID.replace(/[{}]/g, "");

    var replacementType = Xrm.Page.getAttribute("ldv_replacementtype").getValue();

    var query = "/api/data/v9.1/ldv_replacementproducts?$select=_ldv_product_value,ldv_replacementproductid&$filter=_ldv_workorder_value eq " + currentWorkOrderID;

    ODataRequest(query, function (result) {



        if (result.value.length == 0 && replacementType == 753240000) {

            var langage = Xrm.Page.context.getUserLcid();
            if (langage == 1030)
                Xrm.Page.ui.setFormNotification("You cannot save before add products in sales products", "ERROR", '2');
            else
                Xrm.Page.ui.setFormNotification("لا يمكن الحفظ قبل اضافة منتج ", "ERROR", '2');


        }
        else {
            Xrm.Page.ui.clearFormNotification('2');
            check = true;

        }

    });
    return check;

}


function FilterReturnOrderTeamLeaderPlant() {

    var salesOrgReturnTeamLeadLookup = Xrm.Page.getAttribute("new_salesorganizationtl").getValue();

    if (salesOrgReturnTeamLeadLookup != null) {
        var salesOrgReturnTLID = salesOrgReturnTeamLeadLookup[0].id;

        if (salesOrgReturnTLID != null) {

            var layoutXml = "<grid name='resultset' object='1024' jump='ldv_plantid' select='1' icon='1' preview='1'>" +
                "  <row name='result' id='ldv_plantid'>" +
                "    <cell name='name' width='300' />" +
                "    <cell name='createdon' width='300' />" +
                "  </row>" +
                "</grid>";



            viewId = "{2680e1ed-6c32-4b5f-a107-e4b4084d564f}";
            entityName = "ldv_plant";
            viewDisplayName = "Available Plants";

            fetchXML = "<fetch distinct='false'>";
            fetchXML += "<entity name='ldv_plant' >";
            fetchXML += "<link-entity name='ldv_storagelocationsforsalesorganizations' from='ldv_plant' to='ldv_plantid' link-type='inner'>";
            fetchXML += "<filter type='and' >";
            fetchXML += "<condition attribute='ldv_salesorganization' operator='eq' value='" + salesOrgReturnTLID + "' />";
            fetchXML += " </filter>";
            fetchXML += " </link-entity>";
            fetchXML += "</entity>";
            fetchXML += " </fetch>";

            Xrm.Page.getControl("new_planttl").addCustomView(viewId, entityName, viewDisplayName, fetchXML, layoutXml, true);

        }
    }

}

function FilterSalesOrderTeamLeaderPlant() {

    var salesOrgSalesOrderTeamLeadLookup = Xrm.Page.getAttribute("new_salesordersalesorganizationtl").getValue();

    if (salesOrgSalesOrderTeamLeadLookup != null) {
        var salesOrgSalesOrderTLID = salesOrgSalesOrderTeamLeadLookup[0].id;

        if (salesOrgSalesOrderTLID != null) {

            var layoutXml = "<grid name='resultset' object='1024' jump='ldv_plantid' select='1' icon='1' preview='1'>" +
                "  <row name='result' id='ldv_plantid'>" +
                "    <cell name='name' width='300' />" +
                "    <cell name='createdon' width='300' />" +
                "  </row>" +
                "</grid>";



            viewId = "{2680e1ed-6c32-4b5f-a107-e4b4084d564f}";
            entityName = "ldv_plant";
            viewDisplayName = "Available Plants";

            fetchXML = "<fetch distinct='false'>";
            fetchXML += "<entity name='ldv_plant' >";
            fetchXML += "<link-entity name='ldv_storagelocationsforsalesorganizations' from='ldv_plant' to='ldv_plantid' link-type='inner'>";
            fetchXML += "<filter type='and' >";
            fetchXML += "<condition attribute='ldv_salesorganization' operator='eq' value='" + salesOrgSalesOrderTLID + "' />";
            fetchXML += " </filter>";
            fetchXML += " </link-entity>";
            fetchXML += "</entity>";
            fetchXML += " </fetch>";

            Xrm.Page.getControl("new_salesorderplanttl").addCustomView(viewId, entityName, viewDisplayName, fetchXML, layoutXml, true);

        }
    }

}

function FilterReturnOrderSpecialistPlant() {

    var salesOrgSpecialistReturnLookup = Xrm.Page.getAttribute("new_returnsalesorganization").getValue();

    if (salesOrgSpecialistReturnLookup != null) {
        var salesOrgReturnID = salesOrgSpecialistReturnLookup[0].id;

        if (salesOrgReturnID != null) {

            var layoutXml = "<grid name='resultset' object='1024' jump='ldv_plantid' select='1' icon='1' preview='1'>" +
                "  <row name='result' id='ldv_plantid'>" +
                "    <cell name='name' width='300' />" +
                "    <cell name='createdon' width='300' />" +
                "  </row>" +
                "</grid>";



            viewId = "{2680e1ed-6c32-4b5f-a107-e4b4084d564f}";
            entityName = "ldv_plant";
            viewDisplayName = "Available Plants";

            fetchXML = "<fetch distinct='false'>";
            fetchXML += "<entity name='ldv_plant' >";
            fetchXML += "<link-entity name='ldv_storagelocationsforsalesorganizations' from='ldv_plant' to='ldv_plantid' link-type='inner'>";
            fetchXML += "<filter type='and' >";
            fetchXML += "<condition attribute='ldv_salesorganization' operator='eq' value='" + salesOrgReturnID + "' />";
            fetchXML += " </filter>";
            fetchXML += " </link-entity>";
            fetchXML += "</entity>";
            fetchXML += " </fetch>";

            Xrm.Page.getControl("new_returnplant").addCustomView(viewId, entityName, viewDisplayName, fetchXML, layoutXml, true);

        }
    }

}

function FilterSalesOrderSpecialistPlant() {

    var salesOrgSalesOrderSpecialistLookup = Xrm.Page.getAttribute("new_salessalesorganization").getValue();

    if (salesOrgSalesOrderSpecialistLookup != null) {
        var salesOrgSalesOrderSpecialistID = salesOrgSalesOrderSpecialistLookup[0].id;

        if (salesOrgSalesOrderSpecialistID != null) {

            var layoutXml = "<grid name='resultset' object='1024' jump='ldv_plantid' select='1' icon='1' preview='1'>" +
                "  <row name='result' id='ldv_plantid'>" +
                "    <cell name='name' width='300' />" +
                "    <cell name='createdon' width='300' />" +
                "  </row>" +
                "</grid>";



            viewId = "{2680e1ed-6c32-4b5f-a107-e4b4084d564f}";
            entityName = "ldv_plant";
            viewDisplayName = "Available Plants";

            fetchXML = "<fetch distinct='false'>";
            fetchXML += "<entity name='ldv_plant' >";
            fetchXML += "<link-entity name='ldv_storagelocationsforsalesorganizations' from='ldv_plant' to='ldv_plantid' link-type='inner'>";
            fetchXML += "<filter type='and' >";
            fetchXML += "<condition attribute='ldv_salesorganization' operator='eq' value='" + salesOrgSalesOrderSpecialistID + "' />";
            fetchXML += " </filter>";
            fetchXML += " </link-entity>";
            fetchXML += "</entity>";
            fetchXML += " </fetch>";

            Xrm.Page.getControl("new_salesorderplant").addCustomView(viewId, entityName, viewDisplayName, fetchXML, layoutXml, true);

        }
    }

}

function FilterReturnOrderTeamLeaderStorLoc() {

    var salesOrgReturnTeamLeadLookup = Xrm.Page.getAttribute("new_salesorganizationtl").getValue();
    var plantReturnTeamLeadLookup = Xrm.Page.getAttribute("new_planttl").getValue();

    if (salesOrgReturnTeamLeadLookup != null && plantReturnTeamLeadLookup != null) {
        var salesOrgReturnTLID = salesOrgReturnTeamLeadLookup[0].id;
        var PlantReturnTLID = plantReturnTeamLeadLookup[0].id;

        if (salesOrgReturnTLID != null && PlantReturnTLID != null) {

            var layoutXml = "<grid name='resultset' object='1024' jump='ldv_storagelocationid' select='1' icon='1' preview='1'>" +
                "  <row name='result' id='ldv_storagelocationid'>" +
                "    <cell name='name' width='300' />" +
                "    <cell name='createdon' width='300' />" +
                "  </row>" +
                "</grid>";



            viewId = "{2680e1ed-6c32-4b5f-a107-e4b4084d564f}";
            entityName = "ldv_storagelocation";
            viewDisplayName = "Available Storage Locations";

            fetchXML = "<fetch distinct='false'>";
            fetchXML += "<entity name='ldv_storagelocation' >";
            fetchXML += "<link-entity name='ldv_storagelocationsforsalesorganizations' from='ldv_storagelocation' to='ldv_storagelocationid' link-type='inner'>";
            fetchXML += "<filter type='and' >";
            fetchXML += "<condition attribute='ldv_salesorganization' operator='eq' value='" + salesOrgReturnTLID + "' />";
            fetchXML += "<condition attribute='ldv_plant' operator='eq' value='" + PlantReturnTLID + "' />";
            fetchXML += " </filter>";
            fetchXML += " </link-entity>";
            fetchXML += "</entity>";
            fetchXML += " </fetch>";

            Xrm.Page.getControl("new_storagelocationtl").addCustomView(viewId, entityName, viewDisplayName, fetchXML, layoutXml, true);

        }
    }

}

function FilterReturnOrderSpecialistStorLoc() {

    var salesOrgReturnSpecialistLookup = Xrm.Page.getAttribute("new_returnsalesorganization").getValue();
    var plantReturnSpecialistLookup = Xrm.Page.getAttribute("new_returnplant").getValue();

    if (salesOrgReturnSpecialistLookup != null && plantReturnSpecialistLookup != null) {
        var salesOrgReturnSpecialistID = salesOrgReturnSpecialistLookup[0].id;
        var PlantReturnSpecialistID = plantReturnSpecialistLookup[0].id;

        if (salesOrgReturnSpecialistID != null && PlantReturnSpecialistID != null) {

            var layoutXml = "<grid name='resultset' object='1024' jump='ldv_storagelocationid' select='1' icon='1' preview='1'>" +
                "  <row name='result' id='ldv_storagelocationid'>" +
                "    <cell name='name' width='300' />" +
                "    <cell name='createdon' width='300' />" +
                "  </row>" +
                "</grid>";



            viewId = "{2680e1ed-6c32-4b5f-a107-e4b4084d564f}";
            entityName = "ldv_storagelocation";
            viewDisplayName = "Available Storage Locations";

            fetchXML = "<fetch distinct='false'>";
            fetchXML += "<entity name='ldv_storagelocation' >";
            fetchXML += "<link-entity name='ldv_storagelocationsforsalesorganizations' from='ldv_storagelocation' to='ldv_storagelocationid' link-type='inner'>";
            fetchXML += "<filter type='and' >";
            fetchXML += "<condition attribute='ldv_salesorganization' operator='eq' value='" + salesOrgReturnSpecialistID + "' />";
            fetchXML += "<condition attribute='ldv_plant' operator='eq' value='" + PlantReturnSpecialistID + "' />";
            fetchXML += " </filter>";
            fetchXML += " </link-entity>";
            fetchXML += "</entity>";
            fetchXML += " </fetch>";

            Xrm.Page.getControl("new_returnstoragelocation").addCustomView(viewId, entityName, viewDisplayName, fetchXML, layoutXml, true);

        }
    }

}

function CancelRole() {

    if (UserRole == null) {
        UserRole = GetAllUserRole();
    }
    if (NewCheckUserRole(UserRole, "Can User Cancel")) {
        return true;
    }

    return false;
}

function ReactivelRole() {

    if (UserRole == null) {
        UserRole = GetAllUserRole();
    }
    if (NewCheckUserRole(UserRole, AdminRoleName)) {
        return true;
    }

    return false;
}

function ElArabyKBAction() {

    ODataRequest("/api/data/v8.1/ldv_configurations?$select=ldv_value&$filter=ldv_name eq 'ElArabyKBPageURL'", function (JsonObject) {
        if (JsonObject.value.length > 0) {
            var URL = JsonObject.value[0]["ldv_value"];
            if (URL != null) {
                window.open(URL, URL, 'height=400,width=1000,left=100,top=200,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no,status=yes');
            }
        }

    });

}

function ElArabyKBDisplay() {
    if (NewCheckUserRole(UserRole, "KB authorized") || NewCheckUserRole(UserRole, "System Administrator")) {
        return true;
    }
    else
        return false;
}

function CheckUserRoles() {

    if (NewCheckUserRole(UserRole, AdminRoleName)) {
        return true;
    }
    return false;
}


function GetLookupObjModified(obj) {
    var lookupData = new Array();
    var lookupItem = new Object();
    //Set the GUID
    lookupItem.id = obj.id;
    //Set the name
    lookupItem.name = obj.name;
    lookupItem.entityType = obj.entityType;
    lookupData[0] = lookupItem;
    return lookupData;
}


function MapSpecialistFieldToTeamLeadFields() {
    var status = Xrm.Page.getAttribute("statuscode").getValue();
    if ((NewCheckUserRole(UserRole, "Replacement Team Leader User") || NewCheckUserRole(UserRole, "System Administrator")) && status == 753240070) {
        //Sales Order Fields
        if (Xrm.Page.getAttribute("new_salesordersalesoffice").getValue() != null && Xrm.Page.getAttribute("new_salesordersalesofficetl").getValue() == null) {
            var _salesOrderSalesOffice = Xrm.Page.getAttribute("new_salesordersalesoffice").getValue();
            Xrm.Page.getAttribute("new_salesordersalesofficetl").setValue(GetLookupObjModified(_salesOrderSalesOffice[0]));
        }

        if (Xrm.Page.getAttribute("new_salesorderdivision").getValue() != null && Xrm.Page.getAttribute("new_salesorderdivisiontl").getValue() == null) {
            var _salesOrderDivision = Xrm.Page.getAttribute("new_salesorderdivision").getValue();
            Xrm.Page.getAttribute("new_salesorderdivisiontl").setValue(GetLookupObjModified(_salesOrderDivision[0]));
        }

        //if (Xrm.Page.getAttribute("new_salesorderstoragelocation").getValue() != null && Xrm.Page.getAttribute("new_salesorderstoragelocationtl").getValue() == null) {
        //	var _salesOrderStocLoc = Xrm.Page.getAttribute("new_salesorderstoragelocation").getValue();
        //	Xrm.Page.getAttribute("new_salesorderstoragelocationtl").setValue(GetLookupObjModified(_salesOrderStocLoc[0]));
        //}

        if (Xrm.Page.getAttribute("new_salessalesorganization").getValue() != null && Xrm.Page.getAttribute("new_salesordersalesorganizationtl").getValue() == null) {
            var _salesOrderSalesOrg = Xrm.Page.getAttribute("new_salessalesorganization").getValue();
            Xrm.Page.getAttribute("new_salesordersalesorganizationtl").setValue(GetLookupObjModified(_salesOrderSalesOrg[0]));
        }

        if (Xrm.Page.getAttribute("new_salesorderplant").getValue() != null && Xrm.Page.getAttribute("new_salesorderplanttl").getValue() == null) {
            var _salesOrderPlant = Xrm.Page.getAttribute("new_salesorderplant").getValue();
            Xrm.Page.getAttribute("new_salesorderplanttl").setValue(GetLookupObjModified(_salesOrderPlant[0]));
        }


        if (Xrm.Page.getAttribute("new_salesordertransportationzone").getValue() != null && Xrm.Page.getAttribute("new_salesordertransportationzonetl").getValue() == null) {
            var _salesOrderTransZone = Xrm.Page.getAttribute("new_salesordertransportationzone").getValue();
            Xrm.Page.getAttribute("new_salesordertransportationzonetl").setValue(GetLookupObjModified(_salesOrderTransZone[0]));
        }

        if (Xrm.Page.getAttribute("new_salesorderdeliverytext").getValue() != null && Xrm.Page.getAttribute("new_salesorderdeliverytexttl").getValue() == null) {
            var _salesOrderDeliveryTxt = Xrm.Page.getAttribute("new_salesorderdeliverytext").getValue();
            Xrm.Page.getAttribute("new_salesorderdeliverytexttl").setValue(_salesOrderDeliveryTxt);
        }

        if (Xrm.Page.getAttribute("new_salesordercustomername").getValue() != null && Xrm.Page.getAttribute("new_salesordercustomernametl").getValue() == null) {
            var _salesOrderCustName = Xrm.Page.getAttribute("new_salesordercustomername").getValue();
            Xrm.Page.getAttribute("new_salesordercustomernametl").setValue(_salesOrderCustName);
        }

        if (Xrm.Page.getAttribute("new_salesordercustomeraddress").getValue() != null && Xrm.Page.getAttribute("new_salesordercustomeraddresstl").getValue() == null) {
            var _salesOrderCustAddress = Xrm.Page.getAttribute("new_salesordercustomeraddress").getValue();
            Xrm.Page.getAttribute("new_salesordercustomeraddresstl").setValue(_salesOrderCustAddress);
        }

        if (Xrm.Page.getAttribute("new_salesordercustomerphone").getValue() != null && Xrm.Page.getAttribute("new_salesordercustomerphonetl").getValue() == null) {
            var _salesOrderCustPhone = Xrm.Page.getAttribute("new_salesordercustomerphone").getValue();
            Xrm.Page.getAttribute("new_salesordercustomerphonetl").setValue(_salesOrderCustPhone);
        }

        if (Xrm.Page.getAttribute("new_salesordercustomermobile").getValue() != null && Xrm.Page.getAttribute("new_salesordercustomermobiletl").getValue() == null) {
            var _salesOrderCustPhone = Xrm.Page.getAttribute("new_salesordercustomermobile").getValue();
            Xrm.Page.getAttribute("new_salesordercustomermobiletl").setValue(_salesOrderCustPhone);
        }

        //if (Xrm.Page.getAttribute("new_salesorderdiscount").getValue() != null && Xrm.Page.getAttribute("new_salesorderdiscounttl").getValue() == null) {
        //	var _salesOrderDiscount = Xrm.Page.getAttribute("new_salesorderdiscount").getValue();
        //	Xrm.Page.getAttribute("new_salesorderdiscounttl").setValue(_salesOrderDiscount);
        //}

        //if (Xrm.Page.getAttribute("new_salesorderquantity").getValue() != null && Xrm.Page.getAttribute("new_salesorderquantitytl").getValue() == null) {
        //	var _salesOrderQuantity = Xrm.Page.getAttribute("new_salesorderquantity").getValue();
        //	Xrm.Page.getAttribute("new_salesorderquantitytl").setValue(_salesOrderQuantity);
        //}
        //End Sales Order Fields



        //Return Order Fields
        if (Xrm.Page.getAttribute("new_returnsalesoffice").getValue() != null && Xrm.Page.getAttribute("new_salesofficetl").getValue() == null) {
            var _returnOrderSalesOffice = Xrm.Page.getAttribute("new_returnsalesoffice").getValue();
            Xrm.Page.getAttribute("new_salesofficetl").setValue(GetLookupObjModified(_returnOrderSalesOffice[0]));
        }

        if (Xrm.Page.getAttribute("new_returndivision").getValue() != null && Xrm.Page.getAttribute("new_divisiontl").getValue() == null) {
            var _returnOrderDivision = Xrm.Page.getAttribute("new_returndivision").getValue();
            Xrm.Page.getAttribute("new_divisiontl").setValue(GetLookupObjModified(_returnOrderDivision[0]));
        }

        if (Xrm.Page.getAttribute("new_returnstoragelocation").getValue() != null && Xrm.Page.getAttribute("new_storagelocationtl").getValue() == null) {
            var _returnOrderStocLoc = Xrm.Page.getAttribute("new_returnstoragelocation").getValue();
            Xrm.Page.getAttribute("new_storagelocationtl").setValue(GetLookupObjModified(_returnOrderStocLoc[0]));
        }

        if (Xrm.Page.getAttribute("new_returnsalesorganization").getValue() != null && Xrm.Page.getAttribute("new_salesorganizationtl").getValue() == null) {
            var _returnOrderSalesOrg = Xrm.Page.getAttribute("new_returnsalesorganization").getValue();
            Xrm.Page.getAttribute("new_salesorganizationtl").setValue(GetLookupObjModified(_returnOrderSalesOrg[0]));
        }

        if (Xrm.Page.getAttribute("new_returnplant").getValue() != null && Xrm.Page.getAttribute("new_planttl").getValue() == null) {
            var _returnOrderPlant = Xrm.Page.getAttribute("new_returnplant").getValue();
            Xrm.Page.getAttribute("new_planttl").setValue(GetLookupObjModified(_returnOrderPlant[0]));
        }


        if (Xrm.Page.getAttribute("new_returntransportaionzone").getValue() != null && Xrm.Page.getAttribute("new_transportationzonetl").getValue() == null) {
            var _returnOrderTransZone = Xrm.Page.getAttribute("new_returntransportaionzone").getValue();
            Xrm.Page.getAttribute("new_transportationzonetl").setValue(GetLookupObjModified(_returnOrderTransZone[0]));
        }

        if (Xrm.Page.getAttribute("new_returndeliverytext").getValue() != null && Xrm.Page.getAttribute("new_deliverytexttl").getValue() == null) {
            var _returnOrderDeliveryTxt = Xrm.Page.getAttribute("new_returndeliverytext").getValue();
            Xrm.Page.getAttribute("new_deliverytexttl").setValue(_returnOrderDeliveryTxt);
        }

        if (Xrm.Page.getAttribute("new_returncustomername").getValue() != null && Xrm.Page.getAttribute("new_customernametl").getValue() == null) {
            var _returnOrderCustName = Xrm.Page.getAttribute("new_returncustomername").getValue();
            Xrm.Page.getAttribute("new_customernametl").setValue(_returnOrderCustName);
        }

        if (Xrm.Page.getAttribute("new_returncustomeradress").getValue() != null && Xrm.Page.getAttribute("new_customeraddresstl").getValue() == null) {
            var _returnOrderCustAddress = Xrm.Page.getAttribute("new_returncustomeradress").getValue();
            Xrm.Page.getAttribute("new_customeraddresstl").setValue(_returnOrderCustAddress);
        }

        if (Xrm.Page.getAttribute("new_returncustomerphone").getValue() != null && Xrm.Page.getAttribute("new_customerphonetl").getValue() == null) {
            var _returnOrderCustPhone = Xrm.Page.getAttribute("new_returncustomerphone").getValue();
            Xrm.Page.getAttribute("new_customerphonetl").setValue(_returnOrderCustPhone);
        }

        if (Xrm.Page.getAttribute("new_returncustomermobile").getValue() != null && Xrm.Page.getAttribute("new_customermobiletl").getValue() == null) {
            var _salesOrderCustPhone = Xrm.Page.getAttribute("new_returncustomermobile").getValue();
            Xrm.Page.getAttribute("new_customermobiletl").setValue(_salesOrderCustPhone);
        }

        if (Xrm.Page.getAttribute("new_returndiscount").getValue() != null && Xrm.Page.getAttribute("new_discounttl").getValue() == null) {
            var _returnOrderDiscount = Xrm.Page.getAttribute("new_returndiscount").getValue();
            Xrm.Page.getAttribute("new_discounttl").setValue(_returnOrderDiscount);
        }

        //  if (Xrm.Page.getAttribute("new_returnquantity").getValue() != null && Xrm.Page.getAttribute("new_quantity").getValue() ==null)
        // {
        //  var _returnOrderQuantity = Xrm.Page.getAttribute("new_returnquantity").getValue();
        //   Xrm.Page.getAttribute("new_quantity").setValue(_returnOrderQuantity);
        //  }
        //End Return Order Fields
    }
}

function ValidateSpecialistPhone1() {
    ValidateMobileNumber("new_returncustomerphone")
}

function ValidateMobileNumber(fieldName) {
    if (Xrm.Page.getAttribute(fieldName).getValue() != null) {
        if (formatNumbers(Xrm.Page.getAttribute(fieldName).getValue())) {

            Xrm.Page.getControl(fieldName).clearNotification(uniqueId);
        }
        else {
            Xrm.Page.getControl(fieldName).setNotification(message1, uniqueId);
            var newMail = Xrm.Page.getAttribute(fieldName).setValue("");

        }
    }
}

function ValidateSpecialistPhone2() {
    ValidateMobileNumber("new_returncustomermobile")
}

function ValidateSpecialistPhone3() {
    ValidateMobileNumber("new_salesordercustomerphone")
}

function ValidateSpecialistPhone4() {
    ValidateMobileNumber("new_salesordercustomermobile")
}

function ValidateTLPhone1() {
    ValidateMobileNumber("new_customerphonetl")
}

function ValidateTLPhone2() {
    ValidateMobileNumber("new_customermobiletl")
}

function ValidateTLPhone3() {
    ValidateMobileNumber("new_salesordercustomerphonetl")
}

function ValidateTLPhone4() {
    ValidateMobileNumber("new_salesordercustomermobiletl")
}

function SetReturnOrderFieldsRequired() {
    if (NewCheckUserRole(UserRole, "Replacement Specialist User")) {
        Xrm.Page.getAttribute("new_returncustomername").setRequiredLevel("required");
        Xrm.Page.getAttribute("new_returnsalesoffice").setRequiredLevel("required");
        Xrm.Page.getAttribute("new_returndeliverytext").setRequiredLevel("required");
        Xrm.Page.getAttribute("new_returncustomeradress").setRequiredLevel("required");
        Xrm.Page.getAttribute("new_returncustomerphone").setRequiredLevel("required");
        Xrm.Page.getAttribute("new_returndiscount").setRequiredLevel("required");
        Xrm.Page.getAttribute("new_returnstoragelocation").setRequiredLevel("required");
        Xrm.Page.getAttribute("new_returndivision").setRequiredLevel("required");
        Xrm.Page.getAttribute("new_returntransportaionzone").setRequiredLevel("required");
        Xrm.Page.getAttribute("new_returnsalesorganization").setRequiredLevel("required");
        Xrm.Page.getAttribute("new_returnplant").setRequiredLevel("required");

    }
    else if (NewCheckUserRole(UserRole, "Replacement Team Leader User")) {
        Xrm.Page.getAttribute("new_salesofficetl").setRequiredLevel("required");
        Xrm.Page.getAttribute("new_storagelocationtl").setRequiredLevel("required");
        Xrm.Page.getAttribute("new_deliverytexttl").setRequiredLevel("required");
        Xrm.Page.getAttribute("new_customeraddresstl").setRequiredLevel("required");
        Xrm.Page.getAttribute("new_customerphonetl").setRequiredLevel("required");
        Xrm.Page.getAttribute("new_discounttl").setRequiredLevel("required");
        Xrm.Page.getAttribute("new_transportationzonetl").setRequiredLevel("required");
        Xrm.Page.getAttribute("new_salesorganizationtl").setRequiredLevel("required");
        Xrm.Page.getAttribute("new_divisiontl").setRequiredLevel("required");
        Xrm.Page.getAttribute("new_planttl").setRequiredLevel("required");
        //Xrm.Page.getAttribute("new_quantity").setRequiredLevel("required");
        Xrm.Page.getAttribute("new_customernametl").setRequiredLevel("required");
    }
}

function SetSalesOrderFieldsRequired(ReplacementType) {
    if (ReplacementType == 1) {
        if (NewCheckUserRole(UserRole, "Replacement Specialist User")) {
            Xrm.Page.getAttribute("new_salesordertransportationzone").setRequiredLevel("required");
            Xrm.Page.getAttribute("new_salesordersalesoffice").setRequiredLevel("required");
            Xrm.Page.getAttribute("new_salesorderdeliverytext").setRequiredLevel("required");
            Xrm.Page.getAttribute("new_salesordercustomername").setRequiredLevel("required");
            Xrm.Page.getAttribute("new_salesordercustomeraddress").setRequiredLevel("required");
            Xrm.Page.getAttribute("new_salesordercustomerphone").setRequiredLevel("required");
            //Xrm.Page.getAttribute("new_salesorderdiscount").setRequiredLevel("required");
            //Xrm.Page.getAttribute("new_salesorderquantity").setRequiredLevel("required");
            Xrm.Page.getAttribute("new_salesorderdivision").setRequiredLevel("required");
            //Xrm.Page.getAttribute("new_salesorderstoragelocation").setRequiredLevel("required");
            Xrm.Page.getAttribute("new_salessalesorganization").setRequiredLevel("required");
            Xrm.Page.getAttribute("new_salesorderplant").setRequiredLevel("required");
        }
        else if (NewCheckUserRole(UserRole, "Replacement Team Leader User")) {
            //Xrm.Page.getAttribute("new_salesorderstoragelocationtl").setRequiredLevel("required");
            Xrm.Page.getAttribute("new_salesorderdivisiontl").setRequiredLevel("required");
            Xrm.Page.getAttribute("new_salesorderdeliverytexttl").setRequiredLevel("required");
            Xrm.Page.getAttribute("new_salesordercustomeraddresstl").setRequiredLevel("required");
            Xrm.Page.getAttribute("new_salesordercustomerphonetl").setRequiredLevel("required");
            //Xrm.Page.getAttribute("new_salesorderdiscounttl").setRequiredLevel("required");
            //Xrm.Page.getAttribute("new_salesorderquantitytl").setRequiredLevel("required");
            Xrm.Page.getAttribute("new_salesordersalesorganizationtl").setRequiredLevel("required");
            Xrm.Page.getAttribute("new_salesordertransportationzonetl").setRequiredLevel("required");
            Xrm.Page.getAttribute("new_salesordersalesofficetl").setRequiredLevel("required");
            Xrm.Page.getAttribute("new_salesorderplanttl").setRequiredLevel("required");
            Xrm.Page.getAttribute("new_salesordercustomernametl").setRequiredLevel("required");
        }
    }
    else {
        if (NewCheckUserRole(UserRole, "Replacement Specialist User")) {
            Xrm.Page.getAttribute("new_salesordertransportationzone").setRequiredLevel("none");
            Xrm.Page.getAttribute("new_salesordersalesoffice").setRequiredLevel("none");
            Xrm.Page.getAttribute("new_salesorderdeliverytext").setRequiredLevel("none");
            Xrm.Page.getAttribute("new_salesordercustomername").setRequiredLevel("none");
            Xrm.Page.getAttribute("new_salesordercustomeraddress").setRequiredLevel("none");
            Xrm.Page.getAttribute("new_salesordercustomerphone").setRequiredLevel("none");
            //Xrm.Page.getAttribute("new_salesorderdiscount").setRequiredLevel("none");
            //Xrm.Page.getAttribute("new_salesorderquantity").setRequiredLevel("none");
            Xrm.Page.getAttribute("new_salesorderdivision").setRequiredLevel("none");
            //Xrm.Page.getAttribute("new_salesorderstoragelocation").setRequiredLevel("none");
            Xrm.Page.getAttribute("new_salessalesorganization").setRequiredLevel("none");
            Xrm.Page.getAttribute("new_salesorderplant").setRequiredLevel("none");
        }
        else if (NewCheckUserRole(UserRole, "Replacement Team Leader User")) {
            //Xrm.Page.getAttribute("new_salesorderstoragelocationtl").setRequiredLevel("none");
            Xrm.Page.getAttribute("new_salesorderdivisiontl").setRequiredLevel("none");
            Xrm.Page.getAttribute("new_salesorderdeliverytexttl").setRequiredLevel("none");
            Xrm.Page.getAttribute("new_salesordercustomeraddresstl").setRequiredLevel("none");
            Xrm.Page.getAttribute("new_salesordercustomerphonetl").setRequiredLevel("none");
            //Xrm.Page.getAttribute("new_salesorderdiscounttl").setRequiredLevel("none");
            //Xrm.Page.getAttribute("new_salesorderquantitytl").setRequiredLevel("none");
            Xrm.Page.getAttribute("new_salesordersalesorganizationtl").setRequiredLevel("none");
            Xrm.Page.getAttribute("new_salesordertransportationzonetl").setRequiredLevel("none");
            Xrm.Page.getAttribute("new_salesordersalesofficetl").setRequiredLevel("none");
            Xrm.Page.getAttribute("new_salesorderplanttl").setRequiredLevel("none");
            Xrm.Page.getAttribute("new_salesordercustomernametl").setRequiredLevel("none");
        }
    }
}

function DisableATPButton() {
    if (NewCheckUserRole(UserRole, "Technical Support") || NewCheckUserRole(UserRole, "Replacement Specialist User") || NewCheckUserRole(UserRole, "Replacement Team Leader User") || NewCheckUserRole(UserRole, "System Administrator")) {
        return true;
    }
    else
        return false;
}

function SetSectionVisibilty(tabName, sectionName, flag) {

    var _section = Xrm.Page.ui.tabs.get(tabName).sections.get(sectionName);
    if (_section != null) {
        _section.setVisible(flag);

    }
}

function DisableAddToQueueButton() {
    var status = Xrm.Page.getAttribute("statuscode").getValue();
    if (status == 753240024 || status == 753240006) // Read Only
        return false;
    else
        return true;
}

function DisableSubGridNewButton() {



    var status = Xrm.Page.getAttribute("statuscode").getValue();
    if (status == 753240024 || status == 753240006) // Read Only
        return false;
    else
        return true;

}

//Deployment Release 3
function EnableDisableLSCAddButton() {

    var status = Xrm.Page.getAttribute("statuscode").getValue();

    //July 2019

    if (status == 753240138 && NewCheckUserRole(UserRole, "LSC Supervisor User")) {
        return true;
    }
    else if (status == 753240054 && NewCheckUserRole(UserRole, "LSC Supervisor User")) {
        if (_executionForm.getAttribute("ldv_lscsupervisordecicionforcustomernotavaila") != null && _executionForm.getAttribute("ldv_lscsupervisordecicionforcustomernotavaila").getValue() == "753240000") {
            return true;
        }
        else {
            return false;
        }
    }
    //ended here NK



    //if (status == "753240051" || status == "753240062" || status == "753240113" || status == "753240022" || status =="753240067")
    //    return true;
    //else
    //    return false;

    if (status == "753240051" || status == "753240062" || status == "753240113" || status == "753240022" || status == "753240123" || status == "753240124" || status == "753240125" || (status == "753240129" && NewCheckUserRole(UserRole, "LSC Supervisor User")) || (status == "753240067" && (NewCheckUserRole(UserRole, BackOfficeRoleName) || NewCheckUserRole(UserRole, "LSC Supervisor User")))) {
        if ((status == "753240123" || status == "753240124" || status == "753240125") && Xrm.Page.getAttribute("ldv_lscsupervisordecision") != null && Xrm.Page.getAttribute("ldv_lscsupervisordecision").getValue() != "753240000") {
            return false;
        }

        return true;
    }
    else
        return false;

    //July 2019
    if (status == 753240138 && NewCheckUserRole(UserRole, "LSC Supervisor User")) {
        return true;
    }

}



function ValidateDateOfBirthFollowUp() {

    var replacementVisitDate = Xrm.Page.getAttribute("ldv_whatisyourdateofbirth").getValue();

    var today = new Date();
    var dateNow = new Date(today);
    dateNow.setHours(0, 0, 0, 0);
    var lcid = Xrm.Page.context.getUserLcid();
    if (replacementVisitDate >= today) {
        if (lcid == 1033)
        { Xrm.Page.ui.setFormNotification("You should choose date less than today", "ERROR", '1'); }
        else { Xrm.Page.ui.setFormNotification("??? ?????? ????? ??? ?? ?????", "ERROR", '1'); }
        Xrm.Page.getAttribute("ldv_whatisyourdateofbirth").setValue(null);
    }
    else {
        Xrm.Page.ui.clearFormNotification('1');
    }

}

function CheckDateOfReplacementVisit() {

    var replacementVisitDate = Xrm.Page.getAttribute("ldv_replacementvisitdate").getValue();

    var today = new Date();
    var dateNow = new Date(today);
    today.setHours(0, 0, 0, 0);
    var lcid = Xrm.Page.context.getUserLcid();
    if (replacementVisitDate < today) {
        if (lcid == 1033)
        { Xrm.Page.ui.setFormNotification("You cannot choose date less than today", "ERROR", '1'); }
        else { Xrm.Page.ui.setFormNotification("?? ??? ?????? ????? ??? ?? ?????", "ERROR", '1'); }
        Xrm.Page.getAttribute("ldv_replacementvisitdate").setValue(null);
    }
    else {
        Xrm.Page.ui.clearFormNotification('1');
    }

} //

function DiscountAmount_OnChange() {
    ValidateNumbersOnly("ldv_discount");
}


function DiscountAmount_OnChange_Replacement_Specialist() {
    ValidateNumbersOnly("new_returndiscount");
}
function DiscountAmount_OnChange_Replacement_Team_Lead() {
    ValidateNumbersOnly("new_discounttl");
}




function OldProductPrice_OnChange() {
    ValidateNumbersOnly("ldv_oldproductprice");
}

function ValidateNumbersOnly(sourceField) {
    Xrm.Page.getControl(sourceField).clearNotification();
    var mobi = Xrm.Page.getAttribute(sourceField).getValue();
    if (mobi == null) return;
    //  var mobiRegex = /^\d+$/;
    var mobiRegex = /^-?\d*\.?\d{0,6}$/;
    if (!mobi.match(mobiRegex)) {
        Xrm.Page.getControl(sourceField).setNotification("Please Enter A Valid Number");

    }
}
function sectionSetDisabled(tabNumber, sectionNumber, disablestatus) {
    var section = Xrm.Page.ui.tabs.get(tabNumber).sections.get(sectionNumber);
    if (section != null) {
        var controls = section.controls.get();
        var controlsLenght = controls.length;

        for (var i = 0; i < controlsLenght; i++) {
            controls[i].setDisabled(disablestatus)
        }
    }

}


function CalculateValueOfDeduction() {
    var oldPrice = Xrm.Page.getAttribute("ldv_oldproductprice").getValue();
    var oldProductPrice = parseInt(oldPrice);

    var newPrice = Xrm.Page.getAttribute("ldv_newproductprice").getValue();
    var newProductPrice = parseInt(newPrice);

    var deductionPercent = Xrm.Page.getAttribute("ldv_deductionpercent").getText();
    var valueOfPercent = parseInt(deductionPercent);

    var discount = Xrm.Page.getAttribute("ldv_discount").getValue();
    var discountAmount = parseInt(discount);

    var oldProductCondition = Xrm.Page.getAttribute("ldv_oldproductcondition").getValue();

    if (oldProductCondition == 753240000) {
        if (valueOfPercent != null) {
            var valueOfDeduction = oldProductPrice * (valueOfPercent / 100);
            Xrm.Page.getAttribute("ldv_valueofdeduction").setValue(valueOfDeduction);
            var amountForCustomer = newProductPrice - valueOfDeduction;
            Xrm.Page.getAttribute("ldv_amounttobepaidbycustomer").setValue(amountForCustomer);
        }

    }
    else if (oldProductCondition == 753240001) {
        if (discountAmount != null) {
            var amountForCustomer = newProductPrice - discountAmount;
            Xrm.Page.getAttribute("ldv_amounttobepaidbycustomer").setValue(amountForCustomer);
        }
    }
    if (oldProductPrice == null && oldProductCondition != 753240001) {
        Xrm.Page.getAttribute("ldv_valueofdeduction").setValue(0);
    }
}
function OnChangeCustomerAvailability() {



    var pickListField = Xrm.Page.getAttribute("ldv_followupstatus").controls.getAll();

    for (var i = 0; i < pickListField.length; i++) {

        if (ZeroCounter == 0) //to populate the options only once during page load
        {
            followUpStausOptions = pickListField[i].getOptions();
            ZeroCounter++;
        }

        pickListField[i].clearOptions();

        if (Xrm.Page.getAttribute("ldv_customeravailability").getValue() == "1") {
            pickListField[i].addOption(followUpStausOptions[0]);
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



    // CR Amr 6/12/2017
    //if (Xrm.Page.getAttribute("ldv_customeravailability").getValue() == "753240008" /*the device is working*/ ||
    //    Xrm.Page.getAttribute("ldv_customeravailability").getValue() == "753240009" /*Release and install the device*/ ||
    //    Xrm.Page.getAttribute("ldv_customeravailability").getValue() == "753240010" /*Release and install and transport*/ ||
    //    Xrm.Page.getAttribute("ldv_customeravailability").getValue() == "753240011" /*Maintained*/ ||
    //    Xrm.Page.getAttribute("ldv_customeravailability").getValue() == "753240012" /*Installed*/ ||
    //    Xrm.Page.getAttribute("ldv_customeravailability").getValue() == "753240016" /*Customer Doesn’t want to pay*/ ||
    //    Xrm.Page.getAttribute("ldv_customeravailability").getValue() == "753240013" /*Replacement Done*/ ||
    //    Xrm.Page.getAttribute("ldv_customeravailability").getValue() == "753240014" /*Product Delivered to customer- LSC*/ ||
    //    Xrm.Page.getAttribute("ldv_customeravailability").getValue() == "753240015" /*Transportation Done*/) {

    //    Xrm.Page.getAttribute("ldv_customeravailability").setRequiredLevel("required");
    //    Xrm.Page.getAttribute("ldv_whatisyourevalutaionaboutquickresponse").setRequiredLevel("required");
    //    Xrm.Page.getAttribute("ldv_istheresparepartsnotes").setRequiredLevel("required");
    //    Xrm.Page.getAttribute("ldv_whatisyourevalaboutservicelevelstability").setRequiredLevel("required");
    //    Xrm.Page.getAttribute("ldv_isthereachargeofmaintenencenotes").setRequiredLevel("required");
    //    Xrm.Page.getAttribute("ldv_didyoureceivedareceiptnotes").setRequiredLevel("required");
    //    Xrm.Page.getAttribute("ldv_firsttimecontactelarabynotes").setRequiredLevel("required");
    //    Xrm.Page.getAttribute("ldv_technicianreportrightsnotes").setRequiredLevel("required");
    //    //Xrm.Page.getAttribute("ldv_notsatisfactionreasonsnotes").setRequiredLevel("required");
    //    Xrm.Page.getAttribute("ldv_towhichlevelyougetyourinfosimplyclear").setRequiredLevel("required");
    //    Xrm.Page.getAttribute("ldv_towhichdegreedidourcs").setRequiredLevel("required");
    //    Xrm.Page.getAttribute("ldv_whatyourevalaboutdevicestatusaftermain").setRequiredLevel("required");
    //    Xrm.Page.getAttribute("ldv_notessuggestion").setRequiredLevel("required");
    //    Xrm.Page.getAttribute("ldv_howdoyouevaluatethemaintenanceserviceove").setRequiredLevel("required");
    //    //Xrm.Page.getAttribute("ldv_reasonsfornotsatisfaction").setRequiredLevel("required");
    //    Xrm.Page.getAttribute("ldv_reasonforthevisitdonebutnotrepaired").setRequiredLevel("required");
    //    Xrm.Page.getAttribute("ldv_reasonforcustomercanceled").setRequiredLevel("required");
    //    Xrm.Page.getAttribute("ldv_reasonforwrongorder").setRequiredLevel("required");
    //    Xrm.Page.getAttribute("ldv_reasonforrefusedoranotherperson").setRequiredLevel("required");
    //    Xrm.Page.getAttribute("ldv_reasonfornoanswer").setRequiredLevel("required");
    //    Xrm.Page.getAttribute("ldv_statusreasonbeforefollowup").setRequiredLevel("required");

    //}
    //else {
    //    Xrm.Page.getAttribute("ldv_customeravailability").setRequiredLevel("none");
    //    Xrm.Page.getAttribute("ldv_whatisyourevalutaionaboutquickresponse").setRequiredLevel("none");
    //    Xrm.Page.getAttribute("ldv_istheresparepartsnotes").setRequiredLevel("none");
    //    Xrm.Page.getAttribute("ldv_whatisyourevalaboutservicelevelstability").setRequiredLevel("none");
    //    Xrm.Page.getAttribute("ldv_isthereachargeofmaintenencenotes").setRequiredLevel("none");
    //    Xrm.Page.getAttribute("ldv_didyoureceivedareceiptnotes").setRequiredLevel("none");
    //    Xrm.Page.getAttribute("ldv_firsttimecontactelarabynotes").setRequiredLevel("none");
    //    Xrm.Page.getAttribute("ldv_technicianreportrightsnotes").setRequiredLevel("none");
    //    //Xrm.Page.getAttribute("ldv_notsatisfactionreasonsnotes").setRequiredLevel("none");
    //    Xrm.Page.getAttribute("ldv_towhichlevelyougetyourinfosimplyclear").setRequiredLevel("none");
    //    Xrm.Page.getAttribute("ldv_towhichdegreedidourcs").setRequiredLevel("none");
    //    Xrm.Page.getAttribute("ldv_whatyourevalaboutdevicestatusaftermain").setRequiredLevel("none");
    //    Xrm.Page.getAttribute("ldv_notessuggestion").setRequiredLevel("none");
    //    Xrm.Page.getAttribute("ldv_howdoyouevaluatethemaintenanceserviceove").setRequiredLevel("none");
    //    //Xrm.Page.getAttribute("ldv_reasonsfornotsatisfaction").setRequiredLevel("none");
    //    Xrm.Page.getAttribute("ldv_reasonforthevisitdonebutnotrepaired").setRequiredLevel("none");
    //    Xrm.Page.getAttribute("ldv_reasonforcustomercanceled").setRequiredLevel("none");
    //    Xrm.Page.getAttribute("ldv_reasonforwrongorder").setRequiredLevel("none");
    //    Xrm.Page.getAttribute("ldv_reasonforrefusedoranotherperson").setRequiredLevel("none");
    //    Xrm.Page.getAttribute("ldv_reasonfornoanswer").setRequiredLevel("none");
    //    Xrm.Page.getAttribute("ldv_statusreasonbeforefollowup").setRequiredLevel("none");

    //}
}



function CheckDateOfAvailabilty() {

    var availabiltyTypeValue = Xrm.Page.getAttribute("ldv_availabilitytype").getValue();
    var availabiltyDate = Xrm.Page.getAttribute("ldv_dateofavailability").getValue();
    if (availabiltyTypeValue != 753240000) {
        var today = new Date();
        var dateNow = new Date(today);
        dateNow.setHours(0, 0, 0, 0);
        var lcid = Xrm.Page.context.getUserLcid();
        if (availabiltyDate <= today) {
            if (lcid == 1033)
            { Xrm.Page.ui.setFormNotification("You cannot choose date less than today", "ERROR", '1'); }
            else { Xrm.Page.ui.setFormNotification("?? ??? ?????? ????? ??? ?? ?????", "ERROR", '1'); }
            Xrm.Page.getAttribute("ldv_dateofavailability").setValue(null);
        }
        else {
            Xrm.Page.ui.clearFormNotification('1');
        }
    }
    else { Xrm.Page.ui.clearFormNotification('1'); }

}

function SetDateOfAvailabilty() {
    var AvailabilityType = Xrm.Page.getAttribute("ldv_availabilitytype").getValue();
    if (AvailabilityType == 753240000) {
        var dateToday = new Date();
        var dateNow = new Date(dateToday);
        dateNow.setHours(dateToday.getHours() + 6);
        Xrm.Page.getAttribute("ldv_dateofavailability").setValue(dateNow);
        Xrm.Page.ui.controls.get("ldv_dateofavailability").setDisabled(true);
    }
    else {
        //Xrm.Page.getAttribute("ldv_availabilitytype").setValue(null);
        Xrm.Page.ui.controls.get("ldv_dateofavailability").setDisabled(false);
    }
}

function CheckLSCPendingServiceActivity() {


    try {

        var frmType = Xrm.Page.ui.getFormType();

        if (frmType != 1 /*Read Only*/) {
            var CurrentCaseID = Xrm.Page.data.entity.getId();
            CurrentCaseID = CurrentCaseID.replace(/[{}]/g, "");
            var Servicetype = Xrm.Page.getAttribute(MSCorASCField).getValue();
            var RelatedServiceActivities = null;

            var query = "/api/data/v9.1/ldv_lscserviceactivities?$filter=statecode eq 0 and _ldv_workorder_value eq " + CurrentCaseID;

            ODataRequest(query, function (data) {
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

function GetProductType() {

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

function SetService(id) {

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
            <attribute name='ldv_service'/>\
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
                if (services[0].attributes["ldv_service"] != null || services[0].attributes["ldv_service"] != undefined) {
                    var service = services[0].attributes["ldv_service"];


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


function SetNewProductPrice() {

    var actualModelID = GetLookupObject("ldv_actualmodel");
    if (actualModelID != null) {
        actualModelID = actualModelID.replace(/[{}]/g, "");

        var query = "/api/data/v9.1/products?$select=price&$filter=productid eq " + actualModelID;
        ODataRequest(query, function (retrievedPriceList) {
            if (retrievedPriceList.value.length > 0) {
                for (var x in retrievedPriceList.value) {
                    Xrm.Page.getAttribute("ldv_newproductprice").setValue(retrievedPriceList.value[x]["price"]);

                }
            }
        });

    }
}

function GetRelatedServices() {
    debugger;
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
    ODataRequest(query, function (data) {

        RelatedServiceActivities = data.value;
    });

    return RelatedServiceActivities;
}

function GetGovCode() {
    var govCode = null;
    if (Xrm.Page.getAttribute("ldv_government").getValue() != null) {
        var GovId = Xrm.Page.getAttribute("ldv_government").getValue()[0].id;
        GovId = GovId.toLowerCase();
        GovId = GovId.replace(/[{}]/g, "");

        var query = "/api/data/v9.1/ldv_governments?$filter=ldv_governmentid eq " + GovId;
        ODataRequest(query, function (result) {
            if (result.value.length > 0) {
                govCode = result.value[0]["ldv_realgovernmentcode"];

            }

        });

        return govCode;
    }
}

function validateVisitDate() {

    var visitDate = Xrm.Page.getAttribute("ldv_realvisitdate").getValue();
    var DateNow = new Date();

    if (visitDate > DateNow) {
        var lcid = Xrm.Page.context.getUserLcid();

        if (lcid == 1033)
        { Xrm.Page.ui.setFormNotification("You cannot choose date greater than today", "ERROR", '1'); }
        else { Xrm.Page.ui.setFormNotification("?? ??? ?????? ????? ???? ?? ?????", "ERROR", '1'); }
        Xrm.Page.getAttribute("ldv_realvisitdate").setValue(null);
    }
    else {
        Xrm.Page.ui.clearFormNotification('1');
    }
}

function CheckPendingActivites() {
    try {


        if (CheckStatus()) {
            var frmType = Xrm.Page.ui.getFormType();
            if (frmType == 1)
                return true;

            var FlagNoPendingAct = true;
            var RelSerAct = GetRelatedServices();
            var Servicetype = Xrm.Page.getAttribute(MSCorASCField).getValue();
            if (RelSerAct != null || RelSerAct != undefined) {

                if (!Servicetype) {
                    for (var i = 0; i < RelSerAct.length; i++) {

                        if (RelSerAct[i]["statecode"] == 3)
                            FlagNoPendingAct = false;
                    }
                }
                else {
                    for (var i = 0; i < RelSerAct.length; i++) {
                        if (RelSerAct[i]["statecode"] == 0)
                            FlagNoPendingAct = false;
                    }
                }
            }


            return FlagNoPendingAct;
        }
        else return false;
    }
    catch (e) {
        return false;//fawzy20191215 change from true to false to solve issue
    }

}

//July 2019
function CheckStatus() {
    debugger;
    var status = Xrm.Page.getAttribute(WorkOrderStatusField).getValue();
    var islschamada = Xrm.Page.getAttribute(ISLSC).getValue();//hamada20191208

    //Deployment Release 4
    UserRole = GetAllUserRole();
    var installationType = Xrm.Page.getAttribute("ldv_workordertype").getValue();
    var TransportationDone = Xrm.Page.getAttribute("ldv_transportationdone");
    var _queueName = Xrm.Page.getAttribute("new_queue").getValue();

    var owner = Xrm.Page.getAttribute("ownerid").getValue()[0].id;
    //fawzy 20190902 remove this status 753240062 and add this status 753240134
    //hamada20191208 old status == 753240067 new = (status == 753240067 &&  islschamada != 0)
    if (status == 753240002 || status == 753240005 || status == 753240003 || status == 753240004 || status == 753240011 || status == 753240073
        || status == 753240016 || status == 753240064 || (status == 753240067 && islschamada != 0) || status == 753240022 || status == 753240113 || (status == 753240120 && (Xrm.Page.context.getUserId().toLowerCase() == owner.toLowerCase())) || (NewCheckUserRole(UserRole, BackOfficeRoleName) && (status == 753240128 || status == 753240131 || status == 753240130 || status == 753240113 || status == 753240048)) || (TransportationDone != null && (TransportationDone.getValue() == 0 && NewCheckUserRole(UserRole, BackOfficeRoleName) && (status == 753240136 || status == 753240137))))
        return true;
    else if (installationType == 0 && (NewCheckUserRole(UserRole, BackOfficeRoleName)) && (status == 753240134 || status == 753240137 || status == 753240135 || status == 753240132 || status == 753240133)) {
        return true;

    }
    else if ((status == 753240138 || status == 753240124 || status == 753240050) && (NewCheckUserRole(UserRole, BackOfficeRoleName))) {
        return true;
    }

    else
        return false;


}


function FutureDateCollection() {

    var ScheduledDate = Xrm.Page.getAttribute(CollectionVisitField).getValue();
    if (ScheduledDate != null) {
        var currentDateTime = new Date();
        var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
        var diffDays = (ScheduledDate.getTime() - currentDateTime.getTime()) / (oneDay);

        if (diffDays <= 0) {
            Xrm.Page.getAttribute(CollectionVisitField).setValue(null);
            Xrm.Page.getControl(CollectionVisitField).setNotification("?? ???? ????? ????? ???? -Please Choose new Date", "Collection");
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

        if (diffDays <= 0) {
            Xrm.Page.getAttribute("ldv_deliveryvisitdate").setValue(null);
            Xrm.Page.getControl("ldv_deliveryvisitdate").setNotification("?? ???? ????? ????? ???? -Please Choose new Date", "Collection");
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
            Xrm.Page.getControl(AvailabilityDateField).setNotification("?? ???? ????? ????? ???? -Please Choose new Date", "Collection");
        }
        else {
            Xrm.Page.getControl(AvailabilityDateField).clearNotification("Collection");
        }
    }
}

function Filterbrand() {
    Xrm.Page.getAttribute(BrandField).setValue(null);
    Xrm.Page.getAttribute(ModelNumberField).setValue(null);
    Xrm.Page.getControl(BrandField).setVisible(false);
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
                    "</row>" +
                    "</grid>";

                Xrm.Page.getControl(BrandField).addCustomView(viewId, entityName, viewDisplayName, fetchXml, layoutXml, viewIsDefault);

            }

        }
    }
}

function FilterEquipment() {
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

function FilterProducttype() {

    var ProductGroupId = Xrm.Page.getAttribute(ProductGroupField).getValue();
    if (ProductGroupId != null) {
        ProductGroupId = Xrm.Page.getAttribute(ProductGroupField).getValue()[0].id
        ProductGroupId = ProductGroupId.replace(/[{}]/g, "");
        if (ProductGroupId != null) {
            var fetchXml = "<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='true'>";
            fetchXml += '<entity name="ldv_producttype" >'
            fetchXml += ' <filter type="and" >'
            fetchXml += '<condition attribute="statecode" operator="eq" value="' + 0 + '" />'
            fetchXml += '  </filter>'
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
    }
}

function GetSpecificCentral(id) {


    if (id == null) {

        var WOT = Xrm.Page.getAttribute(WorkOrdertype).getValue();
        var status = Xrm.Page.getAttribute(WorkOrderStatusField).getValue();
        var Query = "";
        var CT = null;
        if (Xrm.Page.getAttribute(EquipmentField).getValue() != null) {
            var equip = GetProductGroup(Xrm.Page.getAttribute(EquipmentField).getValue()[0].id);
        }
        var PG = Xrm.Page.getAttribute(ProductGroupField).getValue();
        if (PG == null && equip != null) {

            var ProID = equip["_ldv_product_value"];
            if (ProID != null) {
                var query2 = "/api/data/v9.1/products(" + ProID + ")?$select=_ldv_productgroup_value";
                ODataRequest(query2, function (result) {

                    PG = result["_ldv_productgroup_value"];
                });
            }
            CT = Xrm.Page.getAttribute(CentralTelephoneEntityName).getValue();
            Query = " $filter=ldv_ProductGroup/Id eq guid'" + PG + "' and ldv_CentralTelephone/Id eq guid'" + CT[0].id + "' and ldv_workordertype/Value eq " + WOT + ""
        }
        else {
            CT = Xrm.Page.getAttribute(CentralTelephoneEntityName).getValue();
            if (CT != null && PG != null)
                Query = " $filter=ldv_ProductGroup/Id eq guid'" + PG[0].id + "' and ldv_CentralTelephone/Id eq guid'" + CT[0].id + "' and ldv_workordertype/Value eq " + WOT + ""
            else
                return;
        }
        SDK.REST.retrieveMultipleRecords(CentralProductGroup, Query, AutoFillSiteMaintenance, function (error) { alert("An network error has occurred, Please contact your system administrator!") }, function (error) { });

    }

}

function CreateCond(Attribute, name, id, type) {
    var Cond = "<value uiname='" + name + "' uitype='" + type + "'>{" + id + "}</value>";
    return Cond;

}

function FilterProblem(PrdProb) {

    //  ProdProb = PrdProb;
    ProdProb = TestOnChangeProblem();

    var productTypeName = "_new_producttype_value@OData.Community.Display.V1.FormattedValue";
    var problemName = "_ldv_problem_value@OData.Community.Display.V1.FormattedValue";
    var productName = "_ldv_product_value@OData.Community.Display.V1.FormattedValue";
    var problemLogicalName = "_ldv_problem_value@Microsoft.Dynamics.CRM.lookuplogicalname";
    var productTypeLogicalName = "_new_producttype_value@Microsoft.Dynamics.CRM.lookuplogicalname";
    var problemID = "_ldv_problem_value";


    Xrm.Page.getAttribute(ProblemField).setValue(null);

    if (ProblemFlag) {

        Xrm.Page.getControl(ProblemField).addPreSearch(function (e) {

            var stateObject = Xrm.Page.getAttribute(ProductTypeField).getValue();
            ProblemFlag = false;
            var Fetchxml = "<filter type='and'><condition attribute='" + Problemid + "' operator='in'>";

            if (stateObject != null) {
                var stateTextValue = stateObject[0].name;

                for (var i = 0; i < ProdProb.length; i++) {
                    if (ProdProb[i][productTypeName] === stateTextValue) {
                        Fetchxml = Fetchxml + CreateCond("ldv_problemid", ProdProb[i][problemName], ProdProb[i][problemID], ProblemField);
                    }
                }
                Fetchxml = Fetchxml + " </condition></filter>";
                Fetchxml += ' <filter type="and" >'
                Fetchxml += '<condition attribute="statecode" operator="eq" value="' + 0 + '" />'
                Fetchxml += '  </filter>';
                if (Fetchxml.indexOf("<value") > -1) {
                    // Apply the filter to the field
                    Xrm.Page.getControl(ProblemField).addCustomFilter(Fetchxml);
                }
                else {
                    Xrm.Utility.alertDialog("No Problems for this product", null);
                    Xrm.Page.getAttribute(ProblemField).setRequiredLevel("none");


                    //Create dummy fetch xml to clear the lookup
                    var fetchXml = "<filter type='or'><condition attribute=" + "'" + "ldv_problemname" + "' operator='eq' uiname='" + anytext + "' uitype='" + ProblemField + "' value='" + anytext + "' /></filter>";
                    fetchXml += ' <filter type="and" >'
                    fetchXml += '<condition attribute="statecode" operator="eq" value="' + 0 + '" />'
                    fetchXml += '  </filter>';
                    // Apply the filter to the field
                    Xrm.Page.getControl(ProblemField).addCustomFilter(fetchXml);
                    Xrm.Page.getAttribute(ProblemField).setValue(null);
                    Xrm.Page.getControl(ModelNumberField).setFocus();
                }



            }
            else {


                // Apply the filter to the field
                var fetchXml = "<filter type='or'><condition attribute=" + "'" + "ldv_problemname" + "' operator='eq' uiname='" + anytext + "' uitype='" + ProblemField + "' value='" + anytext + "' /></filter>";
                fetchXml += ' <filter type="and" >'
                fetchXml += '<condition attribute="statecode" operator="eq" value="' + 0 + '" />'
                fetchXml += '  </filter>';
                // Apply the filter to the field
                Xrm.Page.getControl(ProblemField).addCustomFilter(fetchXml);
                Xrm.Page.getAttribute(ProblemField).setValue(null);

            }
        });
    }

    ////////////////////////////////////////////////
    Xrm.Page.getAttribute(Problem2Field).setValue(null);
    if (ProblemFlag) {

        Xrm.Page.getControl(Problem2Field).addPreSearch(function (e) {
            var stateObject = Xrm.Page.getAttribute(ProductTypeField).getValue();
            ProblemFlag = false;
            var Fetchxml = "<filter type='and'><condition attribute='" + Problemid + "' operator='in'>";


            if (stateObject != null) {
                var stateTextValue = stateObject[0].name;

                for (var i = 0; i < ProdProb.length; i++) {
                    if (ProdProb[i][productTypeName] === stateTextValue) {
                        Fetchxml = Fetchxml + CreateCond("ldv_problemid", ProdProb[i][problemName], ProdProb[i][problemID], Problem2Field);
                    }
                }
                Fetchxml = Fetchxml + " </condition></filter>";
                Fetchxml += ' <filter type="and" >'
                Fetchxml += '<condition attribute="statecode" operator="eq" value="' + 0 + '" />'
                Fetchxml += '  </filter>';
                if (Fetchxml.indexOf("<value") > -1) {
                    // Apply the filter to the field
                    Xrm.Page.getControl(Problem2Field).addCustomFilter(Fetchxml);
                }
                else {
                    Xrm.Utility.alertDialog("No Problems for this product", null);
                    Xrm.Page.getAttribute(Problem2Field).setRequiredLevel("none");


                    //Create dummy fetch xml to clear the lookup
                    var fetchXml = "<filter type='or'><condition attribute=" + "'" + "ldv_problemname" + "' operator='eq' uiname='" + anytext + "' uitype='" + Problem2Field + "' value='" + anytext + "' /></filter>";
                    fetchXml += ' <filter type="and" >'
                    fetchXml += '<condition attribute="statecode" operator="eq" value="' + 0 + '" />'
                    fetchXml += '  </filter>';
                    // Apply the filter to the field
                    Xrm.Page.getControl(Problem2Field).addCustomFilter(fetchXml);
                    Xrm.Page.getAttribute(Problem2Field).setValue(null);
                    Xrm.Page.getControl(ModelNumberField).setFocus();
                }



            }
            else {


                // Apply the filter to the field
                var fetchXml = "<filter type='or'><condition attribute=" + "'" + "ldv_problemname" + "' operator='eq' uiname='" + anytext + "' uitype='" + Problem2Field + "' value='" + anytext + "' /></filter>";
                fetchXml += ' <filter type="and" >'
                fetchXml += '<condition attribute="statecode" operator="eq" value="' + 0 + '" />'
                fetchXml += '  </filter>';
                // Apply the filter to the field
                Xrm.Page.getControl(Problem2Field).addCustomFilter(fetchXml);
                Xrm.Page.getAttribute(Problem2Field).setValue(null);

            }
        });
    }
    ///////////////////////////////////////////////
    Xrm.Page.getAttribute(Problem3Field).setValue(null);
    if (ProblemFlag) {

        Xrm.Page.getControl(Problem3Field).addPreSearch(function (e) {
            var stateObject = Xrm.Page.getAttribute(ProductTypeField).getValue();
            ProblemFlag = false;
            var Fetchxml = "<filter type='and'><condition attribute='" + Problemid + "' operator='in'>";

            if (stateObject != null) {
                var stateTextValue = stateObject[0].name;

                for (var i = 0; i < ProdProb.length; i++) {
                    if (ProdProb[i][productTypeName] === stateTextValue) {
                        Fetchxml = Fetchxml + CreateCond("ldv_problemid", ProdProb[i][problemName], ProdProb[i][problemID], Problem3Field);
                    }
                }
                Fetchxml = Fetchxml + " </condition></filter>";
                Fetchxml += ' <filter type="and" >'
                Fetchxml += '<condition attribute="statecode" operator="eq" value="' + 0 + '" />'
                Fetchxml += '  </filter>';
                if (Fetchxml.indexOf("<value") > -1) {
                    // Apply the filter to the field
                    Xrm.Page.getControl(Problem3Field).addCustomFilter(Fetchxml);
                }
                else {
                    Xrm.Utility.alertDialog("No Problems for this product", null);
                    Xrm.Page.getAttribute(Problem3Field).setRequiredLevel("none");

                    //Create dummy fetch xml to clear the lookup
                    var fetchXml = "<filter type='or'><condition attribute=" + "'" + "ldv_problemname" + "' operator='eq' uiname='" + anytext + "' uitype='" + Problem3Field + "' value='" + anytext + "' /></filter>";
                    Fetchxml += ' <filter type="and" >'
                    Fetchxml += '<condition attribute="statecode" operator="eq" value="' + 0 + '" />'
                    Fetchxml += '  </filter>';  // Apply the filter to the field
                    Xrm.Page.getControl(Problem3Field).addCustomFilter(fetchXml);
                    Xrm.Page.getAttribute(Problem3Field).setValue(null);
                    Xrm.Page.getControl(ModelNumberField).setFocus();
                }



            }
            else {


                // Apply the filter to the field
                var fetchXml = "<filter type='or'><condition attribute=" + "'" + "ldv_problemname" + "' operator='eq' uiname='" + anytext + "' uitype='" + Problem3Field + "' value='" + anytext + "' /></filter>";
                fetchXml += ' <filter type="and" >'
                fetchXml += '<condition attribute="statecode" operator="eq" value="' + 0 + '" />'
                fetchXml += '  </filter>';
                // Apply the filter to the field
                Xrm.Page.getControl(Problem3Field).addCustomFilter(fetchXml);
                Xrm.Page.getAttribute(Problem3Field).setValue(null);

            }
        });
    }
    //////////////////////////////////////////////
}

function GetTheCurrentCustomerName() {
    var obj = Xrm.Page.getAttribute(CustomerNameField).getValue();
    return obj;

}

function GetCustomerRecord(id) {
    SDK.REST.retrieveMultipleRecords(CustomerEntityName, "$filter=AccountId eq guid'" + id + "'", AutoFillRec, AutoFillRec, AutoFillRec);
}

function AutoFillRec(customer) {

    if (customer != null) {
        if (customer[0].ldv_LandLine != null) {
            Xrm.Page.getAttribute(LandLineField).setValue(customer[0].ldv_LandLine);

        }
        else {
            if (customer[0].ldv_CentralTelephone != null) {
                Xrm.Page.getAttribute(LandLineField).setValue("00000000");
            }

        }
        if (customer[0].ldv_districtsales != null)
            Xrm.Page.getAttribute(DistrictFieldSales).setValue(customer[0].ldv_districtsales);
        if (customer[0].ldv_BuildingNumber != null)
            Xrm.Page.getAttribute(BuildingNumberField).setValue(customer[0].ldv_BuildingNumber);

        if (customer[0].ldv_CentralTelephone != null && customer[0].ldv_CentralTelephone.Id != null) {
            Xrm.Page.getAttribute(centraltelephoneField).setValue(GetLookupObj(customer[0].ldv_CentralTelephone));
        }
        if (customer[0].ldv_MobileNumber != null)
            Xrm.Page.getAttribute(MobileNumberField).setValue(customer[0].ldv_MobileNumber);

        if (customer[0].ldv_Government != null && customer[0].ldv_Government.Id != null) {
            IsGovInCreate = false;
            Xrm.Page.getAttribute(GovernmentField).setValue(GetLookupObj(customer[0].ldv_Government));

            OnChangeGovernment();
        }
        if (customer[0].Address1_Composite != null)
            Xrm.Page.getAttribute(AddressField).setValue(customer[0].Address1_Composite);

        if (customer[0].ldv_ReferenceContact != null)
            Xrm.Page.getAttribute(ReferenceContactField).setValue(customer[0].ldv_ReferenceContact);

        if (customer[0].ldv_Segmentation != null)
            Xrm.Page.getAttribute(SegmentationField).setValue(customer[0].ldv_Segmentation.Value);

        if (customer[0].ldv_Gender1 != null)
            Xrm.Page.getAttribute("ldv_gender1").setValue(customer[0].ldv_Gender1.Value);

        if (customer[0].ldv_MethodofCommunication != null)
            Xrm.Page.getAttribute(MethodofCommunicationField).setValue(customer[0].ldv_MethodofCommunication.Value);

        if (customer[0].ldv_CustomerType != null)
            Xrm.Page.getAttribute(CustomerTypeField).setValue(customer[0].ldv_CustomerType.Value);

        if (customer[0].ldv_CentralTelephone != null && customer[0].ldv_CentralTelephone.Id != null) {
            Xrm.Page.getControl(centraltelephoneField).setVisible(true);
            Xrm.Page.getControl(centraltelephoneField).setDisabled(true);
            Xrm.Page.getAttribute("ldv_area").setRequiredLevel("none");
            Xrm.Page.getControl("ldv_area").setVisible(false);
            GetSpecificCentral(customer[0].ldv_CentralTelephone.Id);
        }
        else {
            Xrm.Page.getAttribute("ldv_area").setRequiredLevel("required");
            Xrm.Page.getControl("ldv_area").setVisible(true);
            if (customer[0].ldv_LandLine != null && customer[0].ldv_LandLine == "00000000" && customer[0].ldv_area != null && customer[0].ldv_area.Id != null) {
                Xrm.Page.getAttribute("ldv_area").setValue(GetLookupObj(customer[0].ldv_area));
            }
            else {
                Xrm.Page.getControl(centraltelephoneField).setVisible(false);
                Xrm.Page.getControl(centraltelephoneField).setDisabled(false);
                OnChangeLandLine();
            }
        }
        CustomerTypeCond(customer);
    }
}

function Result(result) {

    var landlineNum = Xrm.Page.getAttribute(LandLineField).getValue();
    var ProductGroup = Xrm.Page.getAttribute(ProductGroupField).getValue();
    var code = GetGovCode();
    landlineNum = code + landlineNum
    var centralTelephoneResult = SearchForTelephonCode(landlineNum, result);
    FillTheCentTelField(centralTelephoneResult);
    if (ProductGroup != null)
        GetSpecificCentral();
}

function SearchForTelephonCode(landline, telephons) {
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

function FillTheCentTelField(obj) {

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

    }
    else if (obj != null && (landline == true || Gov == true) && landlineValue != null) {


        if (obj["_ldv_centralname_value"] != null) {
            var rangeQuery = "/api/data/v9.1/ldv_centraltelephones(" + obj["_ldv_centralname_value"].replace(/[{}]/g, "") + ")?$select=ldv_centraltelephonename";
            ODataRequest(rangeQuery, function (data) {

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

function OnChangeGovernment(LandlineFlag) {

    if (IsGovInCreate == true) {
        Xrm.Page.getAttribute(centraltelephoneField).setValue(null);
        Xrm.Page.getAttribute("ldv_area").setValue(null);
        Xrm.Page.getAttribute(LandLineField).setValue(null);

    }
    IsGovInCreate = true;

    if (Xrm.Page.getAttribute(GovernmentField).getValue() != null) {
        var Code = GetGovCode();
        if (Code != null)
            Xrm.Page.getAttribute(GovernmentCodeField).setValue(Code);

    }
}

function MobileNumber_OnChange() {

    if (Xrm.Page.getAttribute("ldv_mobilenumber").getValue() != null) {

        if (formatPhone(Xrm.Page.getAttribute("ldv_mobilenumber").getValue())) {

            Xrm.Page.getControl("ldv_mobilenumber").clearNotification(uniqueId);
        }
        else {
            Xrm.Page.getControl("ldv_mobilenumber").setNotification(message, uniqueId);
            var newMail = Xrm.Page.getAttribute("ldv_mobilenumber").setValue("");

        }

    }

}

function formatPhoneLandLine(phonenum) {

    var regexObj1 = /^\d+$/;


    return regexObj1.test(phonenum);

}

function formatPhone(phonenum) {

    var regexObj1 = /^\d+$/;
    var regexObj2 = /^\d{11}(\d{1})?$/

    return (regexObj1.test(phonenum) && regexObj2.test(phonenum));

}

function formatNumbers(phonenums) {

    var regexObj1 = /^(\d+-?)+\d+$/;

    return (regexObj1.test(phonenums));

}

function AutoFillSiteMaintenance(Result) {


    if (Result != null && Result.length != 0) {
        if (Result[0].ldv_site.Id != null)
            Xrm.Page.getAttribute(SiteField).setValue(GetLookupObj(Result[0].ldv_site));
        Xrm.Page.getAttribute(SiteField).setSubmitMode("always");
        Xrm.Page.getAttribute(CentralProductGroup).setSubmitMode("always");
        Xrm.Page.getAttribute(SiteField).setDisabled(true);
    }

    else {
        alert("There is no central product group provided for this type");
    }

}

function EnableDisableAdd() {
    return CheckPendingActivites();
}

function OnChangeProductType() {
    SetService();


    var productType = Xrm.Page.getAttribute("ldv_producttype").getValue();
    var FormType = Xrm.Page.ui.getFormType();
    var isDirty = Xrm.Page.getAttribute("ldv_producttype").getIsDirty();
    OnChangeModelNumber();

    if (FormType == 1) {
        if (productType != null) {
            Xrm.Page.getControl("ldv_problem").setVisible(true);
            Xrm.Page.getControl("ldv_problem2").setVisible(true);
            Xrm.Page.getControl("ldv_problem3").setVisible(true);
        }
        else {
            Xrm.Page.getAttribute("ldv_problem").setValue(null);
            Xrm.Page.getAttribute("ldv_problem2").setValue(null);
            Xrm.Page.getAttribute("ldv_problem3").setValue(null);
        }
    }

    else {

        if (FormType == 2) {
            // if (isDirty == true) {
            if (productType != null) {
                Xrm.Page.ui.controls.get("ldv_problem").setDisabled(false);
                Xrm.Page.ui.controls.get("ldv_problem2").setDisabled(false);
                Xrm.Page.ui.controls.get("ldv_problem3").setDisabled(false);
            }
            else {
                Xrm.Page.ui.controls.get("ldv_problem").setDisabled(true);
                Xrm.Page.ui.controls.get("ldv_problem2").setDisabled(true);
                Xrm.Page.ui.controls.get("ldv_problem3").setDisabled(true);
            }
            //}
        }

    }
}

function CheckUserRole(RoleToCheck) {

    var currentUserRoles = Xrm.Page.context.getUserRoles();
    for (var i = 0; i < currentUserRoles.length; i++) {
        var userRoleId = currentUserRoles[i];
        var userRoleName = GetRoleName(userRoleId);
        if (userRoleName == RoleToCheck) {
            return true;
        }
    }
    return false;
}

function GetLookupObj(obj) {

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


function TestOnChangeProblem() {
    //get the central related to thi area
    var Area = Xrm.Page.getAttribute(ProductTypeField).getValue();
    var roleName = [];
    if (Area != null) {
        var str = Area[0].id.toString();
        str = str.toLowerCase();
        str = str.replace(/[{}]/g, "");

        var query = "/api/data/v9.1/ldv_productproblems?$filter=_new_producttype_value eq " + str;


        ODataRequest(query, function (results) {
            if (results.value.length > 0) {
                for (var x in results.value) {

                    roleName.push(results.value[x]);
                }

            }

        });

        return roleName;

    }
}

var myContactsGridOnloadFunction = function () { GetGridRecord() };

function GetGridRecord() {

    var mscField = Xrm.Page.getAttribute(MSCorASCField).getValue();

    var formType = Xrm.Page.ui.getFormType();
    var currentWorkOrderID = Xrm.Page.data.entity.getId();
    currentWorkOrderID = currentWorkOrderID.replace("{", "");
    currentWorkOrderID = currentWorkOrderID.replace("}", "");

    if (formType != 1) {
        //Handle ASC Case
        if (currentWorkOrderID != undefined && currentWorkOrderID != null && currentWorkOrderID != "") {
            var req = new XMLHttpRequest();
            req.open("GET", Xrm.Page.context.getClientUrl() + "/api/data/v9.1/ldv_ascserviceactivities?$select=statuscode&$filter=_ldv_workorder_value eq " + currentWorkOrderID + " and  statuscode eq 753240000&$count=true", false);
            req.setRequestHeader("OData-MaxVersion", "4.0");
            req.setRequestHeader("OData-Version", "4.0");
            req.setRequestHeader("Accept", "application/json");
            req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
            req.setRequestHeader("Prefer", "odata.include-annotations=\"*\"");
            req.onreadystatechange = function () {

                if (this.readyState === 4) {
                    req.onreadystatechange = null;
                    if (this.status === 200) {
                        var results = JSON.parse(this.response);
                        var recordCount = results["@odata.count"];

                        if (recordCount > 0) {
                            if (mscField == 0) //MSC 
                            {
                                Xrm.Page.getAttribute(MSCorASCField).setValue(1);
                                OnChangeMSCorASC();

                            }

                            Xrm.Page.getControl(MSCorASCField).setDisabled(true);

                        }

                    }
                    else {

                        //   Xrm.Utility.alertDialog(this.statusText);

                    }
                }
            };
            req.send();
        }

        //Handle MSC Case
        if (currentWorkOrderID != undefined && currentWorkOrderID != null && currentWorkOrderID != "") {
            var req = new XMLHttpRequest();
            req.open("GET", Xrm.Page.context.getClientUrl() + "/api/data/v9.1/serviceappointments?$select=statuscode&$filter=_regardingobjectid_value eq " + currentWorkOrderID + " and  statuscode eq 3&$count=true", false);
            req.setRequestHeader("OData-MaxVersion", "4.0");
            req.setRequestHeader("OData-Version", "4.0");
            req.setRequestHeader("Accept", "application/json");
            req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
            req.setRequestHeader("Prefer", "odata.include-annotations=\"*\"");
            req.onreadystatechange = function () {

                if (this.readyState === 4) {
                    req.onreadystatechange = null;
                    if (this.status === 200) {
                        var results = JSON.parse(this.response);
                        var recordCount = results["@odata.count"];

                        if (recordCount > 0) {
                            if (mscField == 1) //ASC 
                            {
                                Xrm.Page.getAttribute(MSCorASCField).setValue(0);
                                OnChangeMSCorASC();

                            }

                            Xrm.Page.getControl(MSCorASCField).setDisabled(true);

                        }

                    }
                    else {


                    }
                }
            };
            req.send();
        }
    }
}

function LockASCMSC() {

    var mscField = Xrm.Page.getAttribute(MSCorASCField).getValue();

    var formType = Xrm.Page.ui.getFormType();
    var status = Xrm.Page.getAttribute(WorkOrderStatusField).getValue();
    var currentWorkOrderID = Xrm.Page.data.entity.getId();
    currentWorkOrderID = currentWorkOrderID.replace("{", "");
    currentWorkOrderID = currentWorkOrderID.replace("}", "");


    if (formType != 1 && formType != 0 && formType != undefined) {
        //Handle ASC Case
        if (currentWorkOrderID != undefined && currentWorkOrderID != null && currentWorkOrderID != "") {
            var req = new XMLHttpRequest();
            req.open("GET", Xrm.Page.context.getClientUrl() + "/api/data/v9.1/ldv_ascserviceactivities?$select=statuscode&$filter=_ldv_workorder_value eq " + currentWorkOrderID + " and  statuscode ne 753240013&$count=true", false);
            req.setRequestHeader("OData-MaxVersion", "4.0");
            req.setRequestHeader("OData-Version", "4.0");
            req.setRequestHeader("Accept", "application/json");
            req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
            req.setRequestHeader("Prefer", "odata.include-annotations=\"*\"");
            req.onreadystatechange = function () {

                if (this.readyState === 4) {
                    req.onreadystatechange = null;
                    if (this.status === 200) {
                        var results = JSON.parse(this.response);
                        var recordCount = results["@odata.count"];












                        if (recordCount > 0) {
                            //  if (mscField == 0) //MSC 
                            // {
                            //   Xrm.Page.getAttribute(MSCorASCField).setValue(1);
                            OnChangeMSCorASC();






                            // }






                            Xrm.Page.getControl(MSCorASCField).setDisabled(true);


                        }


                    }
                    else {

                        //   Xrm.Utility.alertDialog(this.statusText);

                    }
                }
            };
            req.send();
        }




        //Handle MSC Case
        if (currentWorkOrderID != undefined || currentWorkOrderID != null) {
            var req = new XMLHttpRequest();
            req.open("GET", Xrm.Page.context.getClientUrl() + "/api/data/v9.1/serviceappointments?$select=statuscode&$filter=_regardingobjectid_value eq " + currentWorkOrderID + " and  statuscode ne 1&$count=true", false);
            req.setRequestHeader("OData-MaxVersion", "4.0");
            req.setRequestHeader("OData-Version", "4.0");
            req.setRequestHeader("Accept", "application/json");
            req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
            req.setRequestHeader("Prefer", "odata.include-annotations=\"*\"");
            req.onreadystatechange = function () {






                if (this.readyState === 4) {
                    req.onreadystatechange = null;
                    if (this.status === 200) {
                        var results = JSON.parse(this.response);
                        var recordCount = results["@odata.count"];











                        if (recordCount > 0) {








                            //  Xrm.Page.getAttribute(MSCorASCField).setValue(0);
                            OnChangeMSCorASC();
                            Xrm.Page.getControl(MSCorASCField).setDisabled(true);

                        }







                    }

                }
                else {




                }

            }
        };
        req.send();
    }



}

///////////////////////////////////CR Functions////////////////////////////////////

function Follow_Up_Decision_Created_From_Portal() {

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
}
function CheckLSC_Visibelities() {

    var frmType = Xrm.Page.ui.getFormType();
    if (frmType == 1 || frmType == 0 || frmType == 5 || frmType == 2) {
        if (NewCheckUserRole(UserRole, "LSC User") || NewCheckUserRole(UserRole, "LSC Front Office User")) {
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
            if (frmType != 1) {
                Xrm.Page.ui.controls.get("ldv_problem").setDisabled(true);
                Xrm.Page.ui.controls.get("ldv_problem2").setDisabled(true);
                Xrm.Page.ui.controls.get("ldv_problem3").setDisabled(true);
            }

        }
    }
}

function onchange_Technical_Review_Decision() {
    debugger;
    var Decision = Xrm.Page.getAttribute(Technical_Review_Decision).getValue();
    if (Decision == 753240002) {
        Show_Correct_Fields();
        Hide_Weight_Fields();
        Xrm.Page.getControl(Send_For_Correction).setVisible(true);
        Xrm.Page.getAttribute(Send_For_Correction).setRequiredLevel("required");
        Xrm.Page.getControl(Send_For_GM_Approval).setVisible(false);

        Set_SLA_Duration()
    }
    else if (Decision == 753240003) {
        Hide_Weight_Fields();
        Show_Correct_Fields();
        Xrm.Page.getControl(Send_For_Correction).setVisible(false);
        Xrm.Page.getAttribute(Send_For_Correction).setRequiredLevel("none");
        Xrm.Page.getControl(Send_For_GM_Approval).setVisible(true);
        Xrm.Page.getAttribute(Send_For_GM_Approval).setRequiredLevel("required");
        Xrm.Page.getAttribute(Send_For_GM_Approval).setValue(true);
        Xrm.Page.getAttribute("ldv_sladuration").setValue(null);
    }
    else {
        Show_Weight_Fields();
        Hide_Correct_Fields();
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
    if (Decision == 753240002 && Xrm.Page.getAttribute(Technician_Is_Corrected).getValue() == 0) {
        Xrm.Page.getAttribute(Send_For_Correction).setValue(1);
    }
    else {
        Xrm.Page.getAttribute(Send_For_Correction).setValue("");
    }



    // if (Decision == 753240002 && Xrm.Page.getAttribute("ldv_correctsparepart").getValue() == 1)
    // {
    //     Xrm.Page.getAttribute("ldv_correctsparepart").setValue(0);
    //}


}
function Show_Correct_Fields() {
    Xrm.Page.getControl(Send_For_Correction).setVisible(true);
    Xrm.Page.getControl(Correct_Defect_Code).setVisible(true);
    Xrm.Page.getControl(Correct_Model).setVisible(true);
    Xrm.Page.getControl(Correct_Report).setVisible(true);
    Xrm.Page.getControl(Correct_Serial_Number).setVisible(true);
    //Xrm.Page.getControl(Correct_Spare_Parts).setVisible(true);
    Xrm.Page.getControl(Correct_Warranty_Date).setVisible(true);
    Xrm.Page.getControl(Correct_Warranty_Statues).setVisible(true);
    Xrm.Page.getControl(Correct_Total_Amount).setVisible(true);
}
function Hide_Correct_Fields() {
    Xrm.Page.getControl(Send_For_Correction).setVisible(false);
    Xrm.Page.getControl(Correct_Defect_Code).setVisible(false);
    Xrm.Page.getControl(Correct_Model).setVisible(false);
    Xrm.Page.getControl(Correct_Report).setVisible(false);
    Xrm.Page.getControl(Correct_Serial_Number).setVisible(false);
    //Xrm.Page.getControl(Correct_Spare_Parts).setVisible(false);
    Xrm.Page.getControl(Correct_Warranty_Date).setVisible(false);
    Xrm.Page.getControl(Correct_Warranty_Statues).setVisible(false);
    Xrm.Page.getControl(Correct_Total_Amount).setVisible(false);
}
function Show_Weight_Fields() {
    Xrm.Page.getControl(Technical_Model_weight).setVisible(true);
    Xrm.Page.getControl(Technical_Serial_Number_Weight).setVisible(true);
    Xrm.Page.getControl(Technical_Warranty_Date_Weight).setVisible(true);
    Xrm.Page.getControl(Technical_Warranty_status_weight).setVisible(true);
    Xrm.Page.getControl(Technical_report_weight).setVisible(true);
    Xrm.Page.getControl(Deffect_Code_Weight).setVisible(true);
    Xrm.Page.getControl(Spare_Parts_Weight).setVisible(true);
    Xrm.Page.getControl(Total_Amount_weight).setVisible(true);

}
function Hide_Weight_Fields() {
    Xrm.Page.getControl(Technical_Model_weight).setVisible(false);
    Xrm.Page.getControl(Technical_Serial_Number_Weight).setVisible(false);
    Xrm.Page.getControl(Technical_Warranty_Date_Weight).setVisible(false);
    Xrm.Page.getControl(Technical_Warranty_status_weight).setVisible(false);
    Xrm.Page.getControl(Technical_report_weight).setVisible(false);
    Xrm.Page.getControl(Deffect_Code_Weight).setVisible(false);
    Xrm.Page.getControl(Spare_Parts_Weight).setVisible(false);
    Xrm.Page.getControl(Total_Amount_weight).setVisible(false);

}

// created by amr 17/12/2018
function GEt_spare_Parts_Defect_code_count() {


    var entity = {};

    //AMr Code Review 21/12/2017 :why u r checking on customer name ?

    var CurrentRecored = Xrm.Page.data.entity.getId();
    CurrentRecored = CurrentRecored.replace(/[{}]/g, "");
    // var query = "/api/data/v9.1/ldv_casesparepartses?$select=ldv_quantity&$filter=_ldv_workorder_value eq " + CurrentRecored;
    var query = "/api/data/v9.1/ldv_casesparepartses?$select=ldv_quantity&$filter=_ldv_workorder_value eq " + CurrentRecored + " and  ldv_isused eq true";
    ODataRequest(query, function (results) {
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

    //Amr Code Review 21/12/2017 ->>> Use try/catch in any OData execution

    var query = "/api/data/v9.1/ldv_workorder_defects?$select=_ldv_defect_value&$filter=_ldv_workorder_value eq " + CurrentRecored;
    ODataRequest(query, function (results) {
        try {
            if (Xrm.Page.getAttribute("ldv_defectcodecount").getValue() != results.value.length) {
                var defects = "";
                for (var i = 0; i < results.value.length; i++) {

                    var query1 = "/api/data/v9.1/ldv_defectcodes(" + results.value[i]["_ldv_defect_value"] + ")?$select=ldv_defectdescription";
                    // defects += results.value[i]["_ldv_defect_value@OData.Community.Display.V1.FormattedValue"];
                    ODataRequest(query1, function myfunction(result) {
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
            url: Xrm.Page.context.getClientUrl() + "/api/data/v9.1/incidents(" + CurrentId + ")",
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


// created by amr 14/12/2017 CR
function Show_Hide_Portal_Replacement_section(createdfrom, isFollowup, status) {
    //Amr Code Review 21/12/2017 >>> if el queue field is null will throw error in _queueName[0].name, use "null" and "undefined" check

    var _queueName = Xrm.Page.getAttribute("new_queue").getValue();
    //July 2019
    if (_queueName != null && _queueName != "" && _queueName != undefined && createdfrom === 1 && _queueName[0].name == "Follow Up Queue" && status == 753240019) {
        _executionForm.ui.tabs.get("tab_FollowUp_2").sections.get("tab_FollowUp_2_section_3").setVisible(true);
        _executionForm.ui.tabs.get("tab_FollowUp_2").sections.get("Replacement_Follow_Up").setVisible(false);
        _executionForm.ui.tabs.get("tab_FollowUp_2").sections.get("tab_11_section_1").setVisible(false);
    }

    else if (_queueName != null && _queueName != "" && _queueName != undefined) {
        if (createdfrom === 1 && isFollowup && (
            status == 753240009 || /*Replacement*/
            status == 753240061 || /*Replacement - LSC*/
            status == 753240071 || /*Replacement - Store Keeper Done*/
            status == 753240012 || /*Replacement Approved*/
            status == 753240068 || /*Replacement Approved - RTL*/
            status == 753240066 || /*Replacement Approved - TS*/
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
}

// created by amr 13/12/2017 CR
function Fill_Technician_fields() {
    debugger;
    var change = 0;

    if (Xrm.Page.getAttribute("ldv_actualmodel").getValue() != null
        && Xrm.Page.getAttribute("ldv_actualmodel").getValue() != ""
        && Xrm.Page.getAttribute("ldv_model").getValue() == null) {
        Xrm.Page.getAttribute("ldv_model").setValue(Xrm.Page.getAttribute("ldv_actualmodel").getValue());
        change = 1;
    }

    if (Xrm.Page.getAttribute("ldv_actualmodel2").getValue() != null
        && Xrm.Page.getAttribute("ldv_actualmodel2").getValue() != ""
        && Xrm.Page.getAttribute("ldv_secondtechmodel").getValue() == null) {
        Xrm.Page.getAttribute("ldv_secondtechmodel").setValue(Xrm.Page.getAttribute("ldv_actualmodel2").getValue());
        change = 1;
    }


    var CreatedFrom = Xrm.Page.getAttribute(CreatedFromField).getValue();
    if (CreatedFrom == 1)/* Created From Portal */ {

        if (Xrm.Page.getAttribute("ldv_serialnumber").getValue() != null && Xrm.Page.getAttribute("ldv_serialnumber").getValue() != "" && Xrm.Page.getAttribute("ldv_technicalserialnumber").getValue() != Xrm.Page.getAttribute("ldv_serialnumber").getValue()) {
            Xrm.Page.getAttribute("ldv_technicalserialnumber").setValue(Xrm.Page.getAttribute("ldv_serialnumber").getValue());
        }
    }

    //commeneted by nermine 1/2/2018:
    //if ((Xrm.Page.getAttribute(ISLSC) != null && Xrm.Page.getAttribute(ISLSC).getValue() != 1) || Xrm.Page.getAttribute(CreatedFromField).getValue() == 3) {
    //    if (Xrm.Page.getAttribute("ldv_serialnumber").getValue() != null
    //        && Xrm.Page.getAttribute("ldv_serialnumber").getValue() != ""









    //        && Xrm.Page.getAttribute("ldv_technicalserialnumber").getValue() == null) {





    //        Xrm.Page.getAttribute("ldv_technicalserialnumber").setValue(Xrm.Page.getAttribute("ldv_serialnumber").getValue());
    //        change = 1;
    //    }
    //}
    //else if (Xrm.Page.getAttribute("ldv_productbarcode").getValue() != null
    //    && Xrm.Page.getAttribute("ldv_productbarcode").getValue() != ""
    //    && Xrm.Page.getAttribute("ldv_technicalserialnumber").getValue() == null) {

    //    Xrm.Page.getAttribute("ldv_technicalserialnumber").setValue(Xrm.Page.getAttribute("ldv_productbarcode").getValue());
    //    change = 1;
    //}









    if (Xrm.Page.getAttribute(CreatedFromField).getValue() == 3) //LSC
    {
        if (Xrm.Page.getAttribute("ldv_originaltotalvisitcost").getValue() != null
            && Xrm.Page.getAttribute("ldv_totalamount").getValue() == null) {

            Xrm.Page.getAttribute("ldv_totalamount").setValue(Xrm.Page.getAttribute("ldv_originaltotalvisitcost").getValue());
            change = 1;
        }












    }
    else if (Xrm.Page.getAttribute("ldv_actualcollectedamount").getValue() != null



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

    if (mscField == 1)//ASC
    {
        try {
            $.ajax({
                type: "GET",
                contentType: "application/json; charset=utf-8",
                datatype: "json",
                url: Xrm.Page.context.getClientUrl() + "/api/data/v9.1/ldv_ascserviceactivities?$filter=_ldv_workorder_value eq " + CurrentId + " &$orderby=createdon asc",
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
                XMLHttpRequest.setRequestHeader("Prefer", "odata.include-annotations=\"*\",odata.maxpagesize=1");
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
                if (results.value[results.value.length - 1] != null && results.value[results.value.length - 1] != undefined) {
                    Xrm.Page.getAttribute("ldv_lsctechniciancomment").setValue(results.value[results.value.length - 1].ldv_lsctechniciancomment);
                    Xrm.Page.getAttribute("ldv_resourcelastcomment").setValue(results.value[results.value.length - 1].ldv_lsctechniciancomment);
                    Xrm.Page.data.entity.save();
                }

            },
            error: function (xhr, textStatus, errorThrown) {
            }
        });
        Xrm.Page.data.entity.save();




    } catch (error) {
        console.log(error);
    }
}

//created by amr 6/12/2017 CR
function Show_Aditional_Section() {

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
}


function On_Change_GM_Decision() {
    if (Xrm.Page.getAttribute("ldv_gmdecision").getValue() == 753240000) {
        //created by amr 20/12/2017 CR
        // This function call on change Technical Review Decision Field 
        // when Value become Correct Data update the SLA Duration field with the Value Of "Correction Duration" Key in Configuration
        ODataRequest("/api/data/v8.1/ldv_configurations?$select=ldv_value&$filter=ldv_name eq 'Correction Duration'", function (result) {
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


function Set_SLA_Duration() {
    debugger;
    var Decision = Xrm.Page.getAttribute("ldv_sendforcorrection").getValue();
    if (Decision == 1) {
        //created by amr 20/12/2017 CR
        // This function call on change Technical Review Decision Field 
        // when Value become Correct Data update the SLA Duration field with the Value Of "Correction Duration" Key in Configuration
        ODataRequest("/api/data/v8.1/ldv_configurations?$select=ldv_value&$filter=ldv_name eq 'Correction Duration'", function (result) {
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
    if (Xrm.Page.data.entity.attributes.get('new_queue').getValue() != null) {
        var queue = Xrm.Page.data.entity.attributes.get('new_queue').getValue()[0].name;
        if (Is_General_Manager && queue == "General Manager Queue") {
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
            Xrm.Page.getAttribute(GM_Decision).setRequiredLevel("required");
        }
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


function followUpSettedFields() {

    //change in general tab in case created from crm
    if (Xrm.Page.getAttribute("ldv_createdfrom").getValue() == 0 || Xrm.Page.getAttribute("ldv_createdfrom").getValue() == 3) {

        if (Xrm.Page.ui.tabs.get("tab_FollowUp_2").sections.get("tab_11_section_1").getVisible() && Xrm.Page.getAttribute("ldv_customeravailability") != null
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


























        } else if (Xrm.Page.ui.tabs.get("tab_FollowUp_2").sections.get("tab_11_section_1").getVisible() && Xrm.Page.getAttribute("ldv_customeravailability") != null
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





        } else if (Xrm.Page.ui.tabs.get("tab_FollowUp_2").sections.get("tab_11_section_1").getVisible() && Xrm.Page.getAttribute("ldv_customeravailability") != null
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




        if (Xrm.Page.ui.tabs.get("tab_FollowUp_2").sections.get("tab_11_section_1").getVisible() && Xrm.Page.getAttribute("ldv_customeravailability") != null
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




        if (Xrm.Page.ui.tabs.get("tab_FollowUp_2").sections.get("tab_FollowUp_2_section_3").getVisible() && Xrm.Page.getAttribute("ldv_customeravailability") != null
            && (Xrm.Page.getAttribute("ldv_customeravailability").getValue() == 753240005 ||  //no answer
                Xrm.Page.getAttribute("ldv_customeravailability").getValue() == 753240003 ||  //customer is unreachable and no follow up
                Xrm.Page.getAttribute("ldv_customeravailability").getValue() == 100000001))//visit not done
        {

            Xrm.Page.getAttribute("ldv_portal_realvisitdate").setRequiredLevel("none");
            Xrm.Page.getAttribute("ldv_isvisitdonenotes").setRequiredLevel("none");
            Xrm.Page.getAttribute("ldv_towhatdegreetechshaveabilitydiagn").setRequiredLevel("none");
            Xrm.Page.getAttribute("ldv_dealwiththeservicecenternotes").setRequiredLevel("none");
            Xrm.Page.getAttribute("ldv_reasons").setRequiredLevel("none");
            Xrm.Page.getAttribute("ldv_portal_isthetechnicianreportright").setRequiredLevel("none");
            Xrm.Page.getAttribute("ldv_portal_isthereachargeofmaintenencenotes").setRequiredLevel("none");
            Xrm.Page.getAttribute("ldv_portal_followupstatus").setRequiredLevel("none");
            Xrm.Page.getAttribute("ldv_portaltowhichlevelyougetyourinfosimplycle").setRequiredLevel("none");
            Xrm.Page.getAttribute("ldv_amountvalue").setRequiredLevel("none");
            Xrm.Page.getAttribute("ldv_amountvaluenotes").setRequiredLevel("none");

            //Deployment Release 2
            if (Xrm.Page.getAttribute("ldv_customeravailability").getValue() == 100000001)//visit not done
            {
                Xrm.Page.getControl("ldv_followupnotes").setVisible(true);

            }
            ///////////////////////

            Xrm.Page.getControl("ldv_portal_realvisitdate").setVisible(false);
            Xrm.Page.getControl("ldv_isvisitdonenotes").setVisible(false);
            Xrm.Page.getControl("ldv_towhatdegreetechshaveabilitydiagn").setVisible(false);

            Xrm.Page.getControl("ldv_dealwiththeservicecenternotes").setVisible(false);
            Xrm.Page.getControl("ldv_reasons").setVisible(false);
            Xrm.Page.getControl("ldv_portal_isthetechnicianreportright").setVisible(false);
            Xrm.Page.getControl("ldv_portal_isthereachargeofmaintenencenotes").setVisible(false);
            Xrm.Page.getControl("ldv_portal_followupstatus").setVisible(false);
            Xrm.Page.getControl("ldv_portaltowhichlevelyougetyourinfosimplycle").setVisible(false);
            Xrm.Page.getControl("ldv_amountvalue").setVisible(false);
            Xrm.Page.getControl("ldv_amountvaluenotes").setVisible(false);


            Xrm.Page.getControl("ldv_followupstarttime2").setDisabled(true);
            Xrm.Page.getControl("ldv_followupendtime2").setDisabled(true);





        } else if (Xrm.Page.ui.tabs.get("tab_FollowUp_2").sections.get("tab_FollowUp_2_section_3").getVisible() && Xrm.Page.getAttribute("ldv_customeravailability") != null
            && (Xrm.Page.getAttribute("ldv_customeravailability").getValue() == 1 ||  //visit done on time
                Xrm.Page.getAttribute("ldv_customeravailability").getValue() == 2))//visit done after booking time 
        {


            Xrm.Page.getControl("ldv_portal_realvisitdate").setVisible(true);
            Xrm.Page.getControl("ldv_isvisitdonenotes").setVisible(true);
            Xrm.Page.getControl("ldv_towhatdegreetechshaveabilitydiagn").setVisible(true);
            Xrm.Page.getControl("ldv_dealwiththeservicecenternotes").setVisible(true);
            Xrm.Page.getControl("ldv_reasons").setVisible(true);
            Xrm.Page.getControl("ldv_portal_isthetechnicianreportright").setVisible(true);
            Xrm.Page.getControl("ldv_portal_isthereachargeofmaintenencenotes").setVisible(true);
            Xrm.Page.getControl("ldv_portal_followupstatus").setVisible(true);
            Xrm.Page.getControl("ldv_portaltowhichlevelyougetyourinfosimplycle").setVisible(true);
            Xrm.Page.getControl("ldv_amountvalue").setVisible(true);
            Xrm.Page.getControl("ldv_amountvaluenotes").setVisible(true);

            Xrm.Page.getAttribute("ldv_portal_realvisitdate").setRequiredLevel("required");
            Xrm.Page.getAttribute("ldv_isvisitdonenotes").setRequiredLevel("required");
            Xrm.Page.getAttribute("ldv_towhatdegreetechshaveabilitydiagn").setRequiredLevel("required");
            Xrm.Page.getAttribute("ldv_dealwiththeservicecenternotes").setRequiredLevel("required");
            Xrm.Page.getAttribute("ldv_reasons").setRequiredLevel("required");
            Xrm.Page.getAttribute("ldv_portal_isthetechnicianreportright").setRequiredLevel("required");
            Xrm.Page.getAttribute("ldv_portal_isthereachargeofmaintenencenotes").setRequiredLevel("required");
            Xrm.Page.getAttribute("ldv_portal_followupstatus").setRequiredLevel("required");
            Xrm.Page.getAttribute("ldv_portaltowhichlevelyougetyourinfosimplycle").setRequiredLevel("required");
            Xrm.Page.getAttribute("ldv_amountvalue").setRequiredLevel("required");
            Xrm.Page.getAttribute("ldv_amountvaluenotes").setRequiredLevel("required");

            Xrm.Page.getControl("ldv_followupstarttime2").setDisabled(true);
            Xrm.Page.getControl("ldv_followupendtime2").setDisabled(true);
        }

        //hide general tab
        Xrm.Page.ui.tabs.get("tab_FollowUp_2").sections.get("tab_11_section_1").setVisible(false);
    }

}

//Deployment Release 2
function EnableNewSparePartButton() {

    var StatusCode = Xrm.Page.getAttribute("statuscode").getValue();
    var Owner = Xrm.Page.getAttribute("ownerid").getValue()[0].id;
    var WorkOrderType = Xrm.Page.getAttribute("ldv_workordertype").getValue();



    if (StatusCode == "753240006" && Xrm.Page.context.getUserId() == owner && WorkOrderType == 1) {
        return true;
    }
    else {
        return false;
    }

}

//Deployment Release 2
function On_Change_spare_parts_Availability() {

    var sparepartavailabltylsc = Xrm.Page.getAttribute("new_sparepartsavailabilitylsc").getValue();
    if (sparepartavailabltylsc == "100000000") {
        Xrm.Page.getControl("ldv_availabilitytype").setVisible(true);
        Xrm.Page.getControl("ldv_dateofavailability").setVisible(true);
        //Xrm.Page.getAttribute("ldv_availabilitytype").setRequiredLevel("required");
        Xrm.Page.getAttribute("ldv_dateofavailability").setRequiredLevel("required");
        Xrm.Page.getControl("ldv_unavailabiltyreason").setVisible(false);
    }



    else if (sparepartavailabltylsc == "100000001") {
        Xrm.Page.getControl("ldv_availabilitytype").setVisible(false);
        Xrm.Page.getControl("ldv_dateofavailability").setVisible(false);
        Xrm.Page.getAttribute("ldv_availabilitytype").setRequiredLevel("none");
        Xrm.Page.getAttribute("ldv_dateofavailability").setRequiredLevel("none");
        Xrm.Page.getControl("ldv_unavailabiltyreason").setVisible(true);
    }
}


//CR Release 3 New functions==>Deployment Release 3

function CustomerRejectToMaintanaceLSC(FleetSpokeUser) {

    var queue = Xrm.Page.data.entity.attributes.get('new_queue').getValue()[0].name;
    if (queue == "Fleet’s spoke Queue")//Fleet Spoke Section
    {
        if (FleetSpokeUser) {
            Xrm.Page.ui.tabs.get("lsc_tab").sections.get("lsc_tab_section_2").setVisible(false);
            Xrm.Page.ui.tabs.get("lsc_tab").setVisible(true);
        }
        Xrm.Page.getControl("ldv_customerrejectmaintenancelscconfirmation").setVisible(true);
        Xrm.Page.getAttribute("ldv_customerrejectmaintenancelscconfirmation").setRequiredLevel("required");
        Xrm.Page.getControl("ldv_lscsupervisordecision").setVisible(false);
        Xrm.Page.getAttribute("ldv_lscsupervisordecision").setRequiredLevel("none");
        Xrm.Page.getControl("ldv_lscbranch").setVisible(false);
        Xrm.Page.getControl("ldv_customerwithdrawrejectionreasonfleetspoke").setVisible(false);
        Xrm.Page.getControl("ldv_frontofficecomment").setVisible(false);
        Xrm.Page.getControl("ldv_rejectionreasontowithdrawtheproducttolsc").setVisible(false);
    }
    else//LSC Supervisor Section
    {
        ShowLSCSupervisiorFields();
    }
}

function ShowLSCSupervisiorFields() {
    Xrm.Page.ui.tabs.get("lsc_tab").setVisible(true);
    Xrm.Page.getControl("ldv_lscsupervisordecision").setVisible(true);
    Xrm.Page.getAttribute("ldv_lscsupervisordecision").setRequiredLevel("required");
    Xrm.Page.getControl("ldv_customerrejectmaintenancelscconfirmation").setVisible(false);
    Xrm.Page.getAttribute("ldv_customerrejectmaintenancelscconfirmation").setRequiredLevel("none");
    Xrm.Page.getControl("ldv_fleetspokedecision").setVisible(false);
    Xrm.Page.getAttribute("ldv_fleetspokedecision").setRequiredLevel("none");
}

function CustomerRejectToRecive(FleetSpokeUser) {

    var queue = Xrm.Page.data.entity.attributes.get('new_queue').getValue()[0].name;
    if (queue == "Fleet’s spoke Queue")//Fleet Spoke Section
    {
        if (FleetSpokeUser) {
            Xrm.Page.ui.tabs.get("lsc_tab").sections.get("lsc_tab_section_2").setVisible(false);
            Xrm.Page.ui.tabs.get("lsc_tab").setVisible(true);
        }
        Xrm.Page.getControl("ldv_fleetspokedecision").setVisible(true);
        Xrm.Page.getAttribute("ldv_fleetspokedecision").setRequiredLevel("required");
        Xrm.Page.getControl("ldv_lscsupervisordecision").setVisible(false);
        Xrm.Page.getAttribute("ldv_lscsupervisordecision").setRequiredLevel("none");
    }
    else//LSC Supervisor Section
    {
        ShowLSCSupervisiorFields();
    }
}

//CR Release 3 replacement clear mandatory fileds 
function ReplacementDecisionOnChange() {
    if (Xrm.Page.getAttribute("ldv_replacementspecialistdecision").getValue() != null) {

        var ctrlName = Xrm.Page.ui.controls.get();
        for (var i in ctrlName) {
            try {

                var ctrl = ctrlName[i];
                var ctrlSection = ctrl.getParent().getName();
                if (ctrlSection == "tab_12_section_1_Specialist") {
                    ctrl.getAttribute().setRequiredLevel("none");
                }
                if (ctrlSection == "tab_12_section_4_Specialist") {
                    ctrl.getAttribute().setRequiredLevel("none");
                }
                if (ctrlSection == "tab_12_section_3_Specialist") {
                    ctrl.getAttribute().setRequiredLevel("none");
                }
            } catch (e) {

            }
        }


    }
    else {
        Xrm.Page.getAttribute("ldv_replacementtype").setRequiredLevel("required");
        var ctrlName = Xrm.Page.ui.controls.get();
        for (var i in ctrlName) {
            try {

                var ctrl = ctrlName[i];
                var ctrlSection = ctrl.getParent().getName();

                if (ctrlSection == "tab_12_section_3_Specialist") {
                    ctrl.getAttribute().setRequiredLevel("required");
                }
            } catch (e) {

            }
        }

    }

}

function Show_Hide_Second_Defect_code_Second_SparePart() {

    if (Xrm.Page.getAttribute(ProductGroupField).getValue() != null && Xrm.Page.getAttribute(ProductGroupField).getValue()[0].name != "AC") {
        Xrm.Page.getControl("SecondDefects").setVisible(false);
        Xrm.Page.getControl("secondspareparts").setVisible(false);
    }
    else {
        Xrm.Page.getControl("SecondDefects").setVisible(true);
        Xrm.Page.getControl("secondspareparts").setVisible(true);
    }
}

function Checkfleet_withNeedToDeliver(executionContext) {
    debugger;
    //  var formContext = executionContext.getFormContext();
    var statusReasone = Xrm.Page.getAttribute("statuscode").getValue();
    if (NewCheckUserRole(UserRole, "Fleet Spoke User") && statusReasone == 753240075) {

        Xrm.Page.getControl("new_tsreasons").setDisabled(true);
        Xrm.Page.getControl("ldv_serialnumber").setDisabled(true);
    }
    //related to jira issue EA-610 point8 lock withdraw rejection reason by Mahmoud 27/2/2019
    if (NewCheckUserRole(UserRole, "Back Office User") && statusReasone == 753240064) {
        Xrm.Page.getControl("new_withdrawrejectionreason").setDisabled(true);
        // formContext.ui.tabs.get("lsc_tab").sections.get("Work_Order_Information_tab_section_7").setDisabled(true);
        //sectionSetDisabled("lsc_tab","Work_Order_Information_tab_section_7",true);
    }
    //related to jira issue EA-610 point9 lock withdraw rejection reason by Mahmoud 27/2/2019

    if (NewCheckUserRole(UserRole, "Call Center User")) {
        Xrm.Page.getControl("kbarticleid").setDisabled(true);
    }

    //related to jira issue EA-610 point6 lock site with status != Open  by Mahmoud 27/2/2019
    if (statusReasone != 753240022 || Xrm.Page.getAttribute("title").getValue() != null) {
        Xrm.Page.getControl(SiteField).setDisabled(true);

    }
}


function FilterStockPlaceLookup() {

    var BranchLookup = Xrm.Page.getAttribute("ldv_lscbranch").getValue();

    if (BranchLookup != null) {
        var BranchID = BranchLookup[0].id;



        var layoutXml = "<grid name='resultset' object='1024' jump='ldv_stockplaceid' select='1' icon='1' preview='1'>" +
            "  <row name='result' id='ldv_stockplaceid'>" +
            "    <cell name='ldv_stockplace' width='300' />" +
            "  </row>" +
            "</grid>";



        viewId = "{821c41b2-87be-4ae5-82b0-0d733dbceb83}";
        entityName = "ldv_stockplace";
        viewDisplayName = "Available stock places";

        fetchXML = "<fetch distinct='false'>";
        fetchXML += "<entity name='ldv_stockplace' >";

        fetchXML += "<filter type='and' >";
        fetchXML += "<condition attribute='ldv_lscbranches' operator='eq' value='" + BranchID + "' />";
        fetchXML += " </filter>";

        fetchXML += "</entity>";
        fetchXML += " </fetch>";

        Xrm.Page.getControl("ldv_stockplace").addCustomView(viewId, entityName, viewDisplayName, fetchXML, layoutXml, true);


    }

}

function UserHasRole(roleName) {
    var url = Xrm.Page.context.getClientUrl();

    var oDataEndpointUrl = url + "/XRMServices/2011/OrganizationData.svc/";
    oDataEndpointUrl += "RoleSet?$filter=Name eq '" + roleName + "'";

    var service = GetRequestObject();

    if (service != null) {
        service.open("GET", oDataEndpointUrl, false);
        service.setRequestHeader("X-Requested-Width", "XMLHttpRequest");
        service.setRequestHeader("Accept", "application/json, text/javascript, */*");
        service.send(null);

        var requestResults = eval('(' + service.responseText + ')').d;

        if (requestResults != null) {
            for (var j = 0; j < requestResults.results.length; j++) {
                var role = requestResults.results[j];

                var id = role.RoleId;

                var currentUserRoles = Xrm.Page.context.getUserRoles();

                for (var i = 0; i < currentUserRoles.length; i++) {
                    var userRole = currentUserRoles[i];

                    if (GuidsAreEqual(userRole, id)) {
                        return true;
                    }
                }
            }
        }
    }

    return false;
}


//July 2019
function CustomerRejectToReplace(FleetSpokeUser) {

    var queue = _executionForm.getAttribute("new_queue").getValue()[0].name;
    if (queue == "Fleet’s spoke Queue" || queue == "Fleet Users Queue")//Fleet Spoke Section
    {
        if (FleetSpokeUser) {
            Xrm.Page.ui.tabs.get("Replacement_tab").sections.get("Replacement_tab_section_1_TS").setVisible(false);
            Xrm.Page.ui.tabs.get("Replacement_tab").sections.get("Replacement_tab_section_3").setVisible(false);
            Xrm.Page.ui.tabs.get("Replacement_tab").setVisible(true);
        }
        Xrm.Page.getControl("ldv_customerrejectreplacementconfirmation").setVisible(true);
        Xrm.Page.getAttribute("ldv_customerrejectreplacementconfirmation").setRequiredLevel("required");

    }

}

//July 2019
function EnableLSCBranchForFleet(FleetSpokeUser) {
    var queue = _executionForm.data.entity.attributes.get('new_queue').getValue()[0].name;
    if (queue == "Fleet’s spoke Queue")//Fleet Spoke Section
    {
        if (FleetSpokeUser) {
            _executionForm.getControl("ldv_lscbranch").setDisabled(false);
        }
    }
}


//July 2019
function onchange_CustomerWithdrawApprovalBO() {
    var _approval = _executionForm.getAttribute("ldv_customerwithdrawapprovalbackoffice").getValue();
    if (_approval == 753240002) {
        _executionForm.ui.tabs.get("Work_Order_Information_tab").sections.get("ASC_sec").setVisible(true);
    }

}

//July 2019

function onchange_ProductNotTakenFleetDecision() {
    var _fleetDecision = _executionForm.getAttribute("ldv_productnottakenfleetdecision").getValue();

    if (_fleetDecision == 753240000) {

        _executionForm.getControl("ldv_collectionvisitdate").setVisible(true);
        _executionForm.getAttribute("ldv_collectionvisitdate").setRequiredLevel("required");

        _executionForm.getControl("ldv_fleetspokeuser").setVisible(true);
        _executionForm.getAttribute("ldv_fleetspokeuser").setRequiredLevel("required");
    }
    else {
        _executionForm.getControl("ldv_collectionvisitdate").setVisible(false);
        _executionForm.getAttribute("ldv_collectionvisitdate").setRequiredLevel("none");

        _executionForm.getControl("ldv_fleetspokeuser").setVisible(false);
        _executionForm.getAttribute("ldv_fleetspokeuser").setRequiredLevel("none");
    }
}

//July 2019
function onchange_customerrejectreplacementconfirmation() {
    var _fleetDecision = _executionForm.getAttribute("ldv_customerrejectreplacementconfirmation").getValue();
    if (_fleetDecision == 1) {
        _executionForm.getControl("ldv_replacementvisitdate").setVisible(true);
        _executionForm.getControl("ldv_replacementfleetuser").setVisible(true);
        _executionForm.getAttribute("ldv_replacementvisitdate").setRequiredLevel("required");
        _executionForm.getAttribute("ldv_replacementfleetuser").setRequiredLevel("required");

    } else {
        _executionForm.getControl("ldv_replacementvisitdate").setVisible(false);
        _executionForm.getControl("ldv_replacementfleetuser").setVisible(false);
        _executionForm.getAttribute("ldv_replacementvisitdate").setRequiredLevel("none");
        _executionForm.getAttribute("ldv_replacementfleetuser").setRequiredLevel("none");
    }
}

//July 2019
function onchange_technicalsupportreplacementapproval() {
    var _technicalSupportApproval = _executionForm.getAttribute("ldv_technicalsupportreplacementapproval").getValue();

    if (_technicalSupportApproval == 753240003) {
        _executionForm.ui.tabs.get("lsc_tab").setVisible(true);
        _executionForm.ui.tabs.get("lsc_tab").sections.get("Work_Order_Information_tab_section_7").setVisible(true);
        _executionForm.getControl(LSCBranchField).setVisible(true);
        _executionForm.getAttribute(LSCBranchField).setRequiredLevel("required");
        _executionForm.getControl(LSCBranchField).setDisabled(false);
    }
    else {
        _executionForm.getControl(LSCBranchField).setVisible(false);
        _executionForm.getAttribute(LSCBranchField).setRequiredLevel("none");
        _executionForm.getControl(LSCBranchField).setDisabled(true);
    }

}


function CallCenter_GetCustomerOrdersCount(productTypeId, customerId) {




    var ProductType = productTypeId.toLowerCase();
    ProductType = ProductType.replace(/[{}]/g, "");


    var CustomerName = customerId.toLowerCase();
    CustomerName = CustomerName.replace(/[{}]/g, "");


    $.ajax({
        type: "GET",
        contentType: "application/json; charset=utf-8",
        datatype: "json",
        url: Xrm.Page.context.getClientUrl() + "/api/data/v8.0/incidents?$select=ticketnumber&$filter=_ldv_customername_value eq '" + CustomerName + "' and _ldv_producttype_value eq '" + ProductType + "' and statecode eq 0 and  _new_queue_value ne 233136E6-6DF6-E711-8110-5065F38BE571 and  _new_queue_value ne E362DD1E-6EF6-E711-8110-5065F38BE571 and  _new_queue_value ne 7c3c2c3f-6ef6-e711-8110-5065f38be571 and  statuscode ne 753240103 and  statuscode ne 753240104 and  ldv_workordertype eq 1",
        beforeSend: function (XMLHttpRequest) {
            XMLHttpRequest.setRequestHeader("OData-MaxVersion", "4.0");
            XMLHttpRequest.setRequestHeader("OData-Version", "4.0");
            XMLHttpRequest.setRequestHeader("Accept", "application/json");
            XMLHttpRequest.setRequestHeader("Prefer", "odata.include-annotations=\"*\"");
        },
        async: false,
        success: function (data, textStatus, xhr) {
            var results = data;
            if (results.value.length != 0) {
                alert("                                              انتــــــــــــــــــــــــــــــــــــــبه !! \n  العميل يوجد له بلاغات مفتوحة    \n وعدد البلاغات المفتوحة لهذا العميل هو " + results.value.length);
            }
        },
        error: function (xhr, textStatus, errorThrown) {
            Xrm.Utility.alertDialog(textStatus + " " + errorThrown);
        }
    });

}



//Aug 2019
function CallCenter_GetStatusDescription(code, orderGuid) {
    debugger;

    $.ajax({
        type: "GET",
        contentType: "application/json; charset=utf-8",
        datatype: "json",
        url: Xrm.Page.context.getClientUrl() + "/api/data/v8.1/ldv_workorderstatuses?$select=ldv_description,ldv_remarks,ldv_notify3,ldv_notify4,ldv_notify5&$filter=ldv_code eq '" + code + "'",
        beforeSend: function (XMLHttpRequest) {
            XMLHttpRequest.setRequestHeader("OData-MaxVersion", "4.0");
            XMLHttpRequest.setRequestHeader("OData-Version", "4.0");
            XMLHttpRequest.setRequestHeader("Accept", "application/json");
            XMLHttpRequest.setRequestHeader("Prefer", "odata.include-annotations=\"*\"");
        },
        async: true,
        success: function (data, textStatus, xhr) {
            var results = data;
            for (var i = 0; i < results.value.length; i++) {
                var description = results.value[i]["ldv_description"];
                var remarks = results.value[i]["ldv_remarks"];
                var notify3 = results.value[i]["ldv_notify3"];
                var notify4 = results.value[i]["ldv_notify4"];
                var notify5 = results.value[i]["ldv_notify5"];




                Xrm.Page.ui.setFormNotification(notify3, "INFO", "Info2");
                Xrm.Page.ui.setFormNotification(notify4, "INFO", "Info3");
                Xrm.Page.ui.setFormNotification(notify5, "INFO", "Info4");
                Xrm.Page.ui.setFormNotification(remarks, "INFO", "info5");
                Xrm.Page.ui.setFormNotification(description, "INFO", "info6");




            }
        },
        error: function (xhr, textStatus, errorThrown) {
            Xrm.Utility.alertDialog(textStatus + " " + errorThrown);
        }
    });
}


function CRM_Notification(message, id) {
    Xrm.Page.ui.setFormNotification(message, "WARNING", id);

}