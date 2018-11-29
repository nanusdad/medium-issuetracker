<template name="EditIssue">
  <h1>Edit Student</h1>
  {{> quickForm collection="Issues" doc=this id="editIssueForm" type="update" omitFields="createdBy" buttonContent="Update"}}
  <hr>
  {{> quickRemoveButton collection="Issues" _id=this._id beforeRemove=beforeRemove class="btn btn-danger"}}
</template>
