import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import { ShareList } from "../components/ShareList";
import config from "../lib/config";

export default function Index() {
    return (
        <Layout>
            <BasicMeta url={"/"} />
            <OpenGraphMeta url={"/"} />
            <TwitterCardMeta url={"/"} />
            <div className="container">
                <div>
                    <h1>
                        Disclaimer <span className="fancy">{config.site_title}</span>
                    </h1>
                    <span className="handle"></span>

                    <p></p>

                    <p></p>

                    <p>
			Jika Anda memerlukan informasi lebih lanjut atau memiliki pertanyaan tentang disclaimer situs kami, jangan ragu untuk menghubungi kami melalui halaman kontak.</p><p>

Semua informasi di website ini diterbitkan dengan itikad baik dan untuk tujuan membagikan tutorial aplikasi terkini (edukasi). Teknosia Blog tidak membuat jaminan tentang kelengkapan, keandalan dan ketepatan informasi ini. Kami tidak bertanggung jawab atas kesalahan menerjemahkan informasi dari situs ini.</p><p>

Jika anda menemukan kendala atau keraguan, kami berharap anda menghubungi kami melalui laman kontak. Dari website ini, Anda dapat mengunjungi situs-situs lain dengan mengikuti hyperlink ke situs eksternal tersebut.</p><p>

Link eksternal tersebut tidak serta merta merupakan afiliasi kami, link tersebut dapat berubah tanpa pemberitahuan kepada kami. Dengan deikian Teknosia Blog tidak bertanggung jawab jika terdapat informasi dari link tujuan yang tidak sesuai.</p><p>

Sementara itu, kami berusaha memperkaya informasi yang anda butuhkan melalu beberapa link external yang berkualitas dan berhubungan dengan apa yang sedang anda baca pada suatu halaman yang sedang anda baca.</p><p>

Perlu kami beritahuan juga bahwa, ketika anda mengunjungi dan meninggakan website Teknosia Blog, mungkin ada beberapa informas yang anda tinggalkan. Lebih lengkap mengenai hal tersebut dapat andad baca pada halaman Privacy Policy</p>

<strong>Persetujuan</strong>
<p>Dengan menggunakan website kami, Anda dengan ini menyetujui disclaimer kami dan setuju dengan ketentuan-ketentuannya.</p>

<p>Tim Redaksi Teknosia Blog</p>

<strong>Pembaharuan</strong>
<p>Situs disclaimer ini terakhir diperbaharui pada: Sabtu, 26 Maret 2022</p>

                    <ShareList url={`/`} text={config.site_title} />
                </div>
            </div>
            <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1 1 auto;
          padding: 0 1.5rem;
          max-width: 800px;
          margin: 0 auto;
        }
        h1 {
          font-size: 2.5rem;
          margin: 0;
          font-weight: 500;
        }
        h2 {
          font-size: 1.75rem;
          font-weight: 400;
          line-height: 1.25;
        }
        p {
            line-height: 1.75rem;
        }
        .fancy {
          color: #15847d;
        }
        .handle {
          display: inline-block;
          margin-top: 0.275em;
          color: #9b9b9b;
          letter-spacing: 0.05em;
        }

        @media (min-width: 769px) {
          h1 {
            font-size: 3rem;
          }
          h2 {
            font-size: 2.25rem;
          }
        }
      `}</style>
        </Layout>
    );
}
