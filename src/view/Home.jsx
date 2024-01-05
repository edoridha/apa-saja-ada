import React from 'react'
import Header from '../component/Header'
import './home.css'

import agya from '../assets/cars/agya.jpeg'
import civic from '../assets/cars/civic.jpeg'
import xenia from '../assets/cars/xenia.jpeg'
import pajero from '../assets/cars/pajero.webp'

function Home() {
    return (
        <div>
            <Header />
            {/* --Card Section-- */}
            <div className='container bg-text-secondary'>
                {/* --Card 1-- */}
                <div className="card mx-1 my-3" style={{ width: '18rem' }}>
                    <img src={agya} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Toyota Agya</h5>
                        <p className="card-text">Toyota ALN Agya 1.2 G M/T Tahun 2023
                            Kondisi Body, Chasis, Mesin, Transmisi & Gardan Oke Banget
                            Surat-surat BPKB & STNK Lengkap dan Berlaku (Pajak Tahunan Juni 2024 // STNK Juni 2028)</p>
                        <a href="https://api.whatsapp.com/send?phone=6285172407718&text=Permisi%20min,%20mau%20tanya untuk mobil agya tahun 2023" className="btn btn-primary">Hubungi Kami</a>
                    </div>
                </div>
                {/* --Card 2-- */}
                <div className="card mx-1 my-3" style={{ width: '18rem' }}>
                    <img src={xenia} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Daihatsu Xenia</h5>
                        <p className="card-text">Dijual Mobil Bekas Murah dan Berkualitas
                            Daihatsu All New Xenia 1.3 X M/T Tahun 2022
                            Kondisi Body, Chasis, Mesin, Transmisi & Gardan Oke Banget
                            Surat-surat BPKB & STNK Lengkap dan Berlaku (Pajak Tahunan Oktober 2024 // STNK Oktober 2027)</p>
                        <a href="https://api.whatsapp.com/send?phone=6285172407718&text=Permisi%20min,%20mau%20tanya untuk mobil xenia tahun 2022" className="btn btn-primary">Hubungi Kami</a>
                    </div>
                </div>
                {/* --Card 3-- */}
                <div className="card mx-1 my-3" style={{ width: '18rem' }}>
                    <img src={civic} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Honda Civic</h5>
                        <p className="card-text">Dijual Mobil Bekas Murah dan Berkualitas
                            Honda Civic RS 1.5 Turbo CVT Tahun 2020
                            Kondisi Body, Chasis, Mesin, Matic & Gardan Oke Banget
                            Surat-surat BPKB & STNK Lengkap (Pajak Tahunan Oktober 2023 // STNK Oktober 2025)</p>
                        <a href="https://api.whatsapp.com/send?phone=6285172407718&text=Permisi%20min,%20mau%20tanya untuk mobil civic tahun 2020" className="btn btn-primary">Hubungi Kami</a>
                    </div>
                </div>
                {/* --Card 4-- */}
                <div className="card mx-1 my-3" style={{ width: '18rem' }}>
                    <img src={pajero} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Honda Civic</h5>
                        <p className="card-text">Dijual Mobil Bekas Murah dan Berkualitas
                            Honda Civic RS 1.5 Turbo CVT Tahun 2020
                            Kondisi Body, Chasis, Mesin, Matic & Gardan Oke Banget
                            Surat-surat BPKB & STNK Lengkap (Pajak Tahunan Oktober 2023 // STNK Oktober 2025)</p>
                        <a href="https://api.whatsapp.com/send?phone=6285172407718&text=Permisi%20min,%20mau%20tanya untuk mobil pajero tahun 2020" className="btn btn-primary">Hubungi Kami</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home