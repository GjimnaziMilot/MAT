const database = [

    { emri: "Alesja", mbiemri: "Veseli", nid: "K85523029O", id: "262526600015" },
    { emri: "Alonso", mbiemri: "Lleshi", nid: "K71017040R", id: "262526600017" },
    { emri: "Andi", mbiemri: "Kasmi", nid: "K81205026V", id: "262526600028" },
    { emri: "Argita", mbiemri: "Preni", nid: "K85618023N", id: "262526600013" },
    { emri: "Armend", mbiemri: "Kasmi", nid: "K70409021E", id: "262526600023" },
    { emri: "Blerta", mbiemri: "Kasmi", nid: "K76008029R", id: "262526600025" },
    { emri: "Eneda", mbiemri: "Veseli", nid: "K85518026L", id: "262526600014" },
    { emri: "Eristea", mbiemri: "Marku", nid: "K85909016R", id: "262526600036" },
    { emri: "Irsa", mbiemri: "Brahimi", nid: "K85805016R", id: "262526600011" },
    { emri: "Kejdi", mbiemri: "Mhilli", nid: "K71130012L", id: "262526600006" },
    { emri: "Klevi", mbiemri: "Ajazi", nid: "K81112038H", id: "262526600040" },
    { emri: "Klevis", mbiemri: "Likaj", nid: "K71108035I", id: "262526600024" },
    { emri: "Klista", mbiemri: "Hidri", nid: "K85729021J", id: "262526600016" },
    { emri: "Ledjon", mbiemri: "Aliu", nid: "K80723032H", id: "262526600041" },
    { emri: "Lezanda", mbiemri: "Marku", nid: "K86030036T", id: "262526600003" },
    { emri: "Luis", mbiemri: "Lika", nid: "K71226024R", id: "262526600009" },
    { emri: "Mariglen", mbiemri: "Hyseni", nid: "K80421023M", id: "262526600022" },
    { emri: "Serena", mbiemri: "Kokaj", nid: "K76231031M", id: "262526600021" },
    { emri: "Sibora", mbiemri: "Kola", nid: "K76029024N", id: "262526600012" },
    { emri: "Vjolentina", mbiemri: "Pjetri", nid: "K85820021N", id: "262526600005" },
    { emri: "Adenis", mbiemri: "Muçaj", nid: "K80510028A", id: "262526600029" },
    { emri: "Alesja", mbiemri: "Hysa", nid: "K75905078I", id: "262526600002" },
    { emri: "Arber", mbiemri: "Ahmeti", nid: "K80625031G", id: "262526600030" },
    { emri: "Ardit", mbiemri: "Veseli", nid: "K80104053I", id: "262526600032" },
    { emri: "Arlind", mbiemri: "Smaçi", nid: "K80418019P", id: "262526600007" },
    { emri: "Daniela", mbiemri: "Kolaj", nid: "K76122026U", id: "262526600035" },
    { emri: "Desarta", mbiemri: "Halili", nid: "K86203018H", id: "262526600037" },
    { emri: "Enxhi", mbiemri: "Kasmi", nid: "K85805018K", id: "262526600004" },
    { emri: "Ergys", mbiemri: "Allamani", nid: "K80501022W", id: "262526600018" },
    { emri: "Fabiona", mbiemri: "Kola", nid: "K85717067C", id: "262526600026" },
    { emri: "Flavjo", mbiemri: "Haxhiu", nid: "K80430027U", id: "262526600031" },
    { emri: "Gilda", mbiemri: "Hyseni", nid: "K85627018W", id: "262526600034" },
    { emri: "Kleanda", mbiemri: "Kola", nid: "K86018009I", id: "262526600001" },
    { emri: "Leandro", mbiemri: "Osmani", nid: "K81216033N", id: "262526600019" },
    { emri: "Leo", mbiemri: "Vokrri", nid: "K80721031M", id: "262526600008" },
    { emri: "Samuel", mbiemri: "Kasmi", nid: "K80614027P", id: "262526600039" },
    { emri: "Sindi", mbiemri: "Çupi", nid: "K86202014Q", id: "262526600010" },
    { emri: "Sindi", mbiemri: "Tafa", nid: "K85205031T", id: "262526600027" },
    { emri: "Smerald", mbiemri: "Veseli", nid: "K80407024T", id: "262526600033" }

];

function kerkoID(){

    const emri = document.getElementById("emri").value.trim().toLowerCase();

    const mbiemri = document.getElementById("mbiemri").value.trim().toLowerCase();

    const nid = document.getElementById("nid").value.trim().toLowerCase();

    const rezultati = document.getElementById("rezultati");

    if(emri === "" || mbiemri === "" || nid === ""){

        rezultati.innerHTML = "Plotësoni të gjitha fushat!";
        rezultati.className = "error";

        return;
    }

    const maturanti = database.find(function(m){

        return m.emri.toLowerCase() === emri &&
               m.mbiemri.toLowerCase() === mbiemri &&
               m.nid.toLowerCase() === nid;
    });

    if(maturanti){

        rezultati.innerHTML =
        "ID e Maturës: <br><br>" + maturanti.id;

        rezultati.className = "success";

    }else{

        rezultati.innerHTML =
        "Të dhënat nuk u gjetën!";

        rezultati.className = "error";
    }
}
