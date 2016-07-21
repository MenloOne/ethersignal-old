```
0      PUSH1  => 60
2      PUSH1  => 40
4      MSTORE
```

The PUSH1 OPs(operations) at PC(program counter) addrs 0 and 2, push 0x60 and then
0x40 onto the Us (stack) respectively. The MSTORE operation at PC addr 4 will
then store Us[1] right justified ang aligned wrt addr Us[0].

```
PC 00000004: MSTORE GAS: 9999999982 COST: 12
STACK = 2
0000: 0000000000000000000000000000000000000000000000000000000000000040
0001: 0000000000000000000000000000000000000000000000000000000000000060
MEM = 96
0000: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00  ................
0016: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00  ................
0032: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00  ................
0048: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00  ................
0064: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00  ................
0080: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00  ................
STORAGE = 0
```




5      CALLDATASIZE
6      ISZERO
7      PUSH2  => 003d
10     JUMPI
11     PUSH1  => 00
13     CALLDATALOAD
14     PUSH29  => 0100000000000000000000000000000000000000000000000000000000
44     SWAP1
45     DIV
46     DUP1
47     PUSH4  => fbe018dc
52     EQ
53     PUSH2  => 004a
56     JUMPI
57     PUSH2  => 003d
60     JUMP
61     JUMPDEST
62     PUSH2  => 0048
65     JUMPDEST
66     PUSH2  => 0002
69     JUMP
70     JUMPDEST
71     JUMP
72     JUMPDEST
73     STOP
74     JUMPDEST
75     PUSH2  => 00e5
78     PUSH1  => 04
80     DUP1
81     DUP1
82     CALLDATALOAD
83     SWAP1
84     PUSH1  => 20
86     ADD
87     SWAP1
88     DUP3
89     ADD
90     DUP1
91     CALLDATALOAD
92     SWAP1
93     PUSH1  => 20
95     ADD
96     SWAP2
97     SWAP2
98     SWAP1
99     DUP1
100    DUP1
101    PUSH1  => 1f
103    ADD
104    PUSH1  => 20
106    DUP1
107    SWAP2
108    DIV
109    MUL
110    PUSH1  => 20
112    ADD
113    PUSH1  => 40
115    MLOAD
116    SWAP1
117    DUP2
118    ADD
119    PUSH1  => 40
121    MSTORE
122    DUP1
123    SWAP4
124    SWAP3
125    SWAP2
126    SWAP1
127    DUP2
128    DUP2
129    MSTORE
130    PUSH1  => 20
132    ADD
133    DUP4
134    DUP4
135    DUP1
136    DUP3
137    DUP5
138    CALLDATACOPY
139    DUP3
140    ADD
141    SWAP2
142    POP
143    POP
144    POP
145    POP
146    POP
147    POP
148    SWAP1
149    SWAP1
150    SWAP2
151    SWAP1
152    DUP1
153    CALLDATALOAD
154    SWAP1
155    PUSH1  => 20
157    ADD
158    SWAP1
159    DUP3
160    ADD
161    DUP1
162    CALLDATALOAD
163    SWAP1
164    PUSH1  => 20
166    ADD
167    SWAP2
168    SWAP2
169    SWAP1
170    DUP1
171    DUP1
172    PUSH1  => 1f
174    ADD
175    PUSH1  => 20
177    DUP1
178    SWAP2
179    DIV
180    MUL
181    PUSH1  => 20
183    ADD
184    PUSH1  => 40
186    MLOAD
187    SWAP1
188    DUP2
189    ADD
190    PUSH1  => 40
192    MSTORE
193    DUP1
194    SWAP4
195    SWAP3
196    SWAP2
197    SWAP1
198    DUP2
199    DUP2
200    MSTORE
201    PUSH1  => 20
203    ADD
204    DUP4
205    DUP4
206    DUP1
207    DUP3
208    DUP5
209    CALLDATACOPY
210    DUP3
211    ADD
212    SWAP2
213    POP
214    POP
215    POP
216    POP
217    POP
218    POP
219    SWAP1
220    SWAP1
221    SWAP2
222    SWAP1
223    POP
224    POP
225    PUSH2  => 00e7
228    JUMP
229    JUMPDEST
230    STOP
231    JUMPDEST
232    PUSH1  => 00
234    CALLER
235    PUSH1  => 40
237    MLOAD
238    PUSH2  => 0315
241    DUP1
242    PUSH2  => 026a
245    DUP4
246    CODECOPY
247    ADD
248    DUP1
249    DUP3
250    PUSH20  => ffffffffffffffffffffffffffffffffffffffff
271    AND
272    DUP2
273    MSTORE
274    PUSH1  => 20
276    ADD
277    SWAP2
278    POP
279    POP
280    PUSH1  => 40
282    MLOAD
283    DUP1
284    SWAP2
285    SUB
286    SWAP1
287    PUSH1  => 00
289    CREATE
290    SWAP1
291    POP
292    PUSH1  => 00
294    DUP2
295    PUSH20  => ffffffffffffffffffffffffffffffffffffffff
316    AND
317    EQ
318    ISZERO
319    PUSH2  => 0147
322    JUMPI
323    PUSH2  => 0002
326    JUMP
327    JUMPDEST
328    DUP1
329    PUSH20  => ffffffffffffffffffffffffffffffffffffffff
350    AND
351    CALLER
352    PUSH20  => ffffffffffffffffffffffffffffffffffffffff
373    AND
374    PUSH32  => b3e80ceff88af9d519f32f366c369f2cc1671b77e041737c29eb52bb1e8065d3
407    DUP6
408    DUP6
409    PUSH1  => 40
411    MLOAD
412    DUP1
413    DUP1
414    PUSH1  => 20
416    ADD
417    DUP1
418    PUSH1  => 20
420    ADD
421    DUP4
422    DUP2
423    SUB
424    DUP4
425    MSTORE
426    DUP6
427    DUP2
428    DUP2
429    MLOAD
430    DUP2
431    MSTORE
432    PUSH1  => 20
434    ADD
435    SWAP2
436    POP
437    DUP1
438    MLOAD
439    SWAP1
440    PUSH1  => 20
442    ADD
443    SWAP1
444    DUP1
445    DUP4
446    DUP4
447    DUP3
448    SWAP1
449    PUSH1  => 00
451    PUSH1  => 04
453    PUSH1  => 20
455    DUP5
456    PUSH1  => 1f
458    ADD
459    DIV
460    PUSH1  => 0f
462    MUL
463    PUSH1  => 03
465    ADD
466    CALL
467    POP
468    SWAP1
469    POP
470    SWAP1
471    DUP2
472    ADD
473    SWAP1
474    PUSH1  => 1f
476    AND
477    DUP1
478    ISZERO
479    PUSH2  => 01fc
482    JUMPI
483    DUP1
484    DUP3
485    SUB
486    DUP1
487    MLOAD
488    PUSH1  => 01
490    DUP4
491    PUSH1  => 20
493    SUB
494    PUSH2  => 0100
497    EXP
498    SUB
499    NOT
500    AND
501    DUP2
502    MSTORE
503    PUSH1  => 20
505    ADD
506    SWAP2
507    POP
508    JUMPDEST
509    POP
510    DUP4
511    DUP2
512    SUB
513    DUP3
514    MSTORE
515    DUP5
516    DUP2
517    DUP2
518    MLOAD
519    DUP2
520    MSTORE
521    PUSH1  => 20
523    ADD
524    SWAP2
525    POP
526    DUP1
527    MLOAD
528    SWAP1
529    PUSH1  => 20
531    ADD
532    SWAP1
533    DUP1
534    DUP4
535    DUP4
536    DUP3
537    SWAP1
538    PUSH1  => 00
540    PUSH1  => 04
542    PUSH1  => 20
544    DUP5
545    PUSH1  => 1f
547    ADD
548    DIV
549    PUSH1  => 0f
551    MUL
552    PUSH1  => 03
554    ADD
555    CALL
556    POP
557    SWAP1
558    POP
559    SWAP1
560    DUP2
561    ADD
562    SWAP1
563    PUSH1  => 1f
565    AND
566    DUP1
567    ISZERO
568    PUSH2  => 0255
571    JUMPI
572    DUP1
573    DUP3
574    SUB
575    DUP1
576    MLOAD
577    PUSH1  => 01
579    DUP4
580    PUSH1  => 20
582    SUB
583    PUSH2  => 0100
586    EXP
587    SUB
588    NOT
589    AND
590    DUP2
591    MSTORE
592    PUSH1  => 20
594    ADD
595    SWAP2
596    POP
597    JUMPDEST
598    POP
599    SWAP5
600    POP
601    POP
602    POP
603    POP
604    POP
605    PUSH1  => 40
607    MLOAD
608    DUP1
609    SWAP2
610    SUB
611    SWAP1
612    LOG3
613    JUMPDEST
614    POP
615    POP
616    POP
617    JUMP
618    PUSH1  => 60
620    PUSH1  => 40
622    MSTORE
623    PUSH1  => 40
625    MLOAD
626    PUSH1  => 20
628    DUP1
629    PUSH2  => 0315
632    DUP4
633    CODECOPY
634    DUP2
635    ADD
636    PUSH1  => 40
638    MSTORE
639    DUP1
640    DUP1
641    MLOAD
642    SWAP1
643    PUSH1  => 20
645    ADD
646    SWAP1
647    SWAP2
648    SWAP1
649    POP
650    POP
651    JUMPDEST
652    DUP1
653    PUSH1  => 00
655    PUSH1  => 00
657    PUSH2  => 0100
660    EXP
661    DUP2
662    SLOAD
663    DUP2
664    PUSH20  => ffffffffffffffffffffffffffffffffffffffff
685    MUL
686    NOT
687    AND
688    SWAP1
689    DUP4
690    MUL
691    OR
692    SWAP1
693    SSTORE
694    POP
695    JUMPDEST
696    POP
697    PUSH2  => 02b9
700    DUP1
701    PUSH2  => 005c
704    PUSH1  => 00
706    CODECOPY
707    PUSH1  => 00
709    RETURN
710    PUSH1  => 60
712    PUSH1  => 40
714    MSTORE
715    CALLDATASIZE
716    ISZERO
717    PUSH2  => 0053
720    JUMPI
721    PUSH1  => 00
723    CALLDATALOAD
724    PUSH29  => 0100000000000000000000000000000000000000000000000000000000
754    SWAP1
755    DIV
756    DUP1
757    PUSH4  => 2e1a7d4d
762    EQ
763    PUSH2  => 00b8
766    JUMPI
767    DUP1
768    PUSH4  => 7115a82e
773    EQ
774    PUSH2  => 00d0
777    JUMPI
778    DUP1
779    PUSH4  => b8d655f2
784    EQ
785    PUSH2  => 00e8
788    JUMPI
789    PUSH2  => 0053
792    JUMP
793    JUMPDEST
794    PUSH2  => 00b6
797    JUMPDEST
798    PUSH1  => 00
800    PUSH1  => 00
802    SWAP1
803    SLOAD
804    SWAP1
805    PUSH2  => 0100
808    EXP
809    SWAP1
810    DIV
811    PUSH20  => ffffffffffffffffffffffffffffffffffffffff
832    AND
833    PUSH20  => ffffffffffffffffffffffffffffffffffffffff
854    AND
855    CALLER
856    PUSH20  => ffffffffffffffffffffffffffffffffffffffff
877    AND
878    EQ
879    ISZERO
880    ISZERO
881    PUSH2  => 00b3
884    JUMPI
885    PUSH2  => 0002
888    JUMP
889    JUMPDEST
890    JUMPDEST
891    JUMP
892    JUMPDEST
893    STOP
894    JUMPDEST
895    PUSH2  => 00ce
898    PUSH1  => 04
900    DUP1
901    DUP1
902    CALLDATALOAD
903    SWAP1
904    PUSH1  => 20
906    ADD
907    SWAP1
908    SWAP2
909    SWAP1
910    POP
911    POP
912    PUSH2  => 00f7
915    JUMP
916    JUMPDEST
917    STOP
918    JUMPDEST
919    PUSH2  => 00e6
922    PUSH1  => 04
924    DUP1
925    DUP1
926    CALLDATALOAD
927    SWAP1
928    PUSH1  => 20
930    ADD
931    SWAP1
932    SWAP2
933    SWAP1
934    POP
935    POP
936    PUSH2  => 01b8
939    JUMP
940    JUMPDEST
941    STOP
942    JUMPDEST
943    PUSH2  => 00f5
946    PUSH1  => 04
948    DUP1
949    POP
950    POP
951    PUSH2  => 0213
954    JUMP
955    JUMPDEST
956    STOP
957    JUMPDEST
958    PUSH1  => 00
960    PUSH1  => 00
962    SWAP1
963    SLOAD
964    SWAP1
965    PUSH2  => 0100
968    EXP
969    SWAP1
970    DIV
971    PUSH20  => ffffffffffffffffffffffffffffffffffffffff
992    AND
993    PUSH20  => ffffffffffffffffffffffffffffffffffffffff
1014   AND
1015   CALLER
1016   PUSH20  => ffffffffffffffffffffffffffffffffffffffff
1037   AND
1038   EQ
1039   ISZERO
1040   ISZERO
1041   PUSH2  => 0153
1044   JUMPI
1045   PUSH2  => 0002
1048   JUMP
1049   JUMPDEST
1050   ADDRESS
1051   PUSH20  => ffffffffffffffffffffffffffffffffffffffff
1072   AND
1073   BALANCE
1074   DUP2
1075   GT
1076   ISZERO
1077   PUSH2  => 0177
1080   JUMPI
1081   PUSH2  => 0002
1084   JUMP
1085   JUMPDEST
1086   CALLER
1087   PUSH20  => ffffffffffffffffffffffffffffffffffffffff
1108   AND
1109   PUSH1  => 00
1111   DUP3
1112   PUSH1  => 40
1114   MLOAD
1115   DUP1
1116   SWAP1
1117   POP
1118   PUSH1  => 00
1120   PUSH1  => 40
1122   MLOAD
1123   DUP1
1124   DUP4
1125   SUB
1126   DUP2
1127   DUP6
1128   DUP9
1129   DUP9
1130   CALL
1131   SWAP4
1132   POP
1133   POP
1134   POP
1135   POP
1136   ISZERO
1137   ISZERO
1138   PUSH2  => 01b4
1141   JUMPI
1142   PUSH2  => 0002
1145   JUMP
1146   JUMPDEST
1147   JUMPDEST
1148   POP
1149   JUMP
1150   JUMPDEST
1151   PUSH32  => 3dd0fdf2791a363c17ffa7578c529ba8f9e4bb172c7c169631b8c457182cb480
1184   DUP2
1185   CALLER
1186   PUSH1  => 40
1188   MLOAD
1189   DUP1
1190   DUP4
1191   ISZERO
1192   ISZERO
1193   DUP2
1194   MSTORE
1195   PUSH1  => 20
1197   ADD
1198   DUP3
1199   PUSH20  => ffffffffffffffffffffffffffffffffffffffff
1220   AND
1221   DUP2
1222   MSTORE
1223   PUSH1  => 20
1225   ADD
1226   SWAP3
1227   POP
1228   POP
1229   POP
1230   PUSH1  => 40
1232   MLOAD
1233   DUP1
1234   SWAP2
1235   SUB
1236   SWAP1
1237   LOG1
1238   JUMPDEST
1239   POP
1240   JUMP
1241   JUMPDEST
1242   PUSH1  => 00
1244   PUSH1  => 00
1246   SWAP1
1247   SLOAD
1248   SWAP1
1249   PUSH2  => 0100
1252   EXP
1253   SWAP1
1254   DIV
1255   PUSH20  => ffffffffffffffffffffffffffffffffffffffff
1276   AND
1277   PUSH20  => ffffffffffffffffffffffffffffffffffffffff
1298   AND
1299   CALLER
1300   PUSH20  => ffffffffffffffffffffffffffffffffffffffff
1321   AND
1322   EQ
1323   ISZERO
1324   ISZERO
1325   PUSH2  => 026f
1328   JUMPI
1329   PUSH2  => 0002
1332   JUMP
1333   JUMPDEST
1334   PUSH32  => dd1e36bfb77a92bd8df1874fc9c466335547442bbedc7f1470f73345c970c426
1367   PUSH1  => 40
1369   MLOAD
1370   DUP1
1371   SWAP1
1372   POP
1373   PUSH1  => 40
1375   MLOAD
1376   DUP1
1377   SWAP2
1378   SUB
1379   SWAP1
1380   LOG1
1381   CALLER
1382   PUSH20  => ffffffffffffffffffffffffffffffffffffffff
1403   AND
1404   SUICIDE
1405   JUMPDEST
1406   JUMP