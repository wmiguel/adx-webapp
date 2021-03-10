import React from 'react';

function Administration () {
    return(
        <React.Fragment>
            <header>
                <h1>Administration</h1>
            </header>
            <div id="administration">
                <section id="extract-tabs">
                    <div className="admin-tab active" onClick="extractTabs(event, 'admin-one')">
                        <p>Work Orders</p>
                    </div>
                    <div className="admin-tab" onClick="extractTabs(event, 'admin-two')">
                        <p>On Demand Usage</p>
                    </div>
                    <div className="admin-tab" onClick="extractTabs(event, 'admin-three')">
                        <p>Manage Users</p>
                    </div>
                    <div className="admin-tab" onClick="extractTabs(event, 'admin-four')">
                        <p>Manage Clients</p>
                    </div>
                </section>
                <section id="admin-one" className="extract-content" style={{ display: `block` }}>
                    <table>
                        <thead>
                            <tr>
                                <th>Start Date</th>
                                <th>End Date</th>
                                <th>Reset</th>
                                <th>All</th>
                                <th>Search</th>
                                <th>All</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Name <i className="bi bi-caret-down-fill"></i></th>
                                <th>User <i className="bi bi-caret-down-fill"></i></th>
                                <th>Status <i className="bi bi-caret-down-fill"></i></th>
                                <th>Date Submitted <i className="bi bi-caret-down-fill"></i></th>
                                <th></th>
                                <th></th>
                                <th>Actions</th>
                            </tr>
                            <tr>
                                <td>RWB LIVE SHOW -WO-207</td>
                                <td>cory.sims@audionamix.com</td>
                                <td>Draft</td>
                                <td>Draft</td>
                                <td></td>
                                <td></td>
                                <td>
                                <i className="bi bi-pencil-fill"></i>
                                <i className="bi bi-trash-fill"></i>
                                </td>
                            </tr>
                            <tr>
                                <td>sample rate issue test1-WO-93</td>
                                <td>steve.oliver@audionamix.com</td>
                                <td>Processing</td>
                                <td>12/16/2020 2:46 PM</td>
                                <td></td>
                                <td></td>
                                <td>
                                <i className="bi bi-pencil-fill"></i>
                                <i className="bi bi-trash-fill"></i>
                                </td>
                            </tr>
                            <tr>
                                <td>new-project-WO-221</td>
                                <td>devin.kylian@audionamix.com</td>
                                <td>Done</td>
                                <td>02/10/2021 12:37 PM</td>
                                <td></td>
                                <td></td>
                                <td>
                                <i className="bi bi-pencil-fill"></i>
                                <i className="bi bi-trash-fill"></i>
                                </td>
                            </tr>
                            <tr>
                                <td>SGpt2-WO-217</td>
                                <td>brian.code@audionamix.com</td>
                                <td>Under Post Processing</td>
                                <td>02/10/2021 12:37 PM</td>
                                <td></td>
                                <td></td>
                                <td>
                                <i className="bi bi-pencil-fill"></i>
                                <i className="bi bi-trash-fill"></i>
                                </td>
                            </tr>
                            <tr>
                                <td>HS-2021-01-15-WO-174</td>
                                <td>ellie.mcneil@audionamix.com</td>
                                <td>Under Review</td>
                                <td>01/15/2021 11:27 AM	</td>
                                <td></td>
                                <td></td>
                                <td>
                                <i className="bi bi-pencil-fill"></i>
                                <i className="bi bi-trash-fill"></i>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                <section id="admin-two" className="extract-content">
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

                <section id="admin-three" className="extract-content">
                    three
                    <table>
                        <thead>
                            <tr>
                                <th>Start Date</th>
                                <th>End Date</th>
                                <th>Reset</th>
                                <th>All</th>
                                <th>Search</th>
                                <th>All</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Name <i className="bi bi-caret-down-fill"></i></th>
                                <th>User <i className="bi bi-caret-down-fill"></i></th>
                                <th>Status <i className="bi bi-caret-down-fill"></i></th>
                                <th>Date Submitted <i className="bi bi-caret-down-fill"></i></th>
                                <th></th>
                                <th></th>
                                <th>Actions</th>
                            </tr>
                            <tr>
                                <td>RWB LIVE SHOW -WO-207</td>
                                <td>cory.sims@audionamix.com</td>
                                <td>Draft</td>
                                <td>Draft</td>
                                <td></td>
                                <td></td>
                                <td>
                                <i className="bi bi-pencil-fill"></i>
                                <i className="bi bi-trash-fill"></i>
                                </td>
                            </tr>
                            <tr>
                                <td>sample rate issue test1-WO-93</td>
                                <td>steve.oliver@audionamix.com</td>
                                <td>Processing</td>
                                <td>12/16/2020 2:46 PM</td>
                                <td></td>
                                <td></td>
                                <td>
                                <i className="bi bi-pencil-fill"></i>
                                <i className="bi bi-trash-fill"></i>
                                </td>
                            </tr>
                            <tr>
                                <td>new-project-WO-221</td>
                                <td>devin.kylian@audionamix.com</td>
                                <td>Done</td>
                                <td>02/10/2021 12:37 PM</td>
                                <td></td>
                                <td></td>
                                <td>
                                <i className="bi bi-pencil-fill"></i>
                                <i className="bi bi-trash-fill"></i>
                                </td>
                            </tr>
                            <tr>
                                <td>SGpt2-WO-217</td>
                                <td>brian.code@audionamix.com</td>
                                <td>Under Post Processing</td>
                                <td>02/10/2021 12:37 PM</td>
                                <td></td>
                                <td></td>
                                <td>
                                <i className="bi bi-pencil-fill"></i>
                                <i className="bi bi-trash-fill"></i>
                                </td>
                            </tr>
                            <tr>
                                <td>HS-2021-01-15-WO-174</td>
                                <td>ellie.mcneil@audionamix.com</td>
                                <td>Under Review</td>
                                <td>01/15/2021 11:27 AM	</td>
                                <td></td>
                                <td></td>
                                <td>
                                <i className="bi bi-pencil-fill"></i>
                                <i className="bi bi-trash-fill"></i>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                <section id="admin-four" className="extract-content">
                    four
                    <table>
                        <thead>
                            <tr>
                                <th>Start Date</th>
                                <th>End Date</th>
                                <th>Reset</th>
                                <th>All</th>
                                <th>Search</th>
                                <th>All</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Name <i className="bi bi-caret-down-fill"></i></th>
                                <th>User <i className="bi bi-caret-down-fill"></i></th>
                                <th>Status <i className="bi bi-caret-down-fill"></i></th>
                                <th>Date Submitted <i className="bi bi-caret-down-fill"></i></th>
                                <th></th>
                                <th></th>
                                <th>Actions</th>
                            </tr>
                            <tr>
                                <td>RWB LIVE SHOW -WO-207</td>
                                <td>cory.sims@audionamix.com</td>
                                <td>Draft</td>
                                <td>Draft</td>
                                <td></td>
                                <td></td>
                                <td>
                                <i className="bi bi-pencil-fill"></i>
                                <i className="bi bi-trash-fill"></i>
                                </td>
                            </tr>
                            <tr>
                                <td>sample rate issue test1-WO-93</td>
                                <td>steve.oliver@audionamix.com</td>
                                <td>Processing</td>
                                <td>12/16/2020 2:46 PM</td>
                                <td></td>
                                <td></td>
                                <td>
                                <i className="bi bi-pencil-fill"></i>
                                <i className="bi bi-trash-fill"></i>
                                </td>
                            </tr>
                            <tr>
                                <td>new-project-WO-221</td>
                                <td>devin.kylian@audionamix.com</td>
                                <td>Done</td>
                                <td>02/10/2021 12:37 PM</td>
                                <td></td>
                                <td></td>
                                <td>
                                <i className="bi bi-pencil-fill"></i>
                                <i className="bi bi-trash-fill"></i>
                                </td>
                            </tr>
                            <tr>
                                <td>SGpt2-WO-217</td>
                                <td>brian.code@audionamix.com</td>
                                <td>Under Post Processing</td>
                                <td>02/10/2021 12:37 PM</td>
                                <td></td>
                                <td></td>
                                <td>
                                <i className="bi bi-pencil-fill"></i>
                                <i className="bi bi-trash-fill"></i>
                                </td>
                            </tr>
                            <tr>
                                <td>HS-2021-01-15-WO-174</td>
                                <td>ellie.mcneil@audionamix.com</td>
                                <td>Under Review</td>
                                <td>01/15/2021 11:27 AM	</td>
                                <td></td>
                                <td></td>
                                <td>
                                <i className="bi bi-pencil-fill"></i>
                                <i className="bi bi-trash-fill"></i>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </div>
        </React.Fragment>
    )
};

export default Administration;