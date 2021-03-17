<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@fluentui/react-teams](./react-teams.md) &gt; [TTableInteraction](./react-teams.ttableinteraction.md)

## TTableInteraction type

An interaction payload emitted by Table.

<b>Signature:</b>

```typescript
export declare type TTableInteraction = {
    event: "click";
    target: "table";
    subject: rowKey | rowKey[];
    action: actionKey;
};
```
<b>References:</b> [actionKey](./react-teams.actionkey.md)
