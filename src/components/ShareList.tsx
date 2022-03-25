import React from "react";
import config from "../lib/config";

type Props = {
    url: string;
    text?: string;
};

export function ShareList({
    url,
    text,
}: Props) {
    return (
        <div>
            <a
                target="_blank"
                href={`https://twitter.com/intent/tweet?text=${text}&url=${config.base_url + url}`}
                onClick={() => {
                    window.open(this.href, 'width=550,height=435');
                    return false;
                }}>
                <i className="fab fa-twitter"></i>
            </a>
            <a
                target="_blank"
                href={`https://facebook.com/sharer.php?u=${config.base_url + url}`}
                onClick={() => {
                    window.open(this.href, 'width=550,height=435');
                    return false;
                }}>
                <i className="fab fa-facebook-f"></i>
            </a>
            <a
                target="_blank"
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${config.base_url + url}`}
                onClick={() => {
                    window.open(this.href, 'width=550,height=435');
                    return false;
                }}>
                <i className="fab fa-linkedin-in"></i>
            </a>
            <style jsx>{`
        a {
          display: inline-block;
        }
        a:not(:last-child) {
          margin-right: 2em;
        }
      `}</style>
        </div>
    );
}
