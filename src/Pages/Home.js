import './Home.css'

const Home = () => {
    return (
        <div className='home-page'>
            <h1>Tours</h1>
            <div>
                <div className='show-box'>
                    <div>Aug 10</div>
                    <div>DETROIT, MI</div>
                    <div>DTE ENERGY MUSIC THEATRE</div>
                    <div><button>Buy Tickets</button></div>
                </div>
                <div className='show-box'>
                    <div>Aug 11</div>
                    <div>TORONTO,ON</div>
                    <div>BUDWEISER STAGE</div>
                    <div><button>Buy Tickets</button></div>
                </div>
                <div className='show-box'>
                    <div>Aug 12</div>
                    <div>BRISTOW, VA</div>
                    <div>JIGGY LUBE LIVE</div>
                    <div><button>Buy Tickets</button></div>
                </div>
                <div className='show-box'>
                    <div>Aug 13</div>
                    <div>PHOENIX, AZ</div>
                    <div>AK-CHIN PAVILION</div>
                    <div><button>Buy Tickets</button></div>
                </div>
                <div className='show-box'>
                    <div>Aug 14</div>
                    <div>LAS VEGAS, NV</div>
                    <div>AK-CHIN PAVILION</div>
                    <div><button>Buy Tickets</button></div>
                </div>
                <div className='show-box'>
                    <div>Aug 15</div>
                    <div>PHOENIX, AZ</div>
                    <div>AK-CHIN PAVILION</div>
                    <div><button>Buy Tickets</button></div>
                </div>
            </div>
        </div>
    )
}

export default Home;