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
                        Privacy <span className="fancy">{config.site_title}</span>
                    </h1>

                    <span className="handle">Kebijakan Privasi</span>
                    <p>Teknosia Blog sangat memperhatikan privasi Anda. Kebijakan privasi ini menggambarkan 
                        informasi pribadi yang kami kumpulkan dan bagaimana kami mengelolanya dengan aman.</p>

                    <span className="handle">Koleksi Informasi Rutin</span>
                    <p>Saat Berkunjung ke situs ini, web server mencatat beberapa informasi dari aktifitas Anda. 
                        Informasi ini mencakup, alamat IP, browser, waktu, halaman yang Anda buka, dan link ke 
                        halaman website lain. Meskipun demikian, informasi mengenai identitas pribadi pengguna, 
                        seperti nama, pasword, akun, tidak dapat diidentifikasi. Informasi yang dilacak berguna 
                        untuk keperluan administrasi rutin dan juga bertujuan untuk perawatan website.</p>

                    <span className="handle">Cookies dan Peramban Web</span>
                    <p>Jika diperlukan, Teknosia Blog menggunakan cookies untuk menyimpan informasi tentang 
                        preferensi pengunjung dalam rangka memberikan pelayanan dan menyiapkan materi yang sesuai 
                        kebutuhan pengunjung.</p>

                    <p>Iklan pihak ketiga dan mitra lainnya juga dapat menggunakan cookies, untuk melacak 
                        pengunjung ke situs kami untuk menampilkan iklan dan informasi lain yang masih relevan. 
                        Pelacakan tersebut dilakukan langsung oleh pihak ketiga melalui server mereka, dan 
                        mereka memiliki kebijakan privasi sendiri.</p>

                    <span className="handle">Mengontrol Privasi Anda</span>
                    <p>Anda dapat mengubah pengaturan browser Anda untuk menonaktifkan cookies jika Anda 
                        menginginkannya. Menonaktifkan cookies untuk semua situs tidak dianjurkan karena 
                        dapat mengganggu penggunaan beberapa situs. Pilihan terbaik adalah dengan menonaktifkan 
                        atau mengaktifkan cookies untuk situs tertentu yang Anda inginkan. Periksa dokumentasi 
                        browser Anda untuk instruksi bagaimana cara memblokir cookies dan mekanisme pelacakan 
                        lainnya.</p>

                    <span className="handle">Catatan Khusus Tentang Periklanan Google</span>
                    <p>Setiap iklan yang disajikan oleh Google.Inc, dan perusahaan afiliasi dapat dikendalikan 
                        dengan menggunakan Cookies. Cookies ini memungkinkan Google untuk menampilkan iklan yang 
                        relevan berdasarkan kunjungan Anda ke situs ini dan situs lainnya yang menggunakan layanan 
                        iklan Google. Pelajari cara untuk menghindari penggunaan cookies Google di browser 
                        Anda bila Anda tidak menginginkannya. Sebagaimana disebutkan di atas, setiap pelacakan 
                        dilakukan oleh Google melalui cookies dan mekanisme lain yang tunduk pada kebijakan privasi 
                        Google sendiri.</p>

                    <span className="handle">Informasi Kontak</span>
                    <p>Jika Anda memiliki pertanyaan tentang kebijakan privasi Teknosia Blog kami sangat senang 
                        jika Anda dapat menghubungi kami melalui halaman kontak.</p>

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
