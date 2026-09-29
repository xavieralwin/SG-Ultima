import {React, useState} from 'react';
import { useTranslation} from 'react-i18next';
import ReactPlayer from 'react-player/lazy';
import playButton from '../../assets/images/button_play.svg';
import pauseButton from '../../assets/images/button_pause.svg';
import muteButton from '../../assets/images/button_mute.svg';
import unmuteButton from '../../assets/images/button_unmute.svg';
import line from '../../assets/images/sectionLine.svg';
import { classNames } from '../../helpers/common.helpers';
import imageUrl from '../../assets/images/video-paused-bg.jpg';
import './styles.css';

function BrandVideo() { 
  
    const { t } = useTranslation();
    const [playing, setPlaying] = useState(false);
    const [muted, setMuted] = useState(false);   
    const [isReady, setIsReady ] = useState(false);
    const [isControlsVisible, setIsControlsVisible ] = useState(false);
    let videoUrl = t('home.brandVideo');   



    const [ctaBtnName, setButtonText] = useState('Mute');
    const [PlayPauseBtn, setButtonText1] = useState('Play');

    const handlePause = () => {
        setPlaying(false);
    }

    const handleReady = () => {
      console.log('onReady');
      setIsReady(true); 
  }

    const handlePlay = () => {    
        setPlaying(true);
        setTimeout(() => {
          setIsControlsVisible(true);
        }, 5000);
    }

    const handlePlayPause = () => {
        setPlaying(!playing);
        if (PlayPauseBtn === 'Play') {
          setButtonText1('Pause');
        } else {
          setButtonText1('Play');
        }
    }

    const handleToggleMuted = () => {
        setMuted(!muted)
        if (ctaBtnName === 'Mute') {
          setButtonText('Unmute');
        } else {
          setButtonText('Mute');
        }
    }

    if(window.journey === 'visa') {
      videoUrl = t('home.brandVideoVisa');
    }
  
    return (
      <>
      <div className='player-wrapper z-0'>
          <ReactPlayer 
              className='react-player'
              url={videoUrl}
              onReady={handleReady}
              onStart={() => console.log('onStart')} 
              controls={false} 
              onPlay={handlePlay}
              onPause={handlePause}
              playing={playing}
              width='100%' 
              height='100%'
              volume={0.8}
              muted={muted}
              loop={true}
              config={{
                  youtube: {
                      playerVars: { 
                          controls: 0, 
                          autoplay: 0,
                          modestbranding: 1,
                          loop: 1,
                          showinfo: 1,
                          rel: 0
                      }
                  },
                }}
          />
          <div className='control-bar'></div>
          {isReady && (
          <div
            style={{ backgroundImage: `url(${imageUrl})` }}
            className={classNames(
            'justify-center items-center bg-black z-50 absolute -top-1 -left-1 -right-1 -bottom-1 flex bg-no-repeat bg-cover',
            playing ? 'hidden' : ''            
          )}>
            <div className='mt-0 md:mt-80 grid-cols-1 text-center'>
              <button data-ctaname='Play' data-ctatype='button' data-ctaposition='Middle' className='w-14 h-14 rounded-full bg-yellow-gold/20 hover:bg-yellow-gold/5 round-gradient-border' onClick={() => handlePlayPause()} >
              {playing ? <img src={pauseButton} alt='Pause' /> : <img src={playButton} alt='play' />}            
              </button>            
              <div className='text-white mt-4 uppercase text-lg tracking-widest font-extralight'>Play to discover more</div>            
            </div>
          </div>
          )}
      </div>
      <div className='mt-4 flex justify-center'>
        <img src={line} alt='divider' />
      </div>  
      {isControlsVisible && (    
      <div className='flex justify-center my-4'>
          <button data-ctaname={PlayPauseBtn} data-ctatype='button' data-ctaposition='Middle' className='w-14 h-14 rounded-full bg-yellow-gold/20 hover:bg-yellow-gold/5 round-gradient-border mr-4' onClick={() => handlePlayPause()} >
            {playing ? <img src={pauseButton} alt='Pause' /> : <img src={playButton} alt='play' />}
          </button>
          <button data-ctaname={ctaBtnName} data-ctatype='button' data-ctaposition='Middle' className='w-14 h-14 rounded-full bg-yellow-gold/20 hover:bg-yellow-gold/5 round-gradient-border' onClick={() => handleToggleMuted()} >
            {muted ?  <img src={muteButton} alt='Mute' /> : <img src={unmuteButton} alt='Unmute' /> }
          </button>
      </div>
      )}
      </>
    );
 
}

export default BrandVideo;
