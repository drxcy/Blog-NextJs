import styles from "./admin.module.css";
import AdminPostForm from "@/components/adminPostForm/adminPostForm";
import AdminPosts from "@/components/adminPosts/adminPosts";
import AdminUser from "@/components/adminUser/adminUser";
import AdminUserForm from "@/components/adminUserForm/adminUserForm";
import { auth } from "@/lib/auth";
import { Suspense } from "react";
const Adminpage = async() => {
  const session = await auth();
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.col1}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminPosts />
          </Suspense>
        </div>
        <div className={styles.col2}>
          <AdminPostForm userId={session.user.id}/>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.col1}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminUser />
          </Suspense>
        </div>
        <div className={styles.col2}>
          <AdminUserForm />
        </div>
      </div>
    </div>
  );
};
export default Adminpage;
