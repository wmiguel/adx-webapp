import React from 'react';

function WorkOrders () {
        return(
            <React.Fragment>
                <header>
                    <h1>Work Orders</h1>
                    <div className="new-tab" onClick="">
                        <div>+</div>
                    </div>
                </header>
                <div id="work-orders">
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
                </div>
            </React.Fragment>
        )
};

export default WorkOrders;