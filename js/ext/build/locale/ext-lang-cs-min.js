﻿/*
 * Ext JS Library 2.1
 * Copyright(c) 2006-2008, Ext JS, LLC.
 * licensing@extjs.com
 * 
 * http://extjs.com/license
 */

Ext.UpdateManager.defaults.indicatorText="<div class=\"loading-indicator\">Prosm ?ekejte...</div>";if(Ext.View){Ext.View.prototype.emptyText=""}if(Ext.grid.Grid){Ext.grid.Grid.prototype.ddText="{0} vybran'ych rádku"}if(Ext.TabPanelItem){Ext.TabPanelItem.prototype.closeText="Zavrt zálozku"}if(Ext.form.Field){Ext.form.Field.prototype.invalidText="Hodnota v tomto poli je neplatná"}if(Ext.LoadMask){Ext.LoadMask.prototype.msg="Prosm ?ekejte..."}Date.monthNames=["Leden","'Unor","Brezen","Duben","Květen","Cerven","Cervenec","Srpen","Zár","Rjen","Listopad","Prosinec"];Date.getShortMonthName=function(A){return Date.monthNames[A].substring(0,3)};Date.monthNumbers={Jan:0,Feb:1,Mar:2,Apr:3,May:4,Jun:5,Jul:6,Aug:7,Sep:8,Oct:9,Nov:10,Dec:11};Date.getMonthNumber=function(A){return Date.monthNumbers[A.substring(0,1).toUpperCase()+A.substring(1,3).toLowerCase()]};Date.dayNames=["Neděle","Ponděl","'Uter'y","Streda","Ctvrtek","Pátek","Sobota"];Date.getShortDayName=function(A){return Date.dayNames[A].substring(0,3)};if(Ext.MessageBox){Ext.MessageBox.buttonText={ok:"OK",cancel:"Storno",yes:"Ano",no:"Ne"}}if(Ext.util.Format){Ext.util.Format.date=function(A,B){if(!A){return""}if(!(A instanceof Date)){A=new Date(Date.parse(A))}return A.dateFormat(B||"d.m.Y")}}if(Ext.DatePicker){Ext.apply(Ext.DatePicker.prototype,{todayText:"Dnes",minText:"Datum nesm b'yt stars nez je minimáln",maxText:"Datum nesm b'yt drvějs nez je maximáln",disabledDaysText:"",disabledDatesText:"",monthNames:Date.monthNames,dayNames:Date.dayNames,nextText:"Následujc měsc (Control+Right)",prevText:"Predcházejc měsc (Control+Left)",monthYearText:"Zvolte měsc (ke změně let pouzijte Control+Up/Down)",todayTip:"{0} (Spacebar)",format:"d.m.Y",okText:"&#160;OK&#160;",cancelText:"Storno",startDay:1})}if(Ext.PagingToolbar){Ext.apply(Ext.PagingToolbar.prototype,{beforePageText:"Strana",afterPageText:"z {0}",firstText:"Prvn strana",prevText:"Precházejc strana",nextText:"Následujc strana",lastText:"Posledn strana",refreshText:"Aktualizovat",displayMsg:"Zobrazeno {0} - {1} z celkov'ych {2}",emptyMsg:"Zádné záznamy nebyly nalezeny"})}if(Ext.form.TextField){Ext.apply(Ext.form.TextField.prototype,{minLengthText:"Pole nesm mt méně {0} znaku",maxLengthText:"Pole nesm b'yt dels nez {0} znaku",blankText:"This field is required",regexText:"",emptyText:null})}if(Ext.form.NumberField){Ext.apply(Ext.form.NumberField.prototype,{minText:"Hodnota v tomto poli nesm b'yt mens nez {0}",maxText:"Hodnota v tomto poli nesm b'yt věts nez {0}",nanText:"{0} nen platné ?slo"})}if(Ext.form.DateField){Ext.apply(Ext.form.DateField.prototype,{disabledDaysText:"Neaktivn",disabledDatesText:"Neaktivn",minText:"Datum v tomto poli nesm b'yt stars nez {0}",maxText:"Datum v tomto poli nesm b'yt novějs nez {0}",invalidText:"{0} nen platn'ym datem - zkontrolujte zda-li je ve formátu {1}",format:"d.m.Y",altFormats:"d/m/Y|d-m-y|d-m-Y|d/m|d-m|dm|dmy|dmY|d|Y-m-d"})}if(Ext.form.ComboBox){Ext.apply(Ext.form.ComboBox.prototype,{loadingText:"Prosm ?ekejte...",valueNotFoundText:undefined})}if(Ext.form.VTypes){Ext.apply(Ext.form.VTypes,{emailText:"V tomto poli muze b'yt vyplněna pouze emailová adresa ve formátu \"uzivatel@doména.cz\"",urlText:"V tomto poli muze b'yt vyplněna pouze URL (adresa internetové stránky) ve formátu \"http:/"+"/www.doména.cz\"",alphaText:"Toto pole muze obsahovat pouze psmena abecedy a znak _",alphanumText:"Toto pole muze obsahovat pouze psmena abecedy, ?sla a znak _"})}if(Ext.form.HtmlEditor){Ext.apply(Ext.form.HtmlEditor.prototype,{createLinkText:"Zadejte URL adresu odkazu:",buttonTips:{bold:{title:"Tu?né (Ctrl+B)",text:"Ozna? vybran'y text tu?ně.",cls:"x-html-editor-tip"},italic:{title:"Kurzva (Ctrl+I)",text:"Ozna? vybran'y text kurzvou.",cls:"x-html-editor-tip"},underline:{title:"Podtrzen (Ctrl+U)",text:"Podtrhne vybran'y text.",cls:"x-html-editor-tip"},increasefontsize:{title:"Zvětsit psmo",text:"Zvěts velikost psma.",cls:"x-html-editor-tip"},decreasefontsize:{title:"Zúzit psmo",text:"Zmens velikost psma.",cls:"x-html-editor-tip"},backcolor:{title:"Barva zv'yrazněn textu",text:"Ozna? vybran'y text tak, aby vypadal jako ozna?en'y zv'yrazňova?em.",cls:"x-html-editor-tip"},forecolor:{title:"Barva psma",text:"Změn barvu textu.",cls:"x-html-editor-tip"},justifyleft:{title:"Zarovnat text vlevo",text:"Zarovná text doleva.",cls:"x-html-editor-tip"},justifycenter:{title:"Zarovnat na stred",text:"Zarovná text na stred.",cls:"x-html-editor-tip"},justifyright:{title:"Zarovnat text vpravo",text:"Zarovná text doprava.",cls:"x-html-editor-tip"},insertunorderedlist:{title:"Odrázky",text:"Za?ne seznam s odrázkami.",cls:"x-html-editor-tip"},insertorderedlist:{title:"Cslován",text:"Za?ne ?slovan'y seznam.",cls:"x-html-editor-tip"},createlink:{title:"Internetov'y odkaz",text:"Z vybraného textu vytvor internetov'y odkaz.",cls:"x-html-editor-tip"},sourceedit:{title:"Zdrojov'y kód",text:"Prepne do módu úpravy zdrojového kódu.",cls:"x-html-editor-tip"}}})}if(Ext.grid.GridView){Ext.apply(Ext.grid.GridView.prototype,{sortAscText:"Radit vzestupně",sortDescText:"Radit sestupně",lockText:"Ukotvit sloupec",unlockText:"Uvolnit sloupec",columnsText:"Sloupce"})}if(Ext.grid.GroupingView){Ext.apply(Ext.grid.GroupingView.prototype,{emptyGroupText:"(Zádná data)",groupByText:"Seskupit dle tohoto pole",showGroupsText:"Zobrazit ve skupině"})}if(Ext.grid.PropertyColumnModel){Ext.apply(Ext.grid.PropertyColumnModel.prototype,{nameText:"Název",valueText:"Hodnota",dateFormat:"j.m.Y"})}if(Ext.layout.BorderLayout.SplitRegion){Ext.apply(Ext.layout.BorderLayout.SplitRegion.prototype,{splitTip:"Tahem změnit velikost.",collapsibleSplitTip:"Tahem změnit velikost. Dvojklikem skr'yt."})};