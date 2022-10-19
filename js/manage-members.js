/* (1) Initiate a XMLHttpRequest Object */
const http = new XMLHttpRequest();

/* (2) Set an event listner to detect state change */
http.addEventListener('readystatechange', ()=>{
    if(http.readyState === http.DONE){
        if(http.status === 200){
            const members = JSON.parse(http.responseText);
            $("#loader").hide();

            if(members.length === 0){
                $('#tbl-members').addClass('empty');
            }


            members.forEach(member => {
                const rowHtml = `
                    <tr>
                        <td>${member.id}</td>
                        <td>${member.name}</td>
                        <td>${member.address}</td>
                        <td>${member.contact}</td>
                    </tr>
                `;
                
                $('#tbl-members tbody').append(rowHtml);
            });
        } else{
            $("#toast").show();
        }
    }

});

/* (3) Open the request (true mean should be asynchronus */
http.open('GET', 'https://154ffeda-18ef-4fd9-9bb3-11c27c898075.mock.pstmn.io/members', true);

/* (4) Set additonal information for the request */

/* (5) Send the request */
http.send();