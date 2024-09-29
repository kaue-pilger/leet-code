<?php
class Solution {
  /**
   * @param String $s
   * @return Boolean
   */

  function isPalindrome($s) {
    $sReplaced = preg_replace('/[^a-z0-9]/', '', strtolower($s));

    return $sReplaced === strrev($sReplaced);
  }
}
