import { makeMatch } from "@mv-d/toolbelt";

export const LINKS_DICTIONARY = makeMatch(
	{
		sequenceDiagram: "syntax/sequenceDiagram.html",
		classDiagram: "syntax/classDiagram.html",
		"stateDiagram-v2": "syntax/stateDiagram.html",
		erDiagram: "syntax/entityRelationshipDiagram.html",
		journey: "syntax/userJourney.html",
		gantt: "syntax/gantt.html",
		pie: "syntax/pie.html",
		requirementDiagram: "syntax/requirementDiagram.html",
		gitGraph: "syntax/gitgraph.html",
		mindmap: "syntax/mindmap.html",
		timeline: "syntax/timeline.html",
		C4Context: "syntax/c4c.html",
	},
	"intro",
);
