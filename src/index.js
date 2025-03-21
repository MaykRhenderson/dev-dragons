import { PersonagemView } from "./components/personagem-view.js";
import { Mago } from "./modules/mago.js";
import { Arqueiro } from "./modules/arqueiro.js";
import { ArqueiroMago } from "./modules/arqueiro-mago.js";
import { Guerreiro } from "./modules/guerreiro.js";

const magoAntonio = new Mago("Antonio", 4, "fogo", 4, 3);
const arqueiroBruno = new Arqueiro("Bruno", 7, 8);
const arqueiroIam = new Arqueiro("Iam", 8, 9);
const arqueiroMagoChico = new ArqueiroMago("Chico", 7, 10, "ar", 4, 8);
const guerreiraJorge = new Guerreiro("Jorge", 8);
	
const personagens = [
	guerreiraJorge,
	arqueiroBruno,
	magoAntonio,
	arqueiroMagoChico,
	arqueiroIam,
];

new PersonagemView(personagens).render();
