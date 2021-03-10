import React from 'react';

function OnDemand () {
    return (
        <React.Fragment>
            <header>
                <h1>On Demand Separation</h1>
                <div className="new-tab"  onClick="">
                    <div>+</div>
                </div>
            </header>
            <div id="on-demand">
                
                <section id="extract-tabs">
                    <div className="extract-tab active" onClick="extractTabs(event, 'portal')">
                        <p>New Extraction</p>
                        <div id="close-button">×</div>
                    </div>
                    <div className="extract-tab"  onClick="extractTabs(event, 'processing')">
                        <p>Currently Processing</p>
                        <div id="close-button" onClick="closeTab('processing');this.parentElement.style.display='none';">×</div>
                    </div>
                    <div className="extract-tab"  onClick="extractTabs(event, 'results')">
                        <p>Results</p>
                        <div id="close-button" onClick="closeTab('results');this.parentElement.style.display='none';">×</div>
                    </div>
                </section>
                
                <section id="portal" className="extract-content" style={{ display: `block` }}>
                    <p>Upload Your File</p>
                    <div id="upload">
                        <button>Upload</button>
                        <div id="song-title">
                            <span>08 All the Calling Occupants Of Interplanetary Craft (The Recognized Anthem Of World Contact Day).mp3</span>
                        </div>
                        <select value="">
                            <option value="Separation">Separation</option>
                            <option value="4 Stems (Vocals, Drums, Bass, Other)">4 Stems (Vocals, Drums, Bass, Other)</option>
                            <option value="2 Stems (Vocals & Backing)">2 Stems (Vocals & Backing)</option>
                            <option value="2 Stems (Drums & Drumless)">2 Stems (Drums & Drumless)</option>
                            <option value="2 Stems (Bass & Bassless)">2 Stems (Bass & Bassless)</option>
                            <option value="2 Stems (Other & Mix Minus)">2 Stems (Other & Mix Minus)</option>
                            <option value="Dialogue (Isolation & Removal)">Dialogue (Isolation & Removal)</option>
                        </select>
                        <button id="no-submission">Submit</button>
                    </div>
                </section>

                <section id="processing" className="extract-content">
                    <div id="trackloading">
                        <p>Pending...</p>
                        <progress max="100" value="90"></progress>
                    </div>
                </section>

                <section id="results" className="extract-content">
                    <div id="track-exports">
                        <p>13 Want You Gone.mp3</p>
                        <ul>
                            <li>
                                <span id="press-play">
                                    <i className="bi bi-play-fill"></i>
                                    <p>13 Want You Gone_4stem_vocals.mp3</p>
                                </span>
                                <i className="bi bi-file-earmark-arrow-down"></i>
                            </li>
                            <li>
                                <span id="press-play">
                                    <i className="bi bi-play-fill"></i>
                                    <p>13 Want You Gone_4stem_vocals.mp3</p>
                                </span>
                                <i className="bi bi-file-earmark-arrow-down"></i>
                            </li>
                            <li>
                                <span id="press-play">
                                    <i className="bi bi-play-fill"></i>
                                    <p>13 Want You Gone_4stem_vocals.mp3</p>
                                </span>
                                <i className="bi bi-file-earmark-arrow-down"></i>
                            </li>
                            <li>
                                <span id="press-play">
                                    <i className="bi bi-play-fill"></i>
                                    <p>13 Want You Gone_4stem_vocals.mp3</p>
                                </span>
                                <i className="bi bi-file-earmark-arrow-down"></i>
                            </li>
                        </ul>
                        
                    </div>
                </section>
            
            </div>

            <script>
                closeTab();
            </script>
        </React.Fragment>
    )
};

export default OnDemand;