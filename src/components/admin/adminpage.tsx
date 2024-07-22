import PhoneCalls from "@/components/admin/phoneCalls";
import withAdminAuth from "@/components/admin/withAdminAuth";
import React from "react";

const AdminPage = () => {
  return (
    <>
      <PhoneCalls />
    </>
  );
};

export default withAdminAuth(AdminPage);
