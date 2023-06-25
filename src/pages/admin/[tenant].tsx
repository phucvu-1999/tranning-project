import { useRouter } from "next/router";
import axios from "axios";
import { useEffect } from "react";
import { getAsync } from "@/utils/http-client";

const TenantNamePage = () => {
  const router = useRouter();

  const fetchFromJsonPlaceHolder = async () => {
    getAsync("/todos/1");
  };

  useEffect(() => {
    fetchFromJsonPlaceHolder();
  }, []);

  return <div>Tenant name page</div>;
};

export default TenantNamePage;
