/* tslint:disable */

import { ConcreteFragment } from "relay-runtime";
declare const _Header_gene$ref: unique symbol;
export type Header_gene$ref = typeof _Header_gene$ref;
export type Header_gene = {
    readonly _id: string;
    readonly id: string;
    readonly name: string | null;
    readonly " $refType": Header_gene$ref;
};



const node: ConcreteFragment = {
  "kind": "Fragment",
  "name": "Header_gene",
  "type": "Gene",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "_id",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "name",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "__id",
      "args": null,
      "storageKey": null
    }
  ]
};
(node as any).hash = '36c56f6ad3ec3091e430c42a52e701f6';
export default node;
