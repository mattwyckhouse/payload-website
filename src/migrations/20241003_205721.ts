import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   DO $$ BEGIN
   CREATE TYPE "public"."enum_callout_fields_settings_theme" AS ENUM('light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_cta_cta_fields_settings_theme" AS ENUM('light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_cta_cta_fields_links_type" AS ENUM('link', 'npmCta');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_cta_cta_fields_links_link_type" AS ENUM('reference', 'custom');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_cg_fields_settings_theme" AS ENUM('light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_cg_fields_links_link_type" AS ENUM('reference', 'custom');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_cg_fields_cards_link_type" AS ENUM('reference', 'custom');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_csC_fields_settings_theme" AS ENUM('light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_csH_fields_settings_theme" AS ENUM('light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_csP_fields_settings_theme" AS ENUM('light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_cdFt_fields_settings_theme" AS ENUM('light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_cdFt_fields_alignment" AS ENUM('contentCode', 'codeContent');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_cdFt_fields_links_link_type" AS ENUM('reference', 'custom');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_cdFt_fields_ct_language" AS ENUM('none', 'js', 'ts');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_cdFt_fields_ct_blips_link_type" AS ENUM('reference', 'custom');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_cnt_fields_settings_theme" AS ENUM('light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_cnt_fields_layout" AS ENUM('oneColumn', 'twoColumns', 'twoThirdsOneThird', 'halfAndHalf', 'threeColumns');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_cGr_fields_settings_theme" AS ENUM('light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_cGr_fields_style" AS ENUM('gridBelow', 'sideBySide');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_cGr_fields_links_link_type" AS ENUM('reference', 'custom');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_form_form_fields_settings_theme" AS ENUM('light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_hc_fields_settings_theme" AS ENUM('light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_hc_fields_cards_link_type" AS ENUM('reference', 'custom');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_hHL_fields_settings_theme" AS ENUM('light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_hHL_fields_hl_link_type" AS ENUM('reference', 'custom');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_hHL_fields_link_type" AS ENUM('reference', 'custom');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_lG_fields_settings_theme" AS ENUM('light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_lG_fields_links_link_type" AS ENUM('reference', 'custom');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_lgG_fields_settings_theme" AS ENUM('light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_lgG_fields_link_type" AS ENUM('reference', 'custom');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_mB_fields_settings_theme" AS ENUM('light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_mB_fields_position" AS ENUM('default', 'wide');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_mC_fields_settings_theme" AS ENUM('light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_mC_fields_alignment" AS ENUM('contentMedia', 'mediaContent');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_mC_fields_link_type" AS ENUM('reference', 'custom');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_mAcc_fields_settings_theme" AS ENUM('light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_mAcc_fields_alignment" AS ENUM('contentMedia', 'mediaContent');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_mAcc_fields_acc_pos" AS ENUM('normal', 'inset', 'wide');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_mAcc_fields_acc_bg" AS ENUM('none', 'gradient', 'scanlines');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_mAcc_fields_acc_link_type" AS ENUM('reference', 'custom');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_prc_fields_settings_theme" AS ENUM('light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_prc_fields_plans_link_type" AS ENUM('reference', 'custom');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_prc_fields_plans_features_icon" AS ENUM('check', 'x');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_rcB_fields_settings_theme" AS ENUM('light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_sld_fields_settings_theme" AS ENUM('light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_stmt_fields_settings_theme" AS ENUM('light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_stmt_fields_links_link_type" AS ENUM('reference', 'custom');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_stmt_fields_asset_type" AS ENUM('media', 'code');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_stmt_fields_media_width" AS ENUM('small', 'medium', 'large', 'full');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_stmt_fields_background_glow" AS ENUM('none', 'colorful', 'white');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_stps_steps_fields_settings_theme" AS ENUM('light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_stkH_fields_settings_theme" AS ENUM('light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_stkH_fields_hl_link_type" AS ENUM('reference', 'custom');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_stkH_fields_hl_type" AS ENUM('code', 'media');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_stkH_fields_hl_blips_link_type" AS ENUM('reference', 'custom');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_case_studies_status" AS ENUM('draft', 'published');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__callout_v_fields_settings_theme" AS ENUM('light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__cta_v_cta_fields_settings_theme" AS ENUM('light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__cta_v_cta_fields_links_type" AS ENUM('link', 'npmCta');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__cta_v_cta_fields_links_link_type" AS ENUM('reference', 'custom');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__cg_v_fields_settings_theme" AS ENUM('light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__cg_v_fields_links_link_type" AS ENUM('reference', 'custom');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__cg_v_fields_cards_link_type" AS ENUM('reference', 'custom');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__csC_v_fields_settings_theme" AS ENUM('light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__csH_v_fields_settings_theme" AS ENUM('light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__csP_v_fields_settings_theme" AS ENUM('light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__cdFt_v_fields_settings_theme" AS ENUM('light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__cdFt_v_fields_alignment" AS ENUM('contentCode', 'codeContent');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__cdFt_v_fields_links_link_type" AS ENUM('reference', 'custom');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__cdFt_v_fields_ct_language" AS ENUM('none', 'js', 'ts');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__cdFt_v_fields_ct_blips_link_type" AS ENUM('reference', 'custom');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__cnt_v_fields_settings_theme" AS ENUM('light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__cnt_v_fields_layout" AS ENUM('oneColumn', 'twoColumns', 'twoThirdsOneThird', 'halfAndHalf', 'threeColumns');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__cGr_v_fields_settings_theme" AS ENUM('light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__cGr_v_fields_style" AS ENUM('gridBelow', 'sideBySide');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__cGr_v_fields_links_link_type" AS ENUM('reference', 'custom');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__form_v_form_fields_settings_theme" AS ENUM('light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__hc_v_fields_settings_theme" AS ENUM('light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__hc_v_fields_cards_link_type" AS ENUM('reference', 'custom');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__hHL_v_fields_settings_theme" AS ENUM('light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__hHL_v_fields_hl_link_type" AS ENUM('reference', 'custom');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__hHL_v_fields_link_type" AS ENUM('reference', 'custom');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__lG_v_fields_settings_theme" AS ENUM('light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__lG_v_fields_links_link_type" AS ENUM('reference', 'custom');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__lgG_v_fields_settings_theme" AS ENUM('light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__lgG_v_fields_link_type" AS ENUM('reference', 'custom');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__mB_v_fields_settings_theme" AS ENUM('light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__mB_v_fields_position" AS ENUM('default', 'wide');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__mC_v_fields_settings_theme" AS ENUM('light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__mC_v_fields_alignment" AS ENUM('contentMedia', 'mediaContent');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__mC_v_fields_link_type" AS ENUM('reference', 'custom');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__mAcc_v_fields_settings_theme" AS ENUM('light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__mAcc_v_fields_alignment" AS ENUM('contentMedia', 'mediaContent');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__mAcc_v_fields_acc_pos" AS ENUM('normal', 'inset', 'wide');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__mAcc_v_fields_acc_bg" AS ENUM('none', 'gradient', 'scanlines');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__mAcc_v_fields_acc_link_type" AS ENUM('reference', 'custom');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__prc_v_fields_settings_theme" AS ENUM('light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__prc_v_fields_plans_link_type" AS ENUM('reference', 'custom');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__prc_v_fields_plans_features_icon" AS ENUM('check', 'x');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__rcB_v_fields_settings_theme" AS ENUM('light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__sld_v_fields_settings_theme" AS ENUM('light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__stmt_v_fields_settings_theme" AS ENUM('light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__stmt_v_fields_links_link_type" AS ENUM('reference', 'custom');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__stmt_v_fields_asset_type" AS ENUM('media', 'code');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__stmt_v_fields_media_width" AS ENUM('small', 'medium', 'large', 'full');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__stmt_v_fields_background_glow" AS ENUM('none', 'colorful', 'white');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__stps_v_steps_fields_settings_theme" AS ENUM('light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__stkH_v_fields_settings_theme" AS ENUM('light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__stkH_v_fields_hl_link_type" AS ENUM('reference', 'custom');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__stkH_v_fields_hl_type" AS ENUM('code', 'media');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__stkH_v_fields_hl_blips_link_type" AS ENUM('reference', 'custom');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__case_studies_v_version_status" AS ENUM('draft', 'published');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_community_help_community_help_type" AS ENUM('discord', 'github');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_pages_hero_type" AS ENUM('default', 'contentMedia', 'centeredContent', 'form', 'home', 'livestream', 'gradient', 'three');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_pages_hero_theme" AS ENUM('light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_pages_hero_breadcrumbs_bar_links_link_type" AS ENUM('reference', 'custom');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_pages_hero_announcement_link_type" AS ENUM('reference', 'custom');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_pages_hero_primary_buttons_link_type" AS ENUM('reference', 'custom');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_pages_hero_links_link_type" AS ENUM('reference', 'custom');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_pages_hero_links_link_appearance" AS ENUM('default', 'primary', 'secondary');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_pages_hero_three_c_t_a" AS ENUM('newsletter', 'buttons');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_pages_blocks_link_link_type" AS ENUM('reference', 'custom');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_pages_blocks_link_link_appearance" AS ENUM('default', 'primary', 'secondary');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_pages_hero_secondary_buttons_link_type" AS ENUM('reference', 'custom');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_pages_status" AS ENUM('draft', 'published');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__pages_v_version_hero_type" AS ENUM('default', 'contentMedia', 'centeredContent', 'form', 'home', 'livestream', 'gradient', 'three');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__pages_v_version_hero_theme" AS ENUM('light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__pages_v_version_hero_breadcrumbs_bar_links_link_type" AS ENUM('reference', 'custom');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__pages_v_version_hero_announcement_link_type" AS ENUM('reference', 'custom');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__pages_v_version_hero_primary_buttons_link_type" AS ENUM('reference', 'custom');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__pages_v_version_hero_links_link_type" AS ENUM('reference', 'custom');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__pages_v_version_hero_links_link_appearance" AS ENUM('default', 'primary', 'secondary');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__pages_v_version_hero_three_c_t_a" AS ENUM('newsletter', 'buttons');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__pages_v_blocks_link_link_type" AS ENUM('reference', 'custom');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__pages_v_blocks_link_link_appearance" AS ENUM('default', 'primary', 'secondary');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__pages_v_version_hero_secondary_buttons_link_type" AS ENUM('reference', 'custom');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__pages_v_version_status" AS ENUM('draft', 'published');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_banner_fields_settings_theme" AS ENUM('light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_banner_fields_type" AS ENUM('default', 'success', 'warning', 'error');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_bc10_fields_settings_theme" AS ENUM('light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_code_code_fields_settings_theme" AS ENUM('light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_code_code_fields_language" AS ENUM('none', 'js', 'ts');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_code_code_fields_blips_link_type" AS ENUM('reference', 'custom');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_bm_fields_settings_theme" AS ENUM('light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_posts_status" AS ENUM('draft', 'published');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__banner_v_fields_settings_theme" AS ENUM('light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__banner_v_fields_type" AS ENUM('default', 'success', 'warning', 'error');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__bc10_v_fields_settings_theme" AS ENUM('light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__code_v_code_fields_settings_theme" AS ENUM('light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__code_v_code_fields_language" AS ENUM('none', 'js', 'ts');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__code_v_code_fields_blips_link_type" AS ENUM('reference', 'custom');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__bm_v_fields_settings_theme" AS ENUM('light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__posts_v_version_status" AS ENUM('draft', 'published');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_users_roles" AS ENUM('admin', 'public');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_partners_agency_status" AS ENUM('active', 'inactive');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_partners_content_contributions_type" AS ENUM('discussion', 'pr', 'issue');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_partners_social_platform" AS ENUM('linkedin', 'twitter', 'facebook', 'instagram', 'youtube', 'github');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_partners_status" AS ENUM('draft', 'published');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__partners_v_version_agency_status" AS ENUM('active', 'inactive');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__partners_v_version_content_contributions_type" AS ENUM('discussion', 'pr', 'issue');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__partners_v_version_social_platform" AS ENUM('linkedin', 'twitter', 'facebook', 'instagram', 'youtube', 'github');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__partners_v_version_status" AS ENUM('draft', 'published');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_forms_confirmation_type" AS ENUM('message', 'redirect');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_redirects_to_type" AS ENUM('reference', 'custom');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_footer_columns_nav_items_link_type" AS ENUM('reference', 'custom');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_main_menu_tabs_link_type" AS ENUM('reference', 'custom');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_main_menu_tabs_description_links_link_type" AS ENUM('reference', 'custom');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_main_menu_tabs_nav_items_style" AS ENUM('default', 'featured', 'list');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_main_menu_tabs_nav_items_default_link_link_type" AS ENUM('reference', 'custom');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_main_menu_tabs_nav_items_featured_link_links_link_type" AS ENUM('reference', 'custom');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_main_menu_tabs_nav_items_list_links_links_link_type" AS ENUM('reference', 'custom');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_partner_program_hero_breadcrumb_bar_links_link_type" AS ENUM('reference', 'custom');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_partner_program_hero_hero_links_link_type" AS ENUM('reference', 'custom');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE TABLE IF NOT EXISTS "callout_fields_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "callout" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"fields_settings_theme" "enum_callout_fields_settings_theme",
  	"fields_rich_text" jsonb,
  	"fields_logo_id" integer,
  	"fields_author" varchar,
  	"fields_role" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "cta_cta_fields_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_cta_cta_fields_links_type" DEFAULT 'link',
  	"npm_cta_label" varchar,
  	"link_type" "enum_cta_cta_fields_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"ctaFields_settings_theme" "enum_cta_cta_fields_settings_theme",
  	"cta_fields_rich_text" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "cg_fields_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_cg_fields_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "cg_fields_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"enable_link" boolean,
  	"link_type" "enum_cg_fields_cards_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "cg" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"fields_settings_theme" "enum_cg_fields_settings_theme",
  	"fields_rich_text" jsonb,
  	"fields_reveal_description" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "csC_fields_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"rich_text" jsonb,
  	"case_study_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "csC" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"fields_settings_theme" "enum_csC_fields_settings_theme",
  	"fields_pixels" boolean DEFAULT true,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "csH" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"fields_settings_theme" "enum_csH_fields_settings_theme",
  	"fields_rich_text" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "csP_fields_items_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "csP_fields_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"quote" varchar,
  	"author" varchar,
  	"logo_id" integer,
  	"tab_label" varchar,
  	"case_study_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "csP" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"fields_settings_theme" "enum_csP_fields_settings_theme",
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "cdFt_fields_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_cdFt_fields_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "cdFt_fields_ct_blips" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"row" numeric,
  	"label" varchar,
  	"feature" jsonb,
  	"enable_link" boolean,
  	"link_type" "enum_cdFt_fields_ct_blips_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "cdFt_fields_ct" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"language" "enum_cdFt_fields_ct_language" DEFAULT 'none',
  	"label" varchar,
  	"code" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "cdFt" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"fields_settings_theme" "enum_cdFt_fields_settings_theme",
  	"fields_force_dark_background" boolean,
  	"fields_alignment" "enum_cdFt_fields_alignment" DEFAULT 'contentCode',
  	"fields_heading" varchar,
  	"fields_rich_text" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "cnt" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"fields_settings_theme" "enum_cnt_fields_settings_theme",
  	"fields_use_leading_header" boolean,
  	"fields_leading_header" jsonb,
  	"fields_layout" "enum_cnt_fields_layout" DEFAULT 'oneColumn',
  	"fields_column_one" jsonb,
  	"fields_column_two" jsonb,
  	"fields_column_three" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "cGr_fields_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_cGr_fields_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "cGr_fields_cells" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content" jsonb
  );
  
  CREATE TABLE IF NOT EXISTS "cGr" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"fields_settings_theme" "enum_cGr_fields_settings_theme",
  	"fields_style" "enum_cGr_fields_style" DEFAULT 'gridBelow',
  	"fields_show_numbers" boolean,
  	"fields_content" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "form" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"formFields_settings_theme" "enum_form_form_fields_settings_theme",
  	"form_fields_rich_text" jsonb,
  	"form_fields_form_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "hc_fields_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"link_type" "enum_hc_fields_cards_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "hc" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"fields_settings_theme" "enum_hc_fields_settings_theme",
  	"fields_rich_text" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "hHL_fields_hl" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"media_top_id" integer,
  	"media_bottom_id" integer,
  	"link_type" "enum_hHL_fields_hl_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "hHL" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"fields_settings_theme" "enum_hHL_fields_settings_theme",
  	"fields_before_highlights" varchar,
  	"fields_after_highlights" varchar,
  	"fields_link_type" "enum_hHL_fields_link_type" DEFAULT 'reference',
  	"fields_link_new_tab" boolean,
  	"fields_link_url" varchar,
  	"fields_link_label" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "lG_fields_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_lG_fields_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "lG" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"fields_settings_theme" "enum_lG_fields_settings_theme",
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "lgG_fields_logos" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"logo_media_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "lgG" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"fields_settings_theme" "enum_lgG_fields_settings_theme",
  	"fields_rich_text" jsonb,
  	"fields_enable_link" boolean,
  	"fields_link_type" "enum_lgG_fields_link_type" DEFAULT 'reference',
  	"fields_link_new_tab" boolean,
  	"fields_link_url" varchar,
  	"fields_link_label" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "mB" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"fields_settings_theme" "enum_mB_fields_settings_theme",
  	"fields_position" "enum_mB_fields_position" DEFAULT 'default',
  	"fields_media_id" integer,
  	"fields_caption" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "mC_fields_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "mC" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"fields_settings_theme" "enum_mC_fields_settings_theme",
  	"fields_alignment" "enum_mC_fields_alignment" DEFAULT 'contentMedia',
  	"fields_rich_text" jsonb,
  	"fields_enable_link" boolean,
  	"fields_link_type" "enum_mC_fields_link_type" DEFAULT 'reference',
  	"fields_link_new_tab" boolean,
  	"fields_link_url" varchar,
  	"fields_link_label" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "mAcc_fields_acc" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"pos" "enum_mAcc_fields_acc_pos" DEFAULT 'normal',
  	"bg" "enum_mAcc_fields_acc_bg" DEFAULT 'none',
  	"media_label" varchar,
  	"media_description" jsonb,
  	"enable_link" boolean,
  	"link_type" "enum_mAcc_fields_acc_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"media_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "mAcc" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"fields_settings_theme" "enum_mAcc_fields_settings_theme",
  	"fields_alignment" "enum_mAcc_fields_alignment" DEFAULT 'contentMedia',
  	"fields_leader" varchar,
  	"fields_heading" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "prc_fields_plans_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "enum_prc_fields_plans_features_icon",
  	"feature" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "prc_fields_plans" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"has_price" boolean,
  	"enable_create_payload" boolean,
  	"price" varchar,
  	"title" varchar,
  	"description" varchar,
  	"enable_link" boolean,
  	"link_type" "enum_prc_fields_plans_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "prc" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"fields_settings_theme" "enum_prc_fields_settings_theme",
  	"fields_disclaimer" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "rcB" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"fields_settings_theme" "enum_rcB_fields_settings_theme",
  	"fields_reusable_content_id" integer,
  	"fields_custom_id" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "sld_fields_quote_slides" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"leader" varchar,
  	"quote" varchar,
  	"author" varchar,
  	"role" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "sld" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"fields_settings_theme" "enum_sld_fields_settings_theme",
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "stmt_fields_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_stmt_fields_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "stmt" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"fields_settings_theme" "enum_stmt_fields_settings_theme",
  	"fields_rich_text" jsonb,
  	"fields_assetType" "enum_stmt_fields_asset_type" DEFAULT 'media',
  	"fields_media_id" integer,
  	"fields_code" varchar,
  	"fields_mediaWidth" "enum_stmt_fields_media_width" DEFAULT 'medium',
  	"fields_backgroundGlow" "enum_stmt_fields_background_glow" DEFAULT 'none',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "stkH_fields_hl_blips" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"row" numeric,
  	"label" varchar,
  	"feature" jsonb,
  	"enable_link" boolean,
  	"link_type" "enum_stkH_fields_hl_blips_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "stkH_fields_hl" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"rich_text" jsonb,
  	"enable_link" boolean,
  	"link_type" "enum_stkH_fields_hl_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"type" "enum_stkH_fields_hl_type",
  	"code" varchar,
  	"media_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "stkH" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"fields_settings_theme" "enum_stkH_fields_settings_theme",
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "stps_steps_fields_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "stps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"stepsFields_settings_theme" "enum_stps_steps_fields_settings_theme",
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "cdEx" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"code" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "mEx" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"media_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "exTabs_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"content" jsonb
  );
  
  CREATE TABLE IF NOT EXISTS "exTabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "case_studies" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"intro_content" jsonb,
  	"industry" varchar,
  	"use_case" varchar,
  	"featured_image_id" integer,
  	"slug" varchar,
  	"url" varchar,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"meta_image_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_case_studies_status" DEFAULT 'draft'
  );
  
  CREATE TABLE IF NOT EXISTS "case_studies_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer,
  	"case_studies_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "_callout_v_fields_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_callout_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"fields_settings_theme" "enum__callout_v_fields_settings_theme",
  	"fields_rich_text" jsonb,
  	"fields_logo_id" integer,
  	"fields_author" varchar,
  	"fields_role" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_cta_v_cta_fields_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__cta_v_cta_fields_links_type" DEFAULT 'link',
  	"npm_cta_label" varchar,
  	"link_type" "enum__cta_v_cta_fields_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_cta_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"ctaFields_settings_theme" "enum__cta_v_cta_fields_settings_theme",
  	"cta_fields_rich_text" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_cg_v_fields_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__cg_v_fields_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_cg_v_fields_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"enable_link" boolean,
  	"link_type" "enum__cg_v_fields_cards_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_cg_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"fields_settings_theme" "enum__cg_v_fields_settings_theme",
  	"fields_rich_text" jsonb,
  	"fields_reveal_description" boolean,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_csC_v_fields_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"rich_text" jsonb,
  	"case_study_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_csC_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"fields_settings_theme" "enum__csC_v_fields_settings_theme",
  	"fields_pixels" boolean DEFAULT true,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_csH_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"fields_settings_theme" "enum__csH_v_fields_settings_theme",
  	"fields_rich_text" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_csP_v_fields_items_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_csP_v_fields_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"quote" varchar,
  	"author" varchar,
  	"logo_id" integer,
  	"tab_label" varchar,
  	"case_study_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_csP_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"fields_settings_theme" "enum__csP_v_fields_settings_theme",
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_cdFt_v_fields_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__cdFt_v_fields_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_cdFt_v_fields_ct_blips" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"row" numeric,
  	"label" varchar,
  	"feature" jsonb,
  	"enable_link" boolean,
  	"link_type" "enum__cdFt_v_fields_ct_blips_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_cdFt_v_fields_ct" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"language" "enum__cdFt_v_fields_ct_language" DEFAULT 'none',
  	"label" varchar,
  	"code" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_cdFt_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"fields_settings_theme" "enum__cdFt_v_fields_settings_theme",
  	"fields_force_dark_background" boolean,
  	"fields_alignment" "enum__cdFt_v_fields_alignment" DEFAULT 'contentCode',
  	"fields_heading" varchar,
  	"fields_rich_text" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_cnt_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"fields_settings_theme" "enum__cnt_v_fields_settings_theme",
  	"fields_use_leading_header" boolean,
  	"fields_leading_header" jsonb,
  	"fields_layout" "enum__cnt_v_fields_layout" DEFAULT 'oneColumn',
  	"fields_column_one" jsonb,
  	"fields_column_two" jsonb,
  	"fields_column_three" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_cGr_v_fields_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__cGr_v_fields_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_cGr_v_fields_cells" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_cGr_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"fields_settings_theme" "enum__cGr_v_fields_settings_theme",
  	"fields_style" "enum__cGr_v_fields_style" DEFAULT 'gridBelow',
  	"fields_show_numbers" boolean,
  	"fields_content" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_form_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"formFields_settings_theme" "enum__form_v_form_fields_settings_theme",
  	"form_fields_rich_text" jsonb,
  	"form_fields_form_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_hc_v_fields_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"link_type" "enum__hc_v_fields_cards_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_hc_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"fields_settings_theme" "enum__hc_v_fields_settings_theme",
  	"fields_rich_text" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_hHL_v_fields_hl" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"media_top_id" integer,
  	"media_bottom_id" integer,
  	"link_type" "enum__hHL_v_fields_hl_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_hHL_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"fields_settings_theme" "enum__hHL_v_fields_settings_theme",
  	"fields_before_highlights" varchar,
  	"fields_after_highlights" varchar,
  	"fields_link_type" "enum__hHL_v_fields_link_type" DEFAULT 'reference',
  	"fields_link_new_tab" boolean,
  	"fields_link_url" varchar,
  	"fields_link_label" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_lG_v_fields_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__lG_v_fields_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_lG_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"fields_settings_theme" "enum__lG_v_fields_settings_theme",
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_lgG_v_fields_logos" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"logo_media_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_lgG_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"fields_settings_theme" "enum__lgG_v_fields_settings_theme",
  	"fields_rich_text" jsonb,
  	"fields_enable_link" boolean,
  	"fields_link_type" "enum__lgG_v_fields_link_type" DEFAULT 'reference',
  	"fields_link_new_tab" boolean,
  	"fields_link_url" varchar,
  	"fields_link_label" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_mB_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"fields_settings_theme" "enum__mB_v_fields_settings_theme",
  	"fields_position" "enum__mB_v_fields_position" DEFAULT 'default',
  	"fields_media_id" integer,
  	"fields_caption" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_mC_v_fields_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_mC_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"fields_settings_theme" "enum__mC_v_fields_settings_theme",
  	"fields_alignment" "enum__mC_v_fields_alignment" DEFAULT 'contentMedia',
  	"fields_rich_text" jsonb,
  	"fields_enable_link" boolean,
  	"fields_link_type" "enum__mC_v_fields_link_type" DEFAULT 'reference',
  	"fields_link_new_tab" boolean,
  	"fields_link_url" varchar,
  	"fields_link_label" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_mAcc_v_fields_acc" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"pos" "enum__mAcc_v_fields_acc_pos" DEFAULT 'normal',
  	"bg" "enum__mAcc_v_fields_acc_bg" DEFAULT 'none',
  	"media_label" varchar,
  	"media_description" jsonb,
  	"enable_link" boolean,
  	"link_type" "enum__mAcc_v_fields_acc_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"media_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_mAcc_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"fields_settings_theme" "enum__mAcc_v_fields_settings_theme",
  	"fields_alignment" "enum__mAcc_v_fields_alignment" DEFAULT 'contentMedia',
  	"fields_leader" varchar,
  	"fields_heading" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_prc_v_fields_plans_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon" "enum__prc_v_fields_plans_features_icon",
  	"feature" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_prc_v_fields_plans" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"has_price" boolean,
  	"enable_create_payload" boolean,
  	"price" varchar,
  	"title" varchar,
  	"description" varchar,
  	"enable_link" boolean,
  	"link_type" "enum__prc_v_fields_plans_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_prc_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"fields_settings_theme" "enum__prc_v_fields_settings_theme",
  	"fields_disclaimer" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_rcB_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"fields_settings_theme" "enum__rcB_v_fields_settings_theme",
  	"fields_reusable_content_id" integer,
  	"fields_custom_id" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_sld_v_fields_quote_slides" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"leader" varchar,
  	"quote" varchar,
  	"author" varchar,
  	"role" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_sld_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"fields_settings_theme" "enum__sld_v_fields_settings_theme",
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_stmt_v_fields_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__stmt_v_fields_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_stmt_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"fields_settings_theme" "enum__stmt_v_fields_settings_theme",
  	"fields_rich_text" jsonb,
  	"fields_assetType" "enum__stmt_v_fields_asset_type" DEFAULT 'media',
  	"fields_media_id" integer,
  	"fields_code" varchar,
  	"fields_mediaWidth" "enum__stmt_v_fields_media_width" DEFAULT 'medium',
  	"fields_backgroundGlow" "enum__stmt_v_fields_background_glow" DEFAULT 'none',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_stkH_v_fields_hl_blips" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"row" numeric,
  	"label" varchar,
  	"feature" jsonb,
  	"enable_link" boolean,
  	"link_type" "enum__stkH_v_fields_hl_blips_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_stkH_v_fields_hl" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"rich_text" jsonb,
  	"enable_link" boolean,
  	"link_type" "enum__stkH_v_fields_hl_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"type" "enum__stkH_v_fields_hl_type",
  	"code" varchar,
  	"media_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_stkH_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"fields_settings_theme" "enum__stkH_v_fields_settings_theme",
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_stps_v_steps_fields_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_stps_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"stepsFields_settings_theme" "enum__stps_v_steps_fields_settings_theme",
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_cdEx_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"code" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_mEx_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"media_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_exTabs_v_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"content" jsonb,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_exTabs_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_case_studies_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_intro_content" jsonb,
  	"version_industry" varchar,
  	"version_use_case" varchar,
  	"version_featured_image_id" integer,
  	"version_slug" varchar,
  	"version_url" varchar,
  	"version_meta_title" varchar,
  	"version_meta_description" varchar,
  	"version_meta_image_id" integer,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__case_studies_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean
  );
  
  CREATE TABLE IF NOT EXISTS "_case_studies_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer,
  	"case_studies_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "community_help" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"communityHelpType" "enum_community_help_community_help_type",
  	"github_i_d" varchar,
  	"discord_i_d" varchar,
  	"community_help_j_s_o_n" jsonb NOT NULL,
  	"intro_description" varchar,
  	"slug" varchar,
  	"helpful" boolean,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "community_help_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"docs_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "docs" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar,
  	"keywords" varchar,
  	"headings" jsonb,
  	"content" varchar,
  	"path" varchar,
  	"topic" varchar,
  	"slug" varchar,
  	"label" varchar,
  	"order" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "media" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alt" varchar NOT NULL,
  	"dark_mode_fallback_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric
  );
  
  CREATE TABLE IF NOT EXISTS "pages_hero_breadcrumbs_bar_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_hero_breadcrumbs_bar_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_hero_livestream_guests" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"link" varchar,
  	"image_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "pages_hero_primary_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_hero_primary_buttons_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_hero_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_hero_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_pages_hero_links_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_link" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_link_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_pages_blocks_link_link_appearance" DEFAULT 'default',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_command" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"command" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_hero_secondary_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_hero_secondary_buttons_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_hero_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "pages_hero_logos" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"logo_media_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "pages_breadcrumbs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"doc_id" integer,
  	"url" varchar,
  	"label" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"full_title" varchar,
  	"hero_type" "enum_pages_hero_type" DEFAULT 'default',
  	"hero_full_background" boolean,
  	"hero_theme" "enum_pages_hero_theme",
  	"hero_enable_breadcrumbs_bar" boolean,
  	"hero_livestream_date" timestamp(3) with time zone,
  	"hero_livestream_hide_breadcrumbs" boolean,
  	"hero_livestream_rich_text" jsonb,
  	"hero_enable_announcement" boolean,
  	"hero_announcementLink_type" "enum_pages_hero_announcement_link_type" DEFAULT 'reference',
  	"hero_announcement_link_new_tab" boolean,
  	"hero_announcement_link_url" varchar,
  	"hero_announcement_link_label" varchar,
  	"hero_rich_text" jsonb,
  	"hero_description" jsonb,
  	"hero_secondary_heading" jsonb,
  	"hero_secondary_description" jsonb,
  	"hero_threeCTA" "enum_pages_hero_three_c_t_a",
  	"hero_newsletter_placeholder" varchar,
  	"hero_newsletter_description" varchar,
  	"hero_media_id" integer,
  	"hero_secondary_media_id" integer,
  	"hero_feature_video_id" integer,
  	"hero_form_id" integer,
  	"slug" varchar,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"meta_image_id" integer,
  	"parent_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_pages_status" DEFAULT 'draft'
  );
  
  CREATE TABLE IF NOT EXISTS "pages_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer,
  	"case_studies_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_version_hero_breadcrumbs_bar_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_version_hero_breadcrumbs_bar_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_version_hero_livestream_guests" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"link" varchar,
  	"image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_version_hero_primary_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_version_hero_primary_buttons_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_version_hero_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_version_hero_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__pages_v_version_hero_links_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_link" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_blocks_link_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__pages_v_blocks_link_link_appearance" DEFAULT 'default',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_command" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"command" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_version_hero_secondary_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_version_hero_secondary_buttons_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_version_hero_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_version_hero_logos" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"logo_media_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_version_breadcrumbs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"doc_id" integer,
  	"url" varchar,
  	"label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_full_title" varchar,
  	"version_hero_type" "enum__pages_v_version_hero_type" DEFAULT 'default',
  	"version_hero_full_background" boolean,
  	"version_hero_theme" "enum__pages_v_version_hero_theme",
  	"version_hero_enable_breadcrumbs_bar" boolean,
  	"version_hero_livestream_date" timestamp(3) with time zone,
  	"version_hero_livestream_hide_breadcrumbs" boolean,
  	"version_hero_livestream_rich_text" jsonb,
  	"version_hero_enable_announcement" boolean,
  	"version_hero_announcementLink_type" "enum__pages_v_version_hero_announcement_link_type" DEFAULT 'reference',
  	"version_hero_announcement_link_new_tab" boolean,
  	"version_hero_announcement_link_url" varchar,
  	"version_hero_announcement_link_label" varchar,
  	"version_hero_rich_text" jsonb,
  	"version_hero_description" jsonb,
  	"version_hero_secondary_heading" jsonb,
  	"version_hero_secondary_description" jsonb,
  	"version_hero_threeCTA" "enum__pages_v_version_hero_three_c_t_a",
  	"version_hero_newsletter_placeholder" varchar,
  	"version_hero_newsletter_description" varchar,
  	"version_hero_media_id" integer,
  	"version_hero_secondary_media_id" integer,
  	"version_hero_feature_video_id" integer,
  	"version_hero_form_id" integer,
  	"version_slug" varchar,
  	"version_meta_title" varchar,
  	"version_meta_description" varchar,
  	"version_meta_image_id" integer,
  	"version_parent_id" integer,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__pages_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer,
  	"case_studies_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "industries" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"value" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "specialties" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"value" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "regions" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"value" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "budgets" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"value" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "banner" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"fields_settings_theme" "enum_banner_fields_settings_theme",
  	"fields_type" "enum_banner_fields_type" DEFAULT 'default',
  	"fields_add_checkmark" boolean,
  	"fields_content" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "bc10" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"fields_settings_theme" "enum_bc10_fields_settings_theme",
  	"fields_rich_text" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "code_code_fields_blips" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"row" numeric,
  	"label" varchar,
  	"feature" jsonb,
  	"enable_link" boolean,
  	"link_type" "enum_code_code_fields_blips_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "code" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"codeFields_settings_theme" "enum_code_code_fields_settings_theme",
  	"codeFields_language" "enum_code_code_fields_language" DEFAULT 'none',
  	"code_fields_code" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "bm" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"fields_settings_theme" "enum_bm_fields_settings_theme",
  	"fields_markdown" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "posts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"image_id" integer,
  	"excerpt" jsonb,
  	"lexical_content" jsonb,
  	"slug" varchar,
  	"published_on" timestamp(3) with time zone,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"meta_image_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_posts_status" DEFAULT 'draft'
  );
  
  CREATE TABLE IF NOT EXISTS "posts_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer,
  	"case_studies_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "_banner_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"fields_settings_theme" "enum__banner_v_fields_settings_theme",
  	"fields_type" "enum__banner_v_fields_type" DEFAULT 'default',
  	"fields_add_checkmark" boolean,
  	"fields_content" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_bc10_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"fields_settings_theme" "enum__bc10_v_fields_settings_theme",
  	"fields_rich_text" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_code_v_code_fields_blips" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"row" numeric,
  	"label" varchar,
  	"feature" jsonb,
  	"enable_link" boolean,
  	"link_type" "enum__code_v_code_fields_blips_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_code_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"codeFields_settings_theme" "enum__code_v_code_fields_settings_theme",
  	"codeFields_language" "enum__code_v_code_fields_language" DEFAULT 'none',
  	"code_fields_code" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_bm_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"fields_settings_theme" "enum__bm_v_fields_settings_theme",
  	"fields_markdown" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_posts_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_image_id" integer,
  	"version_excerpt" jsonb,
  	"version_lexical_content" jsonb,
  	"version_slug" varchar,
  	"version_published_on" timestamp(3) with time zone,
  	"version_meta_title" varchar,
  	"version_meta_description" varchar,
  	"version_meta_image_id" integer,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__posts_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean
  );
  
  CREATE TABLE IF NOT EXISTS "_posts_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer,
  	"case_studies_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "reusable_content" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "users_roles" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum_users_roles",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"first_name" varchar NOT NULL,
  	"last_name" varchar NOT NULL,
  	"twitter" varchar,
  	"photo_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "partners_content_contributions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_partners_content_contributions_type",
  	"repo" varchar DEFAULT 'payload',
  	"number" numeric
  );
  
  CREATE TABLE IF NOT EXISTS "partners_content_projects" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"year" numeric,
  	"name" varchar,
  	"link" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "partners_social" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"platform" "enum_partners_social_platform",
  	"url" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "partners" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"website" varchar,
  	"email" varchar,
  	"slug" varchar,
  	"agency_status" "enum_partners_agency_status" DEFAULT 'active',
  	"hubspot_i_d" varchar,
  	"logo_id" integer,
  	"featured" boolean,
  	"top_contributor" boolean,
  	"content_banner_image_id" integer,
  	"content_overview" jsonb,
  	"content_services" jsonb,
  	"content_ideal_project" jsonb,
  	"content_case_study_id" integer,
  	"city" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_partners_status" DEFAULT 'draft'
  );
  
  CREATE TABLE IF NOT EXISTS "partners_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"regions_id" integer,
  	"specialties_id" integer,
  	"budgets_id" integer,
  	"industries_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "_partners_v_version_content_contributions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__partners_v_version_content_contributions_type",
  	"repo" varchar DEFAULT 'payload',
  	"number" numeric,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_partners_v_version_content_projects" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"year" numeric,
  	"name" varchar,
  	"link" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_partners_v_version_social" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"platform" "enum__partners_v_version_social_platform",
  	"url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_partners_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_name" varchar,
  	"version_website" varchar,
  	"version_email" varchar,
  	"version_slug" varchar,
  	"version_agency_status" "enum__partners_v_version_agency_status" DEFAULT 'active',
  	"version_hubspot_i_d" varchar,
  	"version_logo_id" integer,
  	"version_featured" boolean,
  	"version_top_contributor" boolean,
  	"version_content_banner_image_id" integer,
  	"version_content_overview" jsonb,
  	"version_content_services" jsonb,
  	"version_content_ideal_project" jsonb,
  	"version_content_case_study_id" integer,
  	"version_city" varchar,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__partners_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean
  );
  
  CREATE TABLE IF NOT EXISTS "_partners_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"regions_id" integer,
  	"specialties_id" integer,
  	"budgets_id" integer,
  	"industries_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_checkbox" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"required" boolean,
  	"default_value" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_country" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_email" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_message" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"message" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_number" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"default_value" numeric,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_select_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"value" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_select" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"default_value" varchar,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_state" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"default_value" varchar,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_textarea" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"default_value" varchar,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "forms_emails" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"email_to" varchar,
  	"cc" varchar,
  	"bcc" varchar,
  	"reply_to" varchar,
  	"email_from" varchar,
  	"subject" varchar DEFAULT 'You''ve received a new message.' NOT NULL,
  	"message" jsonb
  );
  
  CREATE TABLE IF NOT EXISTS "forms" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"submit_button_label" varchar,
  	"confirmationType" "enum_forms_confirmation_type" DEFAULT 'message',
  	"confirmation_message" jsonb,
  	"redirect_url" varchar,
  	"hub_spot_form_i_d" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "form_submissions_submission_data" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"field" varchar NOT NULL,
  	"value" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "form_submissions" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"form_id" integer NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "redirects" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"from" varchar NOT NULL,
  	"to_type" "enum_redirects_to_type" DEFAULT 'reference',
  	"to_url" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "redirects_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"case_studies_id" integer,
  	"pages_id" integer,
  	"posts_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"case_studies_id" integer,
  	"community_help_id" integer,
  	"docs_id" integer,
  	"media_id" integer,
  	"pages_id" integer,
  	"industries_id" integer,
  	"specialties_id" integer,
  	"regions_id" integer,
  	"budgets_id" integer,
  	"posts_id" integer,
  	"reusable_content_id" integer,
  	"users_id" integer,
  	"partners_id" integer,
  	"forms_id" integer,
  	"form_submissions_id" integer,
  	"redirects_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "footer_columns_nav_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_footer_columns_nav_items_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "footer_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "footer" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "footer_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer,
  	"case_studies_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "main_menu_tabs_description_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_main_menu_tabs_description_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "main_menu_tabs_nav_items_featured_link_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_main_menu_tabs_nav_items_featured_link_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "main_menu_tabs_nav_items_list_links_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_main_menu_tabs_nav_items_list_links_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "main_menu_tabs_nav_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"style" "enum_main_menu_tabs_nav_items_style" DEFAULT 'default',
  	"defaultLink_link_type" "enum_main_menu_tabs_nav_items_default_link_link_type" DEFAULT 'reference',
  	"default_link_link_new_tab" boolean,
  	"default_link_link_url" varchar,
  	"default_link_link_label" varchar,
  	"default_link_description" varchar,
  	"featured_link_tag" varchar,
  	"featured_link_label" jsonb,
  	"list_links_tag" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "main_menu_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"enable_direct_link" boolean,
  	"enable_dropdown" boolean,
  	"link_type" "enum_main_menu_tabs_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"description" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "main_menu" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "main_menu_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer,
  	"case_studies_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "partner_program_hero_breadcrumb_bar_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_partner_program_hero_breadcrumb_bar_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "partner_program_hero_hero_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_partner_program_hero_hero_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "partner_program" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"contact_form_id" integer NOT NULL,
  	"hero_rich_text" jsonb,
  	"featured_partners_description" varchar,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "partner_program_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer,
  	"case_studies_id" integer,
  	"partners_id" integer
  );
  
  DO $$ BEGIN
   ALTER TABLE "callout_fields_images" ADD CONSTRAINT "callout_fields_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "callout_fields_images" ADD CONSTRAINT "callout_fields_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."callout"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "callout" ADD CONSTRAINT "callout_fields_logo_id_media_id_fk" FOREIGN KEY ("fields_logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "callout" ADD CONSTRAINT "callout_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "cta_cta_fields_links" ADD CONSTRAINT "cta_cta_fields_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."cta"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "cta" ADD CONSTRAINT "cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "cg_fields_links" ADD CONSTRAINT "cg_fields_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."cg"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "cg_fields_cards" ADD CONSTRAINT "cg_fields_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."cg"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "cg" ADD CONSTRAINT "cg_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "csC_fields_cards" ADD CONSTRAINT "csC_fields_cards_case_study_id_case_studies_id_fk" FOREIGN KEY ("case_study_id") REFERENCES "public"."case_studies"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "csC_fields_cards" ADD CONSTRAINT "csC_fields_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."csC"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "csC" ADD CONSTRAINT "csC_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "csH" ADD CONSTRAINT "csH_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "csP_fields_items_images" ADD CONSTRAINT "csP_fields_items_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "csP_fields_items_images" ADD CONSTRAINT "csP_fields_items_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."csP_fields_items"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "csP_fields_items" ADD CONSTRAINT "csP_fields_items_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "csP_fields_items" ADD CONSTRAINT "csP_fields_items_case_study_id_case_studies_id_fk" FOREIGN KEY ("case_study_id") REFERENCES "public"."case_studies"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "csP_fields_items" ADD CONSTRAINT "csP_fields_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."csP"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "csP" ADD CONSTRAINT "csP_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "cdFt_fields_links" ADD CONSTRAINT "cdFt_fields_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."cdFt"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "cdFt_fields_ct_blips" ADD CONSTRAINT "cdFt_fields_ct_blips_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."cdFt_fields_ct"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "cdFt_fields_ct" ADD CONSTRAINT "cdFt_fields_ct_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."cdFt"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "cdFt" ADD CONSTRAINT "cdFt_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "cnt" ADD CONSTRAINT "cnt_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "cGr_fields_links" ADD CONSTRAINT "cGr_fields_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."cGr"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "cGr_fields_cells" ADD CONSTRAINT "cGr_fields_cells_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."cGr"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "cGr" ADD CONSTRAINT "cGr_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "form" ADD CONSTRAINT "form_form_fields_form_id_forms_id_fk" FOREIGN KEY ("form_fields_form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "form" ADD CONSTRAINT "form_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "hc_fields_cards" ADD CONSTRAINT "hc_fields_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."hc"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "hc" ADD CONSTRAINT "hc_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "hHL_fields_hl" ADD CONSTRAINT "hHL_fields_hl_media_top_id_media_id_fk" FOREIGN KEY ("media_top_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "hHL_fields_hl" ADD CONSTRAINT "hHL_fields_hl_media_bottom_id_media_id_fk" FOREIGN KEY ("media_bottom_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "hHL_fields_hl" ADD CONSTRAINT "hHL_fields_hl_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."hHL"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "hHL" ADD CONSTRAINT "hHL_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "lG_fields_links" ADD CONSTRAINT "lG_fields_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."lG"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "lG" ADD CONSTRAINT "lG_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "lgG_fields_logos" ADD CONSTRAINT "lgG_fields_logos_logo_media_id_media_id_fk" FOREIGN KEY ("logo_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "lgG_fields_logos" ADD CONSTRAINT "lgG_fields_logos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."lgG"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "lgG" ADD CONSTRAINT "lgG_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "mB" ADD CONSTRAINT "mB_fields_media_id_media_id_fk" FOREIGN KEY ("fields_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "mB" ADD CONSTRAINT "mB_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "mC_fields_images" ADD CONSTRAINT "mC_fields_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "mC_fields_images" ADD CONSTRAINT "mC_fields_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."mC"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "mC" ADD CONSTRAINT "mC_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "mAcc_fields_acc" ADD CONSTRAINT "mAcc_fields_acc_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "mAcc_fields_acc" ADD CONSTRAINT "mAcc_fields_acc_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."mAcc"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "mAcc" ADD CONSTRAINT "mAcc_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "prc_fields_plans_features" ADD CONSTRAINT "prc_fields_plans_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."prc_fields_plans"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "prc_fields_plans" ADD CONSTRAINT "prc_fields_plans_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."prc"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "prc" ADD CONSTRAINT "prc_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "rcB" ADD CONSTRAINT "rcB_fields_reusable_content_id_reusable_content_id_fk" FOREIGN KEY ("fields_reusable_content_id") REFERENCES "public"."reusable_content"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "rcB" ADD CONSTRAINT "rcB_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "sld_fields_quote_slides" ADD CONSTRAINT "sld_fields_quote_slides_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."sld"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "sld" ADD CONSTRAINT "sld_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "stmt_fields_links" ADD CONSTRAINT "stmt_fields_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."stmt"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "stmt" ADD CONSTRAINT "stmt_fields_media_id_media_id_fk" FOREIGN KEY ("fields_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "stmt" ADD CONSTRAINT "stmt_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "stkH_fields_hl_blips" ADD CONSTRAINT "stkH_fields_hl_blips_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."stkH_fields_hl"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "stkH_fields_hl" ADD CONSTRAINT "stkH_fields_hl_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "stkH_fields_hl" ADD CONSTRAINT "stkH_fields_hl_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."stkH"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "stkH" ADD CONSTRAINT "stkH_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "stps_steps_fields_steps" ADD CONSTRAINT "stps_steps_fields_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."stps"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "stps" ADD CONSTRAINT "stps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "cdEx" ADD CONSTRAINT "cdEx_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "mEx" ADD CONSTRAINT "mEx_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "mEx" ADD CONSTRAINT "mEx_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "exTabs_tabs" ADD CONSTRAINT "exTabs_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."exTabs"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "exTabs" ADD CONSTRAINT "exTabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "case_studies" ADD CONSTRAINT "case_studies_featured_image_id_media_id_fk" FOREIGN KEY ("featured_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "case_studies" ADD CONSTRAINT "case_studies_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "case_studies_rels" ADD CONSTRAINT "case_studies_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "case_studies_rels" ADD CONSTRAINT "case_studies_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "case_studies_rels" ADD CONSTRAINT "case_studies_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "case_studies_rels" ADD CONSTRAINT "case_studies_rels_case_studies_fk" FOREIGN KEY ("case_studies_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_callout_v_fields_images" ADD CONSTRAINT "_callout_v_fields_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_callout_v_fields_images" ADD CONSTRAINT "_callout_v_fields_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_callout_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_callout_v" ADD CONSTRAINT "_callout_v_fields_logo_id_media_id_fk" FOREIGN KEY ("fields_logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_callout_v" ADD CONSTRAINT "_callout_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_cta_v_cta_fields_links" ADD CONSTRAINT "_cta_v_cta_fields_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_cta_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_cta_v" ADD CONSTRAINT "_cta_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_cg_v_fields_links" ADD CONSTRAINT "_cg_v_fields_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_cg_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_cg_v_fields_cards" ADD CONSTRAINT "_cg_v_fields_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_cg_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_cg_v" ADD CONSTRAINT "_cg_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_csC_v_fields_cards" ADD CONSTRAINT "_csC_v_fields_cards_case_study_id_case_studies_id_fk" FOREIGN KEY ("case_study_id") REFERENCES "public"."case_studies"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_csC_v_fields_cards" ADD CONSTRAINT "_csC_v_fields_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_csC_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_csC_v" ADD CONSTRAINT "_csC_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_csH_v" ADD CONSTRAINT "_csH_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_csP_v_fields_items_images" ADD CONSTRAINT "_csP_v_fields_items_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_csP_v_fields_items_images" ADD CONSTRAINT "_csP_v_fields_items_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_csP_v_fields_items"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_csP_v_fields_items" ADD CONSTRAINT "_csP_v_fields_items_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_csP_v_fields_items" ADD CONSTRAINT "_csP_v_fields_items_case_study_id_case_studies_id_fk" FOREIGN KEY ("case_study_id") REFERENCES "public"."case_studies"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_csP_v_fields_items" ADD CONSTRAINT "_csP_v_fields_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_csP_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_csP_v" ADD CONSTRAINT "_csP_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_cdFt_v_fields_links" ADD CONSTRAINT "_cdFt_v_fields_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_cdFt_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_cdFt_v_fields_ct_blips" ADD CONSTRAINT "_cdFt_v_fields_ct_blips_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_cdFt_v_fields_ct"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_cdFt_v_fields_ct" ADD CONSTRAINT "_cdFt_v_fields_ct_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_cdFt_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_cdFt_v" ADD CONSTRAINT "_cdFt_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_cnt_v" ADD CONSTRAINT "_cnt_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_cGr_v_fields_links" ADD CONSTRAINT "_cGr_v_fields_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_cGr_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_cGr_v_fields_cells" ADD CONSTRAINT "_cGr_v_fields_cells_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_cGr_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_cGr_v" ADD CONSTRAINT "_cGr_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_form_v" ADD CONSTRAINT "_form_v_form_fields_form_id_forms_id_fk" FOREIGN KEY ("form_fields_form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_form_v" ADD CONSTRAINT "_form_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_hc_v_fields_cards" ADD CONSTRAINT "_hc_v_fields_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_hc_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_hc_v" ADD CONSTRAINT "_hc_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_hHL_v_fields_hl" ADD CONSTRAINT "_hHL_v_fields_hl_media_top_id_media_id_fk" FOREIGN KEY ("media_top_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_hHL_v_fields_hl" ADD CONSTRAINT "_hHL_v_fields_hl_media_bottom_id_media_id_fk" FOREIGN KEY ("media_bottom_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_hHL_v_fields_hl" ADD CONSTRAINT "_hHL_v_fields_hl_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_hHL_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_hHL_v" ADD CONSTRAINT "_hHL_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_lG_v_fields_links" ADD CONSTRAINT "_lG_v_fields_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_lG_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_lG_v" ADD CONSTRAINT "_lG_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_lgG_v_fields_logos" ADD CONSTRAINT "_lgG_v_fields_logos_logo_media_id_media_id_fk" FOREIGN KEY ("logo_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_lgG_v_fields_logos" ADD CONSTRAINT "_lgG_v_fields_logos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_lgG_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_lgG_v" ADD CONSTRAINT "_lgG_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_mB_v" ADD CONSTRAINT "_mB_v_fields_media_id_media_id_fk" FOREIGN KEY ("fields_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_mB_v" ADD CONSTRAINT "_mB_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_mC_v_fields_images" ADD CONSTRAINT "_mC_v_fields_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_mC_v_fields_images" ADD CONSTRAINT "_mC_v_fields_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_mC_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_mC_v" ADD CONSTRAINT "_mC_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_mAcc_v_fields_acc" ADD CONSTRAINT "_mAcc_v_fields_acc_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_mAcc_v_fields_acc" ADD CONSTRAINT "_mAcc_v_fields_acc_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_mAcc_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_mAcc_v" ADD CONSTRAINT "_mAcc_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_prc_v_fields_plans_features" ADD CONSTRAINT "_prc_v_fields_plans_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_prc_v_fields_plans"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_prc_v_fields_plans" ADD CONSTRAINT "_prc_v_fields_plans_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_prc_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_prc_v" ADD CONSTRAINT "_prc_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_rcB_v" ADD CONSTRAINT "_rcB_v_fields_reusable_content_id_reusable_content_id_fk" FOREIGN KEY ("fields_reusable_content_id") REFERENCES "public"."reusable_content"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_rcB_v" ADD CONSTRAINT "_rcB_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_sld_v_fields_quote_slides" ADD CONSTRAINT "_sld_v_fields_quote_slides_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_sld_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_sld_v" ADD CONSTRAINT "_sld_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_stmt_v_fields_links" ADD CONSTRAINT "_stmt_v_fields_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_stmt_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_stmt_v" ADD CONSTRAINT "_stmt_v_fields_media_id_media_id_fk" FOREIGN KEY ("fields_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_stmt_v" ADD CONSTRAINT "_stmt_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_stkH_v_fields_hl_blips" ADD CONSTRAINT "_stkH_v_fields_hl_blips_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_stkH_v_fields_hl"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_stkH_v_fields_hl" ADD CONSTRAINT "_stkH_v_fields_hl_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_stkH_v_fields_hl" ADD CONSTRAINT "_stkH_v_fields_hl_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_stkH_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_stkH_v" ADD CONSTRAINT "_stkH_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_stps_v_steps_fields_steps" ADD CONSTRAINT "_stps_v_steps_fields_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_stps_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_stps_v" ADD CONSTRAINT "_stps_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_cdEx_v" ADD CONSTRAINT "_cdEx_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_mEx_v" ADD CONSTRAINT "_mEx_v_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_mEx_v" ADD CONSTRAINT "_mEx_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_exTabs_v_tabs" ADD CONSTRAINT "_exTabs_v_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_exTabs_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_exTabs_v" ADD CONSTRAINT "_exTabs_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_case_studies_v" ADD CONSTRAINT "_case_studies_v_parent_id_case_studies_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."case_studies"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_case_studies_v" ADD CONSTRAINT "_case_studies_v_version_featured_image_id_media_id_fk" FOREIGN KEY ("version_featured_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_case_studies_v" ADD CONSTRAINT "_case_studies_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_case_studies_v_rels" ADD CONSTRAINT "_case_studies_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_case_studies_v_rels" ADD CONSTRAINT "_case_studies_v_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_case_studies_v_rels" ADD CONSTRAINT "_case_studies_v_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_case_studies_v_rels" ADD CONSTRAINT "_case_studies_v_rels_case_studies_fk" FOREIGN KEY ("case_studies_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "community_help_rels" ADD CONSTRAINT "community_help_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."community_help"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "community_help_rels" ADD CONSTRAINT "community_help_rels_docs_fk" FOREIGN KEY ("docs_id") REFERENCES "public"."docs"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "media" ADD CONSTRAINT "media_dark_mode_fallback_id_media_id_fk" FOREIGN KEY ("dark_mode_fallback_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_hero_breadcrumbs_bar_links" ADD CONSTRAINT "pages_hero_breadcrumbs_bar_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_hero_livestream_guests" ADD CONSTRAINT "pages_hero_livestream_guests_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_hero_livestream_guests" ADD CONSTRAINT "pages_hero_livestream_guests_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_hero_primary_buttons" ADD CONSTRAINT "pages_hero_primary_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_hero_links" ADD CONSTRAINT "pages_hero_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_link" ADD CONSTRAINT "pages_blocks_link_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_command" ADD CONSTRAINT "pages_blocks_command_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_hero_secondary_buttons" ADD CONSTRAINT "pages_hero_secondary_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_hero_images" ADD CONSTRAINT "pages_hero_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_hero_images" ADD CONSTRAINT "pages_hero_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_hero_logos" ADD CONSTRAINT "pages_hero_logos_logo_media_id_media_id_fk" FOREIGN KEY ("logo_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_hero_logos" ADD CONSTRAINT "pages_hero_logos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_breadcrumbs" ADD CONSTRAINT "pages_breadcrumbs_doc_id_pages_id_fk" FOREIGN KEY ("doc_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_breadcrumbs" ADD CONSTRAINT "pages_breadcrumbs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages" ADD CONSTRAINT "pages_hero_media_id_media_id_fk" FOREIGN KEY ("hero_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages" ADD CONSTRAINT "pages_hero_secondary_media_id_media_id_fk" FOREIGN KEY ("hero_secondary_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages" ADD CONSTRAINT "pages_hero_feature_video_id_media_id_fk" FOREIGN KEY ("hero_feature_video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages" ADD CONSTRAINT "pages_hero_form_id_forms_id_fk" FOREIGN KEY ("hero_form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages" ADD CONSTRAINT "pages_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages" ADD CONSTRAINT "pages_parent_id_pages_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_case_studies_fk" FOREIGN KEY ("case_studies_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_version_hero_breadcrumbs_bar_links" ADD CONSTRAINT "_pages_v_version_hero_breadcrumbs_bar_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_version_hero_livestream_guests" ADD CONSTRAINT "_pages_v_version_hero_livestream_guests_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_version_hero_livestream_guests" ADD CONSTRAINT "_pages_v_version_hero_livestream_guests_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_version_hero_primary_buttons" ADD CONSTRAINT "_pages_v_version_hero_primary_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_version_hero_links" ADD CONSTRAINT "_pages_v_version_hero_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_link" ADD CONSTRAINT "_pages_v_blocks_link_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_command" ADD CONSTRAINT "_pages_v_blocks_command_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_version_hero_secondary_buttons" ADD CONSTRAINT "_pages_v_version_hero_secondary_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_version_hero_images" ADD CONSTRAINT "_pages_v_version_hero_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_version_hero_images" ADD CONSTRAINT "_pages_v_version_hero_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_version_hero_logos" ADD CONSTRAINT "_pages_v_version_hero_logos_logo_media_id_media_id_fk" FOREIGN KEY ("logo_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_version_hero_logos" ADD CONSTRAINT "_pages_v_version_hero_logos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_version_breadcrumbs" ADD CONSTRAINT "_pages_v_version_breadcrumbs_doc_id_pages_id_fk" FOREIGN KEY ("doc_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_version_breadcrumbs" ADD CONSTRAINT "_pages_v_version_breadcrumbs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_parent_id_pages_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_hero_media_id_media_id_fk" FOREIGN KEY ("version_hero_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_hero_secondary_media_id_media_id_fk" FOREIGN KEY ("version_hero_secondary_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_hero_feature_video_id_media_id_fk" FOREIGN KEY ("version_hero_feature_video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_hero_form_id_forms_id_fk" FOREIGN KEY ("version_hero_form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_parent_id_pages_id_fk" FOREIGN KEY ("version_parent_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_case_studies_fk" FOREIGN KEY ("case_studies_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "banner" ADD CONSTRAINT "banner_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "bc10" ADD CONSTRAINT "bc10_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "code_code_fields_blips" ADD CONSTRAINT "code_code_fields_blips_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."code"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "code" ADD CONSTRAINT "code_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "bm" ADD CONSTRAINT "bm_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "posts" ADD CONSTRAINT "posts_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "posts" ADD CONSTRAINT "posts_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_case_studies_fk" FOREIGN KEY ("case_studies_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_banner_v" ADD CONSTRAINT "_banner_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_bc10_v" ADD CONSTRAINT "_bc10_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_code_v_code_fields_blips" ADD CONSTRAINT "_code_v_code_fields_blips_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_code_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_code_v" ADD CONSTRAINT "_code_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_bm_v" ADD CONSTRAINT "_bm_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_posts_v" ADD CONSTRAINT "_posts_v_parent_id_posts_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."posts"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_posts_v" ADD CONSTRAINT "_posts_v_version_image_id_media_id_fk" FOREIGN KEY ("version_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_posts_v" ADD CONSTRAINT "_posts_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_case_studies_fk" FOREIGN KEY ("case_studies_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "users_roles" ADD CONSTRAINT "users_roles_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "users" ADD CONSTRAINT "users_photo_id_media_id_fk" FOREIGN KEY ("photo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "partners_content_contributions" ADD CONSTRAINT "partners_content_contributions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."partners"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "partners_content_projects" ADD CONSTRAINT "partners_content_projects_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."partners"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "partners_social" ADD CONSTRAINT "partners_social_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."partners"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "partners" ADD CONSTRAINT "partners_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "partners" ADD CONSTRAINT "partners_content_banner_image_id_media_id_fk" FOREIGN KEY ("content_banner_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "partners" ADD CONSTRAINT "partners_content_case_study_id_case_studies_id_fk" FOREIGN KEY ("content_case_study_id") REFERENCES "public"."case_studies"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "partners_rels" ADD CONSTRAINT "partners_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."partners"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "partners_rels" ADD CONSTRAINT "partners_rels_regions_fk" FOREIGN KEY ("regions_id") REFERENCES "public"."regions"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "partners_rels" ADD CONSTRAINT "partners_rels_specialties_fk" FOREIGN KEY ("specialties_id") REFERENCES "public"."specialties"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "partners_rels" ADD CONSTRAINT "partners_rels_budgets_fk" FOREIGN KEY ("budgets_id") REFERENCES "public"."budgets"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "partners_rels" ADD CONSTRAINT "partners_rels_industries_fk" FOREIGN KEY ("industries_id") REFERENCES "public"."industries"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_partners_v_version_content_contributions" ADD CONSTRAINT "_partners_v_version_content_contributions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_partners_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_partners_v_version_content_projects" ADD CONSTRAINT "_partners_v_version_content_projects_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_partners_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_partners_v_version_social" ADD CONSTRAINT "_partners_v_version_social_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_partners_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_partners_v" ADD CONSTRAINT "_partners_v_parent_id_partners_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."partners"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_partners_v" ADD CONSTRAINT "_partners_v_version_logo_id_media_id_fk" FOREIGN KEY ("version_logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_partners_v" ADD CONSTRAINT "_partners_v_version_content_banner_image_id_media_id_fk" FOREIGN KEY ("version_content_banner_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_partners_v" ADD CONSTRAINT "_partners_v_version_content_case_study_id_case_studies_id_fk" FOREIGN KEY ("version_content_case_study_id") REFERENCES "public"."case_studies"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_partners_v_rels" ADD CONSTRAINT "_partners_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_partners_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_partners_v_rels" ADD CONSTRAINT "_partners_v_rels_regions_fk" FOREIGN KEY ("regions_id") REFERENCES "public"."regions"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_partners_v_rels" ADD CONSTRAINT "_partners_v_rels_specialties_fk" FOREIGN KEY ("specialties_id") REFERENCES "public"."specialties"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_partners_v_rels" ADD CONSTRAINT "_partners_v_rels_budgets_fk" FOREIGN KEY ("budgets_id") REFERENCES "public"."budgets"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_partners_v_rels" ADD CONSTRAINT "_partners_v_rels_industries_fk" FOREIGN KEY ("industries_id") REFERENCES "public"."industries"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_checkbox" ADD CONSTRAINT "forms_blocks_checkbox_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_country" ADD CONSTRAINT "forms_blocks_country_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_email" ADD CONSTRAINT "forms_blocks_email_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_message" ADD CONSTRAINT "forms_blocks_message_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_number" ADD CONSTRAINT "forms_blocks_number_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_select_options" ADD CONSTRAINT "forms_blocks_select_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_blocks_select"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_select" ADD CONSTRAINT "forms_blocks_select_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_state" ADD CONSTRAINT "forms_blocks_state_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_text" ADD CONSTRAINT "forms_blocks_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_textarea" ADD CONSTRAINT "forms_blocks_textarea_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_emails" ADD CONSTRAINT "forms_emails_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "form_submissions_submission_data" ADD CONSTRAINT "form_submissions_submission_data_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."form_submissions"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "form_submissions" ADD CONSTRAINT "form_submissions_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."redirects"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_case_studies_fk" FOREIGN KEY ("case_studies_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_case_studies_fk" FOREIGN KEY ("case_studies_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_community_help_fk" FOREIGN KEY ("community_help_id") REFERENCES "public"."community_help"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_docs_fk" FOREIGN KEY ("docs_id") REFERENCES "public"."docs"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_industries_fk" FOREIGN KEY ("industries_id") REFERENCES "public"."industries"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_specialties_fk" FOREIGN KEY ("specialties_id") REFERENCES "public"."specialties"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_regions_fk" FOREIGN KEY ("regions_id") REFERENCES "public"."regions"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_budgets_fk" FOREIGN KEY ("budgets_id") REFERENCES "public"."budgets"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_reusable_content_fk" FOREIGN KEY ("reusable_content_id") REFERENCES "public"."reusable_content"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_partners_fk" FOREIGN KEY ("partners_id") REFERENCES "public"."partners"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_forms_fk" FOREIGN KEY ("forms_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_form_submissions_fk" FOREIGN KEY ("form_submissions_id") REFERENCES "public"."form_submissions"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_redirects_fk" FOREIGN KEY ("redirects_id") REFERENCES "public"."redirects"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "footer_columns_nav_items" ADD CONSTRAINT "footer_columns_nav_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer_columns"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "footer_columns" ADD CONSTRAINT "footer_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_case_studies_fk" FOREIGN KEY ("case_studies_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "main_menu_tabs_description_links" ADD CONSTRAINT "main_menu_tabs_description_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."main_menu_tabs"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "main_menu_tabs_nav_items_featured_link_links" ADD CONSTRAINT "main_menu_tabs_nav_items_featured_link_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."main_menu_tabs_nav_items"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "main_menu_tabs_nav_items_list_links_links" ADD CONSTRAINT "main_menu_tabs_nav_items_list_links_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."main_menu_tabs_nav_items"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "main_menu_tabs_nav_items" ADD CONSTRAINT "main_menu_tabs_nav_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."main_menu_tabs"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "main_menu_tabs" ADD CONSTRAINT "main_menu_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."main_menu"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "main_menu_rels" ADD CONSTRAINT "main_menu_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."main_menu"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "main_menu_rels" ADD CONSTRAINT "main_menu_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "main_menu_rels" ADD CONSTRAINT "main_menu_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "main_menu_rels" ADD CONSTRAINT "main_menu_rels_case_studies_fk" FOREIGN KEY ("case_studies_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "partner_program_hero_breadcrumb_bar_links" ADD CONSTRAINT "partner_program_hero_breadcrumb_bar_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."partner_program"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "partner_program_hero_hero_links" ADD CONSTRAINT "partner_program_hero_hero_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."partner_program"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "partner_program" ADD CONSTRAINT "partner_program_contact_form_id_forms_id_fk" FOREIGN KEY ("contact_form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "partner_program_rels" ADD CONSTRAINT "partner_program_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."partner_program"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "partner_program_rels" ADD CONSTRAINT "partner_program_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "partner_program_rels" ADD CONSTRAINT "partner_program_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "partner_program_rels" ADD CONSTRAINT "partner_program_rels_case_studies_fk" FOREIGN KEY ("case_studies_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "partner_program_rels" ADD CONSTRAINT "partner_program_rels_partners_fk" FOREIGN KEY ("partners_id") REFERENCES "public"."partners"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "callout_fields_images_order_idx" ON "callout_fields_images" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "callout_fields_images_parent_id_idx" ON "callout_fields_images" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "callout_order_idx" ON "callout" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "callout_parent_id_idx" ON "callout" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "callout_path_idx" ON "callout" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "cta_cta_fields_links_order_idx" ON "cta_cta_fields_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "cta_cta_fields_links_parent_id_idx" ON "cta_cta_fields_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "cta_order_idx" ON "cta" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "cta_parent_id_idx" ON "cta" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "cta_path_idx" ON "cta" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "cg_fields_links_order_idx" ON "cg_fields_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "cg_fields_links_parent_id_idx" ON "cg_fields_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "cg_fields_cards_order_idx" ON "cg_fields_cards" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "cg_fields_cards_parent_id_idx" ON "cg_fields_cards" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "cg_order_idx" ON "cg" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "cg_parent_id_idx" ON "cg" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "cg_path_idx" ON "cg" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "csC_fields_cards_order_idx" ON "csC_fields_cards" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "csC_fields_cards_parent_id_idx" ON "csC_fields_cards" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "csC_order_idx" ON "csC" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "csC_parent_id_idx" ON "csC" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "csC_path_idx" ON "csC" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "csH_order_idx" ON "csH" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "csH_parent_id_idx" ON "csH" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "csH_path_idx" ON "csH" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "csP_fields_items_images_order_idx" ON "csP_fields_items_images" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "csP_fields_items_images_parent_id_idx" ON "csP_fields_items_images" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "csP_fields_items_order_idx" ON "csP_fields_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "csP_fields_items_parent_id_idx" ON "csP_fields_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "csP_order_idx" ON "csP" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "csP_parent_id_idx" ON "csP" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "csP_path_idx" ON "csP" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "cdFt_fields_links_order_idx" ON "cdFt_fields_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "cdFt_fields_links_parent_id_idx" ON "cdFt_fields_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "cdFt_fields_ct_blips_order_idx" ON "cdFt_fields_ct_blips" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "cdFt_fields_ct_blips_parent_id_idx" ON "cdFt_fields_ct_blips" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "cdFt_fields_ct_order_idx" ON "cdFt_fields_ct" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "cdFt_fields_ct_parent_id_idx" ON "cdFt_fields_ct" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "cdFt_order_idx" ON "cdFt" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "cdFt_parent_id_idx" ON "cdFt" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "cdFt_path_idx" ON "cdFt" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "cnt_order_idx" ON "cnt" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "cnt_parent_id_idx" ON "cnt" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "cnt_path_idx" ON "cnt" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "cGr_fields_links_order_idx" ON "cGr_fields_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "cGr_fields_links_parent_id_idx" ON "cGr_fields_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "cGr_fields_cells_order_idx" ON "cGr_fields_cells" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "cGr_fields_cells_parent_id_idx" ON "cGr_fields_cells" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "cGr_order_idx" ON "cGr" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "cGr_parent_id_idx" ON "cGr" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "cGr_path_idx" ON "cGr" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "form_order_idx" ON "form" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "form_parent_id_idx" ON "form" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "form_path_idx" ON "form" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "hc_fields_cards_order_idx" ON "hc_fields_cards" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "hc_fields_cards_parent_id_idx" ON "hc_fields_cards" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "hc_order_idx" ON "hc" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "hc_parent_id_idx" ON "hc" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "hc_path_idx" ON "hc" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "hHL_fields_hl_order_idx" ON "hHL_fields_hl" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "hHL_fields_hl_parent_id_idx" ON "hHL_fields_hl" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "hHL_order_idx" ON "hHL" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "hHL_parent_id_idx" ON "hHL" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "hHL_path_idx" ON "hHL" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "lG_fields_links_order_idx" ON "lG_fields_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "lG_fields_links_parent_id_idx" ON "lG_fields_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "lG_order_idx" ON "lG" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "lG_parent_id_idx" ON "lG" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "lG_path_idx" ON "lG" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "lgG_fields_logos_order_idx" ON "lgG_fields_logos" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "lgG_fields_logos_parent_id_idx" ON "lgG_fields_logos" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "lgG_order_idx" ON "lgG" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "lgG_parent_id_idx" ON "lgG" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "lgG_path_idx" ON "lgG" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "mB_order_idx" ON "mB" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "mB_parent_id_idx" ON "mB" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "mB_path_idx" ON "mB" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "mC_fields_images_order_idx" ON "mC_fields_images" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "mC_fields_images_parent_id_idx" ON "mC_fields_images" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "mC_order_idx" ON "mC" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "mC_parent_id_idx" ON "mC" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "mC_path_idx" ON "mC" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "mAcc_fields_acc_order_idx" ON "mAcc_fields_acc" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "mAcc_fields_acc_parent_id_idx" ON "mAcc_fields_acc" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "mAcc_order_idx" ON "mAcc" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "mAcc_parent_id_idx" ON "mAcc" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "mAcc_path_idx" ON "mAcc" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "prc_fields_plans_features_order_idx" ON "prc_fields_plans_features" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "prc_fields_plans_features_parent_id_idx" ON "prc_fields_plans_features" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "prc_fields_plans_order_idx" ON "prc_fields_plans" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "prc_fields_plans_parent_id_idx" ON "prc_fields_plans" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "prc_order_idx" ON "prc" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "prc_parent_id_idx" ON "prc" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "prc_path_idx" ON "prc" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "rcB_order_idx" ON "rcB" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "rcB_parent_id_idx" ON "rcB" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "rcB_path_idx" ON "rcB" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "sld_fields_quote_slides_order_idx" ON "sld_fields_quote_slides" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "sld_fields_quote_slides_parent_id_idx" ON "sld_fields_quote_slides" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "sld_order_idx" ON "sld" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "sld_parent_id_idx" ON "sld" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "sld_path_idx" ON "sld" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "stmt_fields_links_order_idx" ON "stmt_fields_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "stmt_fields_links_parent_id_idx" ON "stmt_fields_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "stmt_order_idx" ON "stmt" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "stmt_parent_id_idx" ON "stmt" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "stmt_path_idx" ON "stmt" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "stkH_fields_hl_blips_order_idx" ON "stkH_fields_hl_blips" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "stkH_fields_hl_blips_parent_id_idx" ON "stkH_fields_hl_blips" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "stkH_fields_hl_order_idx" ON "stkH_fields_hl" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "stkH_fields_hl_parent_id_idx" ON "stkH_fields_hl" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "stkH_order_idx" ON "stkH" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "stkH_parent_id_idx" ON "stkH" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "stkH_path_idx" ON "stkH" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "stps_steps_fields_steps_order_idx" ON "stps_steps_fields_steps" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "stps_steps_fields_steps_parent_id_idx" ON "stps_steps_fields_steps" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "stps_order_idx" ON "stps" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "stps_parent_id_idx" ON "stps" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "stps_path_idx" ON "stps" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "cdEx_order_idx" ON "cdEx" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "cdEx_parent_id_idx" ON "cdEx" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "cdEx_path_idx" ON "cdEx" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "mEx_order_idx" ON "mEx" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "mEx_parent_id_idx" ON "mEx" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "mEx_path_idx" ON "mEx" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "exTabs_tabs_order_idx" ON "exTabs_tabs" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "exTabs_tabs_parent_id_idx" ON "exTabs_tabs" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "exTabs_order_idx" ON "exTabs" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "exTabs_parent_id_idx" ON "exTabs" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "exTabs_path_idx" ON "exTabs" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "case_studies_slug_idx" ON "case_studies" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "case_studies_created_at_idx" ON "case_studies" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "case_studies__status_idx" ON "case_studies" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "case_studies_rels_order_idx" ON "case_studies_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "case_studies_rels_parent_idx" ON "case_studies_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "case_studies_rels_path_idx" ON "case_studies_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "_callout_v_fields_images_order_idx" ON "_callout_v_fields_images" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_callout_v_fields_images_parent_id_idx" ON "_callout_v_fields_images" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_callout_v_order_idx" ON "_callout_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_callout_v_parent_id_idx" ON "_callout_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_callout_v_path_idx" ON "_callout_v" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_cta_v_cta_fields_links_order_idx" ON "_cta_v_cta_fields_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_cta_v_cta_fields_links_parent_id_idx" ON "_cta_v_cta_fields_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_cta_v_order_idx" ON "_cta_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_cta_v_parent_id_idx" ON "_cta_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_cta_v_path_idx" ON "_cta_v" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_cg_v_fields_links_order_idx" ON "_cg_v_fields_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_cg_v_fields_links_parent_id_idx" ON "_cg_v_fields_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_cg_v_fields_cards_order_idx" ON "_cg_v_fields_cards" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_cg_v_fields_cards_parent_id_idx" ON "_cg_v_fields_cards" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_cg_v_order_idx" ON "_cg_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_cg_v_parent_id_idx" ON "_cg_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_cg_v_path_idx" ON "_cg_v" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_csC_v_fields_cards_order_idx" ON "_csC_v_fields_cards" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_csC_v_fields_cards_parent_id_idx" ON "_csC_v_fields_cards" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_csC_v_order_idx" ON "_csC_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_csC_v_parent_id_idx" ON "_csC_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_csC_v_path_idx" ON "_csC_v" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_csH_v_order_idx" ON "_csH_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_csH_v_parent_id_idx" ON "_csH_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_csH_v_path_idx" ON "_csH_v" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_csP_v_fields_items_images_order_idx" ON "_csP_v_fields_items_images" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_csP_v_fields_items_images_parent_id_idx" ON "_csP_v_fields_items_images" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_csP_v_fields_items_order_idx" ON "_csP_v_fields_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_csP_v_fields_items_parent_id_idx" ON "_csP_v_fields_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_csP_v_order_idx" ON "_csP_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_csP_v_parent_id_idx" ON "_csP_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_csP_v_path_idx" ON "_csP_v" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_cdFt_v_fields_links_order_idx" ON "_cdFt_v_fields_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_cdFt_v_fields_links_parent_id_idx" ON "_cdFt_v_fields_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_cdFt_v_fields_ct_blips_order_idx" ON "_cdFt_v_fields_ct_blips" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_cdFt_v_fields_ct_blips_parent_id_idx" ON "_cdFt_v_fields_ct_blips" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_cdFt_v_fields_ct_order_idx" ON "_cdFt_v_fields_ct" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_cdFt_v_fields_ct_parent_id_idx" ON "_cdFt_v_fields_ct" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_cdFt_v_order_idx" ON "_cdFt_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_cdFt_v_parent_id_idx" ON "_cdFt_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_cdFt_v_path_idx" ON "_cdFt_v" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_cnt_v_order_idx" ON "_cnt_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_cnt_v_parent_id_idx" ON "_cnt_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_cnt_v_path_idx" ON "_cnt_v" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_cGr_v_fields_links_order_idx" ON "_cGr_v_fields_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_cGr_v_fields_links_parent_id_idx" ON "_cGr_v_fields_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_cGr_v_fields_cells_order_idx" ON "_cGr_v_fields_cells" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_cGr_v_fields_cells_parent_id_idx" ON "_cGr_v_fields_cells" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_cGr_v_order_idx" ON "_cGr_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_cGr_v_parent_id_idx" ON "_cGr_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_cGr_v_path_idx" ON "_cGr_v" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_form_v_order_idx" ON "_form_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_form_v_parent_id_idx" ON "_form_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_form_v_path_idx" ON "_form_v" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_hc_v_fields_cards_order_idx" ON "_hc_v_fields_cards" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_hc_v_fields_cards_parent_id_idx" ON "_hc_v_fields_cards" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_hc_v_order_idx" ON "_hc_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_hc_v_parent_id_idx" ON "_hc_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_hc_v_path_idx" ON "_hc_v" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_hHL_v_fields_hl_order_idx" ON "_hHL_v_fields_hl" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_hHL_v_fields_hl_parent_id_idx" ON "_hHL_v_fields_hl" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_hHL_v_order_idx" ON "_hHL_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_hHL_v_parent_id_idx" ON "_hHL_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_hHL_v_path_idx" ON "_hHL_v" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_lG_v_fields_links_order_idx" ON "_lG_v_fields_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_lG_v_fields_links_parent_id_idx" ON "_lG_v_fields_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_lG_v_order_idx" ON "_lG_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_lG_v_parent_id_idx" ON "_lG_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_lG_v_path_idx" ON "_lG_v" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_lgG_v_fields_logos_order_idx" ON "_lgG_v_fields_logos" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_lgG_v_fields_logos_parent_id_idx" ON "_lgG_v_fields_logos" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_lgG_v_order_idx" ON "_lgG_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_lgG_v_parent_id_idx" ON "_lgG_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_lgG_v_path_idx" ON "_lgG_v" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_mB_v_order_idx" ON "_mB_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_mB_v_parent_id_idx" ON "_mB_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_mB_v_path_idx" ON "_mB_v" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_mC_v_fields_images_order_idx" ON "_mC_v_fields_images" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_mC_v_fields_images_parent_id_idx" ON "_mC_v_fields_images" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_mC_v_order_idx" ON "_mC_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_mC_v_parent_id_idx" ON "_mC_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_mC_v_path_idx" ON "_mC_v" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_mAcc_v_fields_acc_order_idx" ON "_mAcc_v_fields_acc" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_mAcc_v_fields_acc_parent_id_idx" ON "_mAcc_v_fields_acc" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_mAcc_v_order_idx" ON "_mAcc_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_mAcc_v_parent_id_idx" ON "_mAcc_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_mAcc_v_path_idx" ON "_mAcc_v" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_prc_v_fields_plans_features_order_idx" ON "_prc_v_fields_plans_features" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_prc_v_fields_plans_features_parent_id_idx" ON "_prc_v_fields_plans_features" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_prc_v_fields_plans_order_idx" ON "_prc_v_fields_plans" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_prc_v_fields_plans_parent_id_idx" ON "_prc_v_fields_plans" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_prc_v_order_idx" ON "_prc_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_prc_v_parent_id_idx" ON "_prc_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_prc_v_path_idx" ON "_prc_v" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_rcB_v_order_idx" ON "_rcB_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_rcB_v_parent_id_idx" ON "_rcB_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_rcB_v_path_idx" ON "_rcB_v" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_sld_v_fields_quote_slides_order_idx" ON "_sld_v_fields_quote_slides" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_sld_v_fields_quote_slides_parent_id_idx" ON "_sld_v_fields_quote_slides" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_sld_v_order_idx" ON "_sld_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_sld_v_parent_id_idx" ON "_sld_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_sld_v_path_idx" ON "_sld_v" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_stmt_v_fields_links_order_idx" ON "_stmt_v_fields_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_stmt_v_fields_links_parent_id_idx" ON "_stmt_v_fields_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_stmt_v_order_idx" ON "_stmt_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_stmt_v_parent_id_idx" ON "_stmt_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_stmt_v_path_idx" ON "_stmt_v" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_stkH_v_fields_hl_blips_order_idx" ON "_stkH_v_fields_hl_blips" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_stkH_v_fields_hl_blips_parent_id_idx" ON "_stkH_v_fields_hl_blips" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_stkH_v_fields_hl_order_idx" ON "_stkH_v_fields_hl" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_stkH_v_fields_hl_parent_id_idx" ON "_stkH_v_fields_hl" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_stkH_v_order_idx" ON "_stkH_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_stkH_v_parent_id_idx" ON "_stkH_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_stkH_v_path_idx" ON "_stkH_v" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_stps_v_steps_fields_steps_order_idx" ON "_stps_v_steps_fields_steps" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_stps_v_steps_fields_steps_parent_id_idx" ON "_stps_v_steps_fields_steps" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_stps_v_order_idx" ON "_stps_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_stps_v_parent_id_idx" ON "_stps_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_stps_v_path_idx" ON "_stps_v" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_cdEx_v_order_idx" ON "_cdEx_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_cdEx_v_parent_id_idx" ON "_cdEx_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_cdEx_v_path_idx" ON "_cdEx_v" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_mEx_v_order_idx" ON "_mEx_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_mEx_v_parent_id_idx" ON "_mEx_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_mEx_v_path_idx" ON "_mEx_v" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_exTabs_v_tabs_order_idx" ON "_exTabs_v_tabs" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_exTabs_v_tabs_parent_id_idx" ON "_exTabs_v_tabs" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_exTabs_v_order_idx" ON "_exTabs_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_exTabs_v_parent_id_idx" ON "_exTabs_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_exTabs_v_path_idx" ON "_exTabs_v" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_case_studies_v_version_version_slug_idx" ON "_case_studies_v" USING btree ("version_slug");
  CREATE INDEX IF NOT EXISTS "_case_studies_v_version_version_created_at_idx" ON "_case_studies_v" USING btree ("version_created_at");
  CREATE INDEX IF NOT EXISTS "_case_studies_v_version_version__status_idx" ON "_case_studies_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_case_studies_v_created_at_idx" ON "_case_studies_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_case_studies_v_updated_at_idx" ON "_case_studies_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_case_studies_v_latest_idx" ON "_case_studies_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "_case_studies_v_rels_order_idx" ON "_case_studies_v_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "_case_studies_v_rels_parent_idx" ON "_case_studies_v_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_case_studies_v_rels_path_idx" ON "_case_studies_v_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "community_help_github_i_d_idx" ON "community_help" USING btree ("github_i_d");
  CREATE INDEX IF NOT EXISTS "community_help_discord_i_d_idx" ON "community_help" USING btree ("discord_i_d");
  CREATE INDEX IF NOT EXISTS "community_help_slug_idx" ON "community_help" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "community_help_created_at_idx" ON "community_help" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "community_help_rels_order_idx" ON "community_help_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "community_help_rels_parent_idx" ON "community_help_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "community_help_rels_path_idx" ON "community_help_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "docs_created_at_idx" ON "docs" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "media_filename_idx" ON "media" USING btree ("filename");
  CREATE INDEX IF NOT EXISTS "pages_hero_breadcrumbs_bar_links_order_idx" ON "pages_hero_breadcrumbs_bar_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_hero_breadcrumbs_bar_links_parent_id_idx" ON "pages_hero_breadcrumbs_bar_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_hero_livestream_guests_order_idx" ON "pages_hero_livestream_guests" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_hero_livestream_guests_parent_id_idx" ON "pages_hero_livestream_guests" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_hero_primary_buttons_order_idx" ON "pages_hero_primary_buttons" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_hero_primary_buttons_parent_id_idx" ON "pages_hero_primary_buttons" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_hero_links_order_idx" ON "pages_hero_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_hero_links_parent_id_idx" ON "pages_hero_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_link_order_idx" ON "pages_blocks_link" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_link_parent_id_idx" ON "pages_blocks_link" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_link_path_idx" ON "pages_blocks_link" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_command_order_idx" ON "pages_blocks_command" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_command_parent_id_idx" ON "pages_blocks_command" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_command_path_idx" ON "pages_blocks_command" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_hero_secondary_buttons_order_idx" ON "pages_hero_secondary_buttons" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_hero_secondary_buttons_parent_id_idx" ON "pages_hero_secondary_buttons" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_hero_images_order_idx" ON "pages_hero_images" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_hero_images_parent_id_idx" ON "pages_hero_images" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_hero_logos_order_idx" ON "pages_hero_logos" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_hero_logos_parent_id_idx" ON "pages_hero_logos" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_breadcrumbs_order_idx" ON "pages_breadcrumbs" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_breadcrumbs_parent_id_idx" ON "pages_breadcrumbs" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_slug_idx" ON "pages" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "pages_created_at_idx" ON "pages" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "pages__status_idx" ON "pages" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "pages_rels_order_idx" ON "pages_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "pages_rels_parent_idx" ON "pages_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "pages_rels_path_idx" ON "pages_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_hero_breadcrumbs_bar_links_order_idx" ON "_pages_v_version_hero_breadcrumbs_bar_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_hero_breadcrumbs_bar_links_parent_id_idx" ON "_pages_v_version_hero_breadcrumbs_bar_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_hero_livestream_guests_order_idx" ON "_pages_v_version_hero_livestream_guests" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_hero_livestream_guests_parent_id_idx" ON "_pages_v_version_hero_livestream_guests" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_hero_primary_buttons_order_idx" ON "_pages_v_version_hero_primary_buttons" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_hero_primary_buttons_parent_id_idx" ON "_pages_v_version_hero_primary_buttons" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_hero_links_order_idx" ON "_pages_v_version_hero_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_hero_links_parent_id_idx" ON "_pages_v_version_hero_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_link_order_idx" ON "_pages_v_blocks_link" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_link_parent_id_idx" ON "_pages_v_blocks_link" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_link_path_idx" ON "_pages_v_blocks_link" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_command_order_idx" ON "_pages_v_blocks_command" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_command_parent_id_idx" ON "_pages_v_blocks_command" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_command_path_idx" ON "_pages_v_blocks_command" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_hero_secondary_buttons_order_idx" ON "_pages_v_version_hero_secondary_buttons" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_hero_secondary_buttons_parent_id_idx" ON "_pages_v_version_hero_secondary_buttons" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_hero_images_order_idx" ON "_pages_v_version_hero_images" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_hero_images_parent_id_idx" ON "_pages_v_version_hero_images" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_hero_logos_order_idx" ON "_pages_v_version_hero_logos" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_hero_logos_parent_id_idx" ON "_pages_v_version_hero_logos" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_breadcrumbs_order_idx" ON "_pages_v_version_breadcrumbs" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_breadcrumbs_parent_id_idx" ON "_pages_v_version_breadcrumbs" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_version_slug_idx" ON "_pages_v" USING btree ("version_slug");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_version_created_at_idx" ON "_pages_v" USING btree ("version_created_at");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_version__status_idx" ON "_pages_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_pages_v_created_at_idx" ON "_pages_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_pages_v_updated_at_idx" ON "_pages_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_pages_v_latest_idx" ON "_pages_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_order_idx" ON "_pages_v_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_parent_idx" ON "_pages_v_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_path_idx" ON "_pages_v_rels" USING btree ("path");
  CREATE UNIQUE INDEX IF NOT EXISTS "industries_name_idx" ON "industries" USING btree ("name");
  CREATE UNIQUE INDEX IF NOT EXISTS "industries_value_idx" ON "industries" USING btree ("value");
  CREATE INDEX IF NOT EXISTS "industries_created_at_idx" ON "industries" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "specialties_name_idx" ON "specialties" USING btree ("name");
  CREATE UNIQUE INDEX IF NOT EXISTS "specialties_value_idx" ON "specialties" USING btree ("value");
  CREATE INDEX IF NOT EXISTS "specialties_created_at_idx" ON "specialties" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "regions_name_idx" ON "regions" USING btree ("name");
  CREATE UNIQUE INDEX IF NOT EXISTS "regions_value_idx" ON "regions" USING btree ("value");
  CREATE INDEX IF NOT EXISTS "regions_created_at_idx" ON "regions" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "budgets_name_idx" ON "budgets" USING btree ("name");
  CREATE UNIQUE INDEX IF NOT EXISTS "budgets_value_idx" ON "budgets" USING btree ("value");
  CREATE INDEX IF NOT EXISTS "budgets_created_at_idx" ON "budgets" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "banner_order_idx" ON "banner" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "banner_parent_id_idx" ON "banner" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "banner_path_idx" ON "banner" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "bc10_order_idx" ON "bc10" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "bc10_parent_id_idx" ON "bc10" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "bc10_path_idx" ON "bc10" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "code_code_fields_blips_order_idx" ON "code_code_fields_blips" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "code_code_fields_blips_parent_id_idx" ON "code_code_fields_blips" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "code_order_idx" ON "code" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "code_parent_id_idx" ON "code" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "code_path_idx" ON "code" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "bm_order_idx" ON "bm" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "bm_parent_id_idx" ON "bm" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "bm_path_idx" ON "bm" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "posts_slug_idx" ON "posts" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "posts_created_at_idx" ON "posts" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "posts__status_idx" ON "posts" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "posts_rels_order_idx" ON "posts_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "posts_rels_parent_idx" ON "posts_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "posts_rels_path_idx" ON "posts_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "_banner_v_order_idx" ON "_banner_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_banner_v_parent_id_idx" ON "_banner_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_banner_v_path_idx" ON "_banner_v" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_bc10_v_order_idx" ON "_bc10_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_bc10_v_parent_id_idx" ON "_bc10_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_bc10_v_path_idx" ON "_bc10_v" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_code_v_code_fields_blips_order_idx" ON "_code_v_code_fields_blips" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_code_v_code_fields_blips_parent_id_idx" ON "_code_v_code_fields_blips" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_code_v_order_idx" ON "_code_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_code_v_parent_id_idx" ON "_code_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_code_v_path_idx" ON "_code_v" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_bm_v_order_idx" ON "_bm_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_bm_v_parent_id_idx" ON "_bm_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_bm_v_path_idx" ON "_bm_v" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_posts_v_version_version_slug_idx" ON "_posts_v" USING btree ("version_slug");
  CREATE INDEX IF NOT EXISTS "_posts_v_version_version_created_at_idx" ON "_posts_v" USING btree ("version_created_at");
  CREATE INDEX IF NOT EXISTS "_posts_v_version_version__status_idx" ON "_posts_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_posts_v_created_at_idx" ON "_posts_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_posts_v_updated_at_idx" ON "_posts_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_posts_v_latest_idx" ON "_posts_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "_posts_v_rels_order_idx" ON "_posts_v_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "_posts_v_rels_parent_idx" ON "_posts_v_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_posts_v_rels_path_idx" ON "_posts_v_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "reusable_content_created_at_idx" ON "reusable_content" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "users_roles_order_idx" ON "users_roles" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "users_roles_parent_idx" ON "users_roles" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "users_email_idx" ON "users" USING btree ("email");
  CREATE INDEX IF NOT EXISTS "partners_content_contributions_order_idx" ON "partners_content_contributions" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "partners_content_contributions_parent_id_idx" ON "partners_content_contributions" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "partners_content_projects_order_idx" ON "partners_content_projects" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "partners_content_projects_parent_id_idx" ON "partners_content_projects" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "partners_social_order_idx" ON "partners_social" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "partners_social_parent_id_idx" ON "partners_social" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "partners_slug_idx" ON "partners" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "partners_created_at_idx" ON "partners" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "partners__status_idx" ON "partners" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "partners_rels_order_idx" ON "partners_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "partners_rels_parent_idx" ON "partners_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "partners_rels_path_idx" ON "partners_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "_partners_v_version_content_contributions_order_idx" ON "_partners_v_version_content_contributions" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_partners_v_version_content_contributions_parent_id_idx" ON "_partners_v_version_content_contributions" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_partners_v_version_content_projects_order_idx" ON "_partners_v_version_content_projects" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_partners_v_version_content_projects_parent_id_idx" ON "_partners_v_version_content_projects" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_partners_v_version_social_order_idx" ON "_partners_v_version_social" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_partners_v_version_social_parent_id_idx" ON "_partners_v_version_social" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_partners_v_version_version_slug_idx" ON "_partners_v" USING btree ("version_slug");
  CREATE INDEX IF NOT EXISTS "_partners_v_version_version_created_at_idx" ON "_partners_v" USING btree ("version_created_at");
  CREATE INDEX IF NOT EXISTS "_partners_v_version_version__status_idx" ON "_partners_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_partners_v_created_at_idx" ON "_partners_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_partners_v_updated_at_idx" ON "_partners_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_partners_v_latest_idx" ON "_partners_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "_partners_v_rels_order_idx" ON "_partners_v_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "_partners_v_rels_parent_idx" ON "_partners_v_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_partners_v_rels_path_idx" ON "_partners_v_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "forms_blocks_checkbox_order_idx" ON "forms_blocks_checkbox" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_checkbox_parent_id_idx" ON "forms_blocks_checkbox" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_checkbox_path_idx" ON "forms_blocks_checkbox" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "forms_blocks_country_order_idx" ON "forms_blocks_country" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_country_parent_id_idx" ON "forms_blocks_country" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_country_path_idx" ON "forms_blocks_country" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "forms_blocks_email_order_idx" ON "forms_blocks_email" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_email_parent_id_idx" ON "forms_blocks_email" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_email_path_idx" ON "forms_blocks_email" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "forms_blocks_message_order_idx" ON "forms_blocks_message" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_message_parent_id_idx" ON "forms_blocks_message" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_message_path_idx" ON "forms_blocks_message" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "forms_blocks_number_order_idx" ON "forms_blocks_number" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_number_parent_id_idx" ON "forms_blocks_number" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_number_path_idx" ON "forms_blocks_number" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "forms_blocks_select_options_order_idx" ON "forms_blocks_select_options" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_select_options_parent_id_idx" ON "forms_blocks_select_options" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_select_order_idx" ON "forms_blocks_select" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_select_parent_id_idx" ON "forms_blocks_select" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_select_path_idx" ON "forms_blocks_select" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "forms_blocks_state_order_idx" ON "forms_blocks_state" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_state_parent_id_idx" ON "forms_blocks_state" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_state_path_idx" ON "forms_blocks_state" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "forms_blocks_text_order_idx" ON "forms_blocks_text" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_text_parent_id_idx" ON "forms_blocks_text" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_text_path_idx" ON "forms_blocks_text" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "forms_blocks_textarea_order_idx" ON "forms_blocks_textarea" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_textarea_parent_id_idx" ON "forms_blocks_textarea" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_textarea_path_idx" ON "forms_blocks_textarea" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "forms_emails_order_idx" ON "forms_emails" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_emails_parent_id_idx" ON "forms_emails" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_created_at_idx" ON "forms" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "form_submissions_submission_data_order_idx" ON "form_submissions_submission_data" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "form_submissions_submission_data_parent_id_idx" ON "form_submissions_submission_data" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "form_submissions_created_at_idx" ON "form_submissions" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "redirects_from_idx" ON "redirects" USING btree ("from");
  CREATE INDEX IF NOT EXISTS "redirects_created_at_idx" ON "redirects" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "redirects_rels_order_idx" ON "redirects_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "redirects_rels_parent_idx" ON "redirects_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "redirects_rels_path_idx" ON "redirects_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX IF NOT EXISTS "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "footer_columns_nav_items_order_idx" ON "footer_columns_nav_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "footer_columns_nav_items_parent_id_idx" ON "footer_columns_nav_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "footer_columns_order_idx" ON "footer_columns" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "footer_columns_parent_id_idx" ON "footer_columns" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "footer_rels_order_idx" ON "footer_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "footer_rels_parent_idx" ON "footer_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "footer_rels_path_idx" ON "footer_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "main_menu_tabs_description_links_order_idx" ON "main_menu_tabs_description_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "main_menu_tabs_description_links_parent_id_idx" ON "main_menu_tabs_description_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "main_menu_tabs_nav_items_featured_link_links_order_idx" ON "main_menu_tabs_nav_items_featured_link_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "main_menu_tabs_nav_items_featured_link_links_parent_id_idx" ON "main_menu_tabs_nav_items_featured_link_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "main_menu_tabs_nav_items_list_links_links_order_idx" ON "main_menu_tabs_nav_items_list_links_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "main_menu_tabs_nav_items_list_links_links_parent_id_idx" ON "main_menu_tabs_nav_items_list_links_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "main_menu_tabs_nav_items_order_idx" ON "main_menu_tabs_nav_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "main_menu_tabs_nav_items_parent_id_idx" ON "main_menu_tabs_nav_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "main_menu_tabs_order_idx" ON "main_menu_tabs" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "main_menu_tabs_parent_id_idx" ON "main_menu_tabs" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "main_menu_rels_order_idx" ON "main_menu_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "main_menu_rels_parent_idx" ON "main_menu_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "main_menu_rels_path_idx" ON "main_menu_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "partner_program_hero_breadcrumb_bar_links_order_idx" ON "partner_program_hero_breadcrumb_bar_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "partner_program_hero_breadcrumb_bar_links_parent_id_idx" ON "partner_program_hero_breadcrumb_bar_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "partner_program_hero_hero_links_order_idx" ON "partner_program_hero_hero_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "partner_program_hero_hero_links_parent_id_idx" ON "partner_program_hero_hero_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "partner_program_rels_order_idx" ON "partner_program_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "partner_program_rels_parent_idx" ON "partner_program_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "partner_program_rels_path_idx" ON "partner_program_rels" USING btree ("path");`)
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   DROP TABLE "callout_fields_images";
  DROP TABLE "callout";
  DROP TABLE "cta_cta_fields_links";
  DROP TABLE "cta";
  DROP TABLE "cg_fields_links";
  DROP TABLE "cg_fields_cards";
  DROP TABLE "cg";
  DROP TABLE "csC_fields_cards";
  DROP TABLE "csC";
  DROP TABLE "csH";
  DROP TABLE "csP_fields_items_images";
  DROP TABLE "csP_fields_items";
  DROP TABLE "csP";
  DROP TABLE "cdFt_fields_links";
  DROP TABLE "cdFt_fields_ct_blips";
  DROP TABLE "cdFt_fields_ct";
  DROP TABLE "cdFt";
  DROP TABLE "cnt";
  DROP TABLE "cGr_fields_links";
  DROP TABLE "cGr_fields_cells";
  DROP TABLE "cGr";
  DROP TABLE "form";
  DROP TABLE "hc_fields_cards";
  DROP TABLE "hc";
  DROP TABLE "hHL_fields_hl";
  DROP TABLE "hHL";
  DROP TABLE "lG_fields_links";
  DROP TABLE "lG";
  DROP TABLE "lgG_fields_logos";
  DROP TABLE "lgG";
  DROP TABLE "mB";
  DROP TABLE "mC_fields_images";
  DROP TABLE "mC";
  DROP TABLE "mAcc_fields_acc";
  DROP TABLE "mAcc";
  DROP TABLE "prc_fields_plans_features";
  DROP TABLE "prc_fields_plans";
  DROP TABLE "prc";
  DROP TABLE "rcB";
  DROP TABLE "sld_fields_quote_slides";
  DROP TABLE "sld";
  DROP TABLE "stmt_fields_links";
  DROP TABLE "stmt";
  DROP TABLE "stkH_fields_hl_blips";
  DROP TABLE "stkH_fields_hl";
  DROP TABLE "stkH";
  DROP TABLE "stps_steps_fields_steps";
  DROP TABLE "stps";
  DROP TABLE "cdEx";
  DROP TABLE "mEx";
  DROP TABLE "exTabs_tabs";
  DROP TABLE "exTabs";
  DROP TABLE "case_studies";
  DROP TABLE "case_studies_rels";
  DROP TABLE "_callout_v_fields_images";
  DROP TABLE "_callout_v";
  DROP TABLE "_cta_v_cta_fields_links";
  DROP TABLE "_cta_v";
  DROP TABLE "_cg_v_fields_links";
  DROP TABLE "_cg_v_fields_cards";
  DROP TABLE "_cg_v";
  DROP TABLE "_csC_v_fields_cards";
  DROP TABLE "_csC_v";
  DROP TABLE "_csH_v";
  DROP TABLE "_csP_v_fields_items_images";
  DROP TABLE "_csP_v_fields_items";
  DROP TABLE "_csP_v";
  DROP TABLE "_cdFt_v_fields_links";
  DROP TABLE "_cdFt_v_fields_ct_blips";
  DROP TABLE "_cdFt_v_fields_ct";
  DROP TABLE "_cdFt_v";
  DROP TABLE "_cnt_v";
  DROP TABLE "_cGr_v_fields_links";
  DROP TABLE "_cGr_v_fields_cells";
  DROP TABLE "_cGr_v";
  DROP TABLE "_form_v";
  DROP TABLE "_hc_v_fields_cards";
  DROP TABLE "_hc_v";
  DROP TABLE "_hHL_v_fields_hl";
  DROP TABLE "_hHL_v";
  DROP TABLE "_lG_v_fields_links";
  DROP TABLE "_lG_v";
  DROP TABLE "_lgG_v_fields_logos";
  DROP TABLE "_lgG_v";
  DROP TABLE "_mB_v";
  DROP TABLE "_mC_v_fields_images";
  DROP TABLE "_mC_v";
  DROP TABLE "_mAcc_v_fields_acc";
  DROP TABLE "_mAcc_v";
  DROP TABLE "_prc_v_fields_plans_features";
  DROP TABLE "_prc_v_fields_plans";
  DROP TABLE "_prc_v";
  DROP TABLE "_rcB_v";
  DROP TABLE "_sld_v_fields_quote_slides";
  DROP TABLE "_sld_v";
  DROP TABLE "_stmt_v_fields_links";
  DROP TABLE "_stmt_v";
  DROP TABLE "_stkH_v_fields_hl_blips";
  DROP TABLE "_stkH_v_fields_hl";
  DROP TABLE "_stkH_v";
  DROP TABLE "_stps_v_steps_fields_steps";
  DROP TABLE "_stps_v";
  DROP TABLE "_cdEx_v";
  DROP TABLE "_mEx_v";
  DROP TABLE "_exTabs_v_tabs";
  DROP TABLE "_exTabs_v";
  DROP TABLE "_case_studies_v";
  DROP TABLE "_case_studies_v_rels";
  DROP TABLE "community_help";
  DROP TABLE "community_help_rels";
  DROP TABLE "docs";
  DROP TABLE "media";
  DROP TABLE "pages_hero_breadcrumbs_bar_links";
  DROP TABLE "pages_hero_livestream_guests";
  DROP TABLE "pages_hero_primary_buttons";
  DROP TABLE "pages_hero_links";
  DROP TABLE "pages_blocks_link";
  DROP TABLE "pages_blocks_command";
  DROP TABLE "pages_hero_secondary_buttons";
  DROP TABLE "pages_hero_images";
  DROP TABLE "pages_hero_logos";
  DROP TABLE "pages_breadcrumbs";
  DROP TABLE "pages";
  DROP TABLE "pages_rels";
  DROP TABLE "_pages_v_version_hero_breadcrumbs_bar_links";
  DROP TABLE "_pages_v_version_hero_livestream_guests";
  DROP TABLE "_pages_v_version_hero_primary_buttons";
  DROP TABLE "_pages_v_version_hero_links";
  DROP TABLE "_pages_v_blocks_link";
  DROP TABLE "_pages_v_blocks_command";
  DROP TABLE "_pages_v_version_hero_secondary_buttons";
  DROP TABLE "_pages_v_version_hero_images";
  DROP TABLE "_pages_v_version_hero_logos";
  DROP TABLE "_pages_v_version_breadcrumbs";
  DROP TABLE "_pages_v";
  DROP TABLE "_pages_v_rels";
  DROP TABLE "industries";
  DROP TABLE "specialties";
  DROP TABLE "regions";
  DROP TABLE "budgets";
  DROP TABLE "banner";
  DROP TABLE "bc10";
  DROP TABLE "code_code_fields_blips";
  DROP TABLE "code";
  DROP TABLE "bm";
  DROP TABLE "posts";
  DROP TABLE "posts_rels";
  DROP TABLE "_banner_v";
  DROP TABLE "_bc10_v";
  DROP TABLE "_code_v_code_fields_blips";
  DROP TABLE "_code_v";
  DROP TABLE "_bm_v";
  DROP TABLE "_posts_v";
  DROP TABLE "_posts_v_rels";
  DROP TABLE "reusable_content";
  DROP TABLE "users_roles";
  DROP TABLE "users";
  DROP TABLE "partners_content_contributions";
  DROP TABLE "partners_content_projects";
  DROP TABLE "partners_social";
  DROP TABLE "partners";
  DROP TABLE "partners_rels";
  DROP TABLE "_partners_v_version_content_contributions";
  DROP TABLE "_partners_v_version_content_projects";
  DROP TABLE "_partners_v_version_social";
  DROP TABLE "_partners_v";
  DROP TABLE "_partners_v_rels";
  DROP TABLE "forms_blocks_checkbox";
  DROP TABLE "forms_blocks_country";
  DROP TABLE "forms_blocks_email";
  DROP TABLE "forms_blocks_message";
  DROP TABLE "forms_blocks_number";
  DROP TABLE "forms_blocks_select_options";
  DROP TABLE "forms_blocks_select";
  DROP TABLE "forms_blocks_state";
  DROP TABLE "forms_blocks_text";
  DROP TABLE "forms_blocks_textarea";
  DROP TABLE "forms_emails";
  DROP TABLE "forms";
  DROP TABLE "form_submissions_submission_data";
  DROP TABLE "form_submissions";
  DROP TABLE "redirects";
  DROP TABLE "redirects_rels";
  DROP TABLE "payload_locked_documents";
  DROP TABLE "payload_locked_documents_rels";
  DROP TABLE "payload_preferences";
  DROP TABLE "payload_preferences_rels";
  DROP TABLE "payload_migrations";
  DROP TABLE "footer_columns_nav_items";
  DROP TABLE "footer_columns";
  DROP TABLE "footer";
  DROP TABLE "footer_rels";
  DROP TABLE "main_menu_tabs_description_links";
  DROP TABLE "main_menu_tabs_nav_items_featured_link_links";
  DROP TABLE "main_menu_tabs_nav_items_list_links_links";
  DROP TABLE "main_menu_tabs_nav_items";
  DROP TABLE "main_menu_tabs";
  DROP TABLE "main_menu";
  DROP TABLE "main_menu_rels";
  DROP TABLE "partner_program_hero_breadcrumb_bar_links";
  DROP TABLE "partner_program_hero_hero_links";
  DROP TABLE "partner_program";
  DROP TABLE "partner_program_rels";`)
}
