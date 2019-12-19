/////////////////////////////Variables///////////////////////////////////// ibrahim
var MaintenanceFormName = "Alaraby Maintenance Form";
var TypeOfInquiry = new Object();
var GovernmentCodeField = "ldv_governmentcode";
var AccountField = "ldv_customername"
TypeOfInquiry["Product"] = 0;
TypeOfInquiry["Spare part"] = 1;
TypeOfInquiry["Product Price"] = 2;
var TypeOfInquiryField = "ldv_typeinquiry";
var BuildingNumberField = "ldv_buildingnumber";
var WorkOrderEntityName = "Incident";
var DistrictFieldSales = "ldv_districtsales";
var InquiryFormName = "Alaraby Inquiry Form";
var RangFromField = "ldv_RangeFrom";
var CentralTelephoneNameField = "ldv_CentralTelephoneName";
var ProductTypeField = "ldv_producttype";
var ProductGroupField = "ldv_productgroup";
var ComplaintCancelStatusValue = 753240030;
var ModelNumberFlag = true;
var CustomerTypeField = "ldv_customertype";
var CustomerTypeValue = new Object();
CustomerTypeValue["753240000"] = "Individual Customer";
CustomerTypeValue["753240001"] = "Corporate Customer";
var WorkOrderTypeValues = new Object();
WorkOrderTypeValues["Installation"] = 0;
WorkOrderTypeValues["Maintenance"] = 1;
WorkOrderTypeValues["Customer Care"] = 2;
WorkOrderTypeValues["Complaint"] = 3;
WorkOrderTypeValues["Inquiry"] = 4;
var CentralTelephoneIDField = "ldv_centraltelephoneId";
var BrandField = "ldv_brand";
var CentralTelephoneCodeField = "ldv_CentralTelephoneCode";
var uniqueId = "1234";
var message = "Write only numbers - من فضلك ادخل ارقام فقط ولا يقل عن 11 رقم";
var message1 = "Write only numbers - من فضلك ادخل ارقام فقط ";
var ModelNumberField = "ldv_modelnumber";
var CentralTelephoneEntityName = "ldv_centraltelephone";
var WorkOrdertype = "ldv_workordertype";
var MSCorASCField = "ldv_mscorasc"

var CustomerNameField = "customerid";
var LandLineField = "ldv_landline";
var centraltelephoneField = "ldv_centraltelephone";
var MobileNumberField = "ldv_mobilenumber";
var GovernmentField = "ldv_government";
var AddressField = "ldv_address";
var CustomerEntityName = "Account";
var DistrictField = "ldv_district";
var ReferenceContactField = "ldv_referencecontact";
var SegmentationField = "ldv_segmentation";
var MethodofCommunicationField = "ldv_methodofcommunication";
var anytext = "{EAF163B8-0000-0000-0000-3863BB35CFC0}";
var ComplaintFormLabel = "Alaraby Complaint From";
var CancelStateCode = 2;
var Complaint_StatusValues = new Object();
var CentralRangesEntity = "ldv_centralrange";
Complaint_StatusValues["Complaint Canceled"] = 753240030;
var FieldstoBeLocked = ["ldv_customersatisfaction",
    "ldv_firstmanagerdecision",
    "ldv_reviewed",
    "ldv_complaintresolved",
    "ldv_commentfirstmanagerdiccomplaint",
    "ldv_commentreviewedcompl",
    "ldv_commentresolvedcomplaint",
"is_complaintvalidation",
"ldv_casenumber2",
"ldv_testdate",
"new_validornot",
]

var IsGovInCreate = true;
/////////////////////OnLoad Form/////////////////////////////////////////////////

function Inquiry_OnLoadForm(executionContext) {
    var _execution = executionContext;
    _executionForm = executionContext.getFormContext();
    NavigateToForm();

    _executionForm.getAttribute(MobileNumberField).setRequiredLevel("required");
    _executionForm.getAttribute(ReferenceContactField).setRequiredLevel("none");
    var frmType = _executionForm.ui.getFormType();
    if (frmType == 1) {
        _executionForm.ui.controls.get("Product_grd").setVisible(false);
        _executionForm.ui.controls.get("SpareParts_grd").setVisible(false);

    }
    else if (frmType == 2) {
        Complaint_OnChangeWorkOrdertype();
        Complaint_OnchangeTypeOfInquiry();
        Complaint_ProductExist();
    }
    else {
        Complaint_OnChangeWorkOrdertype();
        _executionForm.ui.controls.get("Product_grd").setVisible(true);
        _executionForm.ui.controls.get("SpareParts_grd").setVisible(true);
    }
    IsGovInCreate = true;


}

function Complaint_OnLoadForm(executionContext) {
    _executionForm = executionContext.getFormContext();
    _executionForm.getAttribute(MobileNumberField).setRequiredLevel("required");
    _executionForm.getAttribute(ReferenceContactField).setRequiredLevel("none");
    var frmType = _executionForm.ui.getFormType();
    if (frmType != 1) Complaint_OnChangeWorkOrdertype();
    if (frmType != 1 && !CheckUserRole("Call Center User")) {
        DimAllFields(FieldstoBeLocked);
    }
    if (_executionForm.getAttribute(ProductGroupField).getValue() != null) {
        _executionForm.ui.tabs.get("general").sections.get("Product_Sec").setVisible(true);
        _executionForm.getControl(ProductGroupField).setVisible(true);
        _executionForm.getControl(BrandField).setVisible(true);
        _executionForm.getControl(ProductTypeField).setVisible(true);
        _executionForm.getControl(ModelNumberField).setVisible(true);
    }
}

////////////////////OnSave Form//////////////////////////////////////////////////

function Inquiry_OnSaveForm(ExContext) {
    //debugger;
    var EventArg = ExContext.getEventArgs();
    var ResolvedValue = _executionForm.getAttribute("new_inquiryresolved").getValue();
    var frmType = _executionForm.ui.getFormType();
    if (frmType != 1 && ResolvedValue != 0) {
        if (Complaint_ProductExist() <= 0) {
            ExContext.getEventArgs().preventDefault();
            _executionForm.getAttribute("new_inquiryresolved").setValue(0);
            alert("Please Choose Product or Sparpart first");
        }
    }
    IsGovInCreate = false;
}

function Complaint_OnSaveForm(ExContext) {


    var District = _executionForm.getAttribute("ldv_districtsales").getValue();
    var LandLine = _executionForm.getAttribute(LandLineField).getValue();
    var Area = _executionForm.getAttribute("ldv_area").getValue();
    var CentralTelephone = _executionForm.getAttribute(centraltelephoneField).getValue();

    IsGovInCreate = false;
}
/////////////////////OnChange//////////////////////////////////

function Complaint_OnChangeAccount() {
    try {
        //debugger;
        var Account = _executionForm.getAttribute(AccountField).getValue();
        if (Account != null) {
            _executionForm.getAttribute(CustomerNameField).setValue(Account);
            Complaint_OnChangeCustomerName();
        }
        else
            Complaint_ClearFields();
    }
    catch (e)
    { }
}

function Complaint_OnChangeCustomerName() {
    //debugger;
    try {
        Complaint_ClearFields();
        _executionForm.getAttribute("ldv_workordernumber").setValue(null);
    }
    catch (e)
    { }
    Complaint_CustomerPreparation();
}

function Complaint_OnChangeWorkOrder() {
    _executionForm.getAttribute(ProductGroupField).setValue(null);
    _executionForm.getAttribute(BrandField).setValue(null);
    _executionForm.getAttribute(ProductTypeField).setValue(null);
    _executionForm.getAttribute(ModelNumberField).setValue(null);
    var WorkOrderID = _executionForm.getAttribute("ldv_workordernumber").getValue();
    if (WorkOrderID != null) Complaint_GetWorkOrder(WorkOrderID[0].id);
}

function Complaint_CustomerPreparation() {
    //get the name of the customer name and then get the records its self
    var Name = Complaint_GetTheCurrentCustomerName();
    if (Name != null) {
        Complaint_GetCustomerRecord(Name[0].id);
    }
}

function Complaint_OnChangeLandLine(num) {
    debugger;
    var landlineNum;
    if (num != null) landlineNum = num;
    else landlineNum = _executionForm.getAttribute(LandLineField).getValue();
    var landline = _executionForm.getAttribute(LandLineField).getValue();

    var code = Complaint_GetGovCode();

    if (landlineNum != null) {
        _executionForm.getControl("ldv_area").setVisible(false);
        landlineNum = code + landlineNum;
        landlineNum = landlineNum.substring(0, 4);
        var Query = "/api/data/v9.1/ldv_centralranges?$select=_ldv_centralname_value,ldv_rangefrom,ldv_rangeto&$filter=startswith(ldv_rangefrom,'" + landlineNum + "')";
        oData_Request(Query, function (result) {
            if (result.value.length > 0) {
                Complaint_Result(result.value);
            }
            else if (landline != "00000000") {
                _executionForm.getAttribute(centraltelephoneField).setValue(null);
                _executionForm.getAttribute("ldv_area").setValue(null);
                _executionForm.getAttribute(LandLineField).setValue(null);
            }
            else if (landline == "00000000" || (result.value.length == 0)) {
                _executionForm.getAttribute(centraltelephoneField).setValue(null);
                _executionForm.getAttribute("ldv_area").setValue(null);
                _executionForm.getControl("ldv_area").setVisible(true);

            }
        }, function (xhr, textStatus, errorThrown) {
            Xrm.Utility.alertDialog(textStatus + " " + errorThrown);
        });

        if (_executionForm.getAttribute("ldv_landline").getValue() != null) {
            if (Complaint_formatPhoneLandLine(_executionForm.getAttribute("ldv_landline").getValue())) {
                _executionForm.getControl("ldv_landline").clearNotification(uniqueId);
            }
            else {
                _executionForm.getControl("ldv_landline").setNotification(message1, uniqueId);
                var newMail = _executionForm.getAttribute("ldv_landline").setValue("");
            }
        }
    }
    num = null;
}

function Complaint_OnChangeWorkOrdertype() {
    var CurrentRecored = _executionForm.data.entity.getId();
    var Type = _executionForm.getAttribute(WorkOrdertype).getValue();
    var FormId = null;
    if (Type == 4) {
        FormId = InquiryFormId;
    }
    else if (Type == 1) {
        FormId = MaintenanceFormId;
    }
    else if (Type == 3) FormId = ComplainFormId;
    else if (Type == 0)
        FormId = InstallationFormId;
    else if (Type == 5)
        FormId = IspectionFormId;
    var parameters = {};
    if (_executionForm.getAttribute(CustomerNameField).getValue() != null)
        parameters = Complaint_GetCustomerInfo();
    parameters["formid"] = FormId;
    var formselector = _executionForm.ui.formSelector;

    if (formselector != null && formselector != undefined && formselector.getCurrentItem().getId() != FormId && FormId != null) {
        Xrm.Utility.openEntityForm("incident", CurrentRecored, parameters);

    }
}

function Complaint_ReferenceContact_OnChange() {
    if (_executionForm.getAttribute("ldv_referencecontact").getValue() != null) {
        if (Complaint_formatPhone(_executionForm.getAttribute("ldv_referencecontact").getValue())) {
            _executionForm.getControl("ldv_referencecontact").clearNotification(uniqueId);
        }
        else {
            _executionForm.getControl("ldv_referencecontact").setNotification(message, uniqueId);
            var newMail = _executionForm.getAttribute("ldv_referencecontact").setValue("");
        }
    }
}

function Complaint_MobileNumber_OnChange() {
    if (_executionForm.getAttribute("ldv_mobilenumber").getValue() != null) {
        if (Complaint_formatPhone(_executionForm.getAttribute("ldv_mobilenumber").getValue())) {
            _executionForm.getControl("ldv_mobilenumber").clearNotification(uniqueId);
        }
        else {
            _executionForm.getControl("ldv_mobilenumber").setNotification(message, uniqueId);
            var newMail = _executionForm.getAttribute("ldv_mobilenumber").setValue("");
        }
    }
}

function Complaint_OnchangeTypeOfInquiry() {
    var TypeOfInqiryValue = _executionForm.getAttribute(TypeOfInquiryField).getValue();
    if (TypeOfInqiryValue == TypeOfInquiry["Product"] || TypeOfInqiryValue == TypeOfInquiry["Product Price"]) {
        _executionForm.ui.controls.get("SpareParts_grd").setVisible(false);
        _executionForm.ui.controls.get("Product_grd").setVisible(true);
    }
    else if (TypeOfInqiryValue == TypeOfInquiry["Spare part"]) {
        _executionForm.ui.controls.get("Product_grd").setVisible(false);
        _executionForm.ui.controls.get("SpareParts_grd").setVisible(true);
    }
}

function Complaint_FilterModelNumber() {

    if (ModelNumberFlag) {
        _executionForm.getControl(ModelNumberField).addPreSearch(function () {
            var ProdTypObject = _executionForm.getAttribute(ProductTypeField).getValue();
            var PrdGrpObject = _executionForm.getAttribute(ProductGroupField).getValue();
            ModelNumberFlag = false;
            // Get the lookup Object, and extract the Value (ID and Text)
            if (ProdTypObject != null) {
                var ProdTypText = ProdTypObject[0].name;
                var ProdTypID = ProdTypObject[0].id;
                var PrdGrpText = PrdGrpObject[0].name;
                var PrdGrpID = PrdGrpObject[0].id;
                // Filter the District by Governments
                fetchXml = "<filter type='and'>" +
                    "<condition attribute='" + ProductTypeField + "' operator='eq' uiname='" + ProdTypText + "' uitype='" + ProductTypeField + "' value='" + ProdTypID + "' />" +
                    "<condition attribute='" + ProductGroupField + "' operator='eq' uiname='" + PrdGrpText + "' uitype='" + ProductGroupField + "' value='" + PrdGrpID + "' />" +
                    "</filter>";
                // Apply the filter to the field
                _executionForm.getControl(ModelNumberField).addCustomFilter(fetchXml);
            }
            else {
                fetchXml = "<filter type='and'><condition attribute=" + "'" + ProductTypeField + "' operator='eq' uiname='" + anytext + "' uitype='" + ProductTypeField + "' value='" + anytext + "' /></filter>";
                // Apply the filter to the field
                _executionForm.getControl(ModelNumberField).addCustomFilter(fetchXml);
                _executionForm.getAttribute(ModelNumberField).setValue(null);
            }
        });
    }
}

function Complaint_OnChangePG() {
    _executionForm.getAttribute(BrandField).setValue(null);
    _executionForm.getAttribute(ProductTypeField).setValue(null);
    _executionForm.getAttribute(ModelNumberField).setValue(null);
}

function Complaint_OnChangeBrand() {
    _executionForm.getAttribute(ProductTypeField).setValue(null);
    _executionForm.getAttribute(ModelNumberField).setValue(null);
}

function Complaint_OnChangePT() {
    _executionForm.getAttribute(ModelNumberField).setValue(null);
}

function Complaint_OnchangeGovernment() {
    if (IsGovInCreate == true) {
        _executionForm.getAttribute(centraltelephoneField).setValue(null);
        _executionForm.getAttribute("ldv_area").setValue(null);
        _executionForm.getAttribute(LandLineField).setValue(null);

    }
    IsGovInCreate = true;
    if (_executionForm.getAttribute(GovernmentField).getValue() != null) {

        var Code = Complaint_GetGovCode();
        if (Code != null) _executionForm.getAttribute(GovernmentCodeField).setValue(Code);
        //Complaint_OnChangeLandLine();
    }
}
///////////////////General Functions////////////////////

function Complaint_Result(result) {
    //debugger;
    var landlineNum = _executionForm.getAttribute(LandLineField).getValue();
    //var ProductGroup = _executionForm.getAttribute(ProductGroupField).getValue();


    var code = Complaint_GetGovCode();
    landlineNum = code + landlineNum
    var centralTelephoneResult = Complaint_SearchForTelephonCode(landlineNum, result);
    var frmType = _executionForm.ui.getFormType();
    if (frmType == 1 || frmType == 2)
        Complaint_FillTheCentTelField(centralTelephoneResult);
    //if (ProductGroup != null) GetSpecificCentral();
}

function Complaint_GetCustomerRecord(id) {
    SDK.REST.retrieveMultipleRecords(CustomerEntityName, "$filter=AccountId eq guid'" + id + "'", Complaint_AutoFillRec, Complaint_AutoFillRec, Complaint_AutoFillRec);
}


function Complaint_AutoFillRec(customer) {

    if (customer != null) {

        if (customer[0].ldv_LandLine != null) {
            _executionForm.getAttribute(LandLineField).setValue(customer[0].ldv_LandLine);

        }
        else {
            if (customer[0].ldv_CentralTelephone != null) {
                _executionForm.getAttribute(LandLineField).setValue("00000000");
            }

        }
        if (customer[0].ldv_districtsales != null)
            _executionForm.getAttribute(DistrictFieldSales).setValue(customer[0].ldv_districtsales);
        if (customer[0].ldv_BuildingNumber != null) _executionForm.getAttribute(BuildingNumberField).setValue(customer[0].ldv_BuildingNumber);

        if (customer[0].ldv_CentralTelephone != null && customer[0].ldv_CentralTelephone.Id != null) {
            _executionForm.getAttribute(centraltelephoneField).setValue(Complaint_GetLookupObj(customer[0].ldv_CentralTelephone));
            _executionForm.getControl(centraltelephoneField).setVisible(true);
            _executionForm.getControl(centraltelephoneField).setDisabled(true);
            _executionForm.getAttribute("ldv_area").setRequiredLevel("none");
            _executionForm.getControl("ldv_area").setVisible(false);
        }

        else {
            _executionForm.getControl(centraltelephoneField).setVisible(false);
            _executionForm.getControl(centraltelephoneField).setDisabled(false);
            _executionForm.getAttribute("ldv_area").setRequiredLevel("required");
            _executionForm.getControl("ldv_area").setVisible(true);
            Complaint_OnChangeLandLine();
        }
        if (customer[0].ldv_Government != null && customer[0].ldv_Government.Id != null) {
            IsGovInCreate = false;
            _executionForm.getAttribute(GovernmentField).setValue(Complaint_GetLookupObj(customer[0].ldv_Government));

            Complaint_OnchangeGovernment();
        }

        if (customer[0].ldv_Area != null) {

            _executionForm.getAttribute("ldv_area").setValue(Complaint_GetLookupObj(customer[0].ldv_Area));

        }

        if (customer[0].Address1_Composite != null) _executionForm.getAttribute(AddressField).setValue(customer[0].Address1_Composite);

        if (customer["ldv_districtsales"] != null) _executionForm.getAttribute(DistrictField).setValue(customer[0].ldv_districtSales);

        if (customer[0].ldv_MobileNumber != null) _executionForm.getAttribute(MobileNumberField).setValue(customer[0].ldv_MobileNumber);
        if (customer[0].ldv_ReferenceContact != null) _executionForm.getAttribute(ReferenceContactField).setValue(customer[0].ldv_ReferenceContact);

        if (customer[0].ldv_Segmentation != null) _executionForm.getAttribute(SegmentationField).setValue(customer[0].ldv_Segmentation.Value);

        if (customer[0].ldv_Gender1 != null) _executionForm.getAttribute("ldv_gender1").setValue(customer[0].ldv_Gender1.Value);

        if (customer[0].ldv_MethodofCommunication != null) _executionForm.getAttribute(MethodofCommunicationField).setValue(customer[0].ldv_MethodofCommunication.Value);

        if (customer[0].ldv_CustomerType != null) _executionForm.getAttribute(CustomerTypeField).setValue(customer[0].ldv_CustomerType.Value);


    }
}

function Complaint_GetTheCurrentCustomerName() {
    var obj = _executionForm.getAttribute(CustomerNameField).getValue();
    return obj;
}

function Complaint_GetLookupObj(obj) {
    debugger;
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

function Complaint_SearchForTelephonCode(landline, telephons) {

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
} //Reviewed

function Complaint_FillTheCentTelField(obj) {
    //debugger;

    var Gov = _executionForm.getAttribute(GovernmentField).getIsDirty();
    var landline = _executionForm.getAttribute(LandLineField).getIsDirty();
    var landlineValue = _executionForm.getAttribute(LandLineField).getValue();
    var lookupItem = new Object();
    var lookupData = new Array();
    _executionForm.getAttribute("ldv_area").setRequiredLevel("required");
    _executionForm.getControl("ldv_area").setVisible(true);
    _executionForm.getControl(centraltelephoneField).setVisible(false);
    _executionForm.getControl(centraltelephoneField).setDisabled(false);

    if (obj == null && landline == true && landlineValue == "00000000") {
        _executionForm.getAttribute(centraltelephoneField).setValue(null);
        _executionForm.getAttribute("ldv_area").setValue(null);
        //_executionForm.getAttribute(LandLineField).setValue(null);
    }
    else if (obj != null && (landline == true || Gov == true) && landlineValue != null) {
        if (obj["_ldv_centralname_value"] != null) {
            var rangeQuery = "/api/data/v9.1/ldv_centraltelephones(" + obj["_ldv_centralname_value"].replace(/[{}]/g, "") + ")?$select=ldv_centraltelephonename";
            oData_Request(rangeQuery, function (data) {

                lookupItem.name = data["ldv_centraltelephonename"];
                lookupItem.entityType = "ldv_centraltelephone";
                lookupItem.id = obj["_ldv_centralname_value"];
                lookupData[0] = lookupItem;
                _executionForm.getAttribute(centraltelephoneField).setValue(lookupData);
            });

        }
        _executionForm.getAttribute("ldv_area").setRequiredLevel("none");
        _executionForm.getControl("ldv_area").setVisible(false);
        _executionForm.getControl(centraltelephoneField).setVisible(true);
        _executionForm.getControl(centraltelephoneField).setDisabled(true);
    }
    else if (obj == null && landline == true && landlineValue != "00000000") {
        _executionForm.getAttribute("ldv_area").setRequiredLevel("required");
        _executionForm.getControl("ldv_area").setVisible(true);
        _executionForm.getControl(centraltelephoneField).setVisible(false);
        _executionForm.getControl(centraltelephoneField).setDisabled(false);
    }
    else {
        _executionForm.getAttribute("ldv_area").setRequiredLevel("none");
        _executionForm.getControl("ldv_area").setVisible(false);
        _executionForm.getControl(centraltelephoneField).setVisible(true);
        _executionForm.getControl(centraltelephoneField).setDisabled(true);
    }
} //Reviewed

function Complaint_GetProductGroup(EquipId) {
    EquipId = EquipId.toLowerCase();
    EquipId = EquipId.replace(/[{}]/g, "");
    var equipment = null;
    var Query = "/api/data/v9.1/ldv_equipments?$expand=ldv_product_ldv_equipment_Product&$filter=ldv_equipmentId eq " + EquipId;
    oData_Request(Query, function (result) {

        equipment = result.value[0];
    }, function (xhr, textStatus, errorThrown) {
        alert('OData Select Failed: ' + textStatus + errorThrown);
    });

    return equipment;
} //Reviewed

function Complaint_formatPhone(phonenum) {
    var regexObj1 = /^\d+$/;
    var regexObj2 = /^\d{11}(\d{1})?$/
    return (regexObj1.test(phonenum) && regexObj2.test(phonenum));
} //Reviewed

function Complaint_formatPhoneLandLine(phonenum) {
    var regexObj1 = /^\d+$/;
    return regexObj1.test(phonenum);
} //Reviewed

function Complaint_GetNumOfProd(InquiryID) {

    InquiryID = InquiryID.toLowerCase();
    InquiryID = InquiryID.replace(/[{}]/g, "");
    var Query = "/api/data/v9.1/ldv_inquiry_products?$filter=_ldv_inquiry_value eq " + InquiryID;
    var roleName = null;
    oData_Request(Query,
        function (result) {

            roleName = result.value;
        },
        function (XmlHttpRequest, textStatus, errorThrown) {
            //  alert('OData Select Failed: ' + textStatus + errorThrown + Query);
        });
    return roleName.length;
}

function Complaint_GetNumOfSparParts(InquiryID) {
    InquiryID = InquiryID.toLowerCase();
    InquiryID = InquiryID.replace(/[{}]/g, "");

    var Query = "/api/data/v9.1/ldv_inquiry_spareparts?$filter=_ldv_inquiry_value eq " + InquiryID;
    var roleName = null;
    oData_Request(Query,
        function (result) {

            roleName = result.value;
        },
        function (XmlHttpRequest, textStatus, errorThrown) {
            alert('Complaint_GetNumOfSparParts Failed: ' + textStatus + errorThrown + Query);
        });
    return roleName.length;
}

function CehckNumberOfInquriedProduct() {
    try {
        var frmType = _executionForm.ui.getFormType();
        if (frmType != 1) {
            var InquiryId = _executionForm.data.entity.getId();
            var TypeOfInqiryValue = _executionForm.getAttribute(TypeOfInquiryField).getValue();
            var NumberOfInquires = 0;
            var numOfProd = Complaint_GetNumOfProd(InquiryId);
            var numOfSpareParts = Complaint_GetNumOfSparParts(InquiryId);
            NumberOfInquires = numOfProd + numOfSpareParts;
            if (NumberOfInquires >= 3) return false;
            else return true;
        }
        else return false;
    }
    catch (e) {
        return true;
    }
}

function Complaint_OnChangeModelNumber() {
    var PrdId = _executionForm.getAttribute(ModelNumberField).getValue()[0].id;
    SDK.REST.retrieveMultipleRecords(ProductProblemEntityName, "$select=ldv_Product,ldv_Problem&$filter=ldv_Product/Id eq guid'" + PrdId + "'", Complaint_FilterProblem, function (error) {
        alert(error.message);
    }, function myfunction(error)
    { });
}

function Complaint_GetWorkOrder(WorkORderId) {
    if (WorkORderId != null && WorkORderId != undefined) SDK.REST.retrieveMultipleRecords(WorkOrderEntityName, "$select=ldv_Resource,ldv_Site,ldv_ScheduledServiceStartDate,ldv_sapordernumber,StatusCode,ldv_CustomerType,ldv_ProductGroup,ldv_Brand,ldv_ModelNumber,ldv_ProductType&$filter=IncidentId eq guid'" + WorkORderId + "'", Complaint_AutoFillComplaint, function (error) {
        alert(error.message);
    }, function myfunction(error)
    { });
}

// updated by Mahmoud Lock fields  related jira issue EA-610 
function Complaint_AutoFillComplaint(WorkOrder) {
    if (WorkOrder != null && WorkOrder[0].ldv_ProductGroup.Id != null) {
        _executionForm.ui.tabs.get("general").sections.get("Product_Sec").setVisible(true);
        _executionForm.getControl(ProductGroupField).setVisible(true);
        _executionForm.getControl(BrandField).setVisible(true);
        _executionForm.getControl(ProductTypeField).setVisible(true);
        _executionForm.getControl(ModelNumberField).setVisible(true);
        _executionForm.getAttribute(ProductGroupField).setRequiredLevel("required");
        _executionForm.getAttribute(BrandField).setRequiredLevel("required");
        _executionForm.getAttribute(ProductTypeField).setRequiredLevel("required");
        _executionForm.getAttribute(ModelNumberField).setRequiredLevel("required");

        _executionForm.getAttribute(ProductGroupField).setValue(Complaint_GetLookupObj(WorkOrder[0].ldv_ProductGroup));

        _executionForm.getControl(ProductGroupField).setDisabled(true);

        _executionForm.getAttribute(BrandField).setValue(Complaint_GetLookupObj(WorkOrder[0].ldv_Brand));
        _executionForm.getControl(BrandField).setDisabled(true);

        _executionForm.getAttribute(ProductTypeField).setValue(Complaint_GetLookupObj(WorkOrder[0].ldv_ProductType));
        _executionForm.getControl(ProductTypeField).setDisabled(true);

        _executionForm.getAttribute(ModelNumberField).setValue(Complaint_GetLookupObj(WorkOrder[0].ldv_ModelNumber));
        _executionForm.getControl(ModelNumberField).setDisabled(true);



    }
    else if (CustomerTypeValue[WorkOrder[0].ldv_CustomerType.Value] == "Individual Customer") {
        _executionForm.ui.tabs.get("general").sections.get("Product_Sec").setVisible(true);
        _executionForm.getAttribute(ProductGroupField).setRequiredLevel("required");
        _executionForm.getAttribute(BrandField).setRequiredLevel("required");
        _executionForm.getAttribute(ProductTypeField).setRequiredLevel("required");
        _executionForm.getAttribute(ModelNumberField).setRequiredLevel("required");
    }
    else if (CustomerTypeValue[WorkOrder[0].ldv_CustomerType.Value] == "Corporate Customer") {
        _executionForm.getAttribute(ProductGroupField).setRequiredLevel("none");
        _executionForm.getAttribute(BrandField).setRequiredLevel("none");
        _executionForm.getAttribute(ProductTypeField).setRequiredLevel("none");
        _executionForm.getAttribute(ModelNumberField).setRequiredLevel("none");
        _executionForm.ui.tabs.get("general").sections.get("Product_Sec").setVisible(false);
    }

    if (WorkOrder[0].ldv_Resource != null) {
        _executionForm.getAttribute("ldv_resource").setValue(WorkOrder[0].ldv_Resource);

        _executionForm.getControl("ldv_resource").setDisabled(true);
    }
    if (WorkOrder[0].ldv_Site != null && WorkOrder[0].ldv_Site.Id != null) {
        _executionForm.getAttribute("ldv_site").setValue(Complaint_GetLookupObj(WorkOrder[0].ldv_Site));
        _executionForm.getControl("ldv_site").setDisabled(true);
    }
    _executionForm.getControl("ldv_scheduledservicestartdate").setDisabled(true);
    if (WorkOrder[0].ldv_ScheduledServiceStartDate != null) {
        _executionForm.getAttribute("ldv_scheduledservicestartdate").setValue(WorkOrder[0].ldv_ScheduledServiceStartDate);
    }
    if (WorkOrder[0].ldv_sapordernumber != null) {
        _executionForm.getAttribute("ldv_sapordernumber").setValue(WorkOrder[0].ldv_sapordernumber);
        _executionForm.getControl("ldv_sapordernumber").setDisabled(true);
    }
    if (WorkOrder[0].StatusCode != null && WorkOrder[0].StatusCode.Value != null) {
        RetrieveOptionsetLabel(WorkOrder[0].StatusCode.Value);
    }
}

function RetrieveOptionsetLabel(stateValue) {
    // Entity schema name 
    var entityLogicalName = WorkOrderEntityName;
    // option set schema name
    var RetrieveAttributeName = "statuscode";
    // Target Field schema name to which optionset text needs to be assigned
    var AssignAttributeName = "statuscode";

    // Calling Metadata service to get Optionset Label
    SDK.Metadata.RetrieveAttribute(entityLogicalName, RetrieveAttributeName, "00000000-0000-0000-0000-000000000000", true,
        function (result) {
            for (var i = 0; i < result.OptionSet.Options.length; i++) {
                var value = result.OptionSet.Options[i].Value;
                if (value == stateValue) {
                    var text = result.OptionSet.Options[i].Label.LocalizedLabels[0].Label;
                    _executionForm.getAttribute("new_statusreason").setValue(text);
                    _executionForm.getAttribute("new_statusreason").setDisabled(true)
                }
            }
        },
        function (error) {

            Xrm.Utility.alertDialog("An error has occured,Please contact System administrator " + errorThrown);

        }
    );
}

function CancelRecored() {
    var recordGuid = _executionForm.data.entity.getId();
    //StateCode   2 - Disqualified
    //StatusCode 4 - Lost
    Complaint_setRecordStatus("incident", recordGuid, CancelStateCode.toString(), ComplaintCancelStatusValue.toString());
}

function Complaint_setRecordStatus(entitySchemaName, recordGuid, stateCode, statusCode) {
    var entity = {};
    entity.statuscode = statusCode;
    entity.statecode = stateCode;

    recordGuid = recordGuid.toLowerCase();
    recordGuid = recordGuid.replace(/[{}]/g, "");
    var req = new XMLHttpRequest();
    req.open("PATCH", _executionForm.context.getClientUrl() + "/api/data/v9.1/incidents(" + recordGuid + ")", false);
    req.setRequestHeader("OData-MaxVersion", "4.0");
    req.setRequestHeader("OData-Version", "4.0");
    req.setRequestHeader("Accept", "application/json");
    req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    req.onreadystatechange = function () {
        if (this.readyState === 4) {
            req.onreadystatechange = null;
            if (this.status === 204) {
                var CurrentRecored = _executionForm.data.entity.getId();
                var parameters = {};
                parameters["formid"] = _executionForm.ui.formSelector.getCurrentItem().getId();
                // HideMessage();
                Xrm.Utility.openEntityForm("incident", CurrentRecored, parameters);
                //Success - No Return Data - Do Something
            }
            else {
                // Xrm.Utility.alertDialog(this.statusText);
            }
        }
    };
    req.send(JSON.stringify(entity));
}

function isComplaint() {
    debugger;
    try {
        var frmType = _executionForm.ui.getFormType();
        var Type = _executionForm.getAttribute(WorkOrdertype).getValue();
        var CurrentStatus = _executionForm.getAttribute("statuscode").getValue();
        if ((Type == WorkOrderTypeValues["Complaint"] && CurrentStatus != Complaint_StatusValues["Complaint Canceled"] && frmType == 2) && (CheckUserRole("Complaints Supervisor ") || CheckUserRole("Complaints Specialist") || CheckUserRole("Complaints special"))) return true; //fawzyk20190819
        else
            return false;
    }
    catch (e) {
        return false;
    }
}


function Complaint_ProductExist() {
    var ProductsNum = GetNumberOfProducts();
    var SparePartsNum = GetNumberOfSpareParts();
    return parseInt(ProductsNum) + parseInt(SparePartsNum);
}

function GetNumberOfSpareParts() {

    var CurrentCaseID = _executionForm.data.entity.getId();
    CurrentCaseID = CurrentCaseID.toLowerCase();
    CurrentCaseID = CurrentCaseID.replace(/[{}]/g, "");
    var RelatedServiceActivities = null;

    var Query = "/api/data/v9.1/ldv_inquiry_spareparts?$filter=_ldv_inquiry_value eq " + CurrentCaseID;
    oData_Request(Query,
        function (result) {
            RelatedServiceActivities = result.value;

            if (RelatedServiceActivities.length > 0) {
                _executionForm.ui.controls.get("SpareParts_grd").setVisible(true);
                return RelatedServiceActivities.length;
            }
            // RelatedServiceActivities = result.value[0];
        },
        function (XmlHttpRequest, textStatus, errorThrown) {
            alert('GetNumberOfSpareParts Failed: ' + textStatus + errorThrown + Query);
        });


}

function GetNumberOfProducts() {

    var CurrentCaseID = _executionForm.data.entity.getId();
    CurrentCaseID = CurrentCaseID.toLowerCase();
    CurrentCaseID = CurrentCaseID.replace(/[{}]/g, "");
    var RelatedServiceActivities;

    var Query = "/api/data/v9.1/ldv_inquiry_products?$filter=_ldv_inquiry_value eq " + CurrentCaseID;
    oData_Request(Query,
        function (result) {
            RelatedServiceActivities = result.value;

            if (RelatedServiceActivities.length > 1) {
                _executionForm.ui.controls.get("Product_grd").setVisible(true);
                return RelatedServiceActivities.length;
            }
        },
        function (XmlHttpRequest, textStatus, errorThrown) {
            alert('GetNumberOfProducts Failed: ' + textStatus + errorThrown + Query);
        });

}

function DimAllFields(ExceptionFields) {

    _executionForm.data.entity.attributes.forEach(function (attribute, index) {
        if (ExceptionFields.indexOf(attribute.getName()) == -1) var control = _executionForm.getControl(attribute.getName());
        if (control) {
            control.setDisabled(true)
        }
    });
}

function CheckUserRole(RoleToCheck) {
    var currentUserRoles = _executionForm.context.getUserRoles();
    for (var i = 0; i < currentUserRoles.length; i++) {
        var userRoleId = currentUserRoles[i];
        var userRoleName = GetRoleName(userRoleId);
        if (userRoleName == RoleToCheck) {
            return true;
        }
    }
    return false;
}
//Get Rolename based on RoleId

function GetRoleName(roleId) {
    try {
        var Query = "/api/data/v9.1/roles(" + roleId + ")?$select=name";

        var roleName = null;
        oData_Request(Query,
            function (result) {
                roleName = result["name"];
            },
            function (XmlHttpRequest, textStatus, errorThrown) {
                alert('GetRoleName Failed: ' + textStatus + errorThrown + Query);

            });
        return roleName;
    }
    catch (xxx) {
        return "";//fawzy20191215 add try and catch to solve issue
    }
}
var MaintenanceFormId = "5b4526d8-dfad-41fa-a4f5-fd52337e65db";
var ComplainFormId = "c44adeef-8c87-45a5-abec-3f094590012a";
var InquiryFormId = "9d3ff23f-2296-4bab-be3b-14f15c86f620";
var InstallationFormId = "57517289-ab6a-4619-a960-7637d4d0afdf";
var IspectionFormId = "aad9017a-9236-4aef-a7af-e86bf5192125";

function IsWorkOrder() {
    var WorkOrderType = _executionForm.ui.formSelector.getCurrentItem().getId();
    if (WorkOrderType == MaintenanceFormId || WorkOrderType == InstallationFormId || WorkOrderType == IspectionFormId) {
        return true;
    }
    return false;
}

//function ShowMessage(msg) {
//    try {
//        debugger;
//        var newdiv = parent.document.createElement('div');
//        newdiv.setAttribute('id', "msgDiv");
//        newdiv.valign = "middle";
//        newdiv.align = "center";
//        newdiv.innerHTML = '<p style="color:black; position:relative; top:20em; valign:middle; align:center"><b>' + msg + '</b></p><br><br>&nbsp;';
//        //newdiv.style.left = ((screen.width / 2) - 225) + 'px'; //'45%';   
//        newdiv.style.leftMargin = '-150px';
//        newdiv.style.background = 'Gray';
//        //newdiv.style.opacity = '0.9';
//        newdiv.style.zIndex = '100000000';
//        newdiv.style.fontSize = "45px";
//        //newdiv.style.top = ((screen.height / 2) - 50) + 'px';
//        newdiv.style.border = "2px solid #000";
//        newdiv.style.zIndex = "10";
//        newdiv.style.width = "100%";
//        newdiv.style.height = "100%";
//        newdiv.style.filter = "alpha(opacity=90),dropShadow(color=gray, offX=7, offY=7)";
//        newdiv.style.position = 'absolute';
//        parent.document.body.insertBefore(newdiv, parent.document.body.firstChild);
//        parent.document.getElementById("msgDiv").style.visibility = 'visible';
//        parent.document.getElementById("msgDiv").focus();
//    }
//    catch (e)
//    { }
//}  //Not Used

//function HideMessage() {
//    try {
//        parent.document.getElementById("msgDiv").style.visibility = 'hidden';
//    }
//    catch (e)
//    { }
//}  //Not used

function Complaint_GetCustomerInfo() {

    var parameters = {};
    var Customer = _executionForm.getAttribute(CustomerNameField).getValue();
    var Government = _executionForm.getAttribute(GovernmentField).getValue();
    var District = _executionForm.getAttribute("ldv_districtsales").getValue();
    var LandLine = _executionForm.getAttribute(LandLineField).getValue();
    var BuildingNumber = _executionForm.getAttribute(BuildingNumberField).getValue();
    var Address = _executionForm.getAttribute(AddressField).getValue();
    var Area = _executionForm.getAttribute("ldv_area").getValue();
    var CentralTelephone = _executionForm.getAttribute(centraltelephoneField).getValue();
    var MobileNumber = _executionForm.getAttribute(MobileNumberField).getValue();
    var RefrenceContact = _executionForm.getAttribute(ReferenceContactField).getValue();
    var GovCode = _executionForm.getAttribute(GovernmentCodeField).getValue();
    var Segmentation = _executionForm.getAttribute(SegmentationField).getValue();
    var CustomerType = _executionForm.getAttribute(CustomerTypeField).getValue();
    var Gender = _executionForm.getAttribute("ldv_gender1").getValue();
    var MethodofCommunication = _executionForm.getAttribute(MethodofCommunicationField).getValue();


    parameters[LandLineField] = LandLine == null ? "" : LandLine;
    parameters[MobileNumberField] = MobileNumber == null ? "" : MobileNumber;
    parameters[ReferenceContactField] = RefrenceContact == null ? "" : RefrenceContact;
    parameters[SegmentationField] = Segmentation == null ? "" : Segmentation;
    parameters[CustomerTypeField] = CustomerType == null ? "" : CustomerType;
    parameters[BuildingNumberField] = BuildingNumber == null ? "" : BuildingNumber;
    parameters[AddressField] = Address == null ? "" : Address;
    parameters["ldv_districtsales"] = District == null ? "" : District;
    parameters[GovernmentCodeField] = GovCode == null ? "" : GovCode;
    parameters["ldv_gender1"] = Gender == null ? "" : Gender;
    parameters[MethodofCommunicationField] = MethodofCommunication == null ? "" : MethodofCommunication;



    if (Customer != null) {
        //parameters["ldv_customernamename"] = Customer[0].name;
        //parameters["ldv_customername"] = Customer[0].id.replace(/[{}]/g, "");
        //parameters["new_testcustomername"] = Customer[0].name;
        //parameters["new_testcustomer"] = Customer[0].id.replace(/[{}]/g, "");
        parameters["customeridname"] = Customer[0].name;
        parameters["customerid"] = Customer[0].id.replace(/[{}]/g, "");
        parameters["customeridtype"] = "account";
        //if (customer[0].ldv_Gender1 != null)
        //                _executionForm.getAttribute("ldv_gender1").setValue(customer[0].ldv_Gender1.Value);
        //            if (customer[0].ldv_MethodofCommunication != null)
        //                _executionForm.getAttribute(MethodofCommunicationField).setValue(customer[0].ldv_MethodofCommunication.Value);
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

function Complaint_ClearFields() {

    //clearing Customer data 
    _executionForm.getAttribute(GovernmentField).setValue(null);
    _executionForm.getAttribute("ldv_area").setValue(null);
    _executionForm.getAttribute(centraltelephoneField).setValue(null);
    _executionForm.getAttribute(MobileNumberField).setValue(null);
    _executionForm.getAttribute(ReferenceContactField).setValue(null);
    _executionForm.getAttribute(BuildingNumberField).setValue(null);
    _executionForm.getAttribute(AddressField).setValue(null);
    _executionForm.getAttribute(GovernmentCodeField).setValue(null);
    _executionForm.getAttribute(LandLineField).setValue(null);
    _executionForm.getAttribute("ldv_districtsales").setValue(null);
}

function Complaint_OnChangeArea() {
    //get the central related to this area
    var Area = _executionForm.getAttribute("ldv_area").getValue();
    if (Area != null) {
        var str = Area[0].id.toString();
        str = str.toLowerCase();
        str = str.replace(/[{}]/g, "");

        var Query = "/api/data/v9.1/ldv_centralareas(" + str + ")?$expand=ldv_centraltelephone";
        var roleName;
        oData_Request(Query,
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
                    _executionForm.getAttribute(centraltelephoneField).setValue(lookupData);
                    //commented by amr 28092017
                    //_executionForm.getAttribute(centraltelephoneField).setValue(Installation_GetLookupObj(roleName));
                    _executionForm.getControl(centraltelephoneField).setVisible(true)
                    _executionForm.getControl(centraltelephoneField).setDisabled(true)
                    _executionForm.getAttribute("ldv_area").setRequiredLevel("none");
                    _executionForm.getControl("ldv_area").setVisible(false);
                }

            },
            function (XmlHttpRequest, textStatus, errorThrown) {
                alert('Complaint_OnChangeArea Failed: ' + textStatus + errorThrown + Query);
            });



    }

}

function oData_Request(query, successFunc, errorFunc) {
    $.ajax({
        type: "GET",
        contentType: "application/json; charset=utf-8",
        datatype: "json",
        url: _executionForm.context.getClientUrl() + query,
        beforeSend: function (XMLHttpRequest) {
            XMLHttpRequest.setRequestHeader("OData-MaxVersion", "4.0");
            XMLHttpRequest.setRequestHeader("OData-Version", "4.0");
            XMLHttpRequest.setRequestHeader("Accept", "application/json");
        },
        async: false,
        success: function (data, textStatus, xhr) {
            var result = data;
            successFunc(result);
        },
        error: function (xhr, textStatus, errorThrown) {
            errorFunc(xhr, textStatus, errorThrown);
        }
    });
}
function Complaint_GetGovCode() {
    var govCode = null;
    if (_executionForm.getAttribute("ldv_government").getValue() != null) {
        var GovId = _executionForm.getAttribute("ldv_government").getValue()[0].id;
        GovId = GovId.toLowerCase();
        GovId = GovId.replace(/[{}]/g, "");

        var query = "/api/data/v9.1/ldv_governments?$filter=ldv_governmentid eq " + GovId;
        oData_Request(query, function (result) {
            if (result.value.length > 0) {
                govCode = result.value[0]["ldv_realgovernmentcode"];

            }

        });

        return govCode;
    }
}


function ShowHideFollowUpTab() {
    var Type = _executionForm.getAttribute(WorkOrdertype).getValue();
    var FormId = null;
    if (Type == 3) FormId = ComplainFormId;
    if (_executionForm.getAttribute("ldv_followupstarttime").getValue() != null) {
        //       _executionForm.ui.tabs.get("tab_FollowUp").visibility = true;
        _executionForm.ui.tabs.get("tab_FollowUp").sections.get("tab_3_section_1").setVisible(true);

    }
    else {
        _executionForm.ui.tabs.get("tab_FollowUp").sections.get("tab_3_section_1").setVisible(false);
    }
}

function HideAddToQueueButton() {
    var WorkOrderType = _executionForm.ui.formSelector.getCurrentItem().getId();
    if (WorkOrderType == ComplainFormId) {
        return true;
    }
    return false;
}


function IncpectionOnLoad() {
    var WorkOrdertyp = _executionForm.getAttribute(WorkOrdertype).getValue();
    var ticketnumber = _executionForm.getAttribute("ticketnumber").getValue();
    //incpection  == 5
    if (WorkOrdertyp == 5 && ticketnumber != null) {
        _executionForm.getControl(MSCorASCField).setVisible(true);
        _executionForm.getControl(MSCorASCField).setDisabled(false);
    }
    else
        _executionForm.getControl(MSCorASCField).setVisible(false);

}