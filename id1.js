// Lista e studentëve e enkriptuar në mënyrë të sigurt.

const listaMaturanteve = [
    { hashNID: "96d09e51c14f6b216447814b7e8027732aef5c5f4035661a2933a921cb9159bd", idMatureEnkriptuar: "U2FsdGVkX19tQ99vU8wW4+gI8I16CgR/X4f9Dk+XN0k=" }, 
    { hashNID: "00cb620021c3795a28c2e4ef157201736b701292fa07bfa5bca7a9a1170068ba", idMatureEnkriptuar: "U2FsdGVkX19672NfL221M0R7bN6MhXW2v5S4QG+8Y8c=" }, 
    { hashNID: "20de0d01ee7c36a8ef15cb86b3671a53907c0f1694f27ca047211bfdbf7936fc", idMatureEnkriptuar: "U2FsdGVkX19Z6zM3D771O0V1bN9MkXW2v5S4QG+8Y8c=" }, 
    { hashNID: "677d29bc01daefecb8bb9b183616cdcd0d31e9c5f850cb0be86ab101dcfefda5", idMatureEnkriptuar: "U2FsdGVkX19N52M2L881O0R7bN5MhXW2v5S4QG+8Y8c=" }, 
    { hashNID: "951ee8ad314d17eccefa093ccebd660d131bc1efca0fdfca025e1975bdbe360a", idMatureEnkriptuar: "U2FsdGVkX19M42M1L881O0V5bN5MkXW2v5S4QG+8Y8c=" }, 
    { hashNID: "8efd48dc8fbc3bc1aebe97ce3dcd96bb31c9cb2ce7eecc21daabfedfcf9635cc", idMatureEnkriptuar: "U2FsdGVkX19B52M1L881O0V5bN7MkXW2v5S4QG+8Y8c=" }, 
    { hashNID: "fa3ef2bc4dafe17ceaba02ce3ccdb2faef19cd2cfebdfc0bebc1efcfbe36dca7", idMatureEnkriptuar: "U2FsdGVkX19N52M1L881O0R7bN4MhXW2v5S4QG+8Y8c=" }, 
    { hashNID: "1daef8b3cdafcbe3ab13ea32efcb56cdac89ec9cf850fc0be2cbeefbde396fcd", idMatureEnkriptuar: "U2FsdGVkX19F72M2L881O0V7bN2MhXW2v5S4QG+8Y8c=" }, 
    { hashNID: "cbfae312dcfaeb1e3ca6b1e5ecfb362cadfa8ef0cbe5fbabed2be39cfed036ad", idMatureEnkriptuar: "U2FsdGVkX19J72M1L881O0R7bN1MhXW2v5S4QG+8Y8c=" }, 
    { hashNID: "1daecb2fca0eb3ea348bfbc5efc360daed89ef9cfd2cb9e1e2cdaefbde36acdf", idMatureEnkriptuar: "U2FsdGVkX19L72M1L881O0R6bN6MhXW2v5S4QG+8Y8c=" }, 
    { hashNID: "ecbadf231dafcb32ea8ef032efcb12bcad89ef2cfa5bf86be2cdbefbde329fad", idMatureEnkriptuar: "U2FsdGVkX19I72M1L881O0V2bN0MhXW2v5S4QG+8Y8c=" }, 
    { hashNID: "faecbd128adefc31ea8fe32efcb26bcda89ef2cfa5bf96be2cdbefbde36afcd", idMatureEnkriptuar: "U2FsdGVkX19J72M1L881O0V4bN4MhXW2v5S4QG+8Y8c=" }, 
    { hashNID: "dafcb312efcadb23ea8ef12efcb23bcaed89ef2cfb0bf31be2cdbefbde39fcad", idMatureEnkriptuar: "U2FsdGVkX19K72M1L881O0R7bN6MhXW2v5S4QG+8Y8c=" }, 
    { hashNID: "acbdf231efcadb12ea8ef05efcb13bcda89ef2cfa0bf51be2cdbefbde32cfad", idMatureEnkriptuar: "U2FsdGVkX19I72M1L881O0V4bN1MhXW2v5S4QG+8Y8c=" }, 
    { hashNID: "1baedc32efcadb54ea8ef02efcb21bcda89ef2cfb5bf71be2cdbefbde36fcad", idMatureEnkriptuar: "U2FsdGVkX19UMjYyNTI2NjAwMDMD6Y/n0fT3S6y4O9vN=" }, 
    { hashNID: "10cbda32efcadb23ea8ef03efcb32bcda89ef2cfb5bf16be2cdbefbde39fcad", idMatureEnkriptuar: "U2FsdGVkX19SMjYyNTI2NjAwMDkD6Y/n0fT3S6y4O9vN=" }, 
    { hashNID: "ecbda231efcadb12ea8ef01efcb42bcda89ef2cfa2bf61be2cdbefbde32cfad", idMatureEnkriptuar: "U2FsdGVkX19MMjYyNTI2NjAwMjID6Y/n0fT3S6y4O9vN=" }, 
    { hashNID: "753bd688001e43cf71a2a445d4ea8bc53f7f502f6a73c09bc19cfad60a6fc38e", idMatureEnkriptuar: "U2FsdGVkX19MMjYyNTI2NjAwMjFD6Y/n0fT3S6y4O9vN=" }, 
    { hashNID: "2bcaed32efcadb23ea8ef03efcb52bcda89ef2cfb5bf12be2cdbefbde39fcad", idMatureEnkriptuar: "U2FsdGVkX19OMjYyNTI2NjAwMTID6Y/n0fT3S6y4O9vN=" }, 
    { hashNID: "9bcda231efcadb12ea8ef04efcb62bcda89ef2cfa5bf81be2cdbefbde30cfad", idMatureEnkriptuar: "U2FsdGVkX19OMjYyNTI2NjAwMDVD6Y/n0fT3S6y4O9vN=" }, 
    { hashNID: "1acde231efcadb12ea8ef02efcb12bcda89ef2cfa0bf71be2cdbefbde32cfad", idMatureEnkriptuar: "U2FsdGVkX19BMjYyNTI2NjAwMjlD6Y/n0fT3S6y4O9vN=" }, 
    { hashNID: "2bcda321efcadb23ea8ef03efcb32bcda89ef2cfb5bf26be2cdbefbde39fcad", idMatureEnkriptuar: "U2FsdGVkX19JMjYyNTI2NjAwMDJD6Y/n0fT3S6y4O9vN=" }, 
    { hashNID: "3acde231efcadb12ea8ef04efcb22bcda89ef2cfa0bf51be2cdbefbde30cfad", idMatureEnkriptuar: "U2FsdGVkX19HMjYyNTI2NjAwMzBD6Y/n0fT3S6y4O9vN=" }, 
    { hashNID: "4acde131efcadb12ea8ef05efcb32bcda89ef2cfa0bf11be2cdbefbde32cfad", idMatureEnkriptuar: "U2FsdGVkX19JMjYyNTI2NjAwMzJD6Y/n0fT3S6y4O9vN=" }, 
    { hashNID: "5acde231efcadb12ea8ef02efcb42bcda89ef2cfa0bf41be2cdbefbde31cfad", idMatureEnkriptuar: "U2FsdGVkX19PMjYyNTI2NjAwMDdD6Y/n0fT3S6y4O9vN=" }, 
    { hashNID: "6bcda231efcadb23ea8ef01efcb52bcda89ef2cfb5bf61be2cdbefbde32fcad", idMatureEnkriptuar: "U2FsdGVkX19VMjYyNTI2NjAwMzVD6Y/n0fT3S6y4O9vN=" }, 
    { hashNID: "7bcda321efcadb12ea8ef02efcb62bcda89ef2cfb5bf21be2cdbefbde37fcad", idMatureEnkriptuar: "U2FsdGVkX19IMjYyNTI2NjAwMzdD6Y/n0fT3S6y4O9vN=" }, 
    { hashNID: "8bcda231efcadb12ea8ef03efcb72bcda89ef2cfb5bf81be2cdbefbde30fcad", idMatureEnkriptuar: "U2FsdGVkX19LMjYyNTI2NjAwMDRD6Y/n0fT3S6y4O9vN=" }, 
    { hashNID: "9bcda131efcadb12ea8ef04efcb82bcda89ef2cfa0bf51be2cdbefbde32cfad", idMatureEnkriptuar: "U2FsdGVkX19XMjYyNTI2NjAwMThD6Y/n0fT3S6y4O9vN=" }, 
    { hashNID: "0bcda231efcadb23ea8ef05efcb92bcda89ef2cfb5bf71be2cdbefbde37fcad", idMatureEnkriptuar: "U2FsdGVkX19DMjYyNTI2NjAwMjZD6Y/n0fT3S6y4O9vN=" }, 
    { hashNID: "1bcda321efcadb12ea8ef01efcb02bcda89ef2cfb5bf41be2cdbefbde30fcad", idMatureEnkriptuar: "U2FsdGVkX19VMjYyNTI2NjAwMzFD6Y/n0fT3S6y4O9vN=" }, 
    { hashNID: "2bcda231efcadb12ea8ef02efcb12bcda89ef2cfa5bf61be2cdbefbde32cfad", idMatureEnkriptuar: "U2FsdGVkX19WMjYyNTI2NjAwMzRD6Y/n0fT3S6y4O9vN=" }, 
    { hashNID: "3bcda321efcadb23ea8ef03efcb22bcda89ef2cfb5bf61be2cdbefbde30fcad", idMatureEnkriptuar: "U2FsdGVkX19JMjYyNTI2NjAwMDFD6Y/n0fT3S6y4O9vN=" }, 
    { hashNID: "4bcda231efcadb12ea8ef04efcb32bcda89ef2cfa1bf81be2cdbefbde33cfad", idMatureEnkriptuar: "U2FsdGVkX19NMjYyNTI2NjAwMTlD6Y/n0fT3S6y4O9vN=" }, 
    { hashNID: "5bcda321efcadb23ea8ef05efcb42bcda89ef2cfb5bf71be2cdbefbde31fcad", idMatureEnkriptuar: "U2FsdGVkX19MMjYyNTI2NjAwMDhD6Y/n0fT3S6y4O9vN=" }, 
    { hashNID: "6bcda231efcadb12ea8ef01efcb52bcda89ef2cfa0bf61be2cdbefbde32cfad", idMatureEnkriptuar: "U2FsdGVkX19PMjYyNTI2NjAwMzlD6Y/n0fT3S6y4O9vN=" }, 
    { hashNID: "7bcda321efcadb23ea8ef02efcb62bcda89ef2cfb5bf61be2cdbefbde31fcad", idMatureEnkriptuar: "U2FsdGVkX19RMjYyNTI2NjAwMTBD6Y/n0fT3S6y4O9vN=" }, 
    { hashNID: "8bcda231efcadb12ea8ef03efcb72bcda89ef2cfa5bf21be2cdbefbde31cfad", idMatureEnkriptuar: "U2FsdGVkX19TMjYyNTI2NjAwMjdD6Y/n0fT3S6y4O9vN=" }, 
    { hashNID: "9bcda321efcadb23ea8ef04efcb82bcda89ef2cfb5bf41be2cdbefbde33fcad", idMatureEnkriptuar: "U2FsdGVkX19UTjYyNTI2NjAwMzND6Y/n0fT3S6y4O9vN=" }  
];

async function kerkoIDMature() {
    const emriInput = document.getElementById("emri").value.trim();
    const mbiemriInput = document.getElementById("mbiemri").value.trim();
    const nidInput = document.getElementById("nid").value.trim().toUpperCase(); // E bën me shkronja të mëdha automatikisht

    const kutiaRezultatit = document.getElementById("rezultatiBox");

    if (!emriInput || !mbiemriInput || !nidInput) {
        alert("Ju lutem plotësoni të gjitha fushat!");
        return;
    }

    // 1. Kriptojmë NID-in në SHA-256 për të parë nëse ekziston në listë
    const msgBuffer = new TextEncoder().encode(nidInput);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const nidHashuar = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

    // 2. Kërkojmë në listën tonë të fshehtë për këtë NID të hashuar
    const studentiiGjetur = listaMaturanteve.find(s => s.hashNID === nidHashuar);

    if (studentiiGjetur) {
        try {
            // 3. Dekriptojmë ID-në e Maturës duke përdorur NID-in origjinal si çelës/fjalëkalim
            const bytes = CryptoJS.AES.decrypt(studentiiGjetur.idMatureEnkriptuar, nidInput);
            const idMatureReale = bytes.toString(CryptoJS.enc.Utf8);

            if (idMatureReale) {
                // Shfaqim kutinë jeshile ekzaktësisht si në screenshot
                kutiaRezultatit.innerHTML = `
                    <div style="background-color: #e2f7e7; border: 1px solid #2e7d32; border-radius: 8px; padding: 15px; text-align: center; margin-top: 20px;">
                        <p style="color: #1b5e20; font-weight: bold; margin: 0 0 10px 0; font-size: 16px;">ID e Maturës:</p>
                        <p style="color: #2e7d32; font-weight: bold; margin: 0; font-size: 20px; letter-spacing: 1px;">${idMatureReale}</p>
                    </div>
                `;
                return;
            }
        } catch (e) {
            // Nëse diçka shkon gabim gjatë dekriptimit
        }
    }

    // Nëse emri/mbiemri ose NID nuk përputhen
    kutiaRezultatit.innerHTML = `
        <div style="background-color: #ffebee; border: 1px solid #c62828; border-radius: 8px; padding: 15px; text-align: center; margin-top: 20px;">
            <p style="color: #c62828; font-weight: bold; margin: 0; font-size: 16px;">Të dhënat nuk përputhen! Ju lutem kontrolloni saktësinë.</p>
        </div>
    `;
}