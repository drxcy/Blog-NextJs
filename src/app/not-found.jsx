import Link from "next/link";
const NotFound =() =>
{
return (
    <div>
        <h2>Not Found </h2>
        <p>SorryThe Page You are looking for Page nOt exist!!</p>
        <Link href="/">Return Home</Link>
    </div>
)
}
export default NotFound;