
import React, { useState, useRef, useEffect } from 'react';
import './Document.css';
import Link from '../link/Link'


const DocumentScreen = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const handlePlayPauseClick = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  useEffect(() => {
    // Update the duration when the audio metadata is loaded
    const handleLoadedMetadata = () => {
      setDuration(audioRef.current.duration);
    };

    audioRef.current.addEventListener('loadedmetadata', handleLoadedMetadata);
    audioRef.current.addEventListener('timeupdate', handleTimeUpdate);

    // return () => {
    //   audioRef.current.removeEventListener('loadedmetadata', handleLoadedMetadata);
    //   audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
    // };


  // Cleanup function to remove event listeners
  return () => {
    if (audioRef.current) {
      audioRef.current.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
    }
  };


  }, []);

  const handleTimelineChange = (e) => {
    const newTime = parseFloat(e.target.value);
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  return (
    <div className='docMain'>

       <img src="/light.png" alt="" />

      <div className='border'>

        <div className="audio">
          <h2>ദയവായി ഈ ഓഡിയോ കേൾക്കുക </h2>
          <div>
            <input
              type="range"
              value={currentTime}
              max={duration}
              onChange={handleTimelineChange}
            />
          </div>
          <button className='playButton' onClick={handlePlayPauseClick}>
            {isPlaying ? 'PAUSE' : 'PLAY'}
          </button>
          <audio ref={audioRef} src="/fully enhanced intro wakeup.m4a" />
        </div>

       <div className="important">
        <h2> ചില പ്രെധാനപെട്ട നിർദ്ദേശങ്ങൾ </h2>
        <ul>
           <li>ഇത് ഒരു ഇന്സ്ടിട്യൂഷനോ ഒരു ഇംഗ്ലീഷ് കോഴ്സൊ അല്ലാ. ഒരു കമ്മ്യൂണിറ്റി ആണ്
🤗.</li>
           <li>ഇതൊരു ടെലിഗ്രാം ബേസ് ചെയ്തുള്ളാ കമ്മ്യൂണിറ്റി ആണ്.ടെലെഗ്രാമിലൂടെ ആയിരിക്കും
ടോപിക്ക്സ് അയച്ചതരുന്നത് .</li>
           <li>ഇവടെ നിങ്ങളെ സഹായിക്കാൻ ഒരു അദ്ധ്യാപകനോ, ഗൈഡോ ഉണ്ടായിരിക്കുന്നതല്ല
⚠️.</li>
           <li>എനിക്ക് സംസാരിച്ചു എന്റെ ഇംഗ്ലീഷ് മികച്ചതാക്കണം എന്ന് സ്വയം കരുതുന്നവർ മാത്രം
കമ്മ്യൂണിറ്റിൽ അങ്കത്തം എടുക്കുക .</li>
           <li>തരുന്ന ടാസ്ക്ക് ചെയ്യാതെ ഇരിക്കിക്കുകയോ.മറ്റുള്ളവരോട് മോശമായി പെരുമാറുകയോ
ചെയ്താൽ ഉടൻ തന്നെ ഗ്രൂപ്പിൽ നിന്ന് റിമൂവ് ചെയ്യുകയും തുടർ നടപടി ഉണ്ടായിരിക്കുന്നതും ആണ്
.</li>


<li>ആദ്യത്തെ ഒരു മാസം സബ്സ്ക്രിപ്ഷൻ സൗജന്നമായിരിക്കും. പിന്നീട് അങ്ങോട്ട് തുടരണമെങ്കിൽ
പ്ലാനുകൾ എടുക്കണം .</li>
<li>പിന്നീട് ഉള്ള ഒരു മാസത്തേക്ക് 49 rs , മൂന്ന് മാസത്തേക്ക് ആണെകിൽ 99 rs ആണ്
😊.</li>
<li>ഒരുമാസം നിങ്ങൾക്ക് സൗജന്യമായി നൽകുന്നത് ഉപയോഗപ്പെടുത്തു . ഉപയോകപെട്ടാൽ ഒപ്പം
കൂടു .</li>
        </ul>
       </div>


       <div className="services">
       <h2> എന്താണ് wakeup കമ്മ്യൂണിറ്റി ഞങ്ങൾക്ക് ചെയ്യുന്നത് ?🤔 </h2>
        <ul>
           <li>Daily Audio Task Topics
🎙
(ഒരു വിഷയം തരികയും നിങ്ങൾ അതിനെ കുറിച് 2 മിനിറ്റിൽ കുറയാതെ ഓഡിയോ ചെയ്യുകയാണ്
ഒന്നാമത്തെ ടാസ്ക് ,നിങ്ങൾക്ക് തോന്നാം ഞാൻ എങ്ങനെ സംസാരിക്കും എനിക്ക് രണ്ട് വാക്കുകൾ
പോലും create ചെയ്തു സംസാരിക്കാൻ പറ്റില്ലാലോ എന്ന് , ഒരു പേടിയും കൂടാതെ നിങ്ങൾക്ക്
എന്താണോ പറ്റുന്നെ അതുപോലെ സംസാരിക്കുകയാണ് വേണ്ടത് .പതിയെ പതിയെ നിങൾ തന്നെ
നിങളുടെ മാറ്റങ്ങൾ തിരിച്ചറിയും )</li>


           <li>Daily Debate Audio Task Topics
🗣(ഒരു വിഷയം തരുകയും നിങ്ങൾ നിങളുടെ അഭിപ്രായം ഓഡിയോ ആയി പറയുകയും മറ്റുള്ളവരുടെ
അഭിപ്രായങ്ങളോട് യോജോക്കുന്നില്ല എങ്കിൽ അതിനു പ്രീതികരിക്കുകയും ചെയ്തു ഒരു നല്ല
healthy ഡിബേറ്റ് ആണ് ചെയ്യേണ്ടത് )</li>


           <li>Daily Podcast
🔮
(നിങ്ങൾക്ക് ദിവസ്സവും spotify ഇംഗ്ലീഷ് റിലേറ്റഡ് ആയ podcast അയച്ചു തരുന്നതാണ് . ഓർക്കുക
കേൾക്കുന്നതും നല്ലതാണ് ഒരുപാട് പുതിയ വാക്കുകൾ ലഭിക്കും )</li>


           <li>Daily Useful Videos
🎞
(കേൾക്കുന്നത് പോലെത്തന്നെ important ആണ് ഇംഗ്ലീഷ് റിലേറ്റഡ് വീഡിയോ കാണുകയും
അവരുടെ ബോഡി language മനസിലാക്കുകയും എന്നത് )</li>

           <li>Weekly E-books
📚
(എല്ലാ ശനിയാഴ്ചയിലും pdf ബുക്ക് നൽകുന്നതായിരിക്കും , sunday ടാസ്ക് അയക്കുന്നതല്ല
,അതുകൊണ്ടുതന്നെ ആ ദിവസ്സം നിങ്ങൾ ഈ ബുക്ക് വായിക്കുക .വായന ശീലം നന്നാക്കുക )</li>

        </ul>
       </div>
<h2 className='formHTwo'>താല്പര്യം ഉണ്ടോ ? അങ്ങനെയെങ്കിൽ
ഈ ലിങ്കിൽ ക്ലിക്ക് ചെയ്ത്  അതിൽ ഡീറ്റെയിൽസ് ഫിൽ ചെയുക 🪄
😇</h2>
<Link/>

      </div>
    </div>
  );
}

export default DocumentScreen;
