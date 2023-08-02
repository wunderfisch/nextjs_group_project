import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <nav>
      {/* link from next is static and does not reload like normal href */}
      <Link href="/">Home</Link> {""} |
      <Link href="/softskills">softskills</Link> {""} |
      <Link href="/techskills">techskills</Link>
    </nav>
  );
}
