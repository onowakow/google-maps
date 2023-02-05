import { Component } from '@angular/core';

@Component({
  selector: 'app-directions',
  templateUrl: './directions.component.html',
  styleUrls: ['./directions.component.css'],
})
export class DirectionsComponent {
  directions = {
    geocoded_waypoints: [
      {
        geocoder_status: 'OK',
        place_id: 'ChIJeZvajveEaIcRk-XEoffBiY4',
        types: ['locality', 'political'],
      },
      {
        geocoder_status: 'OK',
        place_id: 'ChIJrTDwkEVKaYcRgkCrtChCsak',
        types: ['locality', 'political'],
      },
    ],
    routes: [
      {
        bounds: {
          northeast: {
            lat: 41.3113594,
            lng: -105.0842835,
          },
          southwest: {
            lat: 40.5852594,
            lng: -105.6018549,
          },
        },
        copyrights: 'Map data ©2023 Google',
        legs: [
          {
            distance: {
              text: '64.7 mi',
              value: 104116,
            },
            duration: {
              text: '1 hour 6 mins',
              value: 3984,
            },
            end_address: 'Fort Collins, CO, USA',
            end_location: {
              lat: 40.5852594,
              lng: -105.0842862,
            },
            start_address: 'Laramie, WY, USA',
            start_location: {
              lat: 41.3113594,
              lng: -105.590956,
            },
            steps: [
              {
                distance: {
                  text: '180 ft',
                  value: 55,
                },
                duration: {
                  text: '1 min',
                  value: 18,
                },
                end_location: {
                  lat: 41.3108692,
                  lng: -105.5909985,
                },
                html_instructions:
                  'Head <b>south</b> on <b>S 5th St</b> toward <b>Grand Ave</b>',
                polyline: {
                  points: '_sc{FnfncSx@Bf@B',
                },
                start_location: {
                  lat: 41.3113594,
                  lng: -105.590956,
                },
                travel_mode: 'DRIVING',
              },
              {
                distance: {
                  text: '0.1 mi',
                  value: 217,
                },
                duration: {
                  text: '1 min',
                  value: 51,
                },
                end_location: {
                  lat: 41.3110228,
                  lng: -105.5935909,
                },
                html_instructions: 'Turn <b>right</b> onto <b>Grand Ave</b>',
                maneuver: 'turn-right',
                polyline: {
                  points: '}oc{FvfncSO|FEfBG~C',
                },
                start_location: {
                  lat: 41.3108692,
                  lng: -105.5909985,
                },
                travel_mode: 'DRIVING',
              },
              {
                distance: {
                  text: '60.5 mi',
                  value: 97396,
                },
                duration: {
                  text: '57 mins',
                  value: 3409,
                },
                end_location: {
                  lat: 40.6262331,
                  lng: -105.1069005,
                },
                html_instructions:
                  'Turn <b>left</b> onto <b>US-287 S</b>/<wbr/><b>S 3rd St</b><div style="font-size:0.9em">Continue to follow US-287 S</div><div style="font-size:0.9em">Pass by Bank of the W (on the right)</div><div style="font-size:0.9em">Entering Colorado</div>',
                maneuver: 'turn-left',
                polyline: {
                  points:
                    '{pc{F|vncSzDRnAHlBJzDRxDR|DTxDR|DTvDPzDRrDRvCPb@BhAFb@BdBHN?fCFb@AD?\\CNCtAOTCJAj@Eh@Gb@Eb@EZCJHLAlAMbAGtASl@Ij@I~@Kh@I|C[~AQv@IfAMVEpAMfAMNCb@EdJgAvC[^SlAOdHw@jBSx@KRCfBSrDc@zDc@`Fi@dBQjAMn@EhAKzAGx@CdAC`B?n@@v@@lAD`AHlBHRTdALxARl@Jb@HlDv@t@R|Ad@dA\\f@HZP~@^pB~@tAt@zBjAt@`@RJfAl@zBjAx@b@`@RfFpC`Ah@jB`A~EhCrDnBpCxA~@d@hAf@pD|AdBt@dA^hC`A\\LB?rAb@vCz@nBh@|A`@|A\\bB\\nB\\dANt@J`AL~@NB?pANnANfAHxALdCN`BFrBFr@BrB@h@@l@@dAAnA?zAEtDIbBCfGO|@ClEIzAE`AClBGfAC@?dACPA|f@iAvJUhBErDIfACfAErBEj@AfACbACpBG|DIz@C|FObHOXApBGbDGlGOBAbAAb@Ab@AlBEhBED?\\AtDKdACnCGpM[pBEfMYxGQl@AdBEpBCJAfBEbBEt@C|BEb@CtCGrDK|ACnGQh@AlCEzAEb@AJ?dCInDIfHOvAEhHQjEK|CInCGhDGXAjACpBGtAExAEfCK|BOnAM|AMdAMnBUlAQJAVEvAUlB]tBa@nAYrA[fAWnA]v@U`DaA`@On@Ub@QrBw@^Od@S@?~@a@|@c@x@_@zC{ApAu@|@g@NIrEaC~@g@dAi@d@U`@Sn@Yf@Sv@]VKr@[h@StBy@nBu@vAe@tBy@nBu@t@Y`Bo@fBq@n@Wj@Wd@Sx@_@hB{@dB}@h@W~@i@|@i@zA{@jBmA|@m@|AeA`BmAhA{@nAcAx@o@pB}Ah@e@LKtAgArFkE\\YvC_C\\WnH_GnH_GtEqDxAkAtEsDz@q@xBeBdKgI\\WvDyC\\WzAmAxAkAzAkAjKiI\\YtDyCrFiE^WxAkA^YzAkAnH}Fz@o@xCaCz@q@hIuGdCmBlEkD~AoAz@s@~@u@x@s@dA{@dAaAz@{@p@q@JM^a@X]^a@`@g@JOn@w@|@mAx@kAfCcEpCoEhAiBp@eAzC}E~@}AjDsF\\g@Zc@RYb@g@V[\\]d@e@l@k@XWROb@Y^Uf@YRMTKf@Uh@STK\\KTG\\If@Kj@Ir@Ir@Ib@AVA`@A|AC|@?|@Ax@?VAV?d@C@?ZCF?`@EZCZENCZEh@Kb@I@A^IFCb@M^K^MZMZMFCTKHE^Ol@[RMNINKNIb@YRMTSf@_@XUXUBCv@q@jGoFzDgDzG{FxDcDh@c@|BmB|@w@nE{D`CqBlEwD`DoChB}AvBiBxAoAzDcDlBcB~DiDPOpEyDdA}@p@k@fJ_IjK}InAgAzHwGfGiFjGmF`CuBTIn@m@b@]~@y@dA{@hC}Bl@k@^[j@g@vBiBfEqDnC_C|AsAtCcC|BoBnBaBbByAbCwBjAiA`@a@j@k@pDoD|F}F|@}@Z[~A}An@q@rDqDhCiCnAoAzA{Av@y@\\[Z[d@e@bDaD\\]TUdHcHpAsAt@u@jCiChAgAbCeCb@c@jAoAd@k@TY^g@FIVa@@AV_@Vc@`@s@P[FKP]Vk@Zu@@CBIN_@FOHWFMVy@J_@J]FQVgAXoA@CVoAZaBDQBOJm@BIVwA^mBReAHa@Jk@XuABMr@qD@ITmAReALo@Ji@Lk@@ITmAJg@@EDODSBGJa@Lk@Po@`@oANe@Pg@Rc@Ri@Xm@@C\\q@Zm@\\o@\\m@PYP[t@oAFINYfAiBn@gAHMZi@Xg@`AaBhB_DnBiDnBcDPYVa@pBiD\\k@tBqDVc@b@u@f@{@bAiBlE{HrAaCzAkCnAyB~AmC`CcE~@_Br@mA@CT_@FKn@cA\\e@f@q@@?h@q@j@q@X[b@e@PO`@a@j@i@r@m@d@_@|@m@\\Uh@c@~BuA`@S~A_A^Sn@_@hC{AlAs@tAu@vBqAbAk@HE~@k@RKtAy@t@c@\\QBA~A_APMLGl@_@dAm@JG`@Ur@e@d@YBC\\UFEp@e@dAu@j@_@h@_@VSl@e@v@k@t@u@r@k@TUTQj@g@`@_@l@i@v@u@f@c@d@c@jAgAnAmAJKd@e@JK`@_@VWDCjCeC`@a@pFcFl@m@x@y@hAeArAsAhAeA@ARQf@i@X_@`@e@X_@f@s@lAmBP]R_@Zo@f@gATm@DMJYL_@Xw@b@yAJ]b@{Az@aDt@iCZiAPm@Ty@FWLc@BERu@V_APo@^qAT{@`@uARu@`@yAp@{BLg@Ni@h@kBNg@Ty@Ro@Tw@Ng@L[Nc@N_@\\w@FOP]Pa@FKFMFOLSP[P[@CR]\\g@`BiCzCyEv@oAl@cAb@q@NWR_@b@{@f@cAhAsBTc@vAmCd@}@JOXk@r@oANUNUVa@PWRW`@k@RULQNQJKNOTUNOz@{@\\]\\]XY\\]RS`AaADEbBaB`AeA`@g@Z_@X_@Ze@DGJOJQHOp@kAHQP]LWN]N]FMN_@Pa@L]Tq@BGLa@BIh@eBt@mCbBaGvAyEPo@`@sA`@uAPg@@ETq@L]N_@L_@LWLYN_@N[Ve@Zk@P[PYVa@V]PWTY^e@VYDGPQvA}ADEbAaAn@m@p@m@rCsCDCfEcErCmCTSfAeAd@c@RQVSnAy@LIJGDCXOFCNGNIPGHCHEb@OPGBALE\\Id@KZGj@Iv@MlCa@bBYb@GdAQFAZEfEq@xCe@PCt@K\\C\\Cf@ED?b@ALAh@?d@?h@@F?^@j@@^BJ?V@~DLX@\\@VAR?\\?b@C`@Ad@E`@E\\Eb@Gd@I`ASd@Od@OfA_@b@Od@STMd@Uh@YZQTODCd@]j@c@DC^[`@]^_@`@a@VYX]\\c@LOh@s@tAgB^e@X_@JMh@q@PWj@q@X[`@c@NMDERU@A\\Yd@[\\YVQ\\W`@UHEj@]d@SXO^Sl@U^M`@MXKJEn@Wv@OFAZGVCj@K@?lC_@fAOdAO|ASJAb@EhBUn@KVEnASz@Oj@Mj@Kz@St@Sp@Sb@MNGPG^Mp@WRIZKp@[v@_@nAk@x@c@|@i@j@]l@a@h@]d@]f@_@p@g@p@k@|@s@rAoAxA{AvBcCl@u@Za@\\e@n@}@t@kA`@m@^o@\\m@?AZk@b@y@DGd@aAd@aA`@{@b@gAn@aBd@oAl@gBPg@j@eBp@qB^kAxAmE|B_HxAmEbDyJb@qAt@}Bb@qAbAmCfAqCf@iAf@iA`@y@Xk@Vc@Zo@^q@Xg@`@m@f@w@l@}@f@q@RYd@m@n@w@v@_Aj@o@l@s@l@q@`@e@VYPSHIPS^c@p@o@v@y@hAcAnAiAfB_Br@m@p@i@\\[`@]b@[\\W^Wd@[f@_@n@c@xCkB~@m@l@c@x@m@~@m@^UZSbBiA`As@hA}@|@u@FG\\[JMNOZ[X[\\_@@AV[NSXa@JQT[t@iAP[t@oAj@iA@ABI^u@r@cBRc@N]Rg@Nc@pAyCVm@dAmCFOFMr@iB`@_AFMDK^}@h@sADKFMDMd@oAPc@Rm@\\cADM`@kA@Eh@mBDQ`@sATw@\\kA@GPi@Ni@^kAPs@bAgDLg@@An@_CPi@@EvAeFzEePp@cCfAwDNi@`@uA^sAp@_C`AgDbB_GNg@Ng@@ANi@Pg@Pg@JYL[l@}AXu@b@aAVk@Ti@`@u@d@aAd@y@`AeB|AmCxCiFNWvBoD|B}DbAgBr@iALU`@m@V]\\g@@AV]FGPWPSHKZ]?AZ[BEXW\\]^]x@s@h@e@^WJIPOLIf@[r@c@|@g@d@UHEj@W|@_@t@Yp@U~@Wr@QZILCNC|@Ob@Il@Iz@I\\Cd@CjEWnF[zBMhKm@b@CvEYrDS`@CjDQXCd@E\\CZCb@Gh@G|@M~@M`@G@?dBWd@Gh@IhAQ~@MlAQ|B]`@Gx@Md@GJAPCXEb@I`@Ir@Or@O\\Ml@Sb@Ol@WRIRKZORKTOBALITO\\Wd@_@d@a@r@q@`@_@f@m@b@k@Xa@BCl@{@\\k@^s@\\o@@ETg@Vm@`@_AZ{@JYvAsDZ{@Xs@\\y@L[JWVi@\\s@d@_A^q@Tc@Ze@Ze@\\i@^i@\\e@?AbAsA`CgDbDmEl@w@|@oAbAsAl@}@`GiIzDmFvAkBnAaB~AyBvAoBbDoEdDuE\\e@vGeJlDwE|@mAX_@vC}DHIT[dCiDnAeB`CeDXa@j@y@hA{AlAcBHKLQ@AfBcCf@q@rBmC?CzAsBvAsBPUzB{CxAsBlBgClBgCJOr@}@x@kAxBcDdFcHjFgHdDqEtC{DbB}B@AnC{D`@i@x@iAtCwDnAcBHKzA{BT]nAgBHIdCiDv@gAr@}@|AuBd@o@f@q@b@m@`AsAlAaB~AyBfA{ATYv@gAX_@l@y@h@u@h@u@HMh@s@Xa@pAeB\\e@p@_AlBkC~@qAdAwAzCeE^g@p@}@j@w@z@iA`B}Bz@kA`@i@jA_B`ByB~@qAdAwAbAuAt@cAhA_BzByCn@y@nA}Af@m@bAmAlAuA`AcA`@c@d@g@`AaAfBgBt@u@dAgAf@g@t@w@`BaBZ[bAeArCsCp@q@t@u@r@s@b@e@l@m@t@w@FEtBwBVW\\[tCwCl@m@xAyAPSRSn@o@Z[h@k@fAgAd@e@hBgBRS|AyA|@y@fA_A\\W`@[n@e@v@k@PMNKLKNK^Wr@e@|A}@`B_Al@[PKb@S~Aw@v@_@l@Yv@[j@UpAg@r@Y`@OLGdBo@|@_@pAa@|@[~Am@XK|B{@lCcAh@SbBo@fDqAlEgBlGyBbHkCnI{CBApCeAr@WxD{A|Ak@\\M`C}@FChDqANEPIrB{@PG|@a@xAo@bCeA`@QhBw@`Bu@~As@`@Q^QrB_Ap@[`@O`@QbBu@hCgA|E{Bd@UbBw@b@U|@a@fEmBBA\\MdAc@~Au@f@WbJiE`@S~BgAdEsBhEqBhEsBTKJE`CmA`Ag@^OnCsAvKiFbCiAbBw@`Bs@dCeArCgA`CiAx@[fA_@p@QHA`@Kl@IXEXCl@Et@CZAP@^?J@N?RBN?t@HP@RDL@|@PnAR~@P`@FfBZzAVh@JH@VD`@DVBZD\\Bd@DF?T@j@Bl@@|ABf@Cj@A`@@r@@b@?zB?\\Ad@CXCTCh@Gr@O^KTGVIVKVIHELERKBAn@[\\Sn@_@LIPMnAw@`DwBhAw@NKvAaAvA_AvA}@^W^WDC`BeARMPMl@c@\\S@AdBkAf@]r@g@|@q@zAkA^Yx@q@RSTQb@a@d@c@TU`@c@t@y@Z]h@o@LQLOf@q@f@s@Ze@DGf@u@pAmBNW~AaC|MoSrB_DtAuB`A}AV_@Zi@f@{@p@kAp@mADG`@u@Xk@Vg@x@aBP_@HML[NYL[N[LYN[L[L[BEPa@@CJWBEb@kAd@iAZ{@FQ@EFOPg@DMDI\\cA`@mA^mAJ[FSLa@FKDMHUDQNk@Ni@~A_GHe@He@BMDYBQBUBWBODg@Dg@Bg@@SHkCNeFFsBJwEBo@\\kO?K?ICQJ}D@o@@_@BaABoADkCDgE@oA?_A?cA?_@?sBAqG?EA{B@sD?_D?{@?u@?kA@_A@e@@[@]Ba@@U@O@SB[B_@Dc@@EBOD]D]Hm@@MJk@BOPw@R}@Po@H]FQJ[FQHUNa@HSTg@LYN[P[LW`@q@^m@f@o@f@k@PUf@e@LMRQXUPO^WNKXSRMf@WNIr@[VM`Aa@h@Ur@]n@WTKjCeAx@[dAc@r@[bAa@pAi@NGVKp@WrAi@tAk@NGp@Yd@Qz@_@h@SHE`@ONGPGp@Yf@Sh@U@?`@OXMh@SHEVIHE^O`Aa@dBs@bBq@LGRIf@SZMHCxAm@`@OFCx@]`@QZMTIbAa@TIj@SpA_@DARGb@Md@Mt@Sr@Ot@Ov@Of@Gb@EDAdAMx@Iv@Gp@Gv@CnACxAAb@Ad@?hBBT?J?fA@hA@`@?fA@fABrA@b@?b@?b@?bA?~B@tBBvA?XAh@C\\CZCNAVCTCRE\\GVG\\IZGPGNGNCPITKNGRK\\OVOVMPK\\SPOTOVSVSRQRSTSXYZ_@Z_@RUNUJMRYRY\\i@R_@LUJULYVk@Re@Na@DKFEPg@H]HWH]@CFUDSFYLq@H[H]j@wC^kBd@aCd@_CLk@Lk@Ha@Ha@H_@@GFYDQBMHWH]?IX}@Na@N]Re@Xm@HOPYLUPWZi@^e@h@q@TURS\\_@LOJI^[v@q@ZQv@e@\\S^QLEVMRI`@OLEPE`@MRERGRGB?TGVEVCXERCn@CB?b@CF?ZAT?hAAt@AVAf@A`@A~@Ex@Cn@GdAILAb@E@?`@Eb@EtAIXAf@CfACtAAZA\\?`@A|@?X?t@?jAAbAAr@?V?x@?`AAL?h@?N?P?fA?bBCr@?f@@D?R?F?j@@@?n@@r@@nBDd@@b@@fABlLVb@?j@BzFJb@@rDHdABlOZfR^hKTdDFpDHfABdQZjDHb@@b@@`@@p@@tDHjABjCH~CHnBH`ADp@Br@D|@B`Tz@rMh@xFVvAFjI\\~BJnBHhBFdADz@DjDPdEZ|F`@lQpAPBtBNtE\\pF^n`@tCpNbAzGf@pAJd@Bz@Fb@D@?z@Jh@Fl@HvAV`Dl@pEz@`Cd@p@NxFjAzAVjB^nCh@|AX`ARtAV~AZ~@PhATZFpATv@NH@^H\\HVFVHZJ`@Pd@T`@Pd@ZVPZXVRRPb@d@\\`@\\b@b@j@\\h@Zj@DFXj@LTHRLZHRHTNd@Ph@Nh@Jd@Lh@Jl@Hn@Ff@Hp@@LFp@\\jFJjADb@BT@DDb@F^F\\F^H\\H`@HZPl@L^Ph@Pf@Tj@Tj@Vj@Vf@LPT`@Xb@X^BBb@h@b@b@\\^HFLJ^Xd@Z\\RXPPHZNd@RD@j@TZHXHF@`@H\\Hh@H|@Hd@@\\@Z@d@Af@AZALCJAVCHAVEd@GXGXIXIzCaAL?DChEwAZK\\Mb@O~@[hBq@VKf@QTIVMf@WVMvA_Af@a@HGb@_@b@c@`@e@`@g@Xa@DILSNU\\k@JQP[Zk@`@q@v@wA`AeBp@kAPYNWLUV_@T]^c@\\a@Z[`@_@b@_@NKXSBCb@Yf@W`Aa@n@W|@Yp@U`@O\\MpBo@|B{@l@Wf@Yv@e@d@]h@a@hBaBh@g@hAaAlAiAn@k@nBiBzAuAz@w@j@m@\\]d@m@^g@Va@T_@LUTe@Tg@BGPa@FSPk@Vy@VgALq@DYHe@De@JeAFy@Bw@?U@i@?cA?q@Ai@Aa@IeAEc@CYEWE[EYG_@Ms@WmA[oAAAa@yAeAoDk@qB_GgSsAqEMc@Ss@qAiEu@mBUg@Yo@Yk@]o@We@GMe@u@}BeDw@gAy@eAm@y@q@}@e@m@CAMGmAcB_@k@Yc@Wg@Wi@Wg@Wi@Wo@AASm@[{@Su@AEUw@S_AS_AMu@?CKo@OaAKiAKiA?EG{@Ck@Cc@Ae@Ag@?k@Au@@o@?MB_AB_AD_AB]B_@H}@J_AJ{@L}@P{@P{@Pw@?ATy@Tw@Vs@?CXw@Zu@\\u@^u@^s@b@q@b@o@b@m@d@k@r@u@\\]h@e@h@c@j@a@r@c@f@[h@Y~@_@x@Yn@U|@WhBi@b@KnCw@bCq@`@Mv@UlA]f@Oj@OVGZKx@Wr@SbAYF@BArAi@d@QVM^SRKVORKTORM`As@x@s@^YPQHMHIHQnA_BpAkBj@_Aj@iAr@{ArA{DBKBUj@uBPs@HYXiA^aBd@gB`FuS`@gBd@mBnAuFjAeF^{ALe@J]Tu@@ENa@FOTm@Vq@Vm@Zq@d@{@n@kAVc@xBwDh@_A^m@\\m@\\k@Xg@Xg@Xe@Zi@b@w@v@sANS^q@Tc@@?Vc@j@cA@CZg@\\k@LURYd@s@PWT]l@u@\\c@`AiAlBoB@CXYpBuBZ[pCwClAoAjAmAVW?AZ[hAkA`@c@Z[DEZ]?Al@q@n@u@h@q@BCV[X]?AXa@`AsAVa@TSn@}@d@k@`BsBjB{Bd@c@ZWjA_AjAs@~@e@d@c@Xa@Xq@LUHKHILIJENA`@G',
                },
                start_location: {
                  lat: 41.3110228,
                  lng: -105.5935909,
                },
                travel_mode: 'DRIVING',
              },
              {
                distance: {
                  text: '377 ft',
                  value: 115,
                },
                duration: {
                  text: '1 min',
                  value: 10,
                },
                end_location: {
                  lat: 40.6256276,
                  lng: -105.1059111,
                },
                html_instructions:
                  'At the traffic circle, take the <b>2nd</b> exit',
                maneuver: 'roundabout-right',
                polyline: {
                  points: '}x}vFbuo`SB@B?@?D?DAB?DCBADCBEBC?A@CBG@E@EL]l@yB',
                },
                start_location: {
                  lat: 40.6262331,
                  lng: -105.1069005,
                },
                travel_mode: 'DRIVING',
              },
              {
                distance: {
                  text: '0.6 mi',
                  value: 888,
                },
                duration: {
                  text: '1 min',
                  value: 51,
                },
                end_location: {
                  lat: 40.6254529,
                  lng: -105.095437,
                },
                html_instructions: 'Continue onto <b>US-287 S</b>',
                polyline: {
                  points:
                    'eu}vF|no`SVoADe@?IBY@a@?kA?uA@y@Ag@?IAOGWD}E?W?o@?mC@gBGsL@M?K@yCB}D@o@?C?uC?Q?]',
                },
                start_location: {
                  lat: 40.6256276,
                  lng: -105.1059111,
                },
                travel_mode: 'DRIVING',
              },
              {
                distance: {
                  text: '2.0 mi',
                  value: 3226,
                },
                duration: {
                  text: '4 mins',
                  value: 212,
                },
                end_location: {
                  lat: 40.5964606,
                  lng: -105.0958146,
                },
                html_instructions: 'Turn <b>right</b> onto <b>N Shields St</b>',
                maneuver: 'turn-right',
                polyline: {
                  points:
                    'at}vFnmm`St@GZ?jBAH?B?LCP?dFBjB?rD@lA?\\?dC@dA?J@jE@vE@N?b@@xF@fLDzD@~D?hA?`A@xC@r@?r@?v@?vABjE@hHBnE@vB@r@@~A?dB@xBBtA?b@@J?X@D?@?F?X@p@?fA?rD?pA?fA@fA?rD@b@?jB@d@@fA?X@`DF`A?HHN@D?',
                },
                start_location: {
                  lat: 40.6254529,
                  lng: -105.095437,
                },
                travel_mode: 'DRIVING',
              },
              {
                distance: {
                  text: '0.5 mi',
                  value: 836,
                },
                duration: {
                  text: '1 min',
                  value: 72,
                },
                end_location: {
                  lat: 40.5890626,
                  lng: -105.095768,
                },
                html_instructions:
                  'At the traffic circle, continue straight to stay on <b>N Shields St</b>',
                maneuver: 'roundabout-right',
                polyline: {
                  points:
                    '{~wvFxom`S?B@@?B@@@@?@@@@B@@@?@@@@@?@@@?@@@?@?B?@?@A@?@?@A@A@?@A@A@A@A?C@A?A@ABATIZMXA^EvBKjE?fA@jC?jC@jC@|@?d@?h@?r@?nC@l@@P@Z@`@DZH',
                },
                start_location: {
                  lat: 40.5964606,
                  lng: -105.0958146,
                },
                travel_mode: 'DRIVING',
              },
              {
                distance: {
                  text: '0.6 mi',
                  value: 970,
                },
                duration: {
                  text: '1 min',
                  value: 86,
                },
                end_location: {
                  lat: 40.588975,
                  lng: -105.0842835,
                },
                html_instructions: 'Turn <b>left</b> onto <b>Laporte Ave</b>',
                maneuver: 'turn-left',
                polyline: {
                  points:
                    'spvvFpom`S?cC?mD@[?}GB}F@{@BkF?o@?Y?c@@gH?U?sI@iD?G?uD',
                },
                start_location: {
                  lat: 40.5890626,
                  lng: -105.095768,
                },
                travel_mode: 'DRIVING',
              },
              {
                distance: {
                  text: '0.3 mi',
                  value: 413,
                },
                duration: {
                  text: '1 min',
                  value: 75,
                },
                end_location: {
                  lat: 40.5852594,
                  lng: -105.0842862,
                },
                html_instructions: 'Turn <b>right</b> onto <b>Sherwood St</b>',
                maneuver: 'turn-right',
                polyline: {
                  points: 'cpvvFvgk`SfA?nC?vC@ZApG?hA@',
                },
                start_location: {
                  lat: 40.588975,
                  lng: -105.0842835,
                },
                travel_mode: 'DRIVING',
              },
            ],
            traffic_speed_entry: [],
            via_waypoint: [],
          },
        ],
        overview_polyline: {
          points:
            '_sc{FnfncS`BFUdJG~CzDR|DTlVpAdVnAjQp@`Gk@bBOjDMnQuBrSaCjPwB`Hw@x]kDpGEtHZxAb@fC^dJzBhExAxJbFhUzLdRxJfLzEbUxGfPdCvJv@|JTjZa@|uAcDfaCqFtu@gBfj@oA`XoAbRsCfRiFvKsEzTmLzb@uPbOqHxS{NhjAg~@z|@or@na@}[xJmJnO_UpQeY~FuFvFkCjH_AjKMfJ}AlEkBxDiC~_Awx@lxAknAdl@_g@nZuYlUmUjf@sf@dDiFjBiEzBgIfBgJrG{\\~A_G~CmHpVib@fe@yx@jEyGfHoHlMeIbRuK~QyKrIgGhIqHnZkY`JcJxFwJrJa\\tK}_@fFgLhMiSnI_PrDyFnDwDrHqHrE}FlCmFdCkHzIqZ|B}FnDyF`HmHjTuS|DiC~B}@bMwBvPiCjFQhQT|HwAhHcD`FeEvGmIdE}EnEgDdGmCtFsAtOqB|KwBxFmBtLsGpDqCbJcJlHsKvEwJlJsXdSil@xFgL`IuKnFgGpNsM~GeF`PmKfHeG|C}DbGeLzLcZzHkVxUgy@zGkUdEiKl[si@dCyCjFuEtGuDbIgCjNqAfe@mCpLaAbL_BdKyAjI}BtC}AdHgH|DkHbGoOtEwIrN}Rxx@ihAp\\kd@lvA{mBvx@ahAvQqVtMaOb]k]n\\o\\nIyGpJ{FrMyF|M_FrgAsa@xb@yQdf@mTveAkg@tMsFdD_ArG]pSzCnE`@dKFxEIrCg@lCaAx[uStHgFfJuHvFuGpWo`@jMsS|D}H|FmNvEuNtCeMr@ePvAsx@H_i@XoDlAiHzAyE|DaHnEeEbG{Cl[oM~c@sQbHaClJmBpMs@hKDrOHrJOzD{@hD{AnDmCjDaExC{FnAsDjGyZnAyEtCsFjEwEbGmDbD_AjEc@`Ru@rK]jKE|Q?r~A`Dl}@vB`aA|Dzl@xDrnA~InNpB|q@vMzEzAhFfErDbGlBnGzAnPr@~EbCtHnDxFvErDbEzAlHj@|D]|XgJ~DgCrBqBzCwExGoL|EkFjIsDnHiCrDuBpQcPfGqHjCyHz@eJUoJ}AaI{Qwn@cFkKgKcN_GgKeC_JiAaKK}Hv@wLfCuKzEsJzCmDrDoCjEoBzFcBfPsErImCbF{CtBmBtDgF~EaLdAkEbNok@tDsNhIcPvMeUjDqFdLcMtS{TjFeHxG_IrFqDfBmCl@e@jAI\\a@`B}HEai@FkK?gD?]t@GfCAL?pJ?z[H|e@Lhu@Xd_@J~GZJP^@JOv@[|JSlTDjFF|@N?qHFsRByIB{X?}DvE?nO@',
        },
        summary: 'US-287 S',
        warnings: [],
        waypoint_order: [],
      },
    ],
    status: 'OK',
  };
}
