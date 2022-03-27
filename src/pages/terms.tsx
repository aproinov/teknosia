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
            Terms <span className="fancy">{config.site_title}</span>
          </h1>
          <span className="handle"></span>

          <p></p>

          <p></p>

          <p>Terimakasih Atas Kunjungan Anda, Teknosia Blog adalah media blog edukasi yang membahas perkembangan teknologi berbasis aplikasi serta tutorial terkini. Artikel yang ditulis dalam artikel blog ini diambil dari berbagai sumber, baik online maupun offline.</p><p>

Beberapa artikel mungkin ditulis ulang dari sumber lain dengan tata bahasa yang berbeda.
Dengan mengunjungi blog Teknosia Blog, berarti Anda setuju dengan ketentuan berikut ini:</p><p>

1. Anda setuju untuk tidak menyalin (COPAS) artikel yang ada di dalam blog Teknosia Blog dengan tujuan untuk ditulis ulang pada situs lain tanpa seijin dari pemilik blog ini.<br />
2. Anda setuju untuk tidak memperjual belikan, atau mengklaim isi dari situs ini.<br />
3. Konten gambar yang ada di Teknosia Blog adalah gambar yang bebas didistribusikan dan dimodifikasi. Jika Anda menemukan gambar milik Anda yang memiliki copyright dan dimuat di blog ini tanpa ijin, mohon menghubungi kami melalui laman kontak dengan senang hati kami akan menghapusnya.<br />
4. Anda setuju untuk tidak melakukan tindakan yang mengganggu kenyamanan, misalnya memberikan komentar SPAM, dan tindakan lainnya yang dapat mengganggu kenyamanan Teknosia Blog dan pembacanya.<br />
5. Anda setuju untuk tidak melakukan klik iklan yang ada di blog Teknosia Blog secara berulang-ulang.
Pelanggaran
</p>
<p><br />Jika terdapat pelanggaran TOS yang dilakukan oleh pengguna Teknosia Blog, maka kami sebagai pemilik blog berhak melakukan berbagai tindakan yang memang diperlukan, misalnya menghapus komentar SPAM, memblok IP komputer, atau tindakan lainnya.</p>

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
