<?php
declare(strict_types=1);

function nav_items(): array{
 return [
  'dashboard'=>'Dashboard','reservations'=>'Reservations','rooms'=>'Rooms','guests'=>'Guests',
  'pos'=>'POS and Orders','shifts'=>'Shifts','inventory'=>'Inventory','suppliers'=>'Suppliers',
  'purchases'=>'Purchases','expenses'=>'Expenses','finance'=>'Finance','approvals'=>'Approvals',
  'audit'=>'Audit Trail','reports'=>'Reports','users'=>'Team and Users'
 ];
}

function page_head(string $title,string $active='dashboard',string $sub=''): void{
 $u=current_user();
 $flash=flash_out();
 $items=nav_items();
 echo '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">';
 echo '<title>'.e($title).' | Hotel Paradise on the Nile</title>';
 echo '<link rel="preconnect" href="https://fonts.googleapis.com">';
 echo '<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700&display=swap" rel="stylesheet">';
 echo '<link rel="stylesheet" href="'.BASE.'/assets/admin.css">';
 echo '<link rel="icon" type="image/png" sizes="64x64" href="'.SITE_URL.'/images/logo-64.png">';
 echo '<link rel="apple-touch-icon" href="'.SITE_URL.'/images/logo-192.png">';
 echo '</head><body><div class="app">';

 echo '<aside class="side"><a class="sideBrand" href="'.BASE.'/index.php?page=dashboard"><img class="sideLogo" src="'.SITE_URL.'/images/logo-256.png" alt="Hotel Paradise on the Nile logo"><span class="sbText"><span>PARADISE</span><small>ON THE NILE</small></span></a>';
 echo '<div class="sideLabel">MANAGEMENT SYSTEM</div><nav class="sideNav">';
 foreach($items as $k=>$lbl){
  if(!page_allowed($k)) continue;
  $on=$k===$active?' class="on"':'';
  echo '<a href="'.BASE.'/index.php?page='.$k.'"'.$on.'><span class="dot"></span>'.e($lbl).'</a>';
 }
 echo '</nav><div class="sideFoot"><a href="'.SITE_URL.'/" target="_blank">Open website</a></div></aside>';

 echo '<div class="main"><header class="top"><div><h1 class="pageTitle">'.e($title).'</h1>'.($sub?'<p class="pageSub">'.e($sub).'</p>':'').'</div><div class="topRight"><span class="who">'.e($u['name']??'').'</span>'.role_label(roles_of()[0]??'').'</span><span>'
 .'</span><a class="btnGhost" href="'.BASE.'/index.php?page=logout">Sign out</a></div></header>';
 if($flash){ echo '<div class="flash '.e($flash['type']).'">'.e($flash['msg']).'</div>'; }
 echo '<div class="content">';
}

function page_foot(): void{
 echo '</div></div></div></body></html>';
}

function kpi_card(string $label,string $value,string $hint='',string $tone='navy'): void{
 $cards=['navy'=>'#0f2850','gold'=>'#b08d1a','green'=>'#14532d','red'=>'#7f1d1d','blue'=>'#0B5D78'];
 echo '<div class="kpi" style="--k:'.($cards[$tone]??$cards['navy']).'"><div class="kpiLbl">'.e($label).'</div><div class="kpiVal">'.$value.'</div>'.($hint?'<div class="kpiHint">'.e($hint).'</div>':'').'</div>';
}

function filter_bar(string $extra=''): void{
 echo '<div class="toolbar">'.$extra.'</div>';
}

function status_badge(string $status, bool $neutral=false): string{
 $tones=['available'=>'ok','confirmed'=>'blue','checked_in'=>'gold','checked_out'=>'grey','cancelled'=>'bad','pending'=>'warn','paid'=>'ok','open'=>'gold','successful'=>'ok','reserved'=>'warn','occupied'=>'gold','dirty'=>'bad','cleaning'=>'blue','inspected'=>'ok','maintenance'=>'grey','approved'=>'ok','rejected'=>'bad','served'=>'ok','preparing'=>'warn','ready'=>'blue'];
 return badge(str_replace('_',' ',$status),$tones[$status]??'grey');
}

function checked(string $v,string $c): string{ return $v===$c?' checked':''; }
function sel(array $opts,string $v): string{ return isset($opts[$v]); }

function form_open(string $page,string $action='',array $extra=[]): void{
 $qs=array_merge(['page'=>$page,'act'=>$action?:''],$extra);
 echo '<form method="post" action="'.BASE.'/index.php?'.http_build_query($qs).'">';
}
function form_close(): void{ echo '</form>'; }

function back_button(string $label='Back'): void{
 echo '<a class="btnGhost sm" href="javascript:history.back()">'.e($label).'</a>';
}