
	import React, { useState } from 'react';
	import Head from 'next/head';
	
	const App = () => {
	return (<>


    <Head>
        <meta charSet="utf-8" />
        <title>Intranet - Solicitação </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="assing/css/css-base.css" rel="stylesheet" />
        
        <link href="assing/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        
        <link href="assing/bootstrap/css/bootstrap-responsive.min.css" rel="stylesheet" />
        
    </Head>
    <body>
        
<div className="menu noprint">
    <a id="btnNovo" href="./" className="noprint" title="Clique para voltar ao início." >Início</a> 
    <span className="noprint">|</span> 
    <a id="btnImprimir" className="noprint" title="Clique para imprimir">Imprimir</a>
    <span className="noprint">|</span> 
    <a href="models/sair.php" className="pull-right text-error" title="Clique aqui para sair" style={{color: rgb(100,50,100) !important;}}>&nbsp;Sair&nbsp;</a>
    <span className="pull-left text-warning"><b>FRANCISCO TAFFAREL</b></span>
</div>


<div className="noprint"
     style={{margin:0px auto;position: absolute;left:0px;top:30px;padding:10px;max-width:18%;overflow: auto;}} 
     tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div className="modal-header">
        <h3 id="myModalLabel">Salvar...</h3>
    </div>
    <div className="modal-body" style={{z-index: 0 !important;}}>
        <div className="row-fluid">
            <div className="form-group">
                <label for="exampleInputEmail1"><b>Escolha um nome para salvar</b></label>
                <input type="search" className="span12" id="nomeDaSolicitacao"
                 value="Solicitação Nº 356"
                       placeholder="Nome" autocomplete="off" autofocus="">
            </div>  
        </div>
        <input type="hidden" name="tipo" value="pesquisar" />
        <button id="btnNovo" href="#myModal" role="button" className="btn-info noprint" data-toggle="modal"
                title="Clique para voltar ao início." style={{width: 130px;}}>Pesquisar</button> 
    </div>
    <div className="modal-footer"></div>
    <h2>Suas solicitações:</h2>
    <b>Última solicitação inserida:</b><a style={{float:left;display:block;width:100%;padding:4px;background:red;font-size:18px;text-align:center;}} href="./?sid=444">355</a><br/><hr/><b>Outras solicitações:</b><br/><a className="num_solicitacoes" href="./?sid=443">354</a><a className="num_solicitacoes" href="./?sid=440">351</a><a className="num_solicitacoes" href="./?sid=437">348</a><a className="num_solicitacoes" href="./?sid=435">346</a><a className="num_solicitacoes" href="./?sid=434">345</a><a className="num_solicitacoes" href="./?sid=433">344</a><a className="num_solicitacoes" href="./?sid=432">343</a><a className="num_solicitacoes" href="./?sid=431">342</a><a className="num_solicitacoes" href="./?sid=429">341</a><a className="num_solicitacoes" href="./?sid=426">338</a><a className="num_solicitacoes" href="./?sid=425">337</a><a className="num_solicitacoes" href="./?sid=424">336</a><a className="num_solicitacoes" href="./?sid=423">335</a><a className="num_solicitacoes" href="./?sid=422">334</a><a className="num_solicitacoes" href="./?sid=420">332</a><a className="num_solicitacoes" href="./?sid=419">331</a><a className="num_solicitacoes" href="./?sid=418">330</a><a className="num_solicitacoes" href="./?sid=416">328</a><a className="num_solicitacoes" href="./?sid=415">327</a><a className="num_solicitacoes" href="./?sid=414">326</a>    <div className="clearfix"></div>
    <label className="bold" style={{font-size:25px;}}><br/><b>21 solicitações feitas.</b></label>

    <div className="clearfix"></div>
    <div className="modal-footer"></div>
    <div className="row-fluid">
        <label className="bold"><b>Valor da Diária:</b></label>

        <input type="number" className="span6" value="280" id="valorDaDiaria" />
    </div>
</div>

<div id="myModal" className="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
        <h3 id="myModalLabel">Pesquisar Solicitações</h3>
    </div>
    <div className="modal-body">
        <form id="formPesquisar" method="POST">
            <div className="row-fluid">
                <div className="form-group">
                    <label for="exampleInputEmail1">Endereço de e-mail</label>
                    <input type="search" className="span12" name="s" id="exampleInputEmail1" placeholder="" autocomplete="off">
                </div>  
            </div>
            <input type="hidden" name="tipo" value="pesquisar" />
            <div className="bar"></div>
            <div className="percent"></div>
            <button>Pesquisar</button>
        </form>
        <div id="status"></div>
    </div>
    <div className="modal-footer">
        <button className="btn" data-dismiss="modal" aria-hidden="true">Fechar</button>
    </div>
</div>


<p className=MsoNormal align=center style={{style='text-align:center'}}><span
        style={{style='font-size:9.0pt;mso-bidi-font-size:11.0pt'}}><img width=200 height=85
                                                           src="arquivos/image001.jpg" v:shapes="_x0000_i1025"> /><![endif]></span><strong><span
            style={{style='font-size:11.0pt;font-family:Arial,sans-serif;mso-bidi-font-family:
            Times New Roman'}}> </span></strong></p>

<p className=MsoNormal align=center style={{style='text-align:center'}}><strong><span
            style={{style='font-size:11.0pt;font-family:Arial,sans-serif;mso-bidi-font-family:
            Times New Roman'}}>ESTADO DO TOCANTINS</span></strong><b><span
            style={{style='font-size:11.0pt'}}><br>
        </span></b><strong><span style={{style='font-size:10.0pt;mso-bidi-font-size:11.0pt;
                             font-family:Arial,sans-serif;mso-bidi-font-family:Times New Roman'}}>PREFEITURA
            MUNICIPAL DE SÃO MIGUEL DO TOCANTINS</span></strong><b><br>
    </b><em><b><span style={{style='font-size:8.5pt;font-family:Arial,sans-serif;
                     mso-bidi-font-family:Times New Roman'}}>CNPJ: 25.064.007/0001-06</span></b></em><b><i><span
                style={{style='font-size:8.5pt'}}><br>
                <em><span style={{style='font-family:Arial,sans-serif;mso-bidi-font-family:Times New Roman'}}>ADM
                        2017/2020</span></em></span></i></b>
</p>
<p className=MsoNormal><o:p>&nbsp;</o:p></p>

<div className="formulario">
    <table className=MsoNormalTable border=1 width="100%"
           style={{style='width:100.0%;border-collapse:collapse;border:none;mso-border-alt:solid windowtext .5pt;
           mso-yfti-tbllook:1184;mso-padding-alt:2.85pt 5.4pt 0cm 5.4pt;mso-border-insideh:
           .5pt solid windowtext;mso-border-insidev:.5pt solid windowtext'}}>
        <tr style={{style='mso-yfti-irow:0;mso-yfti-firstrow:yes;height:17.0pt'}}>
            <td width="24%" colspan=4 valign=top style={{style='width:24.28%;border:solid windowtext 1.0pt;
                mso-border-alt:solid windowtext .5pt;padding:2.85pt 5.4pt 0cm 5.4pt;
                height:17.0pt'}}>
                <p className=MsoNormal align=center style={{style='text-align:center'}}><span
                        style={{style='font-size:9.0pt;mso-bidi-font-size:11.0pt'}}>NUMERO</span></p>
                <p className=MsoNormal><span style={{style='font-size:9.0pt;mso-bidi-font-size:11.0pt'}}></span></p>
            </td>
            <td width="45%" colspan=3 rowspan=2 valign=top style={{style='width:47.1%;border:
                solid windowtext 1.0pt;border-left:none;mso-border-left-alt:solid windowtext .5pt;
                mso-border-alt:solid windowtext .5pt;padding:2.85pt 5.4pt 0cm 5.4pt;
                height:17.0pt'}}>
                <p className=MsoNormal><span style={{style='font-size:9.0pt;mso-bidi-font-size:11.0pt'}}><o:p>&nbsp;</o:p></span></p>
                <p className=MsoNormal><span style={{style='font-size:9.0pt;mso-bidi-font-size:11.0pt;
                                         font-family:Arial Black,sans-serif'}}><o:p>&nbsp;</o:p></span></p>
                <p className=MsoNormal align=center style={{style='text-align:center'}}><b
                        style={{style='mso-bidi-font-weight:normal'}}><span style={{style='font-size:9.0pt;mso-bidi-font-size:
                                                              11.0pt;font-family:Arial Black,sans-serif'}}>SOLICITAÇÃO DE
                            COMPRAS/SERVIÇOS</span></b><b style={{style='mso-bidi-font-weight:normal'}}><span
                            style={{style='font-size:9.0pt;mso-bidi-font-size:11.0pt'}}> </span></b></p>
            </td>
            <td width="30%" colspan=2 valign=top style={{style='width:28.62%;border:solid windowtext 1.0pt;
                border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
                solid windowtext .5pt;padding:2.85pt 5.4pt 0cm 5.4pt;height:17.0pt'}}>
                <p className=MsoNormal align=center style={{style='text-align:center'}}><span
                        style={{style='font-size:9.0pt;mso-bidi-font-size:11.0pt'}}>DATA </span></p>
            </td>
        </tr>
        <tr style={{style='mso-yfti-irow:1;height:1.0pt'}}>
            <td width="12%" colspan=2 style={{style='width:12.14%;border:solid windowtext 1.0pt;
                border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
                padding:2.85pt 5.4pt 0cm 5.4pt;height:1.0pt'}}>
                <p className=MsoNormal align=center style={{style='text-align:center'}} id="numeroIncremental">
                    <span id="getNumIncr" style={{style='font-size:9.0pt;mso-bidi-font-size:11.0pt'}}>
                        356                    </span></p>
            </td>
            <td width="12%" colspan=2 style={{style='width:12.14%;border-top:none;border-left:
                none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
                mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
                mso-border-alt:solid windowtext .5pt;padding:2.85pt 5.4pt 0cm 5.4pt;
                height:1.0pt'}}>
                <p className=MsoNormal align=center style={{style='text-align:center'}}><span
                        style={{style='font-size:9.0pt;mso-bidi-font-size:11.0pt'}} id="getAno">2020</span></p>
            </td>
            <td width="28%" colspan=2 valign=top style={{style='width:28.62%;border-top:none;
                border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
                mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
                mso-border-alt:solid windowtext .5pt;padding:2.85pt 5.4pt 0cm 5.4pt;
                height:1.0pt'}}>
                <p className=MsoNormal align=center style={{style='text-align:center'}}><b
                        style={{style='mso-bidi-font-weight:normal'}}><i style={{style='mso-bidi-font-style:normal'}}>
                            <span id="dataSolicitacao" contenteditable=""
                                  style={{style='font-size:9.0pt;mso-bidi-font-size:11.0pt;font-family:Arial Black,sans-serif'}}>
                                06-03-2020</span></i></b></p>
            </td>
        </tr>
        <tr style={{style='mso-yfti-irow:2;height:17.0pt'}}>
            <td width="24%" colspan=4 style={{style='width:24.28%;border:solid windowtext 1.0pt;
                border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
                padding:2.85pt 5.4pt 0cm 5.4pt;height:17.0pt'}}>
                <p className=MsoNormal align=center style={{style='text-align:center'}}><span
                        style={{style='font-size:9.0pt;mso-bidi-font-size:11.0pt'}}>UNIDADE SOLICITANTE </span></p>
                <p className=MsoNormal align=center style={{style='text-align:center'}}><span
                        style={{style='font-size:9.0pt;mso-bidi-font-size:11.0pt'}}><o:p>&nbsp;</o:p></span></p>
                <p className=MsoNormal align=center style={{style='text-align:center'}}><span
                        style={{style='font-size:9.0pt;mso-bidi-font-size:11.0pt'}}><o:p>&nbsp;</o:p></span></p>
                <p className=MsoNormal align=center style={{style='text-align:center'}}><span
                        style={{style='font-size:9.0pt;mso-bidi-font-size:11.0pt'}}><o:p>&nbsp;</o:p></span></p>
                <p className=MsoNormal align=center style={{style='text-align:center'}}><span
                        style={{style='font-size:9.0pt;mso-bidi-font-size:11.0pt'}}><o:p>&nbsp;</o:p></span></p>
                <p className=MsoNormal align=center style={{style='text-align:center'}}><span
                        style={{style='font-size:9.0pt;mso-bidi-font-size:11.0pt'}}><o:p>&nbsp;</o:p></span></p>
                <p className=MsoNormal align=center style={{style='text-align:center'}}><span
                        style={{style='font-size:9.0pt;mso-bidi-font-size:11.0pt'}}><o:p>&nbsp;</o:p></span></p>
            </td>
            <td width="47%" colspan=3 style={{style='width:47.1%;border-top:none;border-left:
                none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
                mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
                mso-border-alt:solid windowtext .5pt;padding:2.85pt 5.4pt 0cm 5.4pt;
                height:17.0pt'}}>
                <p className=MsoNormal align=center style={{style='text-align:center'}}><b
                        style={{style='mso-bidi-font-weight:normal'}}><span style={{style='font-size:9.0pt;mso-bidi-font-size:
                                                              11.0pt'}}>Sec. de Saúde </span></b></p>
            </td>
            <td width="28%" colspan=2 valign=top style={{style='width:28.62%;border-top:none;
                border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
                mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
                mso-border-alt:solid windowtext .5pt;padding:2.85pt 5.4pt 0cm 5.4pt;
                height:17.0pt'}}>
                <p className=MsoNormal align=center style={{style='text-align:center'}}><span
                        style={{style='font-size:9.0pt;mso-bidi-font-size:11.0pt'}}>VISTO DO SOLICITANTE </span></p>
                <p className=MsoNormal align=center style={{style='text-align:center'}}><span
                        style={{style='font-size:9.0pt;mso-bidi-font-size:11.0pt'}}><o:p>&nbsp;</o:p></span></p>
                <p className=MsoNormal align=center style={{style='text-align:center'}}><span
                        style={{style='font-size:9.0pt;mso-bidi-font-size:11.0pt'}}><o:p>&nbsp;</o:p></span></p>
                <p className=MsoNormal align=center style={{style='text-align:center'}}><span
                        style={{style='font-size:9.0pt;mso-bidi-font-size:11.0pt'}}><o:p>&nbsp;</o:p></span></p>
                <p className=MsoNormal align=center style={{style='text-align:center'}}><span
                        style={{style='font-size:9.0pt;mso-bidi-font-size:11.0pt'}}><o:p>&nbsp;</o:p></span></p>
                <p className=MsoNormal align=center style={{style='text-align:center'}}><span
                        style={{style='font-size:9.0pt;mso-bidi-font-size:11.0pt'}}>Dejacy de Oliveira Sousa<br>
                        Secretário de Saúde </span></p>
            </td>
        </tr>
        <tr style={{style='mso-yfti-irow:3;height:17.0pt'}}>
            <td width="7%" valign=top style={{style='width:7.62%;border:solid windowtext 1.0pt;
                border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
                padding:2.85pt 5.4pt 0cm 5.4pt;height:17.0pt'}}>
                <p className=MsoNoSpacing><span style={{style='font-size:9.0pt;mso-bidi-font-size:11.0pt'}}>ITEM </span></p>
            </td>
            <td width="63%" colspan=6 valign=top style={{style='width:63.76%;border-top:none;
                border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
                mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
                mso-border-alt:solid windowtext .5pt;padding:2.85pt 5.4pt 0cm 5.4pt;
                height:17.0pt'}}>
                <p className=MsoNoSpacing><span style={{style='font-size:9.0pt;mso-bidi-font-size:11.0pt'}}>ESPECIFICAÇÕES
                        DOS MATERIAIS E/OU SERVIÇOS </span></p>
            </td>
            <td width="9%" valign=top style={{style='width:9.3%;border-top:none;border-left:none;
                border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
                mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
                mso-border-alt:solid windowtext .5pt;padding:2.85pt 5.4pt 0cm 5.4pt;
                height:17.0pt'}}>
                <p className=MsoNoSpacing align=center style={{style='text-align:center'}}><span
                        style={{style='font-size:9.0pt;mso-bidi-font-size:11.0pt'}}>UNID </span></p>
            </td>
            <td width="19%" valign=top style={{style='width:19.32%;border-top:none;border-left:
                none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
                mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
                mso-border-alt:solid windowtext .5pt;padding:2.85pt 5.4pt 0cm 5.4pt;
                height:17.0pt'}}>
                <p className=MsoNoSpacing align=center style={{style='text-align:center'}}><span
                        style={{style='font-size:9.0pt;mso-bidi-font-size:11.0pt'}}>QUANT. </span></p>
            </td>
        </tr>
        <tr style={{border:1px solid black;}}>
            <td style={{text-align:center;vertical-align:top;padding-top:10px;font:12px 'arial black';}}><span id="item">01</span></td>
            <td colspan="6" style={{text-align:justify;font:13px 'arial black';line-height:140%;padding:5px;}}>
                <div style={{position: relative;}}>
                    <div className="row-fluid noprint">
                        <div className="span9">
                            <input id="cabecalhoEspecificao" contenteditable="" className="noprint span12" placeholder="Cabeçalho">
                        </div>
                        <div className="span3">
                            <button id="setTextLocalStorage" className="noprint btn">Colar Dados</button>
                        </div>
                    </div>
                    <ul id="cabEspc">
                        <li title="Clique para adicionar" className="selecionar_cabecalho"data-cabecalho="Diárias para transporte e estadia em PALMAS – TO nos dias 20, 21 E 22 de FEVEREIRO de 2017 para a servidora:"><a>Diárias para transporte e estadia em PALMAS – TO nos dias 20, 21 E 22 de FEVEREIRO de 2017 para a servidora:</a></li><li title="Clique para adicionar" className="selecionar_cabecalho"data-cabecalho="Vimos, através deste, solicitar pagamento de diária para o motorista fazer deslocamento a Araguaína no dia DD/MM/YYYY."><a>Vimos, através deste, solicitar pagamento de diária para o motorista fazer deslocamento a Araguaína no dia DD/MM/YYYY.</a></li>                    </ul>
                </div>
                <div contenteditable="" id="getCabecalho" className="editavel">
                    ...                </div>

                <div style={{position: relative;}}>
                    <div className="row-fluid noprint">
                        <div className="span9">
                            <input id="especificacoes" className="noprint span12" placeholder="Pesquisar Servidores" />
                        </div>
                        <div className="span3">
                            <a style={{background: #0077b3;}} className="noprint span12 btn" id="btnIncluirNovoServidor">Incluir Novo</a>
                            <div style={{position: absolute;top:30px;width: 300px;background: white;
                                 max-height: 350px;overflow: auto;display: none;
                                 border:1px solid #ccc;padding:5px;}} id="painelIncluirServidor">
                                <button className="btn-danger"
                                        id="btnFecharPainelIncServ"
                                        style={{position: absolute;top:0px;right: 0px;padding:4px;padding-left:12px;padding-right:12px;}}>x</button>
                                <form className="left-right" enctype="multipart/form-data"
                                      id="formSalvarNovoServidor"
                                      action="" method="POST">
                                    <label>Nome do Servidor:</label>
                                    <input type="text" className="span12" id="serv_nome" name="srv_nome" />                                   
                                    <label>CPF:</label>
                                    <input type="text" className="span12" name="srv_cpf" />
                                    <label>Agência:</label>
                                    <input type="text" className="span12" name="srv_angecia" />
                                    <label>Operação:</label>
                                    <input type="text" className="span12" name="srv_operacao" />
                                    <label>Conta Corrente:</label>
                                    <input type="text" className="span12" name="srv_cc" />
                                    <label>Função</label>
                                    <input type="text" className="span12" name="srv_funcao" />
                                    <label>Banco</label>
                                    <input type="text" className="span12" name="srv_banco" />
                                    <input type="hidden" name="tipo" value="adicionar_servidor" />
                                    <button className="btn btn-success">Salvar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <ul id="menu-table" className="noprint">
                        <li title="Clique para adicionar" className="selecionar_contas"data-cpf="006.632.361-42"  data-servidor-nome="ADILSON SILVA DO NASCIMENTO" data-agencia="2812" data-operacao="001" data-conta-corrente="4302-6" data-funcao="FISCAL DA VIGILÂNCIA SANITÁRIA" data-banco="CAIXA ECONÔMICA"  ><a>ADILSON SILVA DO NASCIMENTO</a></li><li title="Clique para adicionar" className="selecionar_contas"data-cpf="000.308.943-60"  data-servidor-nome="ALBERTO LOIOLA GOMES MOREIRA" data-agencia="3975-6" data-operacao="0" data-conta-corrente="12585-4" data-funcao="SECRETÁRIO" data-banco="BANCO DO BRASIL"  ><a>ALBERTO LOIOLA GOMES MOREIRA</a></li><li title="Clique para adicionar" className="selecionar_contas"data-cpf="04268642129"  data-servidor-nome="ALDENICE SANTOS PEREIRA" data-agencia="4381" data-operacao="013" data-conta-corrente="10125-2" data-funcao="EDUCADORA FÍSICA" data-banco="CAIXA ECONÔMICA"  ><a>ALDENICE SANTOS PEREIRA</a></li><li title="Clique para adicionar" className="selecionar_contas"data-cpf="024.870.781-70"  data-servidor-nome="ALYNE DE SOUSA ABREU FARIAS" data-agencia="3151" data-operacao="001" data-conta-corrente="20273-6" data-funcao="ENFERMEIRA" data-banco="CAIXA ECONÔMICA"  ><a>ALYNE DE SOUSA ABREU FARIAS</a></li><li title="Clique para adicionar" className="selecionar_contas"data-cpf="61079173307"  data-servidor-nome="AMANDA PEREIRA SOUZA" data-agencia="4381" data-operacao="001" data-conta-corrente="24399-1" data-funcao="ENFERMEIRA" data-banco="CAIXA ECONÔMICA"  ><a>AMANDA PEREIRA SOUZA</a></li><li title="Clique para adicionar" className="selecionar_contas"data-cpf="715.359.421-34"  data-servidor-nome="AMAURY MARINHO NOLETO " data-agencia="2812" data-operacao="001" data-conta-corrente="4178-3" data-funcao="Tec. Laboratório Endemias" data-banco="CAIXA ECONÔMICA FEDERAL"  ><a>AMAURY MARINHO NOLETO </a></li><li title="Clique para adicionar" className="selecionar_contas"data-cpf="014.104.383-09"  data-servidor-nome="ANA LIDIA PINHEIRO L. MIRANDA " data-agencia="4381" data-operacao="013" data-conta-corrente="16006-2" data-funcao="ENFERMEIRA" data-banco="CAIXA ECONÔMICA"  ><a>ANA LIDIA PINHEIRO L. MIRANDA </a></li><li title="Clique para adicionar" className="selecionar_contas"data-cpf="333.239.683-87"  data-servidor-nome="ANTÔNIO FERNANDES DE SOUSA" data-agencia="4381" data-operacao="013" data-conta-corrente="15065-2" data-funcao="MOTORISTA" data-banco="CAIXA ECONÔMICA"  ><a>ANTÔNIO FERNANDES DE SOUSA</a></li><li title="Clique para adicionar" className="selecionar_contas"data-cpf="012.486.081-86"  data-servidor-nome="ANTÔNIO RAIMUNDO MOURA SILVA" data-agencia="4381" data-operacao="013" data-conta-corrente="19647-4" data-funcao="MOTORISTA" data-banco="CAIXA ECONÔMICA"  ><a>ANTÔNIO RAIMUNDO MOURA SILVA</a></li><li title="Clique para adicionar" className="selecionar_contas"data-cpf="01006083375"  data-servidor-nome="CLÁUDIO AGUIAR DE OLIVEIRA" data-agencia="4290" data-operacao="" data-conta-corrente="22298-1" data-funcao="ENFERMEIRO" data-banco="CAIXA ECONÔMICA"  ><a>CLÁUDIO AGUIAR DE OLIVEIRA</a></li><li title="Clique para adicionar" className="selecionar_contas"data-cpf="000.771.843-86"  data-servidor-nome="CLEUDIANE SOARES DA SILVA" data-agencia="460-0" data-operacao="" data-conta-corrente="0595031-7" data-funcao="MÉDICA" data-banco="BRADESCO"  ><a>CLEUDIANE SOARES DA SILVA</a></li><li title="Clique para adicionar" className="selecionar_contas"data-cpf="076.829.547-52"  data-servidor-nome="CRISTINE WELKE DE LIMA SUDÁRIO" data-agencia="0644" data-operacao="001" data-conta-corrente="4001-0" data-funcao="NUTRICIONISTA" data-banco="CAIXA ECONÔMICA"  ><a>CRISTINE WELKE DE LIMA SUDÁRIO</a></li><li title="Clique para adicionar" className="selecionar_contas"data-cpf="006.360.241-56"  data-servidor-nome="DANNYLLA MOURA OLIVEIRA" data-agencia="2812" data-operacao="" data-conta-corrente="0237110-1" data-funcao="Secretária" data-banco="CAIXA ECONÔMICA"  ><a>DANNYLLA MOURA OLIVEIRA</a></li><li title="Clique para adicionar" className="selecionar_contas"data-cpf="029.062.231-07"  data-servidor-nome="DEJACY DE OLIVEIRA SOUSA" data-agencia="4381" data-operacao="001" data-conta-corrente="23801-7" data-funcao="Secretário" data-banco="CAIXA ECONÔMICA"  ><a>DEJACY DE OLIVEIRA SOUSA</a></li><li title="Clique para adicionar" className="selecionar_contas"data-cpf="966.536.551-72"  data-servidor-nome="EDSON BEZERRA BARROS" data-agencia="3385 " data-operacao="001 " data-conta-corrente="20039-6" data-funcao="MOTORISTA" data-banco="CAIXA ECONÔMICA"  ><a>EDSON BEZERRA BARROS</a></li><li title="Clique para adicionar" className="selecionar_contas"data-cpf="681.760.312-91"  data-servidor-nome="Elzenir da Silva Melo" data-agencia="3442" data-operacao="013" data-conta-corrente="00005014-9" data-funcao="AUX.DE ENFERMAGEM" data-banco="CAIXA ECONOMICA"  ><a>Elzenir da Silva Melo</a></li><li title="Clique para adicionar" className="selecionar_contas"data-cpf="004.271.211-40"  data-servidor-nome="FLORISVALDO DE OLIVEIRA SILVA " data-agencia="4381" data-operacao="001" data-conta-corrente="23786-0" data-funcao="CHEFE DE DEP. GESTÃO" data-banco="CAIXA ECONOMICA"  ><a>FLORISVALDO DE OLIVEIRA SILVA </a></li><li title="Clique para adicionar" className="selecionar_contas"data-cpf="776.759.321-53"  data-servidor-nome="FRANCISCA LUCIANA ANDRADE " data-agencia="2812" data-operacao="001" data-conta-corrente="4006-0" data-funcao="DIGITADORA" data-banco="CAIXA ECONÔMICA FEDERAL"  ><a>FRANCISCA LUCIANA ANDRADE </a></li><li title="Clique para adicionar" className="selecionar_contas"data-cpf="80245919104"  data-servidor-nome="FRANCISCA MIRANDA DE OLIVEIRA" data-agencia="4381" data-operacao="001" data-conta-corrente="24495-5" data-funcao="TÉCNICA EM SAÚDE BUCAL" data-banco="CAIXA ECONÔMICA"  ><a>FRANCISCA MIRANDA DE OLIVEIRA</a></li><li title="Clique para adicionar" className="selecionar_contas"data-cpf="962.789.431-15"  data-servidor-nome="FRANCISCO DE ASSIS SOARES DE ARAÚJO" data-agencia="4381" data-operacao="013" data-conta-corrente="12528-3" data-funcao="MOTORISTA" data-banco="CAIXA ECONÔMICA"  ><a>FRANCISCO DE ASSIS SOARES DE ARAÚJO</a></li><li title="Clique para adicionar" className="selecionar_contas"data-cpf="982.149.771-34"  data-servidor-nome="FRANCISCO NASCIMENTO SOUSA" data-agencia="0644" data-operacao="013" data-conta-corrente="223774-5" data-funcao="MOTORISTA" data-banco="CAIXA ECONÔMICA"  ><a>FRANCISCO NASCIMENTO SOUSA</a></li><li title="Clique para adicionar" className="selecionar_contas"data-cpf="036.304.131-10"  data-servidor-nome="FRANCISCO TAFFAREL XAVIER XAVIER DE BRITO" data-agencia="4381" data-operacao="013" data-conta-corrente="16352-5" data-funcao="Digitador" data-banco="CAIXA ECONÔMICA"  ><a>FRANCISCO TAFFAREL XAVIER XAVIER DE BRITO</a></li><li title="Clique para adicionar" className="selecionar_contas"data-cpf="051.363.363-40"  data-servidor-nome="GEOVANE REIS VALENTINO" data-agencia="4381" data-operacao="001" data-conta-corrente="24492-0" data-funcao="ENFERMEIRO" data-banco="CAIXA ECONÔMICA"  ><a>GEOVANE REIS VALENTINO</a></li><li title="Clique para adicionar" className="selecionar_contas"data-cpf="600.319.203-81"  data-servidor-nome="IANARA PEREIRA DA SILVA" data-agencia="4919" data-operacao="" data-conta-corrente="21835-4" data-funcao="ENFERMEIRA" data-banco="CAIXA ECONÔMICA"  ><a>IANARA PEREIRA DA SILVA</a></li><li title="Clique para adicionar" className="selecionar_contas"data-cpf="030.014.241-25"  data-servidor-nome="ISIS GABRIELLE SANTOS CARVALHO" data-agencia="" data-operacao="" data-conta-corrente="" data-funcao="DIRETOR DE DEPARTAMENTO DE PROCESSO DE DADOS" data-banco=""  ><a>ISIS GABRIELLE SANTOS CARVALHO</a></li><li title="Clique para adicionar" className="selecionar_contas"data-cpf="031.756.461-74"  data-servidor-nome="JÉSSICA PEREIRA ALVES DE CARVALHO SCHEREIBER" data-agencia="4290" data-operacao="" data-conta-corrente="23108-5" data-funcao="ENFERMEIRA" data-banco="CAIXA ECONÔMICA"  ><a>JÉSSICA PEREIRA ALVES DE CARVALHO SCHEREIBER</a></li><li title="Clique para adicionar" className="selecionar_contas"data-cpf="006.167.823-65"  data-servidor-nome="JEWINSON FERREIRA LIMA" data-agencia="0644" data-operacao="001" data-conta-corrente="20847-7" data-funcao="MOTORISTA" data-banco="CAIXA ECONOMICA"  ><a>JEWINSON FERREIRA LIMA</a></li><li title="Clique para adicionar" className="selecionar_contas"data-cpf="487.564.663-15"  data-servidor-nome="JOSÉ ALENCAR DE OLIVEIRA" data-agencia="4381" data-operacao="013" data-conta-corrente="14246-3" data-funcao="MOTORISTA" data-banco="CAIXA ECONÔMICA"  ><a>JOSÉ ALENCAR DE OLIVEIRA</a></li><li title="Clique para adicionar" className="selecionar_contas"data-cpf="197.810.913-04"  data-servidor-nome="JOSE ANTONIO ALVES DOS SANTOS" data-agencia="4381" data-operacao="013" data-conta-corrente="023865-7" data-funcao="MOTORISTA" data-banco="CAIXA ECONÔMICA"  ><a>JOSE ANTONIO ALVES DOS SANTOS</a></li><li title="Clique para adicionar" className="selecionar_contas"data-cpf="689.643.401-59"  data-servidor-nome="JOSEFA MARIA DA CONCEIÇÃO COSTA" data-agencia="4381" data-operacao="001" data-conta-corrente="22671-0" data-funcao="AGENTE DE SAÚDE" data-banco="CAIXA ECONÔMICA"  ><a>JOSEFA MARIA DA CONCEIÇÃO COSTA</a></li><li title="Clique para adicionar" className="selecionar_contas"data-cpf="057.661.303-25"  data-servidor-nome="LUZINEIDE O. S.BRITO" data-agencia="2812" data-operacao="001" data-conta-corrente="00004106-6" data-funcao="ATENDENTE" data-banco="CAIXA ECONOMICA"  ><a>LUZINEIDE O. S.BRITO</a></li><li title="Clique para adicionar" className="selecionar_contas"data-cpf="807.950.721-04"  data-servidor-nome="LUZIVÂNIA OLIVEIRA DA SILVA SANTOS " data-agencia="2812" data-operacao="001" data-conta-corrente="4309-3" data-funcao="AGENTE DE ENDEMIAS" data-banco="CAIXA ECONOMICA"  ><a>LUZIVÂNIA OLIVEIRA DA SILVA SANTOS </a></li><li title="Clique para adicionar" className="selecionar_contas"data-cpf="005.345.531-25"  data-servidor-nome="MARIA NEUMA SOUSA SILVA" data-agencia="2812" data-operacao="" data-conta-corrente="2969-4" data-funcao="ATENDENTE" data-banco="CAIXA ECONÔMICA"  ><a>MARIA NEUMA SOUSA SILVA</a></li><li title="Clique para adicionar" className="selecionar_contas"data-cpf="83340726191"  data-servidor-nome="MARIA SUELY LOPES DE SOUSA FARIAS" data-agencia="4381" data-operacao="001" data-conta-corrente="22589-6" data-funcao="ASSISTENTE SOCIAL" data-banco="CAIXA ECONÔMICA"  ><a>MARIA SUELY LOPES DE SOUSA FARIAS</a></li><li title="Clique para adicionar" className="selecionar_contas"data-cpf="989.474.503-30"  data-servidor-nome="MELQUESEDEQUK MELO DA SILVA" data-agencia="2812" data-operacao="001" data-conta-corrente="00003998-3" data-funcao="MOTORISTA" data-banco="CAIXA ECONOMICA"  ><a>MELQUESEDEQUK MELO DA SILVA</a></li><li title="Clique para adicionar" className="selecionar_contas"data-cpf="008.215.211-01"  data-servidor-nome="NEURYCE PATRÍCIO SOUSA " data-agencia="4381" data-operacao="013" data-conta-corrente="4643-0" data-funcao="DIGITADORA" data-banco="CAIXA ECONÔMICA"  ><a>NEURYCE PATRÍCIO SOUSA </a></li><li title="Clique para adicionar" className="selecionar_contas"data-cpf="732-032-203-00"  data-servidor-nome="PATRICIA PEREIRA BANDEIRA DE ALMEIDA" data-agencia="0644" data-operacao="001" data-conta-corrente="11098-1" data-funcao="ENFERMEIRO" data-banco="CAIXA ECONÔMICA"  ><a>PATRICIA PEREIRA BANDEIRA DE ALMEIDA</a></li><li title="Clique para adicionar" className="selecionar_contas"data-cpf="576.593.703-91"  data-servidor-nome="Ray Alves da Silva" data-agencia="0644" data-operacao="013" data-conta-corrente="16125-3" data-funcao="secretaria executiva do Conselho mun.de saude" data-banco="caixa economica"  ><a>Ray Alves da Silva</a></li><li title="Clique para adicionar" className="selecionar_contas"data-cpf="028.782.451-99"  data-servidor-nome="RAYANE OLIVEIRA" data-agencia="0644" data-operacao="16859-2" data-conta-corrente="013" data-funcao="EDUCADORA FÍSICA" data-banco="CAIXA ECONÔMICA"  ><a>RAYANE OLIVEIRA</a></li><li title="Clique para adicionar" className="selecionar_contas"data-cpf="000.703.301-07"  data-servidor-nome="RENATA SILVA CARVALHO" data-agencia="4881" data-operacao="001" data-conta-corrente="21765-6" data-funcao="ASSISTENTE SOCIAL" data-banco="CAIXA ECONÔMICA"  ><a>RENATA SILVA CARVALHO</a></li><li title="Clique para adicionar" className="selecionar_contas"data-cpf="626.036.203-04"  data-servidor-nome="RIVELINO DIAS MOURA" data-agencia="0644" data-operacao="013" data-conta-corrente="235251-0" data-funcao="MOTORISTA" data-banco="CAIXA ECONOMICA FEDERAL"  ><a>RIVELINO DIAS MOURA</a></li><li title="Clique para adicionar" className="selecionar_contas"data-cpf="479.995.941-72"  data-servidor-nome="ROSEMEIRE VIEIRA PEREIRA AQUINO " data-agencia="2812" data-operacao="001" data-conta-corrente="4293-3" data-funcao="ENFERMEIRA" data-banco="CAIXA ECONOMICA"  ><a>ROSEMEIRE VIEIRA PEREIRA AQUINO </a></li><li title="Clique para adicionar" className="selecionar_contas"data-cpf="716.968.493-49"  data-servidor-nome="ROSICLEIDE DE CARVALHO LIMA" data-agencia="3975" data-operacao="6" data-conta-corrente="14595-5" data-funcao="TÉCNICO DE ENFERMAGEM" data-banco="BANCO DE BRASIL"  ><a>ROSICLEIDE DE CARVALHO LIMA</a></li><li title="Clique para adicionar" className="selecionar_contas"data-cpf="036.633.143.40"  data-servidor-nome="THALLITA BEATRIZ R. BANDEIRA COSTA" data-agencia="4381" data-operacao="001" data-conta-corrente="21993-4" data-funcao="SECRETARIA EXECUTIVA DO CONSELHO DA SAÚDE" data-banco="CAIXA ECONÔMICA"  ><a>THALLITA BEATRIZ R. BANDEIRA COSTA</a></li><li title="Clique para adicionar" className="selecionar_contas"data-cpf="34531416368"  data-servidor-nome="VALDECINA BARBOSA DE SOUSA" data-agencia="0644" data-operacao="001" data-conta-corrente="22700-5" data-funcao="NUTRICIONISTA" data-banco="CAIXA ECONÔMICA"  ><a>VALDECINA BARBOSA DE SOUSA</a></li><li title="Clique para adicionar" className="selecionar_contas"data-cpf="336.258.243-53"  data-servidor-nome="VALDIR FERNANDES DE SOUSA" data-agencia="2812" data-operacao="001" data-conta-corrente="4052-3" data-funcao="MOTORISTA" data-banco="CAIXA ECONÔMICA"  ><a>VALDIR FERNANDES DE SOUSA</a></li><li title="Clique para adicionar" className="selecionar_contas"data-cpf="896.673.791-91"  data-servidor-nome="ZONDONADIO PEREIRA MARTINS" data-agencia="3151" data-operacao="013" data-conta-corrente="7721-8" data-funcao="MOTORISTA" data-banco="CAIXA ECONÔMICA"  ><a>ZONDONADIO PEREIRA MARTINS</a></li>                    </ul> 
                </div>
                <div id="getContas" contenteditable="" className="editavel">
                    ...                </div>

                                    <div id="observacaoTextId" hidden="" contenteditable=""><br/>Observações: Há documentos anexados, nesta solicitação, para comprovação das informações.</div>
                    <button id="inserirObservacao" className="noprint btn-danger btn">Observação</button>
                    <button id="btnSalvar" className="btn-success noprint btn">Salvar Novo</button>
                                                        </td>
            <td style={{text-align:center;vertical-align:top;padding-top:10px;font:12px 'arial black';}}><span id="unidade" contenteditable="">
                    1/2                </span></td>
            <td style={{text-align:center;vertical-align:top;padding-top:10px;font:12px 'arial black';}}><span id="valorQuant" contenteditable="">
                    R$ 140,00                </span></td>
        </tr>
        
        <tr style={{border:1px solid black;}}>
            <td colspan=5><br/></td>
            <td colspan=5><br/></td>
        </tr>
        
        <tr style={{border:1px solid black;}}>
            <td colspan="5" style={{text-align:justify;font:12px arial;line-height:140%;}}>Consta no vigente orçamento, dotação orçamentária, para o cumprimento das despesas oriundas deste processo na funcional programática nº 
                ___________________________________<br/><b>Fonte:</b> __________________________________
                <br/> <br/> <br/> <br/><br/>
                <b style={{display:block;text-align:center;}}>Contador</b><br/>
            </td>
            <td colspan="5" style={{text-align:justify;vertical-align:top;font:12px arial;line-height:140%;}}>
                Verificamos que existe disponibilidade financeira para realização das despesas.
                <br/> <br/> <br/> <br/> <br/><br/> <br/><br/><br/>
                <b style={{display:block;text-align:center;}}>Sec. de Finanças</b><br/>
            </td>
        </tr>

        
        <tr style={{border:1px solid black;}} id="justificativa" contenteditable="">
            <td colspan=10><span><b>Justificativa</b></span></td>
        </tr>
        
        <tr style={{border:1px solid black;text-align:center;}}>
            <td colspan=4><b>Data da Autorização</b></td>
            <td colspan=3><b>Autorização/Prefeito</b></td>
            <td colspan=3><b>Visto do Controle Interno</b></td>
        </tr>

        
        <tr style={{border:1px solid black;text-align:center;}}>
            <td colspan=4 style={{height:30px;vertical-align:bottom;}}><b>_____/_____/________</b></td>
            <td colspan=3><b></b></td>
            <td colspan=3><b></b></td>
        </tr>
            </table>
</div>

<div id="modalConta" className="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
        <h3 id="myModalLabel">Contas</h3>
    </div>
    <div className="modal-body">
                <table className="table">
            <tr>
                <th>Nome</th>
                <th>CPF</th>
                <th>Agência</th>
                <th>Operação</th>
                <th title="Conta Corrente">CC</th>
                <th></th>
            </tr>
                            <tr>
                    <td contenteditable="">ADILSON SILVA DO NASCIMENTO</td>
                    <td contenteditable="">006.632.361-42</td>
                    <td contenteditable="">2812</td>
                    <td contenteditable="">001</td>
                    <td contenteditable="">4302-6</td>
                    <td><button className="btn-success btn-mini">Add</button>
                        <button className="btn-danger btn-mini">Rem</button></td>
                </tr>
                                <tr>
                    <td contenteditable="">ALBERTO LOIOLA GOMES MOREIRA</td>
                    <td contenteditable="">000.308.943-60</td>
                    <td contenteditable="">3975-6</td>
                    <td contenteditable="">0</td>
                    <td contenteditable="">12585-4</td>
                    <td><button className="btn-success btn-mini">Add</button>
                        <button className="btn-danger btn-mini">Rem</button></td>
                </tr>
                                <tr>
                    <td contenteditable="">ALDENICE SANTOS PEREIRA</td>
                    <td contenteditable="">04268642129</td>
                    <td contenteditable="">4381</td>
                    <td contenteditable="">013</td>
                    <td contenteditable="">10125-2</td>
                    <td><button className="btn-success btn-mini">Add</button>
                        <button className="btn-danger btn-mini">Rem</button></td>
                </tr>
                                <tr>
                    <td contenteditable="">ALYNE DE SOUSA ABREU FARIAS</td>
                    <td contenteditable="">024.870.781-70</td>
                    <td contenteditable="">3151</td>
                    <td contenteditable="">001</td>
                    <td contenteditable="">20273-6</td>
                    <td><button className="btn-success btn-mini">Add</button>
                        <button className="btn-danger btn-mini">Rem</button></td>
                </tr>
                                <tr>
                    <td contenteditable="">AMANDA PEREIRA SOUZA</td>
                    <td contenteditable="">61079173307</td>
                    <td contenteditable="">4381</td>
                    <td contenteditable="">001</td>
                    <td contenteditable="">24399-1</td>
                    <td><button className="btn-success btn-mini">Add</button>
                        <button className="btn-danger btn-mini">Rem</button></td>
                </tr>
                                <tr>
                    <td contenteditable="">AMAURY MARINHO NOLETO </td>
                    <td contenteditable="">715.359.421-34</td>
                    <td contenteditable="">2812</td>
                    <td contenteditable="">001</td>
                    <td contenteditable="">4178-3</td>
                    <td><button className="btn-success btn-mini">Add</button>
                        <button className="btn-danger btn-mini">Rem</button></td>
                </tr>
                                <tr>
                    <td contenteditable="">ANA LIDIA PINHEIRO L. MIRANDA </td>
                    <td contenteditable="">014.104.383-09</td>
                    <td contenteditable="">4381</td>
                    <td contenteditable="">013</td>
                    <td contenteditable="">16006-2</td>
                    <td><button className="btn-success btn-mini">Add</button>
                        <button className="btn-danger btn-mini">Rem</button></td>
                </tr>
                                <tr>
                    <td contenteditable="">ANTÔNIO FERNANDES DE SOUSA</td>
                    <td contenteditable="">333.239.683-87</td>
                    <td contenteditable="">4381</td>
                    <td contenteditable="">013</td>
                    <td contenteditable="">15065-2</td>
                    <td><button className="btn-success btn-mini">Add</button>
                        <button className="btn-danger btn-mini">Rem</button></td>
                </tr>
                                <tr>
                    <td contenteditable="">ANTÔNIO RAIMUNDO MOURA SILVA</td>
                    <td contenteditable="">012.486.081-86</td>
                    <td contenteditable="">4381</td>
                    <td contenteditable="">013</td>
                    <td contenteditable="">19647-4</td>
                    <td><button className="btn-success btn-mini">Add</button>
                        <button className="btn-danger btn-mini">Rem</button></td>
                </tr>
                                <tr>
                    <td contenteditable="">CLÁUDIO AGUIAR DE OLIVEIRA</td>
                    <td contenteditable="">01006083375</td>
                    <td contenteditable="">4290</td>
                    <td contenteditable=""></td>
                    <td contenteditable="">22298-1</td>
                    <td><button className="btn-success btn-mini">Add</button>
                        <button className="btn-danger btn-mini">Rem</button></td>
                </tr>
                                <tr>
                    <td contenteditable="">CLEUDIANE SOARES DA SILVA</td>
                    <td contenteditable="">000.771.843-86</td>
                    <td contenteditable="">460-0</td>
                    <td contenteditable=""></td>
                    <td contenteditable="">0595031-7</td>
                    <td><button className="btn-success btn-mini">Add</button>
                        <button className="btn-danger btn-mini">Rem</button></td>
                </tr>
                                <tr>
                    <td contenteditable="">CRISTINE WELKE DE LIMA SUDÁRIO</td>
                    <td contenteditable="">076.829.547-52</td>
                    <td contenteditable="">0644</td>
                    <td contenteditable="">001</td>
                    <td contenteditable="">4001-0</td>
                    <td><button className="btn-success btn-mini">Add</button>
                        <button className="btn-danger btn-mini">Rem</button></td>
                </tr>
                                <tr>
                    <td contenteditable="">DANNYLLA MOURA OLIVEIRA</td>
                    <td contenteditable="">006.360.241-56</td>
                    <td contenteditable="">2812</td>
                    <td contenteditable=""></td>
                    <td contenteditable="">0237110-1</td>
                    <td><button className="btn-success btn-mini">Add</button>
                        <button className="btn-danger btn-mini">Rem</button></td>
                </tr>
                                <tr>
                    <td contenteditable="">DEJACY DE OLIVEIRA SOUSA</td>
                    <td contenteditable="">029.062.231-07</td>
                    <td contenteditable="">4381</td>
                    <td contenteditable="">001</td>
                    <td contenteditable="">23801-7</td>
                    <td><button className="btn-success btn-mini">Add</button>
                        <button className="btn-danger btn-mini">Rem</button></td>
                </tr>
                                <tr>
                    <td contenteditable="">EDSON BEZERRA BARROS</td>
                    <td contenteditable="">966.536.551-72</td>
                    <td contenteditable="">3385 </td>
                    <td contenteditable="">001 </td>
                    <td contenteditable="">20039-6</td>
                    <td><button className="btn-success btn-mini">Add</button>
                        <button className="btn-danger btn-mini">Rem</button></td>
                </tr>
                                <tr>
                    <td contenteditable="">Elzenir da Silva Melo</td>
                    <td contenteditable="">681.760.312-91</td>
                    <td contenteditable="">3442</td>
                    <td contenteditable="">013</td>
                    <td contenteditable="">00005014-9</td>
                    <td><button className="btn-success btn-mini">Add</button>
                        <button className="btn-danger btn-mini">Rem</button></td>
                </tr>
                                <tr>
                    <td contenteditable="">FLORISVALDO DE OLIVEIRA SILVA </td>
                    <td contenteditable="">004.271.211-40</td>
                    <td contenteditable="">4381</td>
                    <td contenteditable="">001</td>
                    <td contenteditable="">23786-0</td>
                    <td><button className="btn-success btn-mini">Add</button>
                        <button className="btn-danger btn-mini">Rem</button></td>
                </tr>
                                <tr>
                    <td contenteditable="">FRANCISCA LUCIANA ANDRADE </td>
                    <td contenteditable="">776.759.321-53</td>
                    <td contenteditable="">2812</td>
                    <td contenteditable="">001</td>
                    <td contenteditable="">4006-0</td>
                    <td><button className="btn-success btn-mini">Add</button>
                        <button className="btn-danger btn-mini">Rem</button></td>
                </tr>
                                <tr>
                    <td contenteditable="">FRANCISCA MIRANDA DE OLIVEIRA</td>
                    <td contenteditable="">80245919104</td>
                    <td contenteditable="">4381</td>
                    <td contenteditable="">001</td>
                    <td contenteditable="">24495-5</td>
                    <td><button className="btn-success btn-mini">Add</button>
                        <button className="btn-danger btn-mini">Rem</button></td>
                </tr>
                                <tr>
                    <td contenteditable="">FRANCISCO DE ASSIS SOARES DE ARAÚJO</td>
                    <td contenteditable="">962.789.431-15</td>
                    <td contenteditable="">4381</td>
                    <td contenteditable="">013</td>
                    <td contenteditable="">12528-3</td>
                    <td><button className="btn-success btn-mini">Add</button>
                        <button className="btn-danger btn-mini">Rem</button></td>
                </tr>
                                <tr>
                    <td contenteditable="">FRANCISCO NASCIMENTO SOUSA</td>
                    <td contenteditable="">982.149.771-34</td>
                    <td contenteditable="">0644</td>
                    <td contenteditable="">013</td>
                    <td contenteditable="">223774-5</td>
                    <td><button className="btn-success btn-mini">Add</button>
                        <button className="btn-danger btn-mini">Rem</button></td>
                </tr>
                                <tr>
                    <td contenteditable="">FRANCISCO TAFFAREL XAVIER XAVIER DE BRITO</td>
                    <td contenteditable="">036.304.131-10</td>
                    <td contenteditable="">4381</td>
                    <td contenteditable="">013</td>
                    <td contenteditable="">16352-5</td>
                    <td><button className="btn-success btn-mini">Add</button>
                        <button className="btn-danger btn-mini">Rem</button></td>
                </tr>
                                <tr>
                    <td contenteditable="">GEOVANE REIS VALENTINO</td>
                    <td contenteditable="">051.363.363-40</td>
                    <td contenteditable="">4381</td>
                    <td contenteditable="">001</td>
                    <td contenteditable="">24492-0</td>
                    <td><button className="btn-success btn-mini">Add</button>
                        <button className="btn-danger btn-mini">Rem</button></td>
                </tr>
                                <tr>
                    <td contenteditable="">IANARA PEREIRA DA SILVA</td>
                    <td contenteditable="">600.319.203-81</td>
                    <td contenteditable="">4919</td>
                    <td contenteditable=""></td>
                    <td contenteditable="">21835-4</td>
                    <td><button className="btn-success btn-mini">Add</button>
                        <button className="btn-danger btn-mini">Rem</button></td>
                </tr>
                                <tr>
                    <td contenteditable="">ISIS GABRIELLE SANTOS CARVALHO</td>
                    <td contenteditable="">030.014.241-25</td>
                    <td contenteditable=""></td>
                    <td contenteditable=""></td>
                    <td contenteditable=""></td>
                    <td><button className="btn-success btn-mini">Add</button>
                        <button className="btn-danger btn-mini">Rem</button></td>
                </tr>
                                <tr>
                    <td contenteditable="">JÉSSICA PEREIRA ALVES DE CARVALHO SCHEREIBER</td>
                    <td contenteditable="">031.756.461-74</td>
                    <td contenteditable="">4290</td>
                    <td contenteditable=""></td>
                    <td contenteditable="">23108-5</td>
                    <td><button className="btn-success btn-mini">Add</button>
                        <button className="btn-danger btn-mini">Rem</button></td>
                </tr>
                                <tr>
                    <td contenteditable="">JEWINSON FERREIRA LIMA</td>
                    <td contenteditable="">006.167.823-65</td>
                    <td contenteditable="">0644</td>
                    <td contenteditable="">001</td>
                    <td contenteditable="">20847-7</td>
                    <td><button className="btn-success btn-mini">Add</button>
                        <button className="btn-danger btn-mini">Rem</button></td>
                </tr>
                                <tr>
                    <td contenteditable="">JOSÉ ALENCAR DE OLIVEIRA</td>
                    <td contenteditable="">487.564.663-15</td>
                    <td contenteditable="">4381</td>
                    <td contenteditable="">013</td>
                    <td contenteditable="">14246-3</td>
                    <td><button className="btn-success btn-mini">Add</button>
                        <button className="btn-danger btn-mini">Rem</button></td>
                </tr>
                                <tr>
                    <td contenteditable="">JOSE ANTONIO ALVES DOS SANTOS</td>
                    <td contenteditable="">197.810.913-04</td>
                    <td contenteditable="">4381</td>
                    <td contenteditable="">013</td>
                    <td contenteditable="">023865-7</td>
                    <td><button className="btn-success btn-mini">Add</button>
                        <button className="btn-danger btn-mini">Rem</button></td>
                </tr>
                                <tr>
                    <td contenteditable="">JOSEFA MARIA DA CONCEIÇÃO COSTA</td>
                    <td contenteditable="">689.643.401-59</td>
                    <td contenteditable="">4381</td>
                    <td contenteditable="">001</td>
                    <td contenteditable="">22671-0</td>
                    <td><button className="btn-success btn-mini">Add</button>
                        <button className="btn-danger btn-mini">Rem</button></td>
                </tr>
                                <tr>
                    <td contenteditable="">LUZINEIDE O. S.BRITO</td>
                    <td contenteditable="">057.661.303-25</td>
                    <td contenteditable="">2812</td>
                    <td contenteditable="">001</td>
                    <td contenteditable="">00004106-6</td>
                    <td><button className="btn-success btn-mini">Add</button>
                        <button className="btn-danger btn-mini">Rem</button></td>
                </tr>
                                <tr>
                    <td contenteditable="">LUZIVÂNIA OLIVEIRA DA SILVA SANTOS </td>
                    <td contenteditable="">807.950.721-04</td>
                    <td contenteditable="">2812</td>
                    <td contenteditable="">001</td>
                    <td contenteditable="">4309-3</td>
                    <td><button className="btn-success btn-mini">Add</button>
                        <button className="btn-danger btn-mini">Rem</button></td>
                </tr>
                                <tr>
                    <td contenteditable="">MARIA NEUMA SOUSA SILVA</td>
                    <td contenteditable="">005.345.531-25</td>
                    <td contenteditable="">2812</td>
                    <td contenteditable=""></td>
                    <td contenteditable="">2969-4</td>
                    <td><button className="btn-success btn-mini">Add</button>
                        <button className="btn-danger btn-mini">Rem</button></td>
                </tr>
                                <tr>
                    <td contenteditable="">MARIA SUELY LOPES DE SOUSA FARIAS</td>
                    <td contenteditable="">83340726191</td>
                    <td contenteditable="">4381</td>
                    <td contenteditable="">001</td>
                    <td contenteditable="">22589-6</td>
                    <td><button className="btn-success btn-mini">Add</button>
                        <button className="btn-danger btn-mini">Rem</button></td>
                </tr>
                                <tr>
                    <td contenteditable="">MELQUESEDEQUK MELO DA SILVA</td>
                    <td contenteditable="">989.474.503-30</td>
                    <td contenteditable="">2812</td>
                    <td contenteditable="">001</td>
                    <td contenteditable="">00003998-3</td>
                    <td><button className="btn-success btn-mini">Add</button>
                        <button className="btn-danger btn-mini">Rem</button></td>
                </tr>
                                <tr>
                    <td contenteditable="">NEURYCE PATRÍCIO SOUSA </td>
                    <td contenteditable="">008.215.211-01</td>
                    <td contenteditable="">4381</td>
                    <td contenteditable="">013</td>
                    <td contenteditable="">4643-0</td>
                    <td><button className="btn-success btn-mini">Add</button>
                        <button className="btn-danger btn-mini">Rem</button></td>
                </tr>
                                <tr>
                    <td contenteditable="">PATRICIA PEREIRA BANDEIRA DE ALMEIDA</td>
                    <td contenteditable="">732-032-203-00</td>
                    <td contenteditable="">0644</td>
                    <td contenteditable="">001</td>
                    <td contenteditable="">11098-1</td>
                    <td><button className="btn-success btn-mini">Add</button>
                        <button className="btn-danger btn-mini">Rem</button></td>
                </tr>
                                <tr>
                    <td contenteditable="">Ray Alves da Silva</td>
                    <td contenteditable="">576.593.703-91</td>
                    <td contenteditable="">0644</td>
                    <td contenteditable="">013</td>
                    <td contenteditable="">16125-3</td>
                    <td><button className="btn-success btn-mini">Add</button>
                        <button className="btn-danger btn-mini">Rem</button></td>
                </tr>
                                <tr>
                    <td contenteditable="">RAYANE OLIVEIRA</td>
                    <td contenteditable="">028.782.451-99</td>
                    <td contenteditable="">0644</td>
                    <td contenteditable="">16859-2</td>
                    <td contenteditable="">013</td>
                    <td><button className="btn-success btn-mini">Add</button>
                        <button className="btn-danger btn-mini">Rem</button></td>
                </tr>
                                <tr>
                    <td contenteditable="">RENATA SILVA CARVALHO</td>
                    <td contenteditable="">000.703.301-07</td>
                    <td contenteditable="">4881</td>
                    <td contenteditable="">001</td>
                    <td contenteditable="">21765-6</td>
                    <td><button className="btn-success btn-mini">Add</button>
                        <button className="btn-danger btn-mini">Rem</button></td>
                </tr>
                                <tr>
                    <td contenteditable="">RIVELINO DIAS MOURA</td>
                    <td contenteditable="">626.036.203-04</td>
                    <td contenteditable="">0644</td>
                    <td contenteditable="">013</td>
                    <td contenteditable="">235251-0</td>
                    <td><button className="btn-success btn-mini">Add</button>
                        <button className="btn-danger btn-mini">Rem</button></td>
                </tr>
                                <tr>
                    <td contenteditable="">ROSEMEIRE VIEIRA PEREIRA AQUINO </td>
                    <td contenteditable="">479.995.941-72</td>
                    <td contenteditable="">2812</td>
                    <td contenteditable="">001</td>
                    <td contenteditable="">4293-3</td>
                    <td><button className="btn-success btn-mini">Add</button>
                        <button className="btn-danger btn-mini">Rem</button></td>
                </tr>
                                <tr>
                    <td contenteditable="">ROSICLEIDE DE CARVALHO LIMA</td>
                    <td contenteditable="">716.968.493-49</td>
                    <td contenteditable="">3975</td>
                    <td contenteditable="">6</td>
                    <td contenteditable="">14595-5</td>
                    <td><button className="btn-success btn-mini">Add</button>
                        <button className="btn-danger btn-mini">Rem</button></td>
                </tr>
                                <tr>
                    <td contenteditable="">THALLITA BEATRIZ R. BANDEIRA COSTA</td>
                    <td contenteditable="">036.633.143.40</td>
                    <td contenteditable="">4381</td>
                    <td contenteditable="">001</td>
                    <td contenteditable="">21993-4</td>
                    <td><button className="btn-success btn-mini">Add</button>
                        <button className="btn-danger btn-mini">Rem</button></td>
                </tr>
                                <tr>
                    <td contenteditable="">VALDECINA BARBOSA DE SOUSA</td>
                    <td contenteditable="">34531416368</td>
                    <td contenteditable="">0644</td>
                    <td contenteditable="">001</td>
                    <td contenteditable="">22700-5</td>
                    <td><button className="btn-success btn-mini">Add</button>
                        <button className="btn-danger btn-mini">Rem</button></td>
                </tr>
                                <tr>
                    <td contenteditable="">VALDIR FERNANDES DE SOUSA</td>
                    <td contenteditable="">336.258.243-53</td>
                    <td contenteditable="">2812</td>
                    <td contenteditable="">001</td>
                    <td contenteditable="">4052-3</td>
                    <td><button className="btn-success btn-mini">Add</button>
                        <button className="btn-danger btn-mini">Rem</button></td>
                </tr>
                                <tr>
                    <td contenteditable="">ZONDONADIO PEREIRA MARTINS</td>
                    <td contenteditable="">896.673.791-91</td>
                    <td contenteditable="">3151</td>
                    <td contenteditable="">013</td>
                    <td contenteditable="">7721-8</td>
                    <td><button className="btn-success btn-mini">Add</button>
                        <button className="btn-danger btn-mini">Rem</button></td>
                </tr>
                        </table>
    </div>
    <div className="modal-footer">
        <button className="btn" data-dismiss="modal" aria-hidden="true">Fechar</button>
    </div>
</div>


<div id="abrirAlteracoes" className="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
        <h3 id="myModalLabel">Dados Alterados</h3>
    </div>
    <div className="modal-body">
        <div className="row-fluid" id="getAlteracoes"></div>
    </div>
    <div className="modal-footer">
        <button className="btn" data-dismiss="modal" aria-hidden="true">Fechar</button>
    </div>
</div>

    </body>

</>)

}
	export default App;