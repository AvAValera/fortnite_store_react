import React from "react";

export default function Footer() {
    return (
        <footer className="page-footer light-blue darken-3">
            <div className="footer-copyright">
                <div className="container">
                    © {new Date().getFullYear()} Copyright Text
                </div>
            </div>
        </footer>
    );
}
